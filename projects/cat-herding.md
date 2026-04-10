# Cat Herding

**Personal Claude Code workflow extensions**

## Tech Stack

- Claude Code skills (YAML manifests)
- Python 3.11+ (scripts, hooks)

## Architecture

Personal collection of 2 distributable skills (yolo, custom-status-line), internal linting/authoring skills, and configuration rules. Slimmed down from a larger tool collection on 2026-04-10 — dev-tools, CLIs, and web server moved to their own repos.

## Skills

| Skill | Purpose |
|-------|---------|
| **yolo** | Per-session auto-approve with configurable deny list |
| **custom-status-line** | Composable shell status line (git stats, YOLO, progress) |

Also includes internal skills: lint-skill, lint-rule, lint-agent, optimize-rules, install-worktree-rule, etc.

## Current State

- **Branch:** `main`
- Active development on personal workflow tooling

## How to Run

```bash
# Install skills
./install.sh

# Uninstall
./uninstall.sh
```

## Key Links

- **Path:** `/Users/mfullerton/projects/active/cat-herding/`
- **Related:** [dev-tools](../../../tools/dev-tools/) (moved-out skills/CLIs), [devtools-web-server](../../../tools/devtools-web-server/) (moved-out Caddy server)
