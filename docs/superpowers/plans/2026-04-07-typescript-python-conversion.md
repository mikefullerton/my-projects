# TypeScript + Python Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the site from JavaScript/JSX to TypeScript/TSX and rewrite the bash scanner scripts in Python.

**Architecture:** The site is a Vite+React 19 SPA with localStorage persistence. The scanner is a set of bash/python scripts that shell out to git. Both conversions are mechanical — same logic, different language. No behavior changes.

**Tech Stack:** TypeScript, React 19, Vite 8, Python 3 (subprocess for git)

---

## File Structure

### New files to create
- `site/src/types.ts` — shared type definitions
- `site/tsconfig.json` — TypeScript configuration
- `scanner/scanner.py` — replaces scan-projects.sh + scan-branches.py + scan-modified.py
- `scanner/discover.py` — replaces discover-projects.sh

### Files to rename (JS → TS)
- `site/src/main.jsx` → `site/src/main.tsx`
- `site/src/App.jsx` → `site/src/App.tsx`
- `site/src/context/DataContext.jsx` → `site/src/context/DataContext.tsx`
- `site/src/hooks/useData.js` → `site/src/hooks/useData.ts`
- `site/src/lib/db.js` → `site/src/lib/db.ts`
- `site/src/lib/theme.js` → `site/src/lib/theme.ts`
- `site/src/lib/seed.js` → `site/src/lib/seed.ts`
- `site/src/lib/config.js` → `site/src/lib/config.ts`
- `site/src/components/Sidebar.jsx` → `site/src/components/Sidebar.tsx`
- `site/src/components/ProjectGrid.jsx` → `site/src/components/ProjectGrid.tsx`
- `site/src/components/ProjectDetail.jsx` → `site/src/components/ProjectDetail.tsx`
- `site/src/components/AttentionView.jsx` → `site/src/components/AttentionView.tsx`
- `site/src/components/TodosView.jsx` → `site/src/components/TodosView.tsx`
- `site/src/components/IssuesView.jsx` → `site/src/components/IssuesView.tsx`
- `site/src/components/DecisionsView.jsx` → `site/src/components/DecisionsView.tsx`
- `site/src/components/GitIndicators.jsx` → `site/src/components/GitIndicators.tsx`
- `site/src/components/StatsBar.jsx` → `site/src/components/StatsBar.tsx`
- `site/src/components/ItemList.jsx` → `site/src/components/ItemList.tsx`

### Files to delete (after Python conversion)
- `scanner/scan-projects.sh`
- `scanner/discover-projects.sh`
- `scanner/scan-branches.py`
- `scanner/scan-modified.py`

### Files to modify
- `site/index.html` — entry point path
- `site/package.json` — add TS dev deps
- `server/server.js` — call python3 scanner.py instead of bash scan-projects.sh, update DataContext path

---

## Task 1: Add TypeScript infrastructure

**Files:**
- Create: `site/tsconfig.json`
- Modify: `site/package.json`

- [ ] **Step 1: Install TypeScript and type packages**

```bash
cd site && npm install --save-dev typescript @types/react @types/react-dom
```

- [ ] **Step 2: Create tsconfig.json**

Create `site/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

- [ ] **Step 3: Verify build still works**

```bash
cd site && npm run build
```

Expected: Build succeeds (Vite doesn't enforce TS at build time, just transpiles).

- [ ] **Step 4: Commit**

```bash
git add site/tsconfig.json site/package.json site/package-lock.json
git commit -m "chore: add TypeScript infrastructure"
git push
```

---

## Task 2: Create shared type definitions

**Files:**
- Create: `site/src/types.ts`

- [ ] **Step 1: Create types.ts**

Create `site/src/types.ts`:

```typescript
export interface Commit {
  hash: string;
  message: string;
}

export interface BranchDetail {
  name: string;
  commits: Commit[];
  summary: string;
  commitCount: number;
}

export interface ModifiedFile {
  path: string;
  change: string;
  summary: string;
}

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

export interface Todo {
  id: string;
  projectId: string;
  title: string;
  detail?: string;
  priority: 'high' | 'medium' | 'low';
  status: 'open' | 'done';
  assignee?: string;
}

export interface Issue {
  id: string;
  projectId: string;
  title: string;
  detail?: string;
  severity: 'high' | 'medium' | 'low';
  status: 'open' | 'resolved';
}

export interface Concern {
  id: string;
  projectId: string;
  title: string;
  detail?: string;
  status: 'open' | 'closed';
  raiser?: string;
}

export interface Decision {
  id: string;
  projectId: string;
  title: string;
  rationale?: string;
  decidedBy?: string;
  date?: string;
}

export interface Dependency {
  id: string;
  projectId: string;
  dependsOn: string;
  type?: string;
}

export interface SeedData {
  projects: Project[];
  todos: Todo[];
  issues: Issue[];
  concerns: Concern[];
  decisions: Decision[];
  dependencies?: Dependency[];
}

export interface AppConfig {
  projects: Record<string, string>;
  projectOrder: string[];
}

export interface DashboardStats {
  projectCount: number;
  openTodos: number;
  totalTodos: number;
  openIssues: number;
  totalIssues: number;
  activeConcerns: number;
  totalDecisions: number;
}

export interface DashboardData {
  projects: Project[];
  todos: Todo[];
  issues: Issue[];
  concerns: Concern[];
  decisions: Decision[];
  dependencies: Dependency[];
  stats: DashboardStats;
}
```

- [ ] **Step 2: Commit**

```bash
git add site/src/types.ts
git commit -m "feat: add shared TypeScript type definitions"
git push
```

---

## Task 3: Convert library files to TypeScript

**Files:**
- Rename: `site/src/lib/config.js` → `site/src/lib/config.ts`
- Rename: `site/src/lib/theme.js` → `site/src/lib/theme.ts`
- Rename: `site/src/lib/seed.js` → `site/src/lib/seed.ts`
- Rename: `site/src/lib/db.js` → `site/src/lib/db.ts`

- [ ] **Step 1: Rename config.js → config.ts**

```bash
cd site && git mv src/lib/config.js src/lib/config.ts
```

Add type annotation to `site/src/lib/config.ts`. Add this import at top and type the export:

```typescript
import type { AppConfig } from '../types.ts';

export const APP_CONFIG: AppConfig = {
  // ... existing content unchanged
};
```

- [ ] **Step 2: Rename theme.js → theme.ts**

```bash
cd site && git mv src/lib/theme.js src/lib/theme.ts
```

Add type annotations to `site/src/lib/theme.ts`:

```typescript
export const COLORS: Record<string, string> = {
  // ... existing content unchanged
};

export function todoCardClass(priority: string): string {
  if (priority === 'high') return 'critical';
  if (priority === 'low') return 'info';
  return 'todo';
}

export function issueCardClass(severity: string): string {
  if (severity === 'high') return 'critical';
  if (severity === 'low') return 'info';
  return '';
}

export function todoPillClass(priority: string): string {
  return `indicator-${COLORS['todoPriority' + priority.charAt(0).toUpperCase() + priority.slice(1)] || COLORS.todo}`;
}

export function issuePillClass(severity: string): string {
  return `indicator-${COLORS['issueSeverity' + severity.charAt(0).toUpperCase() + severity.slice(1)] || COLORS.issue}`;
}

export function navBadgeClass(colorKey: string): string {
  const color = COLORS[colorKey];
  return color ? `nav-badge-${color}` : '';
}
```

- [ ] **Step 3: Rename seed.js → seed.ts**

```bash
cd site && git mv src/lib/seed.js src/lib/seed.ts
```

Add type import at top of `site/src/lib/seed.ts`:

```typescript
import type { SeedData } from '../types.ts';

export const SEED_DATA: SeedData = {
  // ... existing content unchanged
};
```

- [ ] **Step 4: Rename db.js → db.ts**

```bash
cd site && git mv src/lib/db.js src/lib/db.ts
```

Add types to `site/src/lib/db.ts`. The key changes:

```typescript
const TABLES = ['projects', 'todos', 'issues', 'concerns', 'decisions', 'dependencies'] as const;
type TableName = (typeof TABLES)[number];

interface StorageAdapter {
  getAll(table: TableName): Promise<Record<string, unknown>[]>;
  get(table: TableName, id: string): Promise<Record<string, unknown> | null>;
  put(table: TableName, record: Record<string, unknown>): Promise<Record<string, unknown>>;
  remove(table: TableName, id: string): Promise<boolean>;
  clear(table: TableName): Promise<boolean>;
}

class LocalStorageAdapter implements StorageAdapter {
  private ns: string;
  constructor(namespace = 'pmhub') {
    this.ns = namespace;
  }
  private _key(table: TableName): string { return `${this.ns}:${table}`; }
  private _load(table: TableName): Record<string, unknown>[] {
    try { return JSON.parse(localStorage.getItem(this._key(table)) || '[]'); }
    catch { return []; }
  }
  private _save(table: TableName, rows: Record<string, unknown>[]): void {
    localStorage.setItem(this._key(table), JSON.stringify(rows));
  }

  getAll(table: TableName) { return Promise.resolve(this._load(table)); }
  get(table: TableName, id: string) {
    const rows = this._load(table);
    return Promise.resolve(rows.find((r: Record<string, unknown>) => r.id === id) || null);
  }
  put(table: TableName, record: Record<string, unknown>) {
    const rows = this._load(table);
    const idx = rows.findIndex((r: Record<string, unknown>) => r.id === record.id);
    if (idx >= 0) rows[idx] = { ...rows[idx], ...record, updatedAt: new Date().toISOString() };
    else rows.push({ ...record, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    this._save(table, rows);
    return Promise.resolve(record);
  }
  remove(table: TableName, id: string) {
    const rows = this._load(table).filter((r: Record<string, unknown>) => r.id !== id);
    this._save(table, rows);
    return Promise.resolve(true);
  }
  clear(table: TableName) {
    localStorage.removeItem(this._key(table));
    return Promise.resolve(true);
  }
}

class ProjectDB {
  private adapter: StorageAdapter;
  constructor(adapter?: StorageAdapter) {
    this.adapter = adapter || new LocalStorageAdapter();
  }
  // ... rest of methods get parameter/return types added
  // All method signatures follow pattern:
  async list(table: TableName, filter?: (r: Record<string, unknown>) => boolean): Promise<Record<string, unknown>[]> { ... }
  async getById(table: TableName, id: string): Promise<Record<string, unknown> | null> { ... }
  async save(table: TableName, record: Record<string, unknown>): Promise<Record<string, unknown>> { ... }
  async remove(table: TableName, id: string): Promise<boolean> { ... }
  // Convenience methods keep same signatures with types added
  async getProjects(): Promise<Record<string, unknown>[]> { return this.list('projects'); }
  async getProject(id: string) { return this.getById('projects', id); }
  async saveProject(p: Record<string, unknown>) { return this.save('projects', p); }
  // ... etc for all convenience methods
  async seed(data: Record<string, Record<string, unknown>[]>): Promise<void> { ... }
  async reset(): Promise<void> { ... }
}

export { ProjectDB, LocalStorageAdapter, TABLES };
export type { StorageAdapter, TableName };
```

- [ ] **Step 5: Build and verify**

```bash
cd site && npm run build
```

Expected: Build succeeds. If there are import path issues (`.js` extensions in imports), fix them to use `.ts` extensions.

- [ ] **Step 6: Commit**

```bash
git add site/src/lib/
git commit -m "feat: convert lib/ files to TypeScript"
git push
```

---

## Task 4: Convert context and hooks to TypeScript

**Files:**
- Rename: `site/src/context/DataContext.jsx` → `site/src/context/DataContext.tsx`
- Rename: `site/src/hooks/useData.js` → `site/src/hooks/useData.ts`

- [ ] **Step 1: Rename and type DataContext**

```bash
cd site && git mv src/context/DataContext.jsx src/context/DataContext.tsx
```

Type the context in `site/src/context/DataContext.tsx`:

```typescript
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { ProjectDB } from '../lib/db.ts';
import { SEED_DATA } from '../lib/seed.ts';
import { APP_CONFIG } from '../lib/config.ts';
import type { AppConfig, SeedData } from '../types.ts';

const SEED_VERSION = 44;

interface DataContextValue {
  db: ProjectDB;
  refreshKey: number;
  refresh: () => void;
  reseed: (data: SeedData) => Promise<void>;
  appConfig: AppConfig;
}

const DataContext = createContext<DataContextValue | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  // ... existing logic with types added to state:
  const [db] = useState(() => new ProjectDB());
  const [ready, setReady] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = useCallback(() => setRefreshKey(k => k + 1), []);

  const reseed = useCallback(async (data: SeedData) => {
    await db.reset();
    await db.seed(data);
    refresh();
  }, [db, refresh]);

  // ... rest unchanged, just add types

  if (!ready) return null;

  return (
    <DataContext.Provider value={{ db, refreshKey, refresh, reseed, appConfig: APP_CONFIG }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDB(): DataContextValue {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useDB must be inside DataProvider');
  return ctx;
}
```

- [ ] **Step 2: Rename and type useData**

```bash
cd site && git mv src/hooks/useData.js src/hooks/useData.ts
```

Type `site/src/hooks/useData.ts`:

```typescript
import { useState, useEffect } from 'react';
import { useDB } from '../context/DataContext.tsx';
import type { Project, Todo, Issue, Concern, Decision, Dependency, DashboardData, AppConfig } from '../types.ts';

function getOrderedProjects(projects: Project[], appConfig: AppConfig): Project[] {
  const order = appConfig.projectOrder || [];
  if (order.length === 0) return projects;
  return order
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);
}

export function getProjectGroup(projectId: string, appConfig: AppConfig): string {
  const path = (appConfig.projects || {})[projectId] || '';
  const parts = path.replace(/^\.\.\/\.\.\//,'').split('/');
  return parts.length > 1 ? parts[0] : 'other';
}

interface ProjectGroup {
  name: string;
  projects: Project[];
}

export function groupProjects(projects: Project[], appConfig: AppConfig): ProjectGroup[] {
  const groups: string[] = [];
  const groupMap: Record<string, Project[]> = {};
  projects.forEach(p => {
    const g = getProjectGroup(p.id, appConfig);
    if (!groupMap[g]) {
      groupMap[g] = [];
      groups.push(g);
    }
    groupMap[g].push(p);
  });
  return groups.map(name => ({ name, projects: groupMap[name] }));
}

export function formatGroupName(name: string): string {
  return name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export function useData(): DashboardData | null {
  const { db, refreshKey, appConfig } = useDB();
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function load() {
      const allProjects = await db.getProjects() as Project[];
      const projects = getOrderedProjects(allProjects, appConfig);
      const [todos, issues, concerns, decisions, dependencies] = await Promise.all([
        db.list('todos') as Promise<Todo[]>,
        db.list('issues') as Promise<Issue[]>,
        db.list('concerns') as Promise<Concern[]>,
        db.list('decisions') as Promise<Decision[]>,
        db.list('dependencies') as Promise<Dependency[]>,
      ]);

      const visibleIds = new Set(projects.map(p => p.id));
      const vTodos = todos.filter(t => visibleIds.has(t.projectId));
      const vIssues = issues.filter(i => visibleIds.has(i.projectId));
      const vConcerns = concerns.filter(c => visibleIds.has(c.projectId));
      const vDecisions = decisions.filter(d => visibleIds.has(d.projectId));
      const vDependencies = dependencies.filter(d => visibleIds.has(d.projectId));

      setData({
        projects,
        todos: vTodos,
        issues: vIssues,
        concerns: vConcerns,
        decisions: vDecisions,
        dependencies: vDependencies,
        stats: {
          projectCount: projects.length,
          openTodos: vTodos.filter(t => t.status !== 'done').length,
          totalTodos: vTodos.length,
          openIssues: vIssues.filter(i => i.status !== 'resolved').length,
          totalIssues: vIssues.length,
          activeConcerns: vConcerns.filter(c => c.status !== 'closed').length,
          totalDecisions: vDecisions.length,
        },
      });
    }
    load();
  }, [db, refreshKey, appConfig]);

  return data;
}
```

- [ ] **Step 3: Build and verify**

```bash
cd site && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add site/src/context/ site/src/hooks/
git commit -m "feat: convert DataContext and useData to TypeScript"
git push
```

---

## Task 5: Convert all components to TypeScript

**Files:**
- Rename all 10 `.jsx` files in `site/src/components/` to `.tsx`
- Rename: `site/src/App.jsx` → `site/src/App.tsx`
- Rename: `site/src/main.jsx` → `site/src/main.tsx`
- Modify: `site/index.html`

- [ ] **Step 1: Rename all component files**

```bash
cd site
git mv src/components/Sidebar.jsx src/components/Sidebar.tsx
git mv src/components/ProjectGrid.jsx src/components/ProjectGrid.tsx
git mv src/components/ProjectDetail.jsx src/components/ProjectDetail.tsx
git mv src/components/AttentionView.jsx src/components/AttentionView.tsx
git mv src/components/TodosView.jsx src/components/TodosView.tsx
git mv src/components/IssuesView.jsx src/components/IssuesView.tsx
git mv src/components/DecisionsView.jsx src/components/DecisionsView.tsx
git mv src/components/GitIndicators.jsx src/components/GitIndicators.tsx
git mv src/components/StatsBar.jsx src/components/StatsBar.tsx
git mv src/components/ItemList.jsx src/components/ItemList.tsx
git mv src/App.jsx src/App.tsx
git mv src/main.jsx src/main.tsx
```

- [ ] **Step 2: Update index.html entry point**

Change `site/index.html` line 13 from:
```html
<script type="module" src="/src/main.jsx"></script>
```
to:
```html
<script type="module" src="/src/main.tsx"></script>
```

- [ ] **Step 3: Update all import paths**

In every `.tsx` and `.ts` file, update imports from `.jsx`/`.js` extensions to `.tsx`/`.ts`. Examples:

```typescript
// In App.tsx:
import { useData } from './hooks/useData.ts';
import { useDB } from './context/DataContext.tsx';
import Sidebar from './components/Sidebar.tsx';
// ... etc

// In main.tsx:
import { DataProvider } from './context/DataContext.tsx';
import App from './App.tsx';

// In all component files:
import { useDB } from '../context/DataContext.tsx';
import { COLORS } from '../lib/theme.ts';
// ... etc
```

- [ ] **Step 4: Add props interfaces to each component**

Add typed props to each component. The component bodies stay the same — just add the interface and type the function parameter.

**Sidebar.tsx:**
```typescript
import type { Project, Todo, Issue, Concern, Decision } from '../types.ts';

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

export default function Sidebar({ projects, todos, issues, concerns, decisions, currentView, onNavigate, onSelectProject, onRefresh, refreshing }: SidebarProps) {
```

**ProjectGrid.tsx:**
```typescript
import type { Project, Todo, Issue } from '../types.ts';

interface ProjectCardProps {
  project: Project;
  todos: Todo[];
  issues: Issue[];
  onSelect: (id: string) => void;
}

function ProjectCard({ project, todos, issues, onSelect }: ProjectCardProps) {

interface ProjectGridProps {
  projects: Project[];
  todos: Todo[];
  issues: Issue[];
  onSelectProject: (id: string) => void;
}

export default function ProjectGrid({ projects, todos, issues, onSelectProject }: ProjectGridProps) {
```

**ProjectDetail.tsx:**
```typescript
interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
```

**AttentionView.tsx:**
```typescript
import type { Project, Todo, Issue, Concern } from '../types.ts';

interface AttentionViewProps {
  projects: Project[];
  todos: Todo[];
  issues: Issue[];
  concerns: Concern[];
  onSelectProject: (id: string) => void;
}

export default function AttentionView({ projects, todos, issues, concerns, onSelectProject }: AttentionViewProps) {
```

**TodosView.tsx:**
```typescript
import type { Project, Todo } from '../types.ts';

interface TodosViewProps {
  todos: Todo[];
  projects: Project[];
}

export default function TodosView({ todos, projects }: TodosViewProps) {
```

**IssuesView.tsx:**
```typescript
import type { Project, Issue } from '../types.ts';

interface IssuesViewProps {
  issues: Issue[];
  projects: Project[];
}

export default function IssuesView({ issues, projects }: IssuesViewProps) {
```

**DecisionsView.tsx:**
```typescript
import type { Project, Decision } from '../types.ts';

interface DecisionsViewProps {
  decisions: Decision[];
  projects: Project[];
}

export default function DecisionsView({ decisions, projects }: DecisionsViewProps) {
```

**GitIndicators.tsx:**
```typescript
import type { Project } from '../types.ts';

interface GitIndicatorsProps {
  project: Project;
}

export default function GitIndicators({ project }: GitIndicatorsProps) {
```

**StatsBar.tsx:**
```typescript
import type { DashboardStats } from '../types.ts';

interface StatsBarProps {
  stats: DashboardStats;
}

export default function StatsBar({ stats }: StatsBarProps) {
```

**ItemList.tsx:**
```typescript
interface ItemListProps {
  items: Array<Record<string, unknown>>;
  type: 'todo' | 'issue' | 'concern';
}

export default function ItemList({ items, type }: ItemListProps) {
```

**App.tsx:**
No props — just update import paths and add explicit type annotations to state:
```typescript
const [currentView, setCurrentView] = useState<string>('dashboard');
const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
const [refreshing, setRefreshing] = useState(false);
```

**main.tsx:**
No props — just update import paths. Add non-null assertion:
```typescript
ReactDOM.createRoot(document.getElementById('root')!).render(
```

- [ ] **Step 5: Build and verify**

```bash
cd site && npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 6: Commit**

```bash
git add site/src/ site/index.html
git commit -m "feat: convert all components and entry point to TypeScript"
git push
```

---

## Task 6: Update server for TypeScript file paths

**Files:**
- Modify: `server/server.js`

- [ ] **Step 1: Update DataContext path reference**

In `server/server.js`, line 122, change:
```javascript
const ctxPath = path.join(ROOT, 'site', 'src', 'context', 'DataContext.jsx');
```
to:
```javascript
const ctxPath = path.join(ROOT, 'site', 'src', 'context', 'DataContext.tsx');
```

- [ ] **Step 2: Update seed.js reference**

In `server/server.js`, line 53, change:
```javascript
const seedPath = path.join(ROOT, 'site', 'src', 'lib', 'seed.js');
```
to:
```javascript
const seedPath = path.join(ROOT, 'site', 'src', 'lib', 'seed.ts');
```

Also in `parseSeedData` (line 30), the `replace` call changes `export const SEED_DATA` — this stays the same since the TS syntax is identical.

- [ ] **Step 3: Build and verify**

```bash
cd site && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add server/server.js
git commit -m "fix: update server file paths for TypeScript rename"
git push
```

---

## Task 7: TypeScript cleanup and type-check verification

**Files:**
- Modify: `site/package.json` (add typecheck script)

- [ ] **Step 1: Add typecheck script to package.json**

Add to `site/package.json` scripts:
```json
"typecheck": "tsc --noEmit"
```

- [ ] **Step 2: Run type checker**

```bash
cd site && npm run typecheck
```

Fix any type errors that appear. Common issues:
- Missing type assertions on `db.list()` calls
- Implicit `any` on event handlers (add `React.ChangeEvent<HTMLInputElement>` etc.)
- Null checks on `.find()` results

- [ ] **Step 3: Run build to verify everything still works**

```bash
cd site && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add site/
git commit -m "chore: fix type errors, add typecheck script"
git push
```

---

## Task 8: Write Python scanner (scanner.py)

**Files:**
- Create: `scanner/scanner.py`

- [ ] **Step 1: Create scanner.py**

Create `scanner/scanner.py`:

```python
#!/usr/bin/env python3
"""Scan all git repos listed in config.ts and output JSON with current git status."""

import json
import os
import re
import subprocess
import sys

BRANCH_WHITELIST = {'gh-pages'}
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(SCRIPT_DIR)
SITE_DIR = os.path.join(BASE_DIR, 'site')
CONFIG_PATH = os.path.join(SITE_DIR, 'src', 'lib', 'config.ts')


def run_git(*args: str, cwd: str | None = None) -> str:
    """Run a git command and return stdout. Returns empty string on failure."""
    result = subprocess.run(
        ['git', *args],
        capture_output=True, text=True, cwd=cwd
    )
    return result.stdout.strip() if result.returncode == 0 else ''


def parse_config() -> dict[str, str]:
    """Parse config.ts to get project id -> relative path mapping."""
    with open(CONFIG_PATH) as f:
        src = f.read()
    projects: dict[str, str] = {}
    for m in re.finditer(r'"([^"]+)"\s*:\s*"([^"]+)"', src):
        key, val = m.group(1), m.group(2)
        if key != 'projectOrder':
            projects[key] = val
    return projects


def get_porcelain_counts(cwd: str) -> dict:
    """Parse git status --porcelain and return granular counts."""
    output = run_git('status', '--porcelain', cwd=cwd)
    if not output:
        return {
            'dirty_count': 0, 'staged_count': 0, 'modified_count': 0,
            'untracked_count': 0, 'deleted_count': 0,
        }
    lines = output.split('\n')
    staged = sum(1 for l in lines if l and l[0] in 'MADRC')
    modified = sum(1 for l in lines if len(l) > 1 and l[1] == 'M')
    untracked = sum(1 for l in lines if l.startswith('??'))
    deleted = sum(1 for l in lines if (len(l) > 1 and l[1] == 'D') or (l and l[0] == 'D'))
    return {
        'dirty_count': len(lines),
        'staged_count': staged,
        'modified_count': modified,
        'untracked_count': untracked,
        'deleted_count': deleted,
    }


def get_ahead_behind(branch: str, cwd: str) -> tuple[int, int]:
    """Get ahead/behind counts for the current branch."""
    if branch == 'HEAD':
        return 0, 0
    if branch in ('main', 'master'):
        ahead = run_git('rev-list', '--count', f'origin/{branch}..HEAD', cwd=cwd)
        behind = run_git('rev-list', '--count', f'HEAD..origin/{branch}', cwd=cwd)
    else:
        ahead = run_git('rev-list', '--count', 'main..HEAD', cwd=cwd)
        behind = run_git('rev-list', '--count', 'HEAD..main', cwd=cwd)
    return int(ahead or '0'), int(behind or '0')


def get_sync_note(cwd: str) -> str:
    """Get ahead/behind vs upstream."""
    ahead = run_git('rev-list', '--count', '@{upstream}..HEAD', cwd=cwd)
    behind = run_git('rev-list', '--count', 'HEAD..@{upstream}', cwd=cwd)
    parts = []
    if int(ahead or '0') > 0:
        parts.append(f'{ahead} ahead')
    if int(behind or '0') > 0:
        parts.append(f'{behind} behind')
    return ', '.join(parts)


def filter_whitelist(branches: list[str]) -> list[str]:
    """Remove whitelisted branch names."""
    return [b for b in branches if b not in BRANCH_WHITELIST]


def get_branches(cwd: str) -> tuple[list[str], list[str]]:
    """Get local other branches and remote-only branches, both filtered."""
    # Local branches excluding current
    raw = run_git('branch', '--no-color', cwd=cwd)
    local = []
    for line in raw.split('\n'):
        line = line.strip()
        if line.startswith('*') or line.startswith('+'):
            continue
        if line:
            local.append(line)
    local = filter_whitelist(local[:10])

    # Fetch and find remote-only
    run_git('fetch', '--all', '--prune', cwd=cwd)
    remote_raw = run_git('branch', '-r', '--no-color', cwd=cwd)
    remote_names = set()
    for line in remote_raw.split('\n'):
        line = line.strip()
        if 'HEAD' in line or not line:
            continue
        # Strip remote prefix (origin/, macmini/, etc)
        name = re.sub(r'^[^/]+/', '', line)
        if name not in ('main', 'master'):
            remote_names.add(name)

    local_names = set()
    current = run_git('rev-parse', '--abbrev-ref', 'HEAD', cwd=cwd)
    for line in run_git('branch', '--no-color', cwd=cwd).split('\n'):
        name = line.lstrip('* +').strip()
        if name:
            local_names.add(name)

    remote_only = filter_whitelist(sorted(remote_names - local_names)[:10])
    return local, remote_only


def get_branch_details(branches: list[str], cwd: str) -> list[dict]:
    """Get commit info for each local branch."""
    details = []
    for branch in branches:
        # Find merge base
        base = None
        for candidate in ('main', 'master'):
            result = subprocess.run(
                ['git', 'merge-base', candidate, branch],
                capture_output=True, text=True, cwd=cwd
            )
            if result.returncode == 0:
                base = candidate
                break

        commits = []
        if base:
            log = run_git('log', f'{base}..{branch}', '--oneline', '--format=%h %s', '-20', cwd=cwd)
        else:
            log = run_git('log', branch, '--oneline', '--format=%h %s', '-5', cwd=cwd)

        for line in log.split('\n'):
            if not line:
                continue
            parts = line.split(' ', 1)
            if len(parts) == 2:
                commits.append({'hash': parts[0], 'message': parts[1]})

        if not commits:
            summary = 'no unique commits'
        elif len(commits) == 1:
            summary = commits[0]['message']
        else:
            summary = f"{len(commits)} commits — {commits[0]['message']}"

        details.append({
            'name': branch,
            'commits': commits,
            'summary': summary,
            'commitCount': len(commits),
        })
    return details


def get_diff_description(path: str, cwd: str) -> str:
    """Get a meaningful description of what changed in a modified file."""
    diff = ''
    for args in [['git', 'diff', '--', path],
                 ['git', 'diff', '--cached', '--', path],
                 ['git', 'diff', 'HEAD', '--', path]]:
        result = subprocess.run(args, capture_output=True, text=True, cwd=cwd)
        if result.stdout.strip():
            diff = result.stdout.strip()
            break
    if not diff:
        return ''

    added_lines = []
    removed_lines = []
    for line in diff.split('\n'):
        if line.startswith('+') and not line.startswith('+++'):
            content = line[1:].strip()
            if content:
                added_lines.append(content)
        elif line.startswith('-') and not line.startswith('---'):
            content = line[1:].strip()
            if content:
                removed_lines.append(content)

    # Get numstat
    numstat = ''
    for cmd in [['git', 'diff', 'HEAD', '--numstat', '--', path],
                ['git', 'diff', '--numstat', '--', path]]:
        result = subprocess.run(cmd, capture_output=True, text=True, cwd=cwd)
        if result.stdout.strip():
            numstat = result.stdout.strip()
            break

    count_str = ''
    if numstat:
        parts = numstat.split('\t')
        a = parts[0] if parts[0] != '-' else '?'
        r = parts[1] if len(parts) > 1 and parts[1] != '-' else '?'
        count_str = f'+{a}/-{r}'

    desc_parts = []
    if count_str:
        desc_parts.append(count_str)
    if added_lines:
        sample = added_lines[0][:60]
        desc_parts.append(f"{'changed' if removed_lines else 'added'}: {sample}")
    elif removed_lines:
        desc_parts.append(f'removed: {removed_lines[0][:60]}')

    return ' — '.join(desc_parts)


def get_new_file_description(filepath: str, cwd: str) -> str:
    """Describe a new/untracked file."""
    full = os.path.join(cwd, filepath)
    if os.path.isdir(full):
        try:
            count = sum(1 for _ in os.scandir(full))
            return f'new directory ({count} items)'
        except Exception:
            return 'new directory'
    if not os.path.isfile(full):
        return 'new file'
    try:
        size = os.path.getsize(full)
        if size == 0:
            return 'empty file'
        with open(full, 'r', errors='ignore') as f:
            first = ''
            for raw_line in f:
                stripped = raw_line.strip()
                if not stripped or stripped in ('---', '"""', "'''"):
                    continue
                for prefix in ('#!', '#', '//', '/*', '<!--', '*'):
                    stripped = stripped.lstrip(prefix).strip()
                if stripped:
                    first = stripped
                    break
        if first:
            desc = first[:70] + ('...' if len(first) > 70 else '')
            size_str = f'{size}B' if size < 1024 else f'{size // 1024}KB'
            return f'{size_str} — {desc}'
        size_str = f'{size}B' if size < 1024 else f'{size // 1024}KB'
        return f'new file ({size_str})'
    except Exception:
        return 'new file'


def get_modified_files(cwd: str) -> list[dict]:
    """Get modified file details with diff summaries."""
    labels = {
        'M': 'modified', 'A': 'added', 'D': 'deleted', 'R': 'renamed',
        'C': 'copied', '??': 'untracked', 'MM': 'modified',
        'AM': 'added+modified', 'UU': 'conflict',
    }
    output = run_git('status', '--porcelain', cwd=cwd)
    files = []
    for line in output.split('\n')[:20]:
        if not line:
            continue
        code = line[:2].strip()
        filepath = line[3:]
        change = labels.get(code, code)
        if change == 'deleted':
            summary = 'file removed'
        elif change == 'untracked':
            summary = get_new_file_description(filepath, cwd)
        elif change in ('modified', 'added', 'added+modified'):
            summary = get_diff_description(filepath, cwd)
        elif change == 'renamed':
            summary = 'file renamed'
        else:
            summary = ''
        files.append({'path': filepath, 'change': change, 'summary': summary})
    return files


def detect_tech_stack(cwd: str) -> list[str]:
    """Detect tech stack from marker files."""
    tech = []
    checks = [
        ('Package.swift', 'Swift'),
        ('build.gradle.kts', 'Kotlin'), ('build.gradle', 'Kotlin'),
        ('package.json', 'Node.js'),
        ('requirements.txt', 'Python'), ('pyproject.toml', 'Python'),
        ('Cargo.toml', 'Rust'),
        ('Gemfile', 'Ruby'),
        ('go.mod', 'Go'),
        ('tsconfig.json', 'TypeScript'),
    ]
    seen = set()
    for filename, label in checks:
        if label not in seen and os.path.isfile(os.path.join(cwd, filename)):
            tech.append(label)
            seen.add(label)

    # Check for Xcode projects
    for entry in os.listdir(cwd):
        if entry.endswith('.xcodeproj') or entry.endswith('.xcworkspace'):
            if 'Xcode' not in seen:
                tech.append('Xcode')
                seen.add('Xcode')
            break

    if os.path.isdir(os.path.join(cwd, '.claude')):
        tech.append('Claude Code')

    return tech


def get_latest_commits(cwd: str) -> list[dict]:
    """Get last 5 commits as list of {hash, message}."""
    log = run_git('log', '--oneline', '-5', '--format=%h %s', cwd=cwd)
    commits = []
    for line in log.split('\n'):
        if not line:
            continue
        parts = line.split(' ', 1)
        if len(parts) == 2:
            commits.append({'hash': parts[0], 'message': parts[1]})
    return commits


def scan_project(project_id: str, rel_path: str) -> dict | None:
    """Scan a single git repo and return its status dict."""
    resolved = os.path.normpath(os.path.join(BASE_DIR, rel_path))
    if not os.path.isdir(os.path.join(resolved, '.git')):
        return None

    branch = run_git('rev-parse', '--abbrev-ref', 'HEAD', cwd=resolved) or 'unknown'
    counts = get_porcelain_counts(resolved)
    ahead, behind = get_ahead_behind(branch, resolved)
    local_branches, remote_only = get_branches(resolved)
    branch_details = get_branch_details(local_branches, resolved) if local_branches else []
    modified_files = get_modified_files(resolved)
    latest_work_lines = run_git('log', '--oneline', '-3', '--format=%s', cwd=resolved)
    latest_work = '. '.join(latest_work_lines.split('\n')) if latest_work_lines else ''

    # Combine branches: local names + remote-prefixed
    open_branches = list(local_branches)
    for rb in remote_only:
        open_branches.append(f'remote: {rb}')

    uncommitted = counts['dirty_count'] > 0

    return {
        'id': project_id,
        'branch': branch,
        'uncommitted': uncommitted,
        'uncommittedDetail': f"{counts['dirty_count']} changed files" if uncommitted else '',
        'stagedCount': counts['staged_count'],
        'modifiedCount': counts['modified_count'],
        'untrackedCount': counts['untracked_count'],
        'deletedCount': counts['deleted_count'],
        'aheadCount': ahead,
        'behindCount': behind,
        'openBranches': open_branches,
        'branchDetails': branch_details,
        'latestWork': latest_work,
        'latestCommits': get_latest_commits(resolved),
        'techStack': detect_tech_stack(resolved),
        'syncNote': get_sync_note(resolved),
        'modifiedFiles': modified_files,
    }


def main():
    # Discover new/moved/removed projects first
    discover_script = os.path.join(SCRIPT_DIR, 'discover.py')
    if os.path.isfile(discover_script):
        subprocess.run([sys.executable, discover_script], stderr=sys.stderr)

    projects = parse_config()
    results = []
    for pid, rel_path in projects.items():
        result = scan_project(pid, rel_path)
        if result:
            results.append(result)

    print(json.dumps(results, indent=2))


if __name__ == '__main__':
    main()
```

- [ ] **Step 2: Test scanner output**

```bash
python3 scanner/scanner.py > /tmp/scan-test.json
python3 -c "import json; d=json.load(open('/tmp/scan-test.json')); print(f'{len(d)} projects scanned')"
```

Expected: Same number of projects as before (32), valid JSON output.

- [ ] **Step 3: Compare output with bash scanner**

```bash
bash scanner/scan-projects.sh > /tmp/scan-bash.json 2>/dev/null
python3 -c "
import json
a = json.load(open('/tmp/scan-bash.json'))
b = json.load(open('/tmp/scan-test.json'))
a_ids = {p['id'] for p in a}
b_ids = {p['id'] for p in b}
print(f'Bash: {len(a)} projects, Python: {len(b)} projects')
print(f'Missing from Python: {a_ids - b_ids}')
print(f'Extra in Python: {b_ids - a_ids}')
"
```

Expected: Same project IDs in both outputs.

- [ ] **Step 4: Commit**

```bash
git add scanner/scanner.py
git commit -m "feat: rewrite scanner in Python, replacing scan-projects.sh"
git push
```

---

## Task 9: Write Python discover script (discover.py)

**Files:**
- Create: `scanner/discover.py`

- [ ] **Step 1: Create discover.py**

Create `scanner/discover.py` — extract the embedded Python from `discover-projects.sh`:

```python
#!/usr/bin/env python3
"""Discover git repos under ~/projects and update config.ts."""

import os
import re
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(SCRIPT_DIR)
CONFIG_PATH = os.path.join(BASE_DIR, 'site', 'src', 'lib', 'config.ts')
PROJECTS_ROOT = os.path.expanduser('~/projects')


def discover_repos() -> dict[str, str]:
    """Walk ~/projects/*/ for git repos, return id -> relative path."""
    discovered: dict[str, str] = {}
    for category in sorted(os.listdir(PROJECTS_ROOT)):
        category_path = os.path.join(PROJECTS_ROOT, category)
        if not os.path.isdir(category_path) or category.startswith('.'):
            continue
        for dirname in sorted(os.listdir(category_path)):
            repo_path = os.path.join(category_path, dirname)
            if not os.path.isdir(os.path.join(repo_path, '.git')):
                continue
            if category == 'tests' or dirname.endswith('-tests'):
                continue
            relpath = f'../../{category}/{dirname}'
            pid = dirname.lower().replace(' ', '-')
            if pid not in discovered:
                discovered[pid] = relpath
    return discovered


def parse_config() -> tuple[dict[str, str], list[str]]:
    """Parse current config.ts projects and order."""
    with open(CONFIG_PATH) as f:
        src = f.read()

    current_projects: dict[str, str] = {}
    proj_match = re.search(r'"projects"\s*:\s*\{([^}]+)\}', src, re.DOTALL)
    if proj_match:
        for m in re.finditer(r'"([^"]+)"\s*:\s*"([^"]+)"', proj_match.group(1)):
            current_projects[m.group(1)] = m.group(2)

    current_order: list[str] = []
    order_match = re.search(r'"projectOrder"\s*:\s*\[([^\]]+)\]', src, re.DOTALL)
    if order_match:
        for m in re.finditer(r'"([^"]+)"', order_match.group(1)):
            current_order.append(m.group(1))

    return current_projects, current_order


def reconcile(
    discovered: dict[str, str],
    current: dict[str, str],
    current_order: list[str],
) -> tuple[dict[str, str], list[str], list[str]]:
    """Merge discovered repos with existing config. Returns (projects, order, changes)."""
    path_to_current_id = {v: k for k, v in current.items()}
    new_projects: dict[str, str] = {}
    changes: list[str] = []

    for pid, path in discovered.items():
        existing_id = path_to_current_id.get(path)
        if existing_id and existing_id != pid:
            new_projects[existing_id] = path
        elif pid in current:
            if current[pid] != path:
                changes.append(f'  moved: {pid} ({current[pid]} -> {path})')
            new_projects[pid] = path
        elif existing_id:
            new_projects[existing_id] = path
        else:
            changes.append(f'  added: {pid} ({path})')
            new_projects[pid] = path

    for pid, path in current.items():
        if pid not in new_projects:
            if pid.endswith('-tests') or pid.endswith('-test') or '/tests/' in path:
                changes.append(f'  removed: {pid} ({path})')
                continue
            abs_path = os.path.normpath(os.path.join(BASE_DIR, path))
            if os.path.isdir(os.path.join(abs_path, '.git')):
                new_projects[pid] = path
            else:
                changes.append(f'  removed: {pid} ({path})')

    new_order = [pid for pid in current_order if pid in new_projects]
    for pid in sorted(new_projects.keys()):
        if pid not in new_order and pid != 'projects-root':
            new_order.append(pid)

    return new_projects, new_order, changes


def write_config(projects: dict[str, str], order: list[str]) -> None:
    """Write updated config.ts."""
    lines = ['export const APP_CONFIG = {', '  "projects": {']
    sorted_projects = sorted(projects.items())
    for i, (pid, path) in enumerate(sorted_projects):
        comma = ',' if i < len(sorted_projects) - 1 else ''
        lines.append(f'    "{pid}": "{path}"{comma}')
    lines.append('  },')
    lines.append('  "projectOrder": [')
    for i, pid in enumerate(order):
        comma = ',' if i < len(order) - 1 else ''
        lines.append(f'    "{pid}"{comma}')
    lines.append('  ]')
    lines.append('};')
    lines.append('')
    with open(CONFIG_PATH, 'w') as f:
        f.write('\n'.join(lines))


def main():
    discovered = discover_repos()
    current, current_order = parse_config()
    new_projects, new_order, changes = reconcile(discovered, current, current_order)
    write_config(new_projects, new_order)
    if changes:
        print('Config updated:', file=sys.stderr)
        for c in changes:
            print(c, file=sys.stderr)
    else:
        print('No changes detected.', file=sys.stderr)


if __name__ == '__main__':
    main()
```

- [ ] **Step 2: Test discover script**

```bash
python3 scanner/discover.py
```

Expected: Prints "No changes detected." to stderr (since config is already up to date).

- [ ] **Step 3: Commit**

```bash
git add scanner/discover.py
git commit -m "feat: rewrite discover-projects in Python, replacing .sh"
git push
```

---

## Task 10: Wire up server to use Python scanner and clean up old files

**Files:**
- Modify: `server/server.js`
- Delete: `scanner/scan-projects.sh`, `scanner/discover-projects.sh`, `scanner/scan-branches.py`, `scanner/scan-modified.py`

- [ ] **Step 1: Update server.js to call Python scanner**

In `server/server.js`, change line 9:
```javascript
const SCANNER = path.join(ROOT, 'scanner');
```
stays the same.

Change line 48 from:
```javascript
execFile('bash', [scriptPath], { cwd: ROOT, timeout: 60000 }, (err, stdout) => {
```
to:
```javascript
const scriptPath = path.join(SCANNER, 'scanner.py');
execFile('python3', [scriptPath], { cwd: ROOT, timeout: 120000 }, (err, stdout) => {
```

Also remove the old `scriptPath` assignment at line 47:
```javascript
// Remove: const scriptPath = path.join(SCANNER, 'scan-projects.sh');
```

- [ ] **Step 2: Test the full flow**

```bash
# Start server
cd /Users/mfullerton/projects/active/my-projects && node server/server.js &
SERVER_PID=$!
sleep 1

# Call refresh endpoint
curl -s -X POST http://localhost:3456/api/refresh | python3 -c "import json,sys; d=json.load(sys.stdin); print(f\"ok={d['ok']}, scanned={d.get('scanned',0)}\")"

# Kill server
kill $SERVER_PID
```

Expected: `ok=true, scanned=32` (or current project count)

- [ ] **Step 3: Delete old shell/python scripts**

```bash
git rm scanner/scan-projects.sh
git rm scanner/discover-projects.sh
git rm scanner/scan-branches.py
git rm scanner/scan-modified.py
```

- [ ] **Step 4: Final build verification**

```bash
cd site && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add server/server.js
git commit -m "feat: wire server to Python scanner, remove old bash/py scripts"
git push
```

---

## Task 11: Update refresh skill config path

**Files:**
- Check and update: `.claude/skills/refresh/` if it references `config.js`

- [ ] **Step 1: Check for stale references**

Search for any references to `config.js` or `scan-projects.sh` in the repo that need updating:

```bash
grep -r 'config\.js\|scan-projects\.sh\|discover-projects\.sh\|scan-branches\.py\|scan-modified\.py' --include='*.md' --include='*.json' --include='*.sh' --include='*.py' --include='*.js' .
```

Update any references found to point to the new files (`config.ts`, `scanner.py`, `discover.py`).

- [ ] **Step 2: Commit any fixes**

```bash
git add -A
git commit -m "chore: update stale file references after TS/Python conversion"
git push
```
