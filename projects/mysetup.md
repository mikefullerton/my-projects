# mysetup

**Dev environment automation for macOS and Windows/WSL**

## Tech Stack

- Bash/Zsh shell scripts
- Python 3 core library (2,750 lines across 13 modules)
- Oh-my-zsh with custom theme
- Homebrew (macOS) / Winget (Windows)
- Claude Code skill (`/setup`)

## Architecture

Three layers: (1) a modular Python library (`bin/lib/`) for shell execution, git operations, menus, and file utilities; (2) 15+ executable CLI scripts for git, links, and file ops; (3) a declarative `setup.md` manifest that defines desired machine state, interpreted by a Claude Code skill.

## Key Components

- **`install.sh`** (1,243 lines) — Main installer for macOS and WSL
- **`setup.md`** — Declarative manifest: git config, shell, Homebrew, npm/pip globals, VS Code extensions, Claude Code plugins, repo cloning
- **`/setup` skill** — Reads manifest, installs/configures sections
- **`bin/git-*`** — Git utilities (branches, push, pull, force-update, import-directory)
- **`bin/split-out-links`** — Extract links from HTML/webloc files (with Playwright)
- **`bin/lib/`** — Reusable Python modules (shell_command, git_branch_manager, menu, logger)

## Current State

- **Branch:** `main`
- **Uncommitted work:** 6 modified files (CLAUDE.md, settings, .gitignore, README, install.sh, setup.md)
- **Open branches:** `remove-deprecated` (cleanup of legacy code in `deprecated/` — 4.5MB)

## Latest Work (April 2025)

- Cleaned up configuration repos and Claude plugins from setup
- Implemented Phase 1 of `/setup` skill (declarative manifest processing)
- Removed claude-config and agentic-roadmaps from setup
- Preparing `remove-deprecated` branch to clean out legacy code
- Added worktree + PR workflow enforcement

## How to Run

```bash
# Full install
./install.sh

# Declarative setup via Claude Code
/setup                      # Run all sections
/setup --check              # Dry run
/setup --section "Homebrew" # Specific section

# Individual scripts
git-branches                # List branches by date
mysetup                     # List all available scripts
```

## Key Links

- **Path:** `/Users/mfullerton/projects/active/mysetup/`
- **Related:** cat-herding (plugins installed by this), all other projects (cloned by this)
