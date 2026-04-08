# My Projects

A personal project management dashboard tracking ~35 git repositories with a unified web UI for monitoring status, branches, commits, and cross-project metadata.

## Purpose

Provides a single web dashboard for monitoring all active git repositories. Shows git status, branches, recent commits, modified files, tech stacks, and cross-project metadata (todos, issues, concerns, decisions, dependencies). Recently converted from vanilla JavaScript to React + Vite.

## Key Features

- Unified dashboard for ~35 git repositories
- Git status monitoring (branches, commits, modified files)
- Tech stack detection per project
- Cross-project metadata tracking (todos, issues, concerns, decisions, dependencies)
- Pluggable storage adapter pattern (localStorage, API stub)

## Tech Stack

- **Frontend:** React 19, Vite 8.0, CSS
- **Backend:** Node.js HTTP server (port 3456)
- **Scanner:** Python (scan-branches.py, scan-modified.py)
- **Storage:** localStorage adapter pattern (pluggable)

## Status

Active development.

## Related Projects

- [My Projects Overview](../../my-projects-overview/docs/project/description.md) — complementary index focused on Claude Code reference (markdown + static HTML)
