# Cat Herding

**Claude Code plugin marketplace & developer tools collection**

## Tech Stack

- Claude Code plugins (manifest-based)
- YAML skill definitions + shell scripts
- TypeScript/Hono + Drizzle ORM + PostgreSQL (scaffolded backends)
- React 19 + Vite + Tailwind CSS 4 (scaffolded frontends)
- Cloudflare Workers, Railway, GoDaddy, GitHub integrations
- Vitest test harness

## Architecture

Modular plugin system distributed via a local marketplace (`marketplace.json`). Six self-contained plugins, each independently installable. Template-driven code generation (139 `.tmpl` files). Shell scripts for infrastructure orchestration.

## Plugins

| Plugin | Version | Purpose |
|--------|---------|---------|
| **webinitor** | 2.3.0 | Manage Cloudflare, Railway, GoDaddy, GitHub CLI |
| **site-manager** | 1.0.0 | Scaffold full-stack platform (backend + 3 sites) |
| **custom-status-line** | — | Composable shell status line (git stats, YOLO, progress) |
| **yolo** | — | Per-session auto-approve with configurable deny list |
| **show-project-setup** | — | HTML dashboard of env, rules, skills, plugins |
| **repo-tools** | — | Git status overview & interactive cleanup |

Also includes 10 local skills (lint-skill, lint-rule, optimize-rules, etc.) and a quick-ref standalone skill.

## Current State

- **Branch:** `main`
- **Uncommitted work:** Site Manager template refactoring — splitting index.html.tmpl into per-site files, updating package.json/main.tsx/vite.config templates
- **Open branches:** `feature/yolo-install-uninstall`, `feature/cookbook-migration`

## Latest Work (April 2025)

- Added GitHub (gh CLI) support to webinitor (v2.3.0)
- Site Manager v1.0 shipped; v1.1-v1.5 roadmap in progress (messaging, A/B testing, observability, security, OAuth)
- Active template standardization for all 3 frontend sites
- Marketplace registration for all 6 plugins

## How to Run

```bash
# As marketplace user
claude plugin marketplace add ~/projects/active/cat-herding
claude plugin install webinitor@cat-herding

# For development
claude --plugin-dir ./plugins/webinitor

# Tests
./tests/run.sh
```

## Key Links

- **Path:** `/Users/mfullerton/projects/active/cat-herding/`
- **Related:** mysetup (installs these plugins), social-media-bot (uses site-manager patterns)
