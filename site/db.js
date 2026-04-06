/**
 * ProjectDB — Data abstraction layer for project management.
 *
 * Adapter pattern: currently uses localStorage. Replace LocalStorageAdapter
 * with a SQLiteAdapter or ApiAdapter when the web service is ready.
 * The DB interface stays the same — consumers never touch storage directly.
 */

// ─── Adapter Interface ──────────────────────────────────────────────────────
// Every adapter must implement: getAll(table), get(table, id), put(table, record), remove(table, id), clear(table)

class LocalStorageAdapter {
  constructor(namespace = 'pmhub') {
    this.ns = namespace;
  }

  _key(table) { return `${this.ns}:${table}`; }

  _load(table) {
    try { return JSON.parse(localStorage.getItem(this._key(table))) || []; }
    catch { return []; }
  }

  _save(table, rows) {
    localStorage.setItem(this._key(table), JSON.stringify(rows));
  }

  getAll(table) {
    return Promise.resolve(this._load(table));
  }

  get(table, id) {
    const rows = this._load(table);
    return Promise.resolve(rows.find(r => r.id === id) || null);
  }

  put(table, record) {
    const rows = this._load(table);
    const idx = rows.findIndex(r => r.id === record.id);
    if (idx >= 0) rows[idx] = { ...rows[idx], ...record, updatedAt: new Date().toISOString() };
    else rows.push({ ...record, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    this._save(table, rows);
    return Promise.resolve(record);
  }

  remove(table, id) {
    const rows = this._load(table).filter(r => r.id !== id);
    this._save(table, rows);
    return Promise.resolve(true);
  }

  clear(table) {
    localStorage.removeItem(this._key(table));
    return Promise.resolve(true);
  }
}

// ─── Future: API Adapter (stub) ─────────────────────────────────────────────
// class ApiAdapter {
//   constructor(baseUrl) { this.baseUrl = baseUrl; }
//   async getAll(table) { return (await fetch(`${this.baseUrl}/${table}`)).json(); }
//   async get(table, id) { return (await fetch(`${this.baseUrl}/${table}/${id}`)).json(); }
//   async put(table, record) {
//     const method = record.id ? 'PUT' : 'POST';
//     const url = record.id ? `${this.baseUrl}/${table}/${record.id}` : `${this.baseUrl}/${table}`;
//     return (await fetch(url, { method, headers: {'Content-Type':'application/json'}, body: JSON.stringify(record) })).json();
//   }
//   async remove(table, id) { await fetch(`${this.baseUrl}/${table}/${id}`, { method: 'DELETE' }); return true; }
//   async clear(table) { await fetch(`${this.baseUrl}/${table}`, { method: 'DELETE' }); return true; }
// }

// ─── ProjectDB ──────────────────────────────────────────────────────────────

const TABLES = ['projects', 'todos', 'issues', 'concerns', 'decisions', 'dependencies'];

class ProjectDB {
  constructor(adapter) {
    this.adapter = adapter || new LocalStorageAdapter();
  }

  // ── Generic CRUD ────────────────────────────────────────────────────────
  async list(table, filter) {
    let rows = await this.adapter.getAll(table);
    if (filter) rows = rows.filter(filter);
    return rows;
  }

  async getById(table, id) {
    return this.adapter.get(table, id);
  }

  async save(table, record) {
    if (!record.id) record.id = crypto.randomUUID();
    return this.adapter.put(table, record);
  }

  async remove(table, id) {
    return this.adapter.remove(table, id);
  }

  // ── Projects ────────────────────────────────────────────────────────────
  async getProjects() { return this.list('projects'); }
  async getProject(id) { return this.getById('projects', id); }
  async saveProject(p) { return this.save('projects', p); }
  async removeProject(id) { return this.remove('projects', id); }

  // ── Todos ───────────────────────────────────────────────────────────────
  async getTodos(projectId) {
    return this.list('todos', projectId ? r => r.projectId === projectId : null);
  }
  async saveTodo(t) { return this.save('todos', t); }
  async removeTodo(id) { return this.remove('todos', id); }

  // ── Issues ──────────────────────────────────────────────────────────────
  async getIssues(projectId) {
    return this.list('issues', projectId ? r => r.projectId === projectId : null);
  }
  async saveIssue(i) { return this.save('issues', i); }
  async removeIssue(id) { return this.remove('issues', id); }

  // ── Concerns ────────────────────────────────────────────────────────────
  async getConcerns(projectId) {
    return this.list('concerns', projectId ? r => r.projectId === projectId : null);
  }
  async saveConcern(c) { return this.save('concerns', c); }
  async removeConcern(id) { return this.remove('concerns', id); }

  // ── Decisions ───────────────────────────────────────────────────────────
  async getDecisions(projectId) {
    return this.list('decisions', projectId ? r => r.projectId === projectId : null);
  }
  async saveDecision(d) { return this.save('decisions', d); }
  async removeDecision(id) { return this.remove('decisions', id); }

  // ── Dependencies ────────────────────────────────────────────────────────
  async getDependencies(projectId) {
    return this.list('dependencies', projectId ? r => r.projectId === projectId : null);
  }
  async saveDependency(d) { return this.save('dependencies', d); }
  async removeDependency(id) { return this.remove('dependencies', id); }

  // ── Cross-cutting queries ───────────────────────────────────────────────
  async getOpenItems(projectId) {
    const [todos, issues, concerns] = await Promise.all([
      this.getTodos(projectId),
      this.getIssues(projectId),
      this.getConcerns(projectId),
    ]);
    return {
      todos: todos.filter(t => t.status !== 'done'),
      issues: issues.filter(i => i.status !== 'resolved'),
      concerns: concerns.filter(c => c.status !== 'closed'),
    };
  }

  async getDashboardStats() {
    const projects = await this.getProjects();
    const [todos, issues, concerns, decisions] = await Promise.all([
      this.list('todos'),
      this.list('issues'),
      this.list('concerns'),
      this.list('decisions'),
    ]);
    return {
      projectCount: projects.length,
      openTodos: todos.filter(t => t.status !== 'done').length,
      totalTodos: todos.length,
      openIssues: issues.filter(i => i.status !== 'resolved').length,
      totalIssues: issues.length,
      activeConcerns: concerns.filter(c => c.status !== 'closed').length,
      totalDecisions: decisions.length,
    };
  }

  // ── Seed / Reset ────────────────────────────────────────────────────────
  async seed(data) {
    for (const table of TABLES) {
      if (data[table]) {
        for (const record of data[table]) {
          await this.save(table, record);
        }
      }
    }
  }

  async reset() {
    for (const table of TABLES) {
      await this.adapter.clear(table);
    }
  }
}

// ── Export for ES modules or global ─────────────────────────────────────────
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ProjectDB, LocalStorageAdapter, TABLES };
}
