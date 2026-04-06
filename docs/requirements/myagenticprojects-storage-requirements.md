# My Agentic Projects — Data Storage Requirements

## What This Project Is

A personal project management dashboard ("Project Hub") that tracks ~35 git repositories across multiple categories (active, paused, deprecated, tests, personal, other). It displays git status, branches, commits, modified files, tech stacks, and project metadata in a single-page web UI.

The dashboard also tracks cross-project management data: todos, issues, concerns, decisions, and dependencies.

## Current Architecture

```
my-projects/
├── site/           Static dashboard (index.html + JS, no build step)
├── scanner/        Bash/Python scripts that read local git repos
├── server/         Node.js dev server (static files + refresh API)
├── config.json     Project registry (shared config)
├── projects/       Markdown notes per project
└── docs/           Design docs
```

### How Data Flows Today

1. **Scanner** runs locally, walks each git repo, collects status/branches/commits/modified files
2. **Server** receives scan results via `POST /api/refresh`, merges them into `site/seed-data.js`
3. **Site** loads `seed-data.js` on startup, seeds a `localStorage`-backed database (`db.js`), then renders from localStorage
4. Manual data (todos, issues, concerns, decisions, dependencies) lives in `seed-data.js` and is preserved across refreshes

### Current Storage: localStorage via Adapter Pattern

`db.js` defines a `ProjectDB` class with a pluggable adapter interface:

```
adapter.getAll(table) → Promise<Record[]>
adapter.get(table, id) → Promise<Record | null>
adapter.put(table, record) → Promise<Record>
adapter.remove(table, id) → Promise<boolean>
adapter.clear(table) → Promise<boolean>
```

Currently uses `LocalStorageAdapter`. The code includes a stubbed `ApiAdapter` for future use.

### Tables (Collections)

```
projects, todos, issues, concerns, decisions, dependencies
```

## What Needs to Change

The site is moving from local-only to a web-hosted dashboard. This breaks the current model in two ways:

1. **Scanner can't run on a web server** — it requires local filesystem access to git repos
2. **localStorage is per-browser** — data doesn't persist across devices or survive cache clears

## Requirements

### R1: Server-Side Data Storage

Replace localStorage with a persistent backend store. The adapter interface in `db.js` already defines the contract — implement an `ApiAdapter` that talks to a backend API with the same CRUD semantics.

**Tables to persist:**

| Table | Source | Notes |
|-------|--------|-------|
| `projects` | Scanner + manual edits | ~35 records. Core entity. |
| `todos` | Scanner-generated (`auto-*`) + manual | Auto-generated todos are rebuilt on each scan. Manual todos are preserved. |
| `issues` | Manual | Tracked problems per project |
| `concerns` | Manual | Risks/monitoring items per project |
| `decisions` | Manual | Architectural decisions with rationale |
| `dependencies` | Manual | Inter-project and external dependencies |

### R2: Scanner Data Ingestion

The scanner produces a JSON array of project scan results. The backend needs an endpoint that:

- Accepts the scan JSON (same format `scan-projects.sh` currently outputs)
- Updates project records with git data (branch, uncommitted status, modified files, commits, tech stack, etc.)
- Rebuilds auto-generated todos (uncommitted files, open branches)
- Preserves manually-created todos

This replaces the current server.js refresh logic that writes directly to `seed-data.js`.

### R3: Project Record Schema

Each project record contains:

```json
{
  "id": "string (slug, e.g. 'cat-herding')",
  "name": "string (display name)",
  "tagline": "string (one-line description)",
  "status": "string (active | paused | deprecated | archived)",
  "techStack": ["string"],
  "path": "string (filesystem path, informational)",
  "branch": "string (current git branch)",
  "uncommitted": "boolean",
  "uncommittedDetail": "string (e.g. '3 changed files')",
  "stagedCount": "number",
  "modifiedCount": "number",
  "untrackedCount": "number",
  "deletedCount": "number",
  "aheadCount": "number",
  "behindCount": "number",
  "openBranches": ["string (branch names)"],
  "branchDetails": [
    {
      "name": "string",
      "commits": [{"hash": "string", "message": "string"}],
      "summary": "string",
      "commitCount": "number"
    }
  ],
  "modifiedFiles": [
    {
      "path": "string",
      "change": "string (modified | added | deleted | untracked | renamed)",
      "summary": "string (diff summary)"
    }
  ],
  "latestWork": "string (concatenated recent commit messages)",
  "latestCommits": [{"hash": "string", "message": "string"}],
  "runCmd": "string (optional, how to run/open the project)",
  "tags": ["string"],
  "configPath": "string (relative path from config.js)"
}
```

### R4: Management Record Schemas

**Todo:**
```json
{
  "id": "string",
  "projectId": "string (FK to project)",
  "title": "string",
  "priority": "string (high | medium | low)",
  "status": "string (open | in-progress | done)",
  "assignee": "string"
}
```

**Issue:**
```json
{
  "id": "string",
  "projectId": "string",
  "title": "string",
  "severity": "string (critical | high | medium | low)",
  "status": "string (open | resolved)",
  "detail": "string"
}
```

**Concern:**
```json
{
  "id": "string",
  "projectId": "string",
  "title": "string",
  "status": "string (open | monitoring | closed)",
  "raiser": "string",
  "detail": "string"
}
```

**Decision:**
```json
{
  "id": "string",
  "projectId": "string",
  "title": "string",
  "rationale": "string",
  "decidedBy": "string"
}
```

**Dependency:**
```json
{
  "id": "string",
  "projectId": "string",
  "title": "string",
  "type": "string (internal | external)",
  "status": "string (healthy | pending | broken)",
  "detail": "string"
}
```

### R5: API Endpoints

The site needs these operations (matching the existing adapter interface):

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/{table}` | List all records in table |
| `GET` | `/api/{table}/{id}` | Get single record |
| `PUT` | `/api/{table}/{id}` | Create or update record |
| `DELETE` | `/api/{table}/{id}` | Delete record |
| `POST` | `/api/refresh` | Ingest scanner results, update projects + auto-todos |

Where `{table}` is one of: `projects`, `todos`, `issues`, `concerns`, `decisions`, `dependencies`.

### R6: Scanner Remains Local

The scanner must continue running on the developer's local machine (it reads git repos). It should POST results to the hosted backend's `/api/refresh` endpoint instead of writing to a local file.

The scanner currently outputs JSON to stdout. Minimal change: pipe output to `curl` or add a small wrapper that POSTs to the configured backend URL.

### R7: Seed Data Migration

The existing `seed-data.js` contains all current project and management data. The backend needs a one-time import path to load this data as the initial dataset.

### R8: Single User

This is a personal dashboard. No multi-user auth is required. A simple API key or bearer token for write operations is sufficient to prevent unauthorized modifications.

### R9: Config Registry

`config.js` maps project IDs to filesystem paths and defines display order. This is currently loaded as a `<script>` tag in the site. The project registry (names, paths, ordering) should also be available from the backend so the scanner and site share a single source of truth.

## Constraints

- **No build step for the site.** The dashboard is a single `index.html` with vanilla JS. The storage backend should expose a simple REST API consumable with `fetch()`.
- **Adapter interface is stable.** The `ProjectDB` class and its adapter contract should not change. The new backend is just a new adapter implementation.
- **Scanner output format is stable.** The JSON schema from `scan-projects.sh` is the ingestion contract.
- **Keep it simple.** This tracks ~35 projects with a handful of management items each. Total data is under 1MB. Don't over-engineer.

## Related Context

- `docs/unified-data-abstraction.md` describes a larger vision for unifying storage across three agentic projects (Roadmaps, Dev-Team, Social Media Bot). That effort is separate and future. This requirements doc covers only the Project Hub dashboard's immediate storage needs.
- The `ProjectDB` adapter pattern in `db.js` was designed with this migration in mind. The `ApiAdapter` stub in the code shows the intended interface.
