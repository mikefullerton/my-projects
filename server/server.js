const http = require('http');
const fs = require('fs');
const path = require('path');
const { execFileSync, execFile } = require('child_process');

const PORT = 3456;
const ROOT = path.join(__dirname, '..');
const SITE = path.join(ROOT, 'site', 'dist');
const SCANNER = path.join(ROOT, 'scanner');

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

function parseSeedData(seedPath) {
  // Use a child Node process to load the JS file safely via require()
  const loaderScript = `
    require('${seedPath.replace(/\\/g, '/').replace(/'/g, "\\'")}');
    process.stdout.write(JSON.stringify(globalThis.SEED_DATA || {}));
  `;
  // seed-data.js sets a global const, so we need to make it accessible
  // Write a temp wrapper that loads it
  const tmpPath = path.join(ROOT, '.seed-loader-tmp.js');
  fs.writeFileSync(tmpPath, `globalThis.SEED_DATA = null;\n` +
    fs.readFileSync(seedPath, 'utf8').replace('export const SEED_DATA', 'globalThis.SEED_DATA') +
    `\nprocess.stdout.write(JSON.stringify(globalThis.SEED_DATA));\n`);
  try {
    const output = execFileSync('node', [tmpPath], { timeout: 5000 }).toString();
    return JSON.parse(output);
  } finally {
    try { fs.unlinkSync(tmpPath); } catch {}
  }
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // API: refresh all projects (async — does not block server)
  if (req.url === '/api/refresh' && req.method === 'POST') {
    const scriptPath = path.join(SCANNER, 'scanner.py');
    execFile('python3', [scriptPath], { cwd: ROOT, timeout: 120000 }, (err, stdout) => {
      try {
        if (err) throw err;
        const scanned = JSON.parse(stdout);

        const seedPath = path.join(ROOT, 'site', 'src', 'lib', 'seed.ts');
        const seedData = parseSeedData(seedPath);

        // Keep manual todos, rebuild auto-generated ones
        const manualTodos = seedData.todos.filter(t => !t.id.startsWith('auto-'));
        const autoTodos = [];

        // Remove projects no longer in config
        const configPath = path.join(ROOT, 'site', 'src', 'lib', 'config.js');
        const configSrc = fs.readFileSync(configPath, 'utf8');
        const configIds = new Set([...configSrc.matchAll(/"([^"]+)"\s*:\s*"[^"]+"/g)].map(m => m[1]));
        seedData.projects = seedData.projects.filter(p => configIds.has(p.id));

        for (const scan of scanned) {
          const id = scan.id.replace(/:$/, '');
          let proj = seedData.projects.find(p => p.id === id);
          if (!proj) {
            // New project discovered — create entry
            const name = id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            proj = { id, name, tagline: '', status: 'active', techStack: [], openBranches: [], latestCommits: [] };
            seedData.projects.push(proj);
          }

          proj.branch = scan.branch;
          proj.uncommitted = scan.uncommitted;
          proj.uncommittedDetail = scan.uncommittedDetail;
          proj.openBranches = scan.openBranches;
          proj.branchDetails = scan.branchDetails || [];
          proj.modifiedFiles = scan.modifiedFiles || [];
          proj.stagedCount = scan.stagedCount || 0;
          proj.modifiedCount = scan.modifiedCount || 0;
          proj.untrackedCount = scan.untrackedCount || 0;
          proj.deletedCount = scan.deletedCount || 0;
          proj.aheadCount = scan.aheadCount || 0;
          proj.behindCount = scan.behindCount || 0;
          if (scan.latestWork) proj.latestWork = scan.latestWork;
          if (scan.latestCommits) proj.latestCommits = scan.latestCommits;
          if (scan.techStack && scan.techStack.length > 0 && (!proj.techStack || proj.techStack.length === 0)) {
            proj.techStack = scan.techStack.filter(t => t !== 'macOS' && t !== 'iOS');
          }

          if (scan.uncommitted) {
            autoTodos.push({
              id: `auto-${id}-uncommitted`,
              projectId: id,
              title: `Commit ${scan.uncommittedDetail}`,
              priority: 'medium',
              status: 'open',
              assignee: 'Mike',
            });
          }
          if (scan.openBranches.length > 0) {
            autoTodos.push({
              id: `auto-${id}-branches`,
              projectId: id,
              title: `Review/merge ${scan.openBranches.length} open branch${scan.openBranches.length > 1 ? 'es' : ''}`,
              priority: 'low',
              status: 'open',
              assignee: 'Mike',
            });
          }
        }

        seedData.todos = [...manualTodos, ...autoTodos];

        const newSeed = `/**\n * Seed data for the project management dashboard.\n * Auto-updated by server refresh.\n */\n\nexport const SEED_DATA = ${JSON.stringify(seedData, null, 2)};\n`;
        fs.writeFileSync(seedPath, newSeed);

        // Bump seed version in DataContext so localStorage re-seeds on reload
        const ctxPath = path.join(ROOT, 'site', 'src', 'context', 'DataContext.tsx');
        let ctxSrc = fs.readFileSync(ctxPath, 'utf8');
        ctxSrc = ctxSrc.replace(
          /const SEED_VERSION = (\d+);/,
          (_, v) => `const SEED_VERSION = ${parseInt(v) + 1};`
        );
        fs.writeFileSync(ctxPath, ctxSrc);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          ok: true,
          scanned: scanned.length,
          uncommitted: scanned.filter(s => s.uncommitted).length,
          withBranches: scanned.filter(s => s.openBranches.length > 0).length,
          seedData,
        }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  // Static file serving
  let filePath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  filePath = path.join(SITE, filePath);

  if (!filePath.startsWith(SITE)) { res.writeHead(403); res.end(); return; }

  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Project Hub running at http://localhost:${PORT}`);
});
