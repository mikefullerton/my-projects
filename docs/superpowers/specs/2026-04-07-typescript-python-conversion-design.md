# TypeScript + Python Conversion Design

## Overview

Convert the my-projects dashboard from JavaScript/JSX to TypeScript/TSX and rewrite the bash scanner scripts in Python. Server stays as Node.js.

## Part 1: TypeScript Conversion (site/)

### Dependencies

Add as dev dependencies:
- `typescript`
- `@types/react`
- `@types/react-dom`

### tsconfig.json

Strict mode, JSX preserve (Vite handles transpilation), target ES2020, module ESNext.

### File Renames

| Current | New |
|---------|-----|
| `src/main.jsx` | `src/main.tsx` |
| `src/App.jsx` | `src/App.tsx` |
| `src/context/DataContext.jsx` | `src/context/DataContext.tsx` |
| `src/hooks/useData.js` | `src/hooks/useData.ts` |
| `src/lib/db.js` | `src/lib/db.ts` |
| `src/lib/theme.js` | `src/lib/theme.ts` |
| `src/lib/seed.js` | `src/lib/seed.ts` |
| `src/lib/config.js` | `src/lib/config.ts` |
| `src/components/Sidebar.jsx` | `src/components/Sidebar.tsx` |
| `src/components/ProjectGrid.jsx` | `src/components/ProjectGrid.tsx` |
| `src/components/ProjectDetail.jsx` | `src/components/ProjectDetail.tsx` |
| `src/components/AttentionView.jsx` | `src/components/AttentionView.tsx` |
| `src/components/TodosView.jsx` | `src/components/TodosView.tsx` |
| `src/components/IssuesView.jsx` | `src/components/IssuesView.tsx` |
| `src/components/DecisionsView.jsx` | `src/components/DecisionsView.tsx` |
| `src/components/GitIndicators.jsx` | `src/components/GitIndicators.tsx` |
| `src/components/StatsBar.jsx` | `src/components/StatsBar.tsx` |
| `src/components/ItemList.jsx` | `src/components/ItemList.tsx` |

### Core Type Definitions

New file: `src/types.ts`

```typescript
export interface Project {
  id: string;
  name: string;
  tagline: string;
  status: string;
  techStack: string[];
  path?: string;
  branch: string;
  uncommitted: boolean;
  uncommittedDetail: string;
  openBranches: string[];
  branchSummaries?: Record<string, string>;
  branchDetails: BranchDetail[];
  modifiedFiles: ModifiedFile[];
  stagedCount: number;
  modifiedCount: number;
  untrackedCount: number;
  deletedCount: number;
  aheadCount: number;
  behindCount: number;
  latestWork: string;
  latestCommits: Commit[];
  syncNote?: string;
  runCmd?: string;
  tags?: string[];
}

export interface BranchDetail {
  name: string;
  commits: Commit[];
  summary: string;
  commitCount: number;
}

export interface Commit {
  hash: string;
  message: string;
}

export interface ModifiedFile {
  path: string;
  change: string;
  summary: string;
}

export interface Todo {
  id: string;
  projectId: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  status: 'open' | 'done';
  assignee?: string;
}

export interface Issue {
  id: string;
  projectId: string;
  title: string;
  detail?: string;
  severity?: 'high' | 'medium' | 'low';
  status: 'open' | 'resolved';
}

export interface Concern {
  id: string;
  projectId: string;
  title: string;
  detail?: string;
  status: 'open' | 'closed';
}

export interface Decision {
  id: string;
  projectId: string;
  title: string;
  detail?: string;
  date?: string;
}

export interface SeedData {
  projects: Project[];
  todos: Todo[];
  issues: Issue[];
  concerns: Concern[];
  decisions: Decision[];
  dependencies?: Dependency[];
}

export interface Dependency {
  id: string;
  projectId: string;
  dependsOn: string;
  type?: string;
}

export interface AppConfig {
  projects: Record<string, string>;
  projectOrder: string[];
}
```

### Component Props

Each component gets a typed props interface. Examples:

```typescript
// Sidebar
interface SidebarProps {
  projects: Project[];
  todos: Todo[];
  issues: Issue[];
  concerns: Concern[];
  decisions: Decision[];
  currentView: string;
  onNavigate: (view: string) => void;
  onSelectProject: (id: string) => void;
  onRefresh: () => void;
  refreshing: boolean;
}

// ProjectGrid
interface ProjectCardProps {
  project: Project;
  todos: Todo[];
  issues: Issue[];
  onSelect: (id: string) => void;
}
```

### Other Updates

- `index.html`: change `src="/src/main.jsx"` to `src="/src/main.tsx"`
- `vite.config.js` → `vite.config.ts` (optional, low priority)
- `server/server.js`: update file references from `.jsx` to `.tsx` (the DataContext seed version bump path)
- Scanner output references: `config.js` path references in scanner become `config.ts`

## Part 2: Python Scanner Conversion (scanner/)

### File Changes

| Current | New | Notes |
|---------|-----|-------|
| `scan-projects.sh` | `scanner.py` | Main scanner, replaces the 227-line bash script |
| `discover-projects.sh` | `discover.py` | Already 90% python in a heredoc, extract to standalone |
| `scan-branches.py` | Merged into `scanner.py` | Small helper, becomes a function |
| `scan-modified.py` | Merged into `scanner.py` | Small helper, becomes a function |

### scanner.py Structure

```python
#!/usr/bin/env python3
"""Scan all git repos in config and output JSON with current git status."""

BRANCH_WHITELIST = {'gh-pages'}

def parse_config(config_path: str) -> dict[str, str]:
    """Parse config.ts to get project id -> relative path mapping."""

def scan_project(project_id: str, repo_path: str) -> dict:
    """Scan a single git repo and return its status dict."""
    # Calls helper functions below

def get_uncommitted_status(repo_path: str) -> dict:
    """Run git status --porcelain, return counts."""

def get_ahead_behind(branch: str) -> tuple[int, int]:
    """Get ahead/behind counts for current branch."""

def get_branches(whitelist: set[str]) -> tuple[list[str], list[dict]]:
    """Get local + remote-only branches, filtered by whitelist."""

def get_modified_files() -> list[dict]:
    """Get modified file details with diff summaries."""
    # Absorbs scan-modified.py logic

def get_branch_details(branches: list[str]) -> list[dict]:
    """Get commit details per branch."""
    # Absorbs scan-branches.py logic

def detect_tech_stack(repo_path: str) -> list[str]:
    """Detect tech stack from marker files."""

def main():
    """Parse config, scan all projects, output JSON array."""
```

### discover.py Structure

```python
#!/usr/bin/env python3
"""Discover git repos under ~/projects and update config.ts."""

def discover_repos(projects_root: str) -> dict[str, str]:
    """Walk ~/projects/*/ for git repos, return id -> relative path."""

def parse_config(config_path: str) -> tuple[dict, list]:
    """Parse current config.ts projects and order."""

def reconcile(discovered: dict, current: dict, current_order: list) -> tuple[dict, list]:
    """Merge discovered repos with existing config."""

def write_config(config_path: str, projects: dict, order: list):
    """Write updated config.ts."""

def main():
    """Discover and update config."""
```

### Server Update

`server/server.js` line 48: change from:
```javascript
execFile('bash', [scriptPath], ...)
```
to:
```javascript
execFile('python3', [scriptPath], ...)
```

And update `scriptPath` to point to `scanner.py`.

### Config File References

Both `scanner.py` and `discover.py` will read/write `config.ts` instead of `config.js`. The format stays the same (TypeScript export syntax is identical to the current JS for this file).

## What Does NOT Change

- `server/server.js` — stays Node.js
- `server/start.sh` — stays bash (trivial launcher)
- `site/src/index.css` — no changes
- All seed data content — preserved as-is
- All component behavior and rendering — identical output

## Execution Order

1. TypeScript conversion first (site/) — can be verified with `npm run build`
2. Python scanner conversion second (scanner/) — can be verified with `python3 scanner/scanner.py`
3. Wire up server to call new scanner
4. Delete old `.sh` and standalone `.py` files

## Risk

Low. Both conversions are mechanical — same logic, different syntax. Build verification at each step catches regressions.
