# My Agentic Interviews

**Structured knowledge capture system for technical project interviews**

## Tech Stack

- Markdown with YAML frontmatter
- Git-based storage
- External config at `~/.agentic-interviewer/config.json`
- No code dependencies — pure documentation repo

## Architecture

File-based knowledge management system. The `/interview` command (invoked from any project directory) reads from and writes to this repo. Interview data is organized by project, with accumulated learnings in a shared knowledge base. All files use standardized YAML frontmatter (id, type, author, session, specialist, tags).

## Structure

```
profiles/mike/       — Developer profile and resume
projects/            — Per-project interview data (by project name)
knowledge/           — Cross-project accumulated learnings
```

## Current State

- **Branch:** `main`
- **Uncommitted work:** 21 deleted files from `projects/whippet-cookbook/app/` — cookbook recipes that were added April 1 but subsequently removed locally
- **Repo age:** ~4 days (initialized April 1, 2026)

## Latest Work (April 2026)

- Built out Whippet (macOS menu bar app) cookbook recipes covering:
  - App lifecycle, floating session panel, menu-bar status item
  - SQLite persistence, notification manager, event ingestion
  - AI request builder, click action system, settings
- Each recipe includes behavioral requirements, edge cases, accessibility considerations, and conformance test vectors
- 21 recipe files were recently deleted (uncommitted) — needs cleanup

## How to Run

```bash
# Invoke from any project directory
/interview
```

## Key Links

- **Path:** `/Users/mfullerton/projects/personal/my-agentic-interviews/`
- **Related:** Whippet project (primary interview subject so far)
