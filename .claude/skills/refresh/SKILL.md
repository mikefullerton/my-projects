---
name: refresh
description: Scan all projects and update the dashboard seed data with current git status, branches, commits, and auto-generate todos for dirty repos
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# /refresh — Update Project Dashboard Data

Scans all projects listed in `config.js`, gathers current git status, and updates `seed-data.js` with fresh data. Optionally targets a single project.

## Usage

- `/refresh` — Refresh all projects
- `/refresh <project-id>` — Refresh a single project (e.g., `/refresh cat-herding`)

## Algorithm

### 1. Read config.js

Parse `APP_CONFIG.projects` to get the map of project IDs to relative paths. Resolve each path relative to the repo root (where config.js lives).

### 2. For each project (or the specified one), gather:

Run these git commands in each project directory:

```bash
# Current branch
git rev-parse --abbrev-ref HEAD

# Uncommitted/untracked file count
git status --porcelain | wc -l

# Open local branches (excluding current)
git branch --no-color | grep -v '^\*' | sed 's/^  //' | head -10

# Last 3 commit subjects
git log --oneline -3 --format="%s"

# Ahead/behind remote
git rev-list --count @{upstream}..HEAD 2>/dev/null
git rev-list --count HEAD..@{upstream} 2>/dev/null
```

Also detect tech stack by checking for:
- `Package.swift` → Swift
- `build.gradle.kts` or `build.gradle` → Kotlin  
- `package.json` → Node.js
- `requirements.txt` or `pyproject.toml` → Python
- `Gemfile` → Ruby
- `tsconfig.json` → TypeScript
- `*.xcodeproj` or `*.xcworkspace` → Xcode
- `.claude/` directory → Claude Code

### 3. Read current seed-data.js

Parse the existing SEED_DATA to preserve manually-set fields like `name`, `tagline`, `status`, `tags`, `runCmd`, and any existing todos/issues/concerns/decisions/dependencies.

### 4. Update project entries

For each scanned project, update ONLY these fields in the seed data:
- `branch` — current branch
- `uncommitted` — true/false
- `uncommittedDetail` — "{N} modified/untracked files"
- `openBranches` — list of other local branches
- `latestWork` — last 3 commit messages joined
- `techStack` — detected tech (only if current techStack is empty or generic)

**Do NOT overwrite**: `name`, `tagline`, `status`, `tags`, `runCmd`, `branchSummaries`, or any todos/issues/concerns/decisions/dependencies.

### 5. Auto-generate attention todos

For each project, check if there should be auto-generated todos:
- If `uncommitted` is true and no existing todo mentions "commit" or "uncommitted" for this project → add a todo: "Commit {N} uncommitted files" with priority `medium`
- If project has open branches and no existing todo mentions "merge" or "branch" for this project → add a todo: "Review/merge {N} open branches" with priority `low`

Use IDs like `auto-todo-{projectId}-uncommitted` and `auto-todo-{projectId}-branches` so they can be identified and updated on subsequent refreshes (remove stale auto-todos if the condition no longer applies).

### 6. Bump seed version

Increment the `SEED_VERSION` constant in `index.html` so the browser picks up the new data on next load.

### 7. Write updated seed-data.js

Write the complete updated file back.

### 8. Report

Output a summary:
- How many projects were scanned
- How many have uncommitted changes
- How many have open branches
- How many auto-todos were added/removed
