# React Conversion Design Spec

## Goal

Convert the Project Hub dashboard from a vanilla JS single-page app (1700-line `index.html`) to a Vite + React application. Zero visual changes — pixel-identical port of the existing UI.

## Current State

```
site/
├── index.html      # ~900 lines CSS + ~800 lines JS, all inline
├── db.js           # ProjectDB with localStorage adapter (197 lines)
├── config.js       # APP_CONFIG: project paths + display order (69 lines)
└── seed-data.js    # SEED_DATA: all project + management data (3439 lines)
```

The JS uses imperative DOM manipulation via helper functions (`el()`, `clearEl()`). Six views are toggled by showing/hiding `data-section` divs. Navigation state is managed by adding/removing `.active` classes on nav links.

## Architecture

### Tooling

- **Vite** with `@vitejs/plugin-react` for dev server and production builds
- **React 19** + **ReactDOM** for UI components
- **No TypeScript** — straightforward port first, can add later
- **No react-router** — simple state-based view switching matches current behavior
- **No additional UI libraries** — existing CSS is used verbatim

### Dependencies

Production: `react`, `react-dom`
Dev: `vite`, `@vitejs/plugin-react`

## File Structure

```
site/
├── index.html              # Minimal shell: <div id="root">, Vite script entry
├── vite.config.js          # Plugin + API proxy config
├── package.json
├── public/                 # Static assets (if any added later)
├── src/
│   ├── main.jsx            # Entry: renders <App /> into #root
│   ├── index.css           # Verbatim CSS from current <style> block (no changes)
│   ├── App.jsx             # Layout: sidebar + main content, view state management
│   ├── context/
│   │   └── DataContext.jsx # ProjectDB instance, seed logic, refresh trigger
│   ├── hooks/
│   │   └── useData.js      # Queries all tables, returns filtered/computed data
│   ├── components/
│   │   ├── Sidebar.jsx       # Nav links + grouped project tree
│   │   ├── StatsBar.jsx      # Dashboard stat cards
│   │   ├── ProjectGrid.jsx   # Grouped project cards with indicators
│   │   ├── ProjectDetail.jsx # Full project view with all sections
│   │   ├── AttentionView.jsx # Attention items grouped by project
│   │   ├── TodosView.jsx     # All todos list with checkboxes
│   │   ├── IssuesView.jsx    # All issues list with checkboxes
│   │   ├── DecisionsView.jsx # All decisions grouped by project
│   │   └── ItemList.jsx      # Shared checklist component (todos + issues)
│   └── lib/
│       ├── db.js             # ProjectDB + LocalStorageAdapter (ES module export)
│       ├── config.js         # APP_CONFIG (ES module export)
│       └── seed.js           # SEED_DATA (ES module export)
└── dist/                   # Vite build output (deployable)
```

## Component Mapping

Each component maps directly to existing render functions:

| Component | Current Function(s) | Responsibility |
|-----------|---------------------|----------------|
| `App` | `init()`, `navigate()`, view toggling | Layout shell, view state, nav routing |
| `Sidebar` | `renderNavProjects()`, `updateNavCounts()` | Nav links with counts/dots, project tree grouped by category |
| `StatsBar` | `renderStats()` | 5 stat cards (projects, todos, issues, concerns, decisions) |
| `ProjectGrid` | `renderProjects()`, `buildProjectCard()`, `buildGitIndicators()` | Grouped project cards with git + tracking indicators |
| `ProjectDetail` | `showProjectDetail()` | Path/branch/run info, project card, tech stack, commits, branches, modified files, inline todos/issues/concerns/decisions |
| `AttentionView` | `renderAttention()` | Uncommitted repos, high-priority todos, open issues — grouped by project |
| `TodosView` | `renderAllTodos()` | All todos sorted by priority, grouped by project, with checkboxes |
| `IssuesView` | `renderAllIssues()` | All issues sorted by severity, grouped by project, with checkboxes |
| `DecisionsView` | `renderAllDecisions()` | All decisions grouped by project |
| `ItemList` | `buildItemList()` | Reusable checklist: checkbox + title + priority badge, used by ProjectDetail |

## Data Layer

### DataContext

Provides the `ProjectDB` instance and a refresh mechanism to all components.

**On mount:**
1. Instantiates `new ProjectDB()`
2. Checks `localStorage pmhub:seed_version` against `SEED_VERSION` constant
3. If stale: `db.reset()` → `db.seed(SEED_DATA)` → update version in localStorage
4. Iterates `APP_CONFIG.projects` to set `configPath` on each project record
5. Sets `ready` state to true

**Exposes:**
- `db` — the ProjectDB instance
- `refreshKey` — a counter, incremented after mutations or API refresh
- `refresh()` — bumps the counter, triggering data reload in consumers

### useData Hook

Queries all tables whenever `refreshKey` changes. Returns:

```js
{
  projects,       // ordered by APP_CONFIG.projectOrder, filtered to visible
  todos,          // filtered to visible project IDs
  issues,         // filtered to visible project IDs
  concerns,       // filtered to visible project IDs
  decisions,      // filtered to visible project IDs
  dependencies,   // filtered to visible project IDs
  stats: {        // computed from filtered data
    projectCount, openTodos, totalTodos, openIssues, totalIssues,
    activeConcerns, totalDecisions
  }
}
```

This consolidates the data-fetching logic currently at the top of `render()`.

### Mutations

Actions like `markDone`, `markUndone`, `addTodo` call `db` methods directly, then call `refresh()` from context to trigger re-render. No optimistic updates needed — localStorage reads are instant.

### lib/ Module Conversions

Minimal edits to make existing files ES-module compatible:

| File | Change |
|------|--------|
| `db.js` | Remove `module.exports` block, add `export { ProjectDB, LocalStorageAdapter, TABLES }` |
| `config.js` | `const APP_CONFIG = {` → `export const APP_CONFIG = {`, remove trailing `};` semicolon fix |
| `seed.js` | `const SEED_DATA = {` → `export const SEED_DATA = {` |

No logic changes to any of these files.

## View Routing

Current behavior: `navigate()` shows/hides sections by toggling `.hidden` class based on a `VIEWS` map.

React replacement: `App` holds `currentView` and `currentProjectId` in state. Conditionally renders the matching component(s):

```jsx
// Simplified — actual implementation follows VIEWS map exactly
{currentView === 'dashboard' && <><StatsBar /><ProjectGrid /></>}
{currentView === 'attention' && <AttentionView />}
{currentView === 'projects' && <ProjectGrid />}
{currentView === 'project-detail' && <ProjectDetail projectId={currentProjectId} />}
{currentView === 'all-todos' && <TodosView />}
{currentView === 'all-issues' && <IssuesView />}
{currentView === 'all-decisions' && <DecisionsView />}
```

The `VIEWS` map from current code:
```js
const VIEWS = {
  'dashboard': ['dashboard', 'projects'],
  'attention': ['attention'],
  'projects': ['projects'],
  'project-detail': ['project-detail'],
  'all-todos': ['all-todos'],
  'all-issues': ['all-issues'],
  'all-decisions': ['all-decisions'],
};
```

`Sidebar` calls a `navigate(view, projectId?)` function passed down from `App`.

## CSS Strategy

The entire `<style>` block (~900 lines) is extracted verbatim into `src/index.css`. No modifications. All existing class names, CSS variables, and selectors are preserved. Components render the same class names as the current imperative code.

## Build & Dev

### vite.config.js

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3456'
    }
  }
});
```

### Development Workflow

Run both servers:
1. `node server/server.js` — serves API on port 3456 (scanner refresh endpoint)
2. `cd site && npm run dev` — Vite dev server on 5173, proxies `/api` to 3456

### Production Build

`cd site && npm run build` outputs to `site/dist/`. This is the deployable static folder. The existing `server/server.js` can serve `dist/` instead of `site/` root, or the files go to any static host.

### server.js Update

Update the `SITE` path in `server/server.js` to serve from `site/dist/` in production mode. During development, Vite's dev server handles serving.

## Refresh Flow

Current: Button calls `POST /api/refresh` → server runs scanner, writes `seed-data.js`, bumps version → `location.reload()`.

New: Button calls `POST /api/refresh` → server runs scanner, writes updated `seed-data.js` as before, returns `{ ok: true }` → frontend reloads the page to pick up the new seed data. Same as current behavior. A future improvement could return the data inline and avoid the reload, but that's out of scope for this port.

## What Does NOT Change

- All CSS (verbatim extraction, no modifications)
- `ProjectDB` class and adapter interface
- `LocalStorageAdapter` behavior
- `seed-data.js` data format and content
- `config.js` project registry format
- Scanner scripts (`scanner/` directory)
- Server refresh logic (`server/server.js` core logic)
- Any visual appearance

## Out of Scope

- TypeScript conversion (future)
- react-router (not needed for 6 views)
- State management libraries (context + hooks sufficient)
- CSS modules or CSS-in-JS (existing CSS works as-is)
- API adapter for db.js (separate storage migration effort)
- New features or UI changes
