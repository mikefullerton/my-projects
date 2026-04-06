/**
 * Seed data for the project management dashboard.
 * Auto-updated by server refresh.
 */

export const SEED_DATA = {
  "projects": [
    {
      "id": "cat-herding",
      "name": "Cat Herding",
      "tagline": "Claude Code plugin marketplace & developer tools",
      "status": "active",
      "techStack": [
        "Claude Code Plugins",
        "TypeScript/Hono",
        "React 19",
        "Cloudflare Workers",
        "Railway"
      ],
      "path": "~/projects/personal/cat-herding/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "45 changed files",
      "openBranches": [
        "feature/yolo-install-uninstall"
      ],
      "branchSummaries": {
        "feature/yolo-install-uninstall": "Adding install/uninstall commands for YOLO plugin"
      },
      "latestWork": "refactor: update plugins to delegate deterministic commands to CLIs.feat: add site-manager CLI for macOS.feat: add webinator CLI for macOS.",
      "runCmd": "claude --plugin-dir ./plugins/webinitor",
      "tags": [
        "plugins",
        "infrastructure",
        "scaffolding"
      ],
      "modifiedFiles": [
        {
          "path": ".claude/rules/plugin-development.md",
          "change": "modified",
          "summary": "+1/-1 — changed: claude plugin marketplace add ~/projects/active/cat-herding"
        },
        {
          "path": "cli/site-manager/pyproject.toml",
          "change": "modified",
          "summary": "+7/-1 — changed: dynamic = [\"version\"]"
        },
        {
          "path": "cli/site-manager/src/site_manager.egg-info/PKG-INFO",
          "change": "modified",
          "summary": "+2/-0 — added: Provides-Extra: test"
        },
        {
          "path": "cli/site-manager/src/site_manager.egg-info/SOURCES.txt",
          "change": "modified",
          "summary": "+8/-1 — changed: src/site_manager/__main__.py"
        },
        {
          "path": "cli/site-manager/src/site_manager/__init__.py",
          "change": "modified",
          "summary": "+7/-0 — added: __version__ = \"0.3.0\""
        },
        {
          "path": "cli/site-manager/src/site_manager/cli.py",
          "change": "modified",
          "summary": "+115/-52 — changed: import os"
        },
        {
          "path": "cli/webinator/pyproject.toml",
          "change": "modified",
          "summary": "+7/-1 — changed: dynamic = [\"version\"]"
        },
        {
          "path": "cli/webinator/src/webinator.egg-info/PKG-INFO",
          "change": "modified",
          "summary": "+2/-0 — added: Provides-Extra: test"
        },
        {
          "path": "cli/webinator/src/webinator.egg-info/SOURCES.txt",
          "change": "modified",
          "summary": "+21/-1 — changed: src/webinator/__main__.py"
        },
        {
          "path": "cli/webinator/src/webinator/__init__.py",
          "change": "modified",
          "summary": "+1/-0 — added: __version__ = \"0.1.0\""
        },
        {
          "path": "cli/webinator/src/webinator/cli.py",
          "change": "modified",
          "summary": "+12/-8 — changed: from webinator import __version__"
        },
        {
          "path": "docs/superpowers/plans/2026-04-05-site-manager-v1.md",
          "change": "modified",
          "summary": "+5/-5 — changed: - `~/projects/active/temporal` — full architecture reference"
        },
        {
          "path": "docs/superpowers/specs/2026-04-05-site-manager-planning.md",
          "change": "modified",
          "summary": "+1/-1 — changed: From `~/projects/active/cookbook/`:"
        },
        {
          "path": "plugins/site-manager/skills/site-manager/SKILL.md",
          "change": "modified",
          "summary": "+663/-300 — changed: argument-hint: \"[init|deploy|update|verify|repair|status|man"
        },
        {
          "path": "plugins/site-manager/skills/site-manager/references/templates/root/site-manifest.json.tmpl",
          "change": "modified",
          "summary": "+4/-0 — added: \"_site_manager_version\": \"{{SITE_MANAGER_VERSION}}\","
        },
        {
          "path": ".claude/rules/cli-versioning.md",
          "change": "untracked",
          "summary": "550B — CLI Versioning"
        },
        {
          "path": ".superpowers/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": ".wrangler/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "cli/site-manager/src/site_manager.egg-info/requires.txt",
          "change": "untracked",
          "summary": "20B — [test]"
        },
        {
          "path": "cli/site-manager/src/site_manager/__main__.py",
          "change": "untracked",
          "summary": "92B — \"\"\"Allow running as `python3 -m site_manager`.\"\"\""
        }
      ],
      "branchDetails": [
        {
          "name": "feature/yolo-install-uninstall",
          "commits": [
            {
              "hash": "5d2a81c",
              "message": "feat: add /yolo install and /yolo uninstall, make on/off instant (v5.0.0)"
            },
            {
              "hash": "bf5a593",
              "message": "refactor: simplify yolo-enable.sh to session marker + auto-install"
            },
            {
              "hash": "292fe64",
              "message": "feat: add yolo-uninstall.sh"
            },
            {
              "hash": "b5d2761",
              "message": "feat: extract yolo-install.sh from yolo-enable.sh"
            },
            {
              "hash": "3aa9b64",
              "message": "chore: start yolo install/uninstall refactor"
            }
          ],
          "summary": "5 commits — feat: add /yolo install and /yolo uninstall, make on/off instant (v5.0.0)",
          "commitCount": 5
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 15,
      "untrackedCount": 30,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "63b2d67",
          "message": "refactor: update plugins to delegate deterministic commands to CLIs"
        },
        {
          "hash": "68dc0b3",
          "message": "feat: add site-manager CLI for macOS"
        },
        {
          "hash": "031e9d3",
          "message": "feat: add webinator CLI for macOS"
        },
        {
          "hash": "1947de0",
          "message": "feat(site-manager): add /verify command and post-deploy verification (v1.3.0)"
        },
        {
          "hash": "5d1882a",
          "message": "feat(site-manager): add verify.py deployment verification script"
        }
      ]
    },
    {
      "id": "my-agentic-interviews",
      "name": "My Agentic Interviews",
      "tagline": "Structured knowledge capture for technical project interviews",
      "status": "active",
      "techStack": [
        "Markdown",
        "YAML Frontmatter",
        "Git"
      ],
      "path": "~/projects/personal/my-agentic-interviews/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "24 changed files",
      "openBranches": [],
      "latestWork": "Add SQLite persistence recipe for Whippet cookbook.Add AIRequestBuilder service recipe for Whippet cookbook.Add launch-at-login infrastructure recipe for Whippet.",
      "runCmd": "/interview",
      "tags": [
        "documentation",
        "knowledge-management"
      ],
      "modifiedFiles": [
        {
          "path": "projects/whippet-cookbook/app/actions/click-action-system.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/actions/window-activation.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/data/sqlite-persistence.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/infrastructure/ai-session-summarizer.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/infrastructure/event-ingestion.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/infrastructure/hook-installer.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/infrastructure/launch-at-login.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/infrastructure/logging.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/infrastructure/notification-manager.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/infrastructure/session-liveness-monitor.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/infrastructure/settings-keys.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/infrastructure/window-frame-persistence.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/lifecycle.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/menu-bar-status-item.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/services/ai-request-builder.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/settings/ai-chat-control.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/settings/ai-settings-panel.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/settings/settings-window.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/window/debug-panel.md",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": "projects/whippet-cookbook/app/window/floating-session-panel.md",
          "change": "deleted",
          "summary": "file removed"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 3,
      "deletedCount": 21,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "ffec13f",
          "message": "Add SQLite persistence recipe for Whippet cookbook"
        },
        {
          "hash": "f86b7cc",
          "message": "Add AIRequestBuilder service recipe for Whippet cookbook"
        },
        {
          "hash": "1f681a9",
          "message": "Add launch-at-login infrastructure recipe for Whippet"
        },
        {
          "hash": "7f540c7",
          "message": "Add floating session panel recipe for Whippet cookbook"
        },
        {
          "hash": "6b83aa5",
          "message": "Add menu-bar-status-item recipe for Whippet cookbook"
        }
      ]
    },
    {
      "id": "mysetup",
      "name": "mysetup",
      "tagline": "Dev environment automation for macOS and Windows/WSL",
      "status": "active",
      "techStack": [
        "Bash/Zsh",
        "Python 3",
        "Oh-my-zsh",
        "Homebrew"
      ],
      "path": "~/projects/personal/mysetup/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "7 changed files",
      "openBranches": [
        "housekeeping-updates",
        "remove-deprecated"
      ],
      "branchSummaries": {
        "remove-deprecated": "Cleaning out 4.5MB of legacy code from deprecated/ directory",
        "housekeeping-updates": "Housekeeping and cleanup tasks"
      },
      "latestWork": "remove extra stuff for now.Merge pull request #24 from mikefullerton/remove-config-repos.chore: remove claude-config and agentic-roadmaps from setup.",
      "runCmd": "./install.sh",
      "tags": [
        "automation",
        "devtools",
        "shell"
      ],
      "modifiedFiles": [
        {
          "path": ".claude/CLAUDE.md",
          "change": "modified",
          "summary": "+1/-1 — changed: - **Always use worktrees** for feature/fix branches. Worktre"
        },
        {
          "path": ".claude/settings.local.json",
          "change": "modified",
          "summary": "+2/-1 — changed: \"Bash(gh pr:*)\","
        },
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-1 — changed: .claude/worktrees/"
        },
        {
          "path": "README.md",
          "change": "modified",
          "summary": "+2/-2 — changed: git clone <repo-url> ~/projects/active/mysetup"
        },
        {
          "path": "deprecated/xcode/ow2",
          "change": "modified",
          "summary": "+2/-2 — changed: #    \"mysetup:$HOME/projects/personal/mysetup\""
        },
        {
          "path": "install.sh",
          "change": "modified",
          "summary": "+1/-1 — changed: '$HOME/projects/personal/mysetup/bin'"
        },
        {
          "path": "setup.md",
          "change": "modified",
          "summary": "+1/-1 — changed: - $HOME/projects/personal/mysetup/bin"
        }
      ],
      "branchDetails": [
        {
          "name": "housekeeping-updates",
          "commits": [
            {
              "hash": "67a5ddd",
              "message": "chore: update paths to ~/projects/personal/mysetup and specify worktree directory"
            }
          ],
          "summary": "chore: update paths to ~/projects/personal/mysetup and specify worktree directory",
          "commitCount": 1
        },
        {
          "name": "remove-deprecated",
          "commits": [
            {
              "hash": "410cb74",
              "message": "chore: remove deprecated directory"
            }
          ],
          "summary": "chore: remove deprecated directory",
          "commitCount": 1
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 7,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "4e5b340",
          "message": "remove extra stuff for now"
        },
        {
          "hash": "50010e1",
          "message": "Merge pull request #24 from mikefullerton/remove-config-repos"
        },
        {
          "hash": "bc09282",
          "message": "chore: remove claude-config and agentic-roadmaps from setup"
        },
        {
          "hash": "c03e38b",
          "message": "Merge pull request #23 from mikefullerton/remove-claude-plugins"
        },
        {
          "hash": "d83e6d0",
          "message": "chore: remove Claude plugins installation from setup.md and install.sh"
        }
      ]
    },
    {
      "id": "name-craft",
      "name": "Name Craft",
      "tagline": "AI-powered silly character name generator",
      "status": "stable",
      "techStack": [
        "Flask 3.0",
        "Python 3",
        "Claude API",
        "SQLite",
        "SSE"
      ],
      "path": "~/projects/personal/name-craft/",
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "Added silly words pool to name-components reference. Word builder DB scaffolding complete. Core system fully functional with mock mode.",
      "runCmd": "python -m services.server",
      "tags": [
        "ai",
        "web-app",
        "fun"
      ]
    },
    {
      "id": "scratchyfish",
      "name": "Scratchy Fish",
      "tagline": "Progressive jazz rock band website — scratchyfish.com",
      "status": "stable",
      "techStack": [
        "Jekyll 4.3",
        "HTML/CSS/JS",
        "GitHub Pages"
      ],
      "path": "~/projects/personal/scratchyfish.com/",
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "git ignore change.chore: update claude local settings.Add Phil Bernosky serious bio text.",
      "runCmd": "bundle exec jekyll serve",
      "tags": [
        "website",
        "band",
        "static-site"
      ],
      "modifiedFiles": [],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "9137754",
          "message": "git ignore change"
        },
        {
          "hash": "af35af2",
          "message": "chore: update claude local settings"
        },
        {
          "hash": "760cd0b",
          "message": "Add Phil Bernosky serious bio text"
        },
        {
          "hash": "2a846aa",
          "message": "Add Phil Bernosky person photo with dog/person toggle"
        },
        {
          "hash": "72b323f",
          "message": "Fix remaining external image URLs in posts.json"
        }
      ]
    },
    {
      "id": "social-media-bot",
      "name": "Social Media Bot",
      "tagline": "AI content pipeline: git commits to social media posts",
      "status": "active",
      "techStack": [
        "Python 3.12",
        "Click",
        "Claude Agent SDK",
        "SQLite",
        "tweepy",
        "atproto"
      ],
      "path": "~/projects/personal/social-media-bot/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "12 changed files",
      "openBranches": [],
      "latestWork": "docs: add README and Claude Code skills.feat: interview system and updated bot config.feat: per-run data storage with live HTML dashboard.",
      "runCmd": "smbot run",
      "tags": [
        "ai",
        "automation",
        "social-media"
      ],
      "modifiedFiles": [
        {
          "path": ".claude/skills/start-run/SKILL.md",
          "change": "modified",
          "summary": "+3/-3 — changed: Read `~/Library/Mobile Documents/com~apple~CloudDocs/social-"
        },
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        },
        {
          "path": "README.md",
          "change": "modified",
          "summary": "+3/-3 — changed: open ~/Library/Mobile\\ Documents/com\\~apple\\~CloudDocs/socia"
        },
        {
          "path": "bots/research/topic_organizer.md",
          "change": "modified",
          "summary": "+16/-7 — changed: Read ALL research artifacts from the pipeline — commit analy"
        },
        {
          "path": "coordinator/cli.py",
          "change": "modified",
          "summary": "+56/-11 — changed: _DEFAULT_DATA = os.path.expanduser(\"~/Library/Mobile Documen"
        },
        {
          "path": "coordinator/db.py",
          "change": "modified",
          "summary": "+23/-0 — added: # -- Reading List --"
        },
        {
          "path": "coordinator/run_manager.py",
          "change": "modified",
          "summary": "+398/-5 — changed: \"topic-organizer\","
        },
        {
          "path": "docs/superpowers/plans/2026-04-01-phase1-content-pipeline.md",
          "change": "modified",
          "summary": "+1/-1 — changed: cd /Users/mfullerton/projects/active/social-media-bot"
        },
        {
          "path": "templates/config.html",
          "change": "modified",
          "summary": "+38/-35 — changed: .bot-row.locked { opacity: 0.6; cursor: default; }"
        },
        {
          "path": "templates/index.html",
          "change": "modified",
          "summary": "+5/-1 — changed: header .nav-links { display: flex; gap: 8px; }"
        },
        {
          "path": "data/",
          "change": "untracked",
          "summary": "new directory (5 items)"
        },
        {
          "path": "templates/actionable.html",
          "change": "untracked",
          "summary": "19KB — DOCTYPE html>"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 10,
      "untrackedCount": 2,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "1436d82",
          "message": "docs: add README and Claude Code skills"
        },
        {
          "hash": "0bd80cb",
          "message": "feat: interview system and updated bot config"
        },
        {
          "hash": "6721dbc",
          "message": "feat: per-run data storage with live HTML dashboard"
        },
        {
          "hash": "10fb707",
          "message": "feat: deep activity pipeline — commit-by-commit analysis with topic research"
        },
        {
          "hash": "83759e2",
          "message": "fix: activity scanner recursive repo discovery, better filtering and grouping"
        }
      ]
    },
    {
      "id": "social-media-bot-tests",
      "name": "Social Media Bot Tests",
      "tagline": "Integration test harness for social-media-bot",
      "status": "stable",
      "techStack": [
        "TypeScript",
        "Vitest 3.2",
        "better-sqlite3"
      ],
      "path": "~/projects/personal/social-media-bot-tests/",
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "Test fixtures and roadmap management. 28 tests across 7 suites covering full pipeline, approval flow, auto-poster, health backoff.",
      "runCmd": "npm test",
      "tags": [
        "testing",
        "automation"
      ]
    },
    {
      "id": "my-projects",
      "name": "My Projects",
      "tagline": "Cross-project docs & unified data architecture specs",
      "status": "new",
      "techStack": [
        "Markdown",
        "HTML/JS",
        "SQLite (planned)"
      ],
      "path": "~/projects/personal/my-projects/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "4 changed files",
      "openBranches": [],
      "latestWork": "refactor: reorganize repo into site/, scanner/, server/ for web hosting.feat: project management dashboard with dev-team aesthetic.",
      "runCmd": "open index.html",
      "tags": [
        "meta",
        "documentation",
        "architecture"
      ],
      "modifiedFiles": [
        {
          "path": "site/index.html",
          "change": "modified",
          "summary": "+1/-1 — changed: const SEED_VERSION = 13; // bump to re-seed after data chang"
        },
        {
          "path": "site/seed-data.js",
          "change": "modified",
          "summary": "+259/-226 — changed: \"uncommittedDetail\": \"45 changed files\","
        },
        {
          "path": "docs/requirements/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "docs/superpowers/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 2,
      "untrackedCount": 2,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "30c9d95",
          "message": "refactor: reorganize repo into site/, scanner/, server/ for web hosting"
        },
        {
          "hash": "86bcff0",
          "message": "feat: project management dashboard with dev-team aesthetic"
        }
      ]
    },
    {
      "id": "code-review-pipeline-test",
      "name": "Code Review Pipeline Test",
      "tagline": "KMP multiplatform app for testing Claude-powered PR review pipeline",
      "status": "active",
      "techStack": [
        "Kotlin Multiplatform"
      ],
      "path": "~/projects/agentic-cookbook/code-review-pipeline-test/",
      "branch": "feature/cost-optimization",
      "uncommitted": true,
      "uncommittedDetail": "2 changed files",
      "openBranches": [
        "chore/wrapper-refs-main",
        "config/on-demand-reviews",
        "config/update-dotfiles-reference",
        "feature/add-anthropic-review",
        "feature/agent-wrappers",
        "feature/test-pipeline-review",
        "feature/thorin-code-review",
        "main"
      ],
      "latestWork": "docs: update dotfiles path from ~/.dotfiles to ~/projects/dotfiles.config: make Thorin code review on-demand only.config: adopt combined review, make Anthropic on-demand.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "testing"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        },
        {
          "path": "CLAUDE.md",
          "change": "modified",
          "summary": "+1/-1 — changed: - `~/projects/deprecated/dotfiles` — Developer environment c"
        }
      ],
      "branchDetails": [
        {
          "name": "chore/wrapper-refs-main",
          "commits": [
            {
              "hash": "5c2f39e",
              "message": "chore: switch wrapper references to @main"
            }
          ],
          "summary": "chore: switch wrapper references to @main",
          "commitCount": 1
        },
        {
          "name": "config/on-demand-reviews",
          "commits": [
            {
              "hash": "7164100",
              "message": "config: make specialized reviews on-demand only"
            },
            {
              "hash": "587669e",
              "message": "feat: add Anthropic code reviewer workflow"
            }
          ],
          "summary": "2 commits — config: make specialized reviews on-demand only",
          "commitCount": 2
        },
        {
          "name": "config/update-dotfiles-reference",
          "commits": [
            {
              "hash": "a2ad867",
              "message": "Update dotfiles reference with new docs location"
            }
          ],
          "summary": "Update dotfiles reference with new docs location",
          "commitCount": 1
        },
        {
          "name": "feature/add-anthropic-review",
          "commits": [
            {
              "hash": "587669e",
              "message": "feat: add Anthropic code reviewer workflow"
            }
          ],
          "summary": "feat: add Anthropic code reviewer workflow",
          "commitCount": 1
        },
        {
          "name": "feature/agent-wrappers",
          "commits": [
            {
              "hash": "a6389d3",
              "message": "feat: switch all workflows to agent wrapper references"
            }
          ],
          "summary": "feat: switch all workflows to agent wrapper references",
          "commitCount": 1
        },
        {
          "name": "feature/test-pipeline-review",
          "commits": [
            {
              "hash": "6a07285",
              "message": "feat: add time-aware greetings"
            }
          ],
          "summary": "feat: add time-aware greetings",
          "commitCount": 1
        },
        {
          "name": "feature/thorin-code-review",
          "commits": [
            {
              "hash": "779c6fe",
              "message": "feat: switch to thorin-code-review and update reviewer names"
            }
          ],
          "summary": "feat: switch to thorin-code-review and update reviewer names",
          "commitCount": 1
        },
        {
          "name": "main",
          "commits": [],
          "summary": "no unique commits",
          "commitCount": 0
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 2,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 3,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "55774a6",
          "message": "docs: update dotfiles path from ~/.dotfiles to ~/projects/dotfiles"
        },
        {
          "hash": "32fb0a5",
          "message": "config: make Thorin code review on-demand only"
        },
        {
          "hash": "864daad",
          "message": "config: adopt combined review, make Anthropic on-demand"
        },
        {
          "hash": "7aa7d26",
          "message": "config: make specialized reviews on-demand only (#71)"
        },
        {
          "hash": "215eec0",
          "message": "feat: add Anthropic code reviewer workflow (#70)"
        }
      ]
    },
    {
      "id": "code-review-pipeline",
      "name": "Code Review Pipeline",
      "tagline": "Local daemon for automated GitHub PR reviews using Claude Code CLI",
      "status": "active",
      "techStack": [
        "Python",
        "Claude Code CLI",
        "GitHub API"
      ],
      "path": "~/projects/agentic-cookbook/code-review-pipline/",
      "branch": "HEAD\nunknown",
      "uncommitted": true,
      "uncommittedDetail": "6 changed files",
      "openBranches": [],
      "latestWork": "",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "automation",
        "code-review"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "untracked",
          "summary": "98B — __pycache__/"
        },
        {
          "path": "CLAUDE.md",
          "change": "untracked",
          "summary": "1KB — agentic-code-review-pipline"
        },
        {
          "path": "config.yaml",
          "change": "untracked",
          "summary": "946B — poll_interval_seconds: 300"
        },
        {
          "path": "requirements.txt",
          "change": "untracked",
          "summary": "42B — pyyaml>=6.0"
        },
        {
          "path": "src/",
          "change": "untracked",
          "summary": "new directory (11 items)"
        },
        {
          "path": "tests/",
          "change": "untracked",
          "summary": "new directory (9 items)"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 6,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": []
    },
    {
      "id": "cookbook",
      "name": "Cookbook",
      "tagline": "Structured cookbook of principles, guidelines, recipes, and workflows for AI-assisted development",
      "status": "active",
      "techStack": [
        "Markdown",
        "YAML",
        "Claude Code"
      ],
      "path": "~/projects/agentic-cookbook/cookbook/",
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "Document worktree directory path in CLAUDE.md git workflow section.Reclassify recipes into ingredients and update sibling projects (#43).Add ingredient/recipe/concoction artifact hierarchy (#42).",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "documentation"
      ],
      "modifiedFiles": [],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "f83631e",
          "message": "Document worktree directory path in CLAUDE.md git workflow section"
        },
        {
          "hash": "0face55",
          "message": "Reclassify recipes into ingredients and update sibling projects (#43)"
        },
        {
          "hash": "90e5f7a",
          "message": "Add ingredient/recipe/concoction artifact hierarchy (#42)"
        },
        {
          "hash": "c8b1f6b",
          "message": "Add skill test harness with Vitest + Claude CLI (#41)"
        },
        {
          "hash": "af90c86",
          "message": "Lint and approve all 149 cookbook artifacts (#40)"
        }
      ]
    },
    {
      "id": "cookbook-tests",
      "name": "Cookbook Tests",
      "tagline": "Test output repository for agentic interview team workflows",
      "status": "active",
      "techStack": [
        "Node.js",
        "TypeScript"
      ],
      "path": "~/projects/agentic-cookbook/cookbook-tests/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "9 changed files",
      "openBranches": [],
      "latestWork": "Add cc-plugin-eval research findings.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "testing"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "untracked",
          "summary": "19B — .claude/worktrees/"
        },
        {
          "path": "fixtures/",
          "change": "untracked",
          "summary": "new directory (2 items)"
        },
        {
          "path": "lib/",
          "change": "untracked",
          "summary": "new directory (3 items)"
        },
        {
          "path": "node_modules/",
          "change": "untracked",
          "summary": "new directory (50 items)"
        },
        {
          "path": "package-lock.json",
          "change": "untracked",
          "summary": "40KB — {"
        },
        {
          "path": "package.json",
          "change": "untracked",
          "summary": "231B — {"
        },
        {
          "path": "specs/",
          "change": "untracked",
          "summary": "new directory (2 items)"
        },
        {
          "path": "tsconfig.json",
          "change": "untracked",
          "summary": "328B — {"
        },
        {
          "path": "vitest.config.ts",
          "change": "untracked",
          "summary": "284B — import { defineConfig } from \"vitest/config\";"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 9,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "2b558dd",
          "message": "Add cc-plugin-eval research findings"
        }
      ]
    },
    {
      "id": "cookbook-web",
      "name": "Cookbook Web",
      "tagline": "Documentation website for the agentic cookbook",
      "status": "active",
      "techStack": [
        "Node.js",
        "TypeScript",
        "Claude Code"
      ],
      "path": "~/projects/agentic-cookbook/cookbook-web/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "200 changed files",
      "openBranches": [
        "feature/add-site-design-rule"
      ],
      "latestWork": "Add Open Graph and Twitter meta tags with branded OG image.Add Agentic Cookbook Family box with links to Dev Team and Agent Registry.Style hero blurb closer in italic serif for emphasis.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "website"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        },
        {
          "path": "cookbook/compliance/INDEX.md",
          "change": "modified",
          "summary": "+3/-1 — changed: version: 1.1.0"
        },
        {
          "path": "cookbook/guidelines/INDEX.md",
          "change": "modified",
          "summary": "+9/-1 — changed: version: 1.1.0"
        },
        {
          "path": "cookbook/guidelines/accessibility/accessibility.md",
          "change": "modified",
          "summary": "+2/-0 — added: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/code-quality/atomic-commits.md",
          "change": "modified",
          "summary": "+4/-2 — changed: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/code-quality/bulk-operation-verification.md",
          "change": "modified",
          "summary": "+5/-3 — changed: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/code-quality/linting.md",
          "change": "modified",
          "summary": "+2/-0 — added: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/code-quality/scope-discipline.md",
          "change": "modified",
          "summary": "+5/-3 — changed: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/concurrency/concurrency.md",
          "change": "modified",
          "summary": "+7/-5 — changed: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/concurrency/immutability.md",
          "change": "modified",
          "summary": "+3/-1 — changed: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/feature-management/ab-testing.md",
          "change": "modified",
          "summary": "+2/-0 — added: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/feature-management/debug-mode.md",
          "change": "modified",
          "summary": "+2/-0 — added: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/feature-management/feature-flags.md",
          "change": "modified",
          "summary": "+2/-0 — added: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/internationalization/localization.md",
          "change": "modified",
          "summary": "+2/-0 — added: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/internationalization/rtl-support.md",
          "change": "modified",
          "summary": "+2/-0 — added: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/language/csharp/dependency-injection.md",
          "change": "modified",
          "summary": "+4/-2 — changed: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/language/csharp/naming.md",
          "change": "modified",
          "summary": "+9/-5 — changed: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/language/csharp/nullable-reference-types.md",
          "change": "modified",
          "summary": "+4/-2 — changed: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/language/kotlin/font-scaling.md",
          "change": "modified",
          "summary": "+2/-0 — added: approved-by: \"approve-artifact v1.0.0\""
        },
        {
          "path": "cookbook/guidelines/language/python/dashboard-service-is-display-only.md",
          "change": "modified",
          "summary": "+3/-1 — changed: approved-by: \"approve-artifact v1.0.0\""
        }
      ],
      "branchDetails": [
        {
          "name": "feature/add-site-design-rule",
          "commits": [
            {
              "hash": "80e92ef",
              "message": "Add site-design rule from agentic-cookbook"
            },
            {
              "hash": "cf9d9c9",
              "message": "chore: add site-design rule from agentic-cookbook"
            }
          ],
          "summary": "2 commits — Add site-design rule from agentic-cookbook",
          "commitCount": 2
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 151,
      "untrackedCount": 22,
      "deletedCount": 27,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "e189b33",
          "message": "Add Open Graph and Twitter meta tags with branded OG image"
        },
        {
          "hash": "6f0455d",
          "message": "Add Agentic Cookbook Family box with links to Dev Team and Agent Registry"
        },
        {
          "hash": "7b69c2c",
          "message": "Style hero blurb closer in italic serif for emphasis"
        },
        {
          "hash": "848aee1",
          "message": "Style nav titles in gold accent, rename to The Agentic Cookbook, add selection bar"
        },
        {
          "hash": "55c4d4d",
          "message": "Fix broken fonts by switching from stale woff2 URLs to Google Fonts link tags"
        }
      ]
    },
    {
      "id": "dev-team",
      "name": "Dev Team",
      "tagline": "Multi-agent dev team for project discovery, generation, building, and review",
      "status": "active",
      "techStack": [
        "Python",
        "Claude Code Plugins",
        "HTML"
      ],
      "path": "~/projects/agentic-cookbook/dev-team/",
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "Add consulting-teams directory with test fixture.Add consulting-team implementation plan.Add consulting-team pipeline feature design spec.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "ai",
        "agents"
      ],
      "modifiedFiles": [],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "17f0669",
          "message": "Add consulting-teams directory with test fixture"
        },
        {
          "hash": "7480ef1",
          "message": "Add consulting-team implementation plan"
        },
        {
          "hash": "0b2fcda",
          "message": "Add consulting-team pipeline feature design spec"
        },
        {
          "hash": "cac5218",
          "message": "Add database specialist design spec"
        },
        {
          "hash": "7ba9bc9",
          "message": "Update terminology and paths across planning docs and agents"
        }
      ]
    },
    {
      "id": "dev-team-tests",
      "name": "Dev Team Tests",
      "tagline": "Test fixtures and output for dev-team agent workflows",
      "status": "active",
      "techStack": [],
      "path": "~/projects/agentic-cookbook/dev-team-tests/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "3 changed files",
      "openBranches": [],
      "latestWork": "Initial test output repo setup.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "testing"
      ],
      "modifiedFiles": [
        {
          "path": "config/test-config.json",
          "change": "modified",
          "summary": "+3/-3 — changed: \"interview_repo\": \"/Users/mfullerton/projects/agentic-cookbo"
        },
        {
          "path": ".gitignore",
          "change": "untracked",
          "summary": "19B — .claude/worktrees/"
        },
        {
          "path": "projects/lumina/",
          "change": "untracked",
          "summary": "new directory (4 items)"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 1,
      "untrackedCount": 2,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "830ef3f",
          "message": "Initial test output repo setup"
        }
      ]
    },
    {
      "id": "myagenticworkspace",
      "name": "My Agentic Workspace",
      "tagline": "Agentic workspace template repository",
      "status": "active",
      "techStack": [],
      "path": "~/projects/agentic-cookbook/myagenticworkspace/",
      "branch": "HEAD\nunknown",
      "uncommitted": true,
      "uncommittedDetail": "1 changed files",
      "openBranches": [],
      "latestWork": "",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "template"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "untracked",
          "summary": "19B — .claude/worktrees/"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 1,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": []
    },
    {
      "id": "official-agent-registry",
      "name": "Official Agent Registry",
      "tagline": "Server and client for agent registry with database and API",
      "status": "active",
      "techStack": [
        "Node.js",
        "Claude Code"
      ],
      "path": "~/projects/agentic-cookbook/official-agent-registry/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "1 changed files",
      "openBranches": [],
      "latestWork": "docs: add generalized AI persona research and template.Add favicon and apple-touch-icon for browser tabs and iMessage previews.Add OG meta tags and preview image for link sharing in Messages.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "infrastructure"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 1,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "675811e",
          "message": "docs: add generalized AI persona research and template"
        },
        {
          "hash": "29ec497",
          "message": "Add favicon and apple-touch-icon for browser tabs and iMessage previews"
        },
        {
          "hash": "214dca0",
          "message": "Add OG meta tags and preview image for link sharing in Messages"
        },
        {
          "hash": "8983860",
          "message": "Fix Cookbook link to agentic-cookbook.com"
        },
        {
          "hash": "6bda360",
          "message": "Fix Dev Team link to devteam.agenticcookbook.com"
        }
      ]
    },
    {
      "id": "roadmaps",
      "name": "Roadmaps",
      "tagline": "Structured planning system for feature development with agent support",
      "status": "active",
      "techStack": [
        "Claude Code Plugins",
        "Markdown"
      ],
      "path": "~/projects/agentic-cookbook/roadmaps/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "5 changed files",
      "openBranches": [],
      "latestWork": "chore: install agentic cookbook (rule, manifest, preferences).Merge pull request #51 from mikefullerton/feature/progress-format.feat(implement-roadmap): standardize progress output format.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "planning"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-1 — changed: .claude/worktrees/"
        },
        {
          "path": "CLAUDE.md",
          "change": "modified",
          "summary": "+1/-1 — changed: This project uses the [agentic-cookbook](https://github.com/"
        },
        {
          "path": "README.md",
          "change": "modified",
          "summary": "+1/-1 — changed: Coding guidelines have moved to the [agentic-cookbook](https"
        },
        {
          "path": "docs/index.html",
          "change": "modified",
          "summary": "+1/-1 — changed: <p>Every review agent receives the relevant <a href=\"https:/"
        },
        {
          "path": "\"misc test files?/\"",
          "change": "untracked",
          "summary": "new file"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 4,
      "untrackedCount": 1,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "4e19c1e",
          "message": "chore: install agentic cookbook (rule, manifest, preferences)"
        },
        {
          "hash": "946ae74",
          "message": "Merge pull request #51 from mikefullerton/feature/progress-format"
        },
        {
          "hash": "c712498",
          "message": "feat(implement-roadmap): standardize progress output format"
        },
        {
          "hash": "44273a5",
          "message": "chore: init progress format branch"
        },
        {
          "hash": "dc658d7",
          "message": "Merge pull request #50 from mikefullerton/feature/conformance-vectors"
        }
      ]
    },
    {
      "id": "roadmaps-tests",
      "name": "Roadmaps Tests",
      "tagline": "Test output repository for roadmap system workflows",
      "status": "active",
      "techStack": [
        "Claude Code"
      ],
      "path": "~/projects/agentic-cookbook/roadmaps-tests/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "1 changed files",
      "openBranches": [
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-002a7c5b",
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-02817111",
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-05ecac52",
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-158cb3df",
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-21fef51b",
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-2e33aec5",
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-3b5fb56d",
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-4a3d41a9",
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-51045263",
        "feature/AllAuto3Step-test_all_auto_steps_single_pr-67bc9d38"
      ],
      "latestWork": "test: add SingleStep roadmap fixture.test: add AllAuto3Step roadmap fixture.test: add WithDependencies roadmap fixture.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "testing"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "untracked",
          "summary": "19B — .claude/worktrees/"
        }
      ],
      "branchDetails": [
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-002a7c5b",
          "commits": [
            {
              "hash": "fd18b90",
              "message": "feat: complete step 3"
            },
            {
              "hash": "291c218",
              "message": "feat: complete step 2"
            },
            {
              "hash": "a53e897",
              "message": "feat: complete step 1"
            },
            {
              "hash": "cc2a7fd",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "7410a12",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        },
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-02817111",
          "commits": [
            {
              "hash": "94f364d",
              "message": "feat: complete step 3"
            },
            {
              "hash": "86463af",
              "message": "feat: complete step 2"
            },
            {
              "hash": "9c294e7",
              "message": "feat: complete step 1"
            },
            {
              "hash": "0457626",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "aba754c",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        },
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-05ecac52",
          "commits": [
            {
              "hash": "c868c49",
              "message": "feat: complete step 3"
            },
            {
              "hash": "c96817f",
              "message": "feat: complete step 2"
            },
            {
              "hash": "e5fb866",
              "message": "feat: complete step 1"
            },
            {
              "hash": "29e1fee",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "0602056",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        },
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-158cb3df",
          "commits": [
            {
              "hash": "0501977",
              "message": "feat: complete step 3"
            },
            {
              "hash": "214c471",
              "message": "feat: complete step 2"
            },
            {
              "hash": "8b4405f",
              "message": "feat: complete step 1"
            },
            {
              "hash": "24cb64a",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "3caa019",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        },
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-21fef51b",
          "commits": [
            {
              "hash": "af08579",
              "message": "feat: complete step 3"
            },
            {
              "hash": "d97f3bf",
              "message": "feat: complete step 2"
            },
            {
              "hash": "82ca64c",
              "message": "feat: complete step 1"
            },
            {
              "hash": "f7c2e5b",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "c93e0c7",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        },
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-2e33aec5",
          "commits": [
            {
              "hash": "24825bc",
              "message": "feat: complete step 3"
            },
            {
              "hash": "c58feb4",
              "message": "feat: complete step 2"
            },
            {
              "hash": "82906ca",
              "message": "feat: complete step 1"
            },
            {
              "hash": "f4690d4",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "4f90841",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        },
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-3b5fb56d",
          "commits": [
            {
              "hash": "a5fa500",
              "message": "feat: complete step 3"
            },
            {
              "hash": "54f2fed",
              "message": "feat: complete step 2"
            },
            {
              "hash": "cd2747f",
              "message": "feat: complete step 1"
            },
            {
              "hash": "eff782d",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "deb5887",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        },
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-4a3d41a9",
          "commits": [
            {
              "hash": "180fc0e",
              "message": "feat: complete step 3"
            },
            {
              "hash": "7e7c341",
              "message": "feat: complete step 2"
            },
            {
              "hash": "d2ce950",
              "message": "feat: complete step 1"
            },
            {
              "hash": "f3f5350",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "fb0dc5b",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        },
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-51045263",
          "commits": [
            {
              "hash": "bec5b30",
              "message": "feat: complete step 3"
            },
            {
              "hash": "2d5a25c",
              "message": "feat: complete step 2"
            },
            {
              "hash": "5a85168",
              "message": "feat: complete step 1"
            },
            {
              "hash": "bda91c8",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "e88f9f7",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        },
        {
          "name": "feature/AllAuto3Step-test_all_auto_steps_single_pr-67bc9d38",
          "commits": [
            {
              "hash": "e88e340",
              "message": "feat: complete step 3"
            },
            {
              "hash": "56c3c9d",
              "message": "feat: complete step 2"
            },
            {
              "hash": "ca49169",
              "message": "feat: complete step 1"
            },
            {
              "hash": "7c36f9a",
              "message": "test: add AllAuto3Step roadmap fixture"
            },
            {
              "hash": "5aff77b",
              "message": "Initial empty commit for test"
            }
          ],
          "summary": "5 commits — feat: complete step 3",
          "commitCount": 5
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 1,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "a2ad31a",
          "message": "test: add SingleStep roadmap fixture"
        },
        {
          "hash": "237d06e",
          "message": "test: add AllAuto3Step roadmap fixture"
        },
        {
          "hash": "e6622ba",
          "message": "test: add WithDependencies roadmap fixture"
        },
        {
          "hash": "c4253da",
          "message": "test: add AllAuto3Step roadmap fixture"
        },
        {
          "hash": "5c97b8d",
          "message": "test: add PartialComplete roadmap fixture"
        }
      ]
    },
    {
      "id": "agentic-tools",
      "name": "Agentic Tools",
      "tagline": "User-facing tools for interacting with the agentic cookbook system",
      "status": "active",
      "techStack": [
        "Claude Code",
        "Shell"
      ],
      "path": "~/projects/agentic-cookbook/tools/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "6 changed files",
      "openBranches": [],
      "latestWork": "Add cookbook-statusline.sh script from dev-team repo.Initial commit: tools repo with rules, skills, and project setup.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "tools"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        },
        {
          "path": "skills/lint-agent/",
          "change": "untracked",
          "summary": "new directory (2 items)"
        },
        {
          "path": "skills/lint-compliance/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "skills/lint-project-with-cookbook/",
          "change": "untracked",
          "summary": "new directory (2 items)"
        },
        {
          "path": "skills/lint-recipe/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "skills/lint-skill/",
          "change": "untracked",
          "summary": "new directory (2 items)"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 1,
      "untrackedCount": 5,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "102490f",
          "message": "Add cookbook-statusline.sh script from dev-team repo"
        },
        {
          "hash": "6288621",
          "message": "Initial commit: tools repo with rules, skills, and project setup"
        }
      ]
    },
    {
      "id": "catnip",
      "name": "Catnip",
      "tagline": "iOS app with Claude backend integration and user profiles",
      "status": "active",
      "techStack": [
        "Swift",
        "Claude Code"
      ],
      "path": "~/projects/apps/catnip/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "1 changed files",
      "openBranches": [
        "feature/catnipwebservice-step-4",
        "feature/catnipwebservice-step-5",
        "feature/catnipwebservice-step-7",
        "feature/deployment-step-12",
        "feature/frontend-dashboard-step-10",
        "feature/roadmaps-api",
        "feature/websocket-integration-step-11",
        "feature/websocket-step-8"
      ],
      "latestWork": "chore: rename cat-herding → agentic-roadmaps in roadmap and demo script.refactor: rename runs to roadmaps across frontend, backend, and CLI.refactor: migrate 1 roadmaps to flat file format.",
      "runCmd": "",
      "tags": [
        "apps",
        "ios",
        "ai"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        }
      ],
      "branchDetails": [
        {
          "name": "feature/catnipwebservice-step-4",
          "commits": [
            {
              "hash": "83cebac",
              "message": "feat: backend project scaffolding with Hono, Drizzle schema, and health endpoint (#4)"
            }
          ],
          "summary": "feat: backend project scaffolding with Hono, Drizzle schema, and health endpoint (#4)",
          "commitCount": 1
        },
        {
          "name": "feature/catnipwebservice-step-5",
          "commits": [
            {
              "hash": "0ec917c",
              "message": "feat: add GitHub OAuth and JWT authentication (#5)"
            }
          ],
          "summary": "feat: add GitHub OAuth and JWT authentication (#5)",
          "commitCount": 1
        },
        {
          "name": "feature/catnipwebservice-step-7",
          "commits": [],
          "summary": "no unique commits",
          "commitCount": 0
        },
        {
          "name": "feature/deployment-step-12",
          "commits": [
            {
              "hash": "c3a4dfa",
              "message": "fix: remove unnecessary drizzle.config.ts from production Docker image (#12)"
            },
            {
              "hash": "8739ecd",
              "message": "feat: add deployment configuration for Railway and Cloudflare Pages (#12)"
            }
          ],
          "summary": "2 commits — fix: remove unnecessary drizzle.config.ts from production Docker image (#12)",
          "commitCount": 2
        },
        {
          "name": "feature/frontend-dashboard-step-10",
          "commits": [
            {
              "hash": "4fae474",
              "message": "refactor: remove unused DashboardPage placeholder (#10)"
            },
            {
              "hash": "f7a3404",
              "message": "feat: add run list and run detail dashboard (#10)"
            }
          ],
          "summary": "2 commits — refactor: remove unused DashboardPage placeholder (#10)",
          "commitCount": 2
        },
        {
          "name": "feature/roadmaps-api",
          "commits": [
            {
              "hash": "1e9ee00",
              "message": "feat: evolve API from runs to roadmaps with full workflow support"
            }
          ],
          "summary": "feat: evolve API from runs to roadmaps with full workflow support",
          "commitCount": 1
        },
        {
          "name": "feature/websocket-integration-step-11",
          "commits": [
            {
              "hash": "246b3e3",
              "message": "feat: add frontend WebSocket integration for real-time updates (#11)"
            }
          ],
          "summary": "feat: add frontend WebSocket integration for real-time updates (#11)",
          "commitCount": 1
        },
        {
          "name": "feature/websocket-step-8",
          "commits": [
            {
              "hash": "31ad23b",
              "message": "feat: add WebSocket real-time broadcast (#8)"
            }
          ],
          "summary": "feat: add WebSocket real-time broadcast (#8)",
          "commitCount": 1
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 1,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "3894133",
          "message": "chore: rename cat-herding → agentic-roadmaps in roadmap and demo script"
        },
        {
          "hash": "ccea5a3",
          "message": "refactor: rename runs to roadmaps across frontend, backend, and CLI"
        },
        {
          "hash": "d6daec6",
          "message": "refactor: migrate 1 roadmaps to flat file format"
        },
        {
          "hash": "5cb0120",
          "message": "refactor: migrate roadmaps to per-directory File Record structure"
        },
        {
          "hash": "0ebecbf",
          "message": "docs: add author and GUID metadata to all roadmap files"
        }
      ]
    },
    {
      "id": "catnip-terminal",
      "name": "Catnip Terminal",
      "tagline": "Terminal-based interface companion to the Catnip iOS app",
      "status": "active",
      "techStack": [
        "Swift",
        "macOS",
        "Xcode"
      ],
      "path": "~/projects/apps/catnip-terminal/",
      "branch": "feature/ai-session-summarization",
      "uncommitted": true,
      "uncommittedDetail": "2 changed files",
      "openBranches": [
        "main",
        "worktree-appkit-conversion"
      ],
      "latestWork": "feat: AI-powered session summarization with multi-provider support.fix: remove sidebar toggle button from settings window.refactor: switch settings to sidebar layout per litterbox spec.",
      "runCmd": "",
      "tags": [
        "apps",
        "terminal",
        "macos"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        },
        {
          "path": "CLAUDE.md",
          "change": "untracked",
          "summary": "19B — catnip-terminal"
        }
      ],
      "branchDetails": [
        {
          "name": "main",
          "commits": [],
          "summary": "no unique commits",
          "commitCount": 0
        },
        {
          "name": "worktree-appkit-conversion",
          "commits": [
            {
              "hash": "44aca92",
              "message": "fix: show ~ instead of username when session CWD is home directory"
            },
            {
              "hash": "4b54221",
              "message": "fix: show CWD folder name and git branch as session title"
            },
            {
              "hash": "c65bf50",
              "message": "feat: add Quick Chat to AI settings panel"
            },
            {
              "hash": "377fca2",
              "message": "fix: parity fixes from deep comparison with original SwiftUI branch"
            },
            {
              "hash": "6953a25",
              "message": "fix: switch settings window from toolbar tabs to sidebar layout"
            },
            {
              "hash": "0841022",
              "message": "feat: add AI-powered session summarization with AppKit settings"
            },
            {
              "hash": "a85aecc",
              "message": "refactor: convert entire app from SwiftUI to native AppKit"
            }
          ],
          "summary": "7 commits — fix: show ~ instead of username when session CWD is home directory",
          "commitCount": 7
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 1,
      "untrackedCount": 1,
      "deletedCount": 0,
      "aheadCount": 1,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "a634235",
          "message": "feat: AI-powered session summarization with multi-provider support"
        },
        {
          "hash": "35505c0",
          "message": "fix: remove sidebar toggle button from settings window"
        },
        {
          "hash": "714ce30",
          "message": "refactor: switch settings to sidebar layout per litterbox spec"
        },
        {
          "hash": "5de22f2",
          "message": "fix: apply litterbox specs for window frame persistence and titles"
        },
        {
          "hash": "26a612e",
          "message": "feat: initial Catnip Terminal project"
        }
      ]
    },
    {
      "id": "hairball",
      "name": "Hairball",
      "tagline": "Native macOS menu bar app for window-level task context management",
      "status": "active",
      "techStack": [
        "Swift",
        "macOS",
        "AppKit",
        "Xcode"
      ],
      "path": "~/projects/apps/Hairball/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "14 changed files",
      "openBranches": [
        "feature/HairballV1"
      ],
      "latestWork": "Update CLAUDE.md: litterbox → agentic-cookbook.feat: add Help window, Discovery window, oslog logging, rename contexts to Hairballs.refactor: migrate 1 roadmaps to flat file format.",
      "runCmd": "",
      "tags": [
        "apps",
        "macos"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        },
        {
          "path": "Info.plist",
          "change": "modified",
          "summary": "+16/-12 — changed: <key>CFBundleDevelopmentRegion</key>"
        },
        {
          "path": "Sources/Hairball/App/AppDelegate.swift",
          "change": "modified",
          "summary": "+5/-15 — changed: Log.app.debug(\"AXIsProcessTrusted: \\(AXIsProcessTrusted())\")"
        },
        {
          "path": "Sources/Hairball/App/AppState.swift",
          "change": "modified",
          "summary": "+53/-0 — added: /// Adds an app name to the hidden apps filter list."
        },
        {
          "path": "Sources/Hairball/App/DiscoveryView.swift",
          "change": "modified",
          "summary": "+7/-327 — changed: ///"
        },
        {
          "path": "Sources/Hairball/App/HairballApp.swift",
          "change": "modified",
          "summary": "+8/-0 — added: // Work Groups window"
        },
        {
          "path": "Sources/Hairball/App/HelpView.swift",
          "change": "modified",
          "summary": "+15/-1 — changed: workGroupsSection"
        },
        {
          "path": "Sources/Hairball/App/MenuBarView.swift",
          "change": "modified",
          "summary": "+14/-155 — changed: /// - Discover Windows"
        },
        {
          "path": "Sources/Hairball/App/SettingsView.swift",
          "change": "modified",
          "summary": "+66/-3 — changed: .frame(minWidth: 480, idealWidth: 580, minHeight: 400, ideal"
        },
        {
          "path": "Sources/Hairball/Models/GlobalState.swift",
          "change": "modified",
          "summary": "+7/-1 — changed: /// App names to hide from the Discovery window list."
        },
        {
          "path": "Hairball.xcodeproj/",
          "change": "untracked",
          "summary": "new directory (4 items)"
        },
        {
          "path": "Sources/Hairball/App/WindowExplorerView.swift",
          "change": "untracked",
          "summary": "13KB — import AppKit"
        },
        {
          "path": "Sources/Hairball/App/WorkGroupsView.swift",
          "change": "untracked",
          "summary": "12KB — import AppKit"
        },
        {
          "path": "project.yml",
          "change": "untracked",
          "summary": "775B — name: Hairball"
        }
      ],
      "branchDetails": [
        {
          "name": "feature/HairballV1",
          "commits": [],
          "summary": "no unique commits",
          "commitCount": 0
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 10,
      "untrackedCount": 4,
      "deletedCount": 0,
      "aheadCount": 1,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "b8857de",
          "message": "Update CLAUDE.md: litterbox → agentic-cookbook"
        },
        {
          "hash": "0f564bd",
          "message": "feat: add Help window, Discovery window, oslog logging, rename contexts to Hairballs"
        },
        {
          "hash": "5ef2245",
          "message": "refactor: migrate 1 roadmaps to flat file format"
        },
        {
          "hash": "fc0de7b",
          "message": "Merge pull request #16 from mikefullerton/feature/HairballV1"
        },
        {
          "hash": "4bb94e8",
          "message": "docs: complete feature HairballV1 — all steps done"
        }
      ]
    },
    {
      "id": "scratching-post",
      "name": "Scratching Post",
      "tagline": "macOS IDE enhancement with file browser improvements and window management",
      "status": "active",
      "techStack": [
        "Swift",
        "macOS",
        "Xcode"
      ],
      "path": "~/projects/apps/scratching-post/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "2 changed files",
      "openBranches": [],
      "latestWork": "Update CLAUDE.md: litterbox → agentic-cookbook.fix: only update session summary on topic change, not every input.feat: AI-powered session summarization with multi-provider support.",
      "runCmd": "",
      "tags": [
        "apps",
        "macos",
        "ide"
      ],
      "modifiedFiles": [
        {
          "path": ".claude/worktrees/settings-window-step-1",
          "change": "deleted",
          "summary": "file removed"
        },
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        }
      ],
      "branchDetails": [],
      "stagedCount": 1,
      "modifiedCount": 1,
      "untrackedCount": 0,
      "deletedCount": 1,
      "aheadCount": 1,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "d48543a",
          "message": "Update CLAUDE.md: litterbox → agentic-cookbook"
        },
        {
          "hash": "07237d3",
          "message": "fix: only update session summary on topic change, not every input"
        },
        {
          "hash": "431572a",
          "message": "feat: AI-powered session summarization with multi-provider support"
        },
        {
          "hash": "df6ad28",
          "message": "feat: dynamic pane layout with arrangement picker"
        },
        {
          "hash": "1243837",
          "message": "feat: show IDE projects as sub-items in session list panel"
        }
      ]
    },
    {
      "id": "temporal",
      "name": "Temporal",
      "tagline": "Spec-driven cross-platform framework using Kotlin Multiplatform",
      "status": "active",
      "techStack": [
        "Kotlin Multiplatform",
        "Claude Code"
      ],
      "path": "~/projects/apps/temporal/",
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [
        "feature/repo-reorg"
      ],
      "latestWork": "docs: consolidate persona files and enrich naming research.fix: web smoke test CORS error and Apple CI build failure (#587).fix: make seed discussion categories public (#584) (#586).",
      "runCmd": "",
      "tags": [
        "apps",
        "cross-platform"
      ],
      "modifiedFiles": [],
      "branchDetails": [
        {
          "name": "feature/repo-reorg",
          "commits": [
            {
              "hash": "f051ee7",
              "message": "fix: extend platform availability guards to tvOS"
            },
            {
              "hash": "b8a641c",
              "message": "ci: pin Apple CI to Xcode 26.3 (closest to local 26.4)"
            },
            {
              "hash": "feb604e",
              "message": "fix: add watchOS compatibility guards for unavailable SwiftUI APIs"
            },
            {
              "hash": "c04e3ac",
              "message": "fix: simplify KMP build script — always skip Android, preserve JAVA_HOME"
            },
            {
              "hash": "ace97cc",
              "message": "fix: skip KMP build script in CI where framework is pre-built"
            },
            {
              "hash": "3ff49c2",
              "message": "fix: resolve web smoke test CORS error and Apple CI build failure"
            },
            {
              "hash": "d3dbced",
              "message": "fix: make seed discussion categories public (#584)"
            }
          ],
          "summary": "7 commits — fix: extend platform availability guards to tvOS",
          "commitCount": 7
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "392ea17",
          "message": "docs: consolidate persona files and enrich naming research"
        },
        {
          "hash": "a6a05ab",
          "message": "fix: web smoke test CORS error and Apple CI build failure (#587)"
        },
        {
          "hash": "d093e24",
          "message": "fix: make seed discussion categories public (#584) (#586)"
        },
        {
          "hash": "225d641",
          "message": "refactor: reorganize repo structure by purpose (#584)"
        },
        {
          "hash": "2e806eb",
          "message": "refine documents layout"
        }
      ]
    },
    {
      "id": "temporal-platform",
      "name": "Temporal Platform",
      "tagline": "Specification repository for offline-first sync platform across Swift, Kotlin, and TypeScript",
      "status": "active",
      "techStack": [
        "Markdown",
        "Claude Code"
      ],
      "path": "~/projects/apps/temporal-platform/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "1 changed files",
      "openBranches": [],
      "latestWork": "chore: rename cat-herding → agentic-roadmaps in shared project reference.Update CLAUDE.md: litterbox → agentic-cookbook.fix: remove Swift .build artifacts and fix .gitignore.",
      "runCmd": "",
      "tags": [
        "apps",
        "specs",
        "cross-platform"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 1,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "cf2749c",
          "message": "chore: rename cat-herding → agentic-roadmaps in shared project reference"
        },
        {
          "hash": "83c4a21",
          "message": "Update CLAUDE.md: litterbox → agentic-cookbook"
        },
        {
          "hash": "a3e849b",
          "message": "fix: remove Swift .build artifacts and fix .gitignore"
        },
        {
          "hash": "6cf7187",
          "message": "feat: add full-stack verification playbook"
        },
        {
          "hash": "02456c0",
          "message": "feat: add playbook template format"
        }
      ]
    },
    {
      "id": "whippet",
      "name": "Whippet",
      "tagline": "macOS menu bar app monitoring Claude Code sessions in real time",
      "status": "active",
      "techStack": [
        "Swift",
        "macOS",
        "AppKit",
        "SQLite",
        "Claude Code"
      ],
      "path": "~/projects/apps/Whippet/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "6 changed files",
      "openBranches": [],
      "latestWork": "Update CLAUDE.md: litterbox → agentic-cookbook.feat: AI session summarization, frontmost window tracking, minimal UI.fix: snapshot app metadata on main thread, enumerate windows on background.",
      "runCmd": "",
      "tags": [
        "apps",
        "macos",
        "ai"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        },
        {
          "path": "CLAUDE.md",
          "change": "modified",
          "summary": "+1/-1 — changed: - Always use PRs and git worktrees; never commit directly to"
        },
        {
          "path": "Roadmaps/repair.log",
          "change": "untracked",
          "summary": "183B — [2026-03-26 08:00:47] repair-roadmap v1 started"
        },
        {
          "path": "Scripts/",
          "change": "untracked",
          "summary": "new directory (2 items)"
        },
        {
          "path": "Whippet-build/",
          "change": "untracked",
          "summary": "new directory (4 items)"
        },
        {
          "path": "Whippet-cookbook/",
          "change": "untracked",
          "summary": "new directory (5 items)"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 2,
      "untrackedCount": 4,
      "deletedCount": 0,
      "aheadCount": 1,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "eb5f062",
          "message": "Update CLAUDE.md: litterbox → agentic-cookbook"
        },
        {
          "hash": "caa388c",
          "message": "feat: AI session summarization, frontmost window tracking, minimal UI"
        },
        {
          "hash": "15a6a1b",
          "message": "fix: snapshot app metadata on main thread, enumerate windows on background"
        },
        {
          "hash": "1624c2d",
          "message": "docs: update CLAUDE.md with litterbox component spec instructions"
        },
        {
          "hash": "e3926b8",
          "message": "refactor: migrate 1 roadmaps to flat file format"
        }
      ]
    },
    {
      "id": "qualitytime",
      "name": "QualityTime",
      "tagline": "Time tracking and project management application",
      "status": "paused",
      "techStack": [
        "Kotlin",
        "Claude Code"
      ],
      "path": "~/projects/paused-projects/QualityTime/",
      "branch": "feature/agent-wrappers",
      "uncommitted": true,
      "uncommittedDetail": "1 changed files",
      "openBranches": [
        "feature/anthropic-review",
        "feature/thorin-code-review",
        "fix/on-demand-reviews",
        "main"
      ],
      "latestWork": "Update CLAUDE.md: litterbox → agentic-cookbook.docs: update CLAUDE.md.Merge remote-tracking branch 'origin/main' into feature/agent-wrappers.",
      "runCmd": "",
      "tags": [
        "paused",
        "productivity"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        }
      ],
      "branchDetails": [
        {
          "name": "feature/anthropic-review",
          "commits": [
            {
              "hash": "1267bd2",
              "message": "feat: add Anthropic code reviewer workflow"
            },
            {
              "hash": "e82a559",
              "message": "feat: switch code review to claude-code-action via thorin-code-review (#10)"
            },
            {
              "hash": "7cc8a18",
              "message": "feat: switch workflows to agent wrappers (#3)"
            }
          ],
          "summary": "3 commits — feat: add Anthropic code reviewer workflow",
          "commitCount": 3
        },
        {
          "name": "feature/thorin-code-review",
          "commits": [
            {
              "hash": "2417a89",
              "message": "feat: switch code review to claude-code-action via thorin-code-review"
            },
            {
              "hash": "7cc8a18",
              "message": "feat: switch workflows to agent wrappers (#3)"
            }
          ],
          "summary": "2 commits — feat: switch code review to claude-code-action via thorin-code-review",
          "commitCount": 2
        },
        {
          "name": "fix/on-demand-reviews",
          "commits": [
            {
              "hash": "c7fe9ca",
              "message": "fix: make code reviews on-demand only, not automatic on PR open"
            },
            {
              "hash": "651da63",
              "message": "feat: add Anthropic code reviewer workflow (#11)"
            },
            {
              "hash": "e82a559",
              "message": "feat: switch code review to claude-code-action via thorin-code-review (#10)"
            },
            {
              "hash": "7cc8a18",
              "message": "feat: switch workflows to agent wrappers (#3)"
            }
          ],
          "summary": "4 commits — fix: make code reviews on-demand only, not automatic on PR open",
          "commitCount": 4
        },
        {
          "name": "main",
          "commits": [],
          "summary": "no unique commits",
          "commitCount": 0
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 1,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 6,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "69c08b8",
          "message": "Update CLAUDE.md: litterbox → agentic-cookbook"
        },
        {
          "hash": "a16c6ac",
          "message": "docs: update CLAUDE.md"
        },
        {
          "hash": "d342ddc",
          "message": "Merge remote-tracking branch 'origin/main' into feature/agent-wrappers"
        },
        {
          "hash": "7cc8a18",
          "message": "feat: switch workflows to agent wrappers (#3)"
        },
        {
          "hash": "aeac8d8",
          "message": "chore: switch wrapper references to @main"
        }
      ]
    },
    {
      "id": "search-helper",
      "name": "Search Helper",
      "tagline": "macOS utility for enhanced search and file navigation",
      "status": "paused",
      "techStack": [
        "Swift",
        "macOS"
      ],
      "path": "~/projects/paused-projects/search-helper/",
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "1 changed files",
      "openBranches": [],
      "latestWork": "Add architecture and design decision docs.Add SwiftUI SearchTermsApp target (#1).Add Finder Sync Extension with host app.",
      "runCmd": "",
      "tags": [
        "paused",
        "macos"
      ],
      "modifiedFiles": [
        {
          "path": ".gitignore",
          "change": "modified",
          "summary": "+1/-0 — added: .claude/worktrees/"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 1,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "21eccb2",
          "message": "Add architecture and design decision docs"
        },
        {
          "hash": "c723290",
          "message": "Add SwiftUI SearchTermsApp target (#1)"
        },
        {
          "hash": "68e098f",
          "message": "Add Finder Sync Extension with host app"
        },
        {
          "hash": "48035cb",
          "message": "Initial commit with .gitignore"
        }
      ]
    }
  ],
  "todos": [
    {
      "id": "todo-1",
      "projectId": "my-agentic-interviews",
      "title": "Commit or revert 21 deleted Whippet cookbook files",
      "priority": "high",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "todo-2",
      "projectId": "mysetup",
      "title": "Commit 6 modified files on main",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "todo-3",
      "projectId": "mysetup",
      "title": "Complete remove-deprecated branch and merge",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "todo-4",
      "projectId": "cat-herding",
      "title": "Commit Site Manager template refactoring",
      "priority": "high",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "todo-5",
      "projectId": "cat-herding",
      "title": "Ship Site Manager v1.1 (messaging)",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "todo-6",
      "projectId": "social-media-bot",
      "title": "Define brand voice guide (config/voice.md)",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "todo-7",
      "projectId": "social-media-bot",
      "title": "Connect live web search provider (replace stub)",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "todo-8",
      "projectId": "my-projects",
      "title": "Initial git commit for my-projects repo",
      "priority": "high",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "todo-9",
      "projectId": "scratchyfish",
      "title": "Commit .gitignore change",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-cat-herding-uncommitted",
      "projectId": "cat-herding",
      "title": "Commit 45 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-cat-herding-branches",
      "projectId": "cat-herding",
      "title": "Review/merge 1 open branch",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-catnip-uncommitted",
      "projectId": "catnip",
      "title": "Commit 1 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-catnip-branches",
      "projectId": "catnip",
      "title": "Review/merge 8 open branches",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-catnip-terminal-uncommitted",
      "projectId": "catnip-terminal",
      "title": "Commit 2 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-catnip-terminal-branches",
      "projectId": "catnip-terminal",
      "title": "Review/merge 2 open branches",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-code-review-pipeline-uncommitted",
      "projectId": "code-review-pipeline",
      "title": "Commit 6 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-cookbook-web-uncommitted",
      "projectId": "cookbook-web",
      "title": "Commit 200 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-cookbook-web-branches",
      "projectId": "cookbook-web",
      "title": "Review/merge 1 open branch",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-hairball-uncommitted",
      "projectId": "hairball",
      "title": "Commit 14 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-hairball-branches",
      "projectId": "hairball",
      "title": "Review/merge 1 open branch",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-my-projects-uncommitted",
      "projectId": "my-projects",
      "title": "Commit 4 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-myagenticworkspace-uncommitted",
      "projectId": "myagenticworkspace",
      "title": "Commit 1 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-mysetup-uncommitted",
      "projectId": "mysetup",
      "title": "Commit 7 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-mysetup-branches",
      "projectId": "mysetup",
      "title": "Review/merge 2 open branches",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-official-agent-registry-uncommitted",
      "projectId": "official-agent-registry",
      "title": "Commit 1 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-roadmaps-uncommitted",
      "projectId": "roadmaps",
      "title": "Commit 5 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-scratching-post-uncommitted",
      "projectId": "scratching-post",
      "title": "Commit 2 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-social-media-bot-uncommitted",
      "projectId": "social-media-bot",
      "title": "Commit 12 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-temporal-branches",
      "projectId": "temporal",
      "title": "Review/merge 1 open branch",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-temporal-platform-uncommitted",
      "projectId": "temporal-platform",
      "title": "Commit 1 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-agentic-tools-uncommitted",
      "projectId": "agentic-tools",
      "title": "Commit 6 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-whippet-uncommitted",
      "projectId": "whippet",
      "title": "Commit 6 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-qualitytime-uncommitted",
      "projectId": "qualitytime",
      "title": "Commit 1 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-qualitytime-branches",
      "projectId": "qualitytime",
      "title": "Review/merge 4 open branches",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-search-helper-uncommitted",
      "projectId": "search-helper",
      "title": "Commit 1 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-my-agentic-interviews-uncommitted",
      "projectId": "my-agentic-interviews",
      "title": "Commit 24 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-code-review-pipeline-test-uncommitted",
      "projectId": "code-review-pipeline-test",
      "title": "Commit 2 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-code-review-pipeline-test-branches",
      "projectId": "code-review-pipeline-test",
      "title": "Review/merge 8 open branches",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-cookbook-tests-uncommitted",
      "projectId": "cookbook-tests",
      "title": "Commit 9 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-roadmaps-tests-uncommitted",
      "projectId": "roadmaps-tests",
      "title": "Commit 1 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-roadmaps-tests-branches",
      "projectId": "roadmaps-tests",
      "title": "Review/merge 10 open branches",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    }
  ],
  "issues": [
    {
      "id": "issue-1",
      "projectId": "my-agentic-interviews",
      "title": "Uncommitted deletions violate always-commit-and-push rule",
      "severity": "medium",
      "status": "open",
      "detail": "21 Whippet cookbook files deleted locally but not committed. This breaks the project's own workflow rule."
    },
    {
      "id": "issue-2",
      "projectId": "mysetup",
      "title": "git_commands.py contains hack that needs removal",
      "severity": "low",
      "status": "open",
      "detail": "TODO at line 8 — hack related to origin/foo branch removal."
    }
  ],
  "concerns": [
    {
      "id": "concern-1",
      "projectId": "cat-herding",
      "title": "Site Manager template complexity growing",
      "status": "monitoring",
      "raiser": "Mike",
      "detail": "139 template files across 3 sites. Active refactoring may introduce breakage."
    },
    {
      "id": "concern-2",
      "projectId": "social-media-bot",
      "title": "No live search provider connected",
      "status": "monitoring",
      "raiser": "Mike",
      "detail": "Online researcher bot uses a stub search provider. Limits research quality."
    },
    {
      "id": "concern-3",
      "projectId": "my-projects",
      "title": "Unified data architecture not yet started",
      "status": "open",
      "raiser": "Mike",
      "detail": "Spec exists for consolidating 3 SQLite DBs into shared backend, but implementation hasn't begun."
    }
  ],
  "decisions": [
    {
      "id": "dec-1",
      "projectId": "social-media-bot",
      "title": "All drafts require human approval before posting",
      "rationale": "Brand safety and editorial control. No autonomous publishing.",
      "decidedBy": "Mike"
    },
    {
      "id": "dec-2",
      "projectId": "social-media-bot",
      "title": "Store data in iCloud Documents folder",
      "rationale": "Cross-device accessibility. Override with SMBOT_DATA_DIR env var.",
      "decidedBy": "Mike"
    },
    {
      "id": "dec-3",
      "projectId": "cat-herding",
      "title": "Local marketplace distribution model",
      "rationale": "Plugins stay self-contained and independently installable. No central registry needed.",
      "decidedBy": "Mike"
    },
    {
      "id": "dec-4",
      "projectId": "mysetup",
      "title": "Declarative setup.md manifest over imperative scripts",
      "rationale": "Single source of truth for machine state. Claude Code /setup skill interprets it.",
      "decidedBy": "Mike"
    },
    {
      "id": "dec-5",
      "projectId": "my-projects",
      "title": "localStorage adapter first, SQLite/API later",
      "rationale": "Get organized now. Swap adapter when web service is ready. Interface stays the same.",
      "decidedBy": "Mike"
    }
  ],
  "dependencies": [
    {
      "id": "dep-1",
      "projectId": "social-media-bot-tests",
      "title": "Depends on social-media-bot Python venv",
      "type": "internal",
      "status": "healthy",
      "detail": "Tests execute Python bot via subprocess. Requires venv at social-media-bot/.venv/"
    },
    {
      "id": "dep-2",
      "projectId": "my-projects",
      "title": "Unified data spec depends on all 3 agentic projects",
      "type": "internal",
      "status": "pending",
      "detail": "Roadmaps, Dev-Team, and Social Media Bot must stabilize before unification begins."
    },
    {
      "id": "dep-3",
      "projectId": "cat-herding",
      "title": "webinitor depends on external CLIs",
      "type": "external",
      "status": "healthy",
      "detail": "Requires wrangler, railway, gh, and GoDaddy API credentials."
    },
    {
      "id": "dep-4",
      "projectId": "mysetup",
      "title": "Installs plugins from cat-herding",
      "type": "internal",
      "status": "healthy",
      "detail": "setup.md references cat-herding plugins for Claude Code installation."
    }
  ]
};
