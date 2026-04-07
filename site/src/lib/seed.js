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
      "uncommittedDetail": "1 changed files",
      "openBranches": [],
      "branchSummaries": {
        "feature/yolo-install-uninstall": "Adding install/uninstall commands for YOLO plugin"
      },
      "latestWork": "fix(repo-tools): stream progress in real-time instead of buffering.feat(repo-tools): single parallel clean.py script, v5.0.0.feat(repo-tools): auto-delete squash-merged local branches.",
      "runCmd": "claude --plugin-dir ./plugins/webinitor",
      "tags": [
        "plugins",
        "infrastructure",
        "scaffolding"
      ],
      "modifiedFiles": [
        {
          "path": "plugins/custom-status-line/skills/custom-status-line/references/repo-cleanup.sh",
          "change": "modified",
          "summary": "+7/-0 \u2014 added: # Remote-only branches \u2014 exist on origin but not locally"
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
          "hash": "0d212be",
          "message": "fix(repo-tools): stream progress in real-time instead of buffering"
        },
        {
          "hash": "e0fe90f",
          "message": "feat(repo-tools): single parallel clean.py script, v5.0.0"
        },
        {
          "hash": "b4f5448",
          "message": "feat(repo-tools): auto-delete squash-merged local branches"
        },
        {
          "hash": "82d672b",
          "message": "fix(repo-tools): check remote-only branches in quick pre-check"
        },
        {
          "hash": "f136e87",
          "message": "feat(repo-tools): quick pre-check in discover.py to skip clean repos"
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "Ignore .DS_Store files.chore: remove whippet-cookbook docs (moved elsewhere).Add SQLite persistence recipe for Whippet cookbook.",
      "runCmd": "/interview",
      "tags": [
        "documentation",
        "knowledge-management"
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
          "hash": "34ab4bf",
          "message": "Ignore .DS_Store files"
        },
        {
          "hash": "5078664",
          "message": "chore: remove whippet-cookbook docs (moved elsewhere)"
        },
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
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [
        "remote: remove-deprecated"
      ],
      "branchSummaries": {
        "remove-deprecated": "Cleaning out 4.5MB of legacy code from deprecated/ directory",
        "housekeeping-updates": "Housekeeping and cleanup tasks"
      },
      "latestWork": "chore: update project paths to ~/projects/active/mysetup.chore: standardize worktree directory to .claude/worktrees/.remove extra stuff for now.",
      "runCmd": "./install.sh",
      "tags": [
        "automation",
        "devtools",
        "shell"
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
          "hash": "2d68011",
          "message": "chore: update project paths to ~/projects/active/mysetup"
        },
        {
          "hash": "c6fc9f9",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
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
        }
      ],
      "syncNote": ""
    },
    {
      "id": "scratchyfish",
      "name": "Scratchy Fish",
      "tagline": "Progressive jazz rock band website \u2014 scratchyfish.com",
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
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "feat: iCloud data dir migration, actionable items page, and pipeline improvements.chore: standardize worktree directory to .claude/worktrees/.docs: add README and Claude Code skills.",
      "runCmd": "smbot run",
      "tags": [
        "ai",
        "automation",
        "social-media"
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
          "hash": "cfc7878",
          "message": "feat: iCloud data dir migration, actionable items page, and pipeline improvements"
        },
        {
          "hash": "6377a50",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
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
        }
      ],
      "syncNote": ""
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
      "uncommittedDetail": "3 changed files",
      "openBranches": [],
      "latestWork": "chore: bump seed version 37\u219238, update cat-herding repo state in seed data.fix: scanner was reading stale pre-React config.js.fix: scanner does full sync \u2014 no hardcoded paths or special entries.",
      "runCmd": "open index.html",
      "tags": [
        "meta",
        "documentation",
        "architecture"
      ],
      "modifiedFiles": [
        {
          "path": "scanner/scan-projects.sh",
          "change": "modified",
          "summary": "+56/-4 \u2014 changed: # Long-lived branches that don't count as \"dirty\""
        },
        {
          "path": "site/src/context/DataContext.jsx",
          "change": "modified",
          "summary": "+1/-1 \u2014 changed: const SEED_VERSION = 43;"
        },
        {
          "path": "site/src/lib/seed.js",
          "change": "modified",
          "summary": "+322/-654 \u2014 changed: \"openBranches\": [],"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 3,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "ade7574",
          "message": "chore: bump seed version 37\u219238, update cat-herding repo state in seed data"
        },
        {
          "hash": "aa7ad50",
          "message": "fix: scanner was reading stale pre-React config.js"
        },
        {
          "hash": "905f39e",
          "message": "fix: scanner does full sync \u2014 no hardcoded paths or special entries"
        },
        {
          "hash": "f65635f",
          "message": "fix: refresh creates new projects and removes stale ones from seed data"
        },
        {
          "hash": "3869be9",
          "message": "feat: exclude test repos from discovery and dashboard"
        }
      ],
      "syncNote": ""
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
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "Initial project files: config, requirements, src, and tests.chore: add .gitignore.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "automation",
        "code-review"
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
          "hash": "42cf4f9",
          "message": "Initial project files: config, requirements, src, and tests"
        },
        {
          "hash": "59fc63c",
          "message": "chore: add .gitignore"
        }
      ],
      "syncNote": ""
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
      "latestWork": "docs: add rename concoction-to-cookbook design spec.Add 22 database-design cookbook artifacts for platform-database specialist.Rename concoction to project cookbook (#44).",
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
          "hash": "319cba9",
          "message": "docs: add rename concoction-to-cookbook design spec"
        },
        {
          "hash": "fe12a56",
          "message": "Add 22 database-design cookbook artifacts for platform-database specialist"
        },
        {
          "hash": "db65074",
          "message": "Rename concoction to project cookbook (#44)"
        },
        {
          "hash": "f83631e",
          "message": "Document worktree directory path in CLAUDE.md git workflow section"
        },
        {
          "hash": "0face55",
          "message": "Reclassify recipes into ingredients and update sibling projects (#43)"
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "Ignore .superpowers/ directory.chore: gitignore PNG screenshots in project root.Add cookbook project config and meta files.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "website"
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
          "hash": "e98b95a",
          "message": "Ignore .superpowers/ directory"
        },
        {
          "hash": "6da7c65",
          "message": "chore: gitignore PNG screenshots in project root"
        },
        {
          "hash": "49002c9",
          "message": "Add cookbook project config and meta files"
        },
        {
          "hash": "5b6b454",
          "message": "Update web app for cookbook restructuring"
        },
        {
          "hash": "5c7bf0c",
          "message": "Restructure cookbook: migrate recipes to ingredients, add formatting specs"
        }
      ],
      "syncNote": ""
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
      "latestWork": "Add 37 smoke tests for storage-provider, dispatchers, observers, and cross-component flows.Reorganize tests into testing/unit and testing/functional structure.Remove old arbitrator/markdown and project-storage/markdown backends.",
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
          "hash": "c3d67f2",
          "message": "Add 37 smoke tests for storage-provider, dispatchers, observers, and cross-component flows"
        },
        {
          "hash": "6653fa8",
          "message": "Reorganize tests into testing/unit and testing/functional structure"
        },
        {
          "hash": "3f526a1",
          "message": "Remove old arbitrator/markdown and project-storage/markdown backends"
        },
        {
          "hash": "4d035cc",
          "message": "Unify storage into single storage-provider, arbitrator delegates to it"
        },
        {
          "hash": "e04a6dc",
          "message": "Add storage-provider unification and data model spec"
        }
      ],
      "syncNote": ""
    },
    {
      "id": "myagenticworkspace",
      "name": "My Agentic Workspace",
      "tagline": "Agentic workspace template repository",
      "status": "active",
      "techStack": [
        "macOS",
        "iOS"
      ],
      "path": "~/projects/agentic-cookbook/myagenticworkspace/",
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "chore: add .gitignore.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "template"
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
          "hash": "0b9e5c6",
          "message": "chore: add .gitignore"
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.docs: add generalized AI persona research and template.Add favicon and apple-touch-icon for browser tabs and iMessage previews.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "infrastructure"
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
          "hash": "b123d23",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
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
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "fix: confine test harness to ~/projects/tests/ directory.docs: update CLAUDE.md, README, and docs index.chore: standardize worktree directory to .claude/worktrees/.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "planning"
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
          "hash": "bf7eac0",
          "message": "fix: confine test harness to ~/projects/tests/ directory"
        },
        {
          "hash": "a9f9c8f",
          "message": "docs: update CLAUDE.md, README, and docs index"
        },
        {
          "hash": "2b98be2",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "4e19c1e",
          "message": "chore: install agentic cookbook (rule, manifest, preferences)"
        },
        {
          "hash": "946ae74",
          "message": "Merge pull request #51 from mikefullerton/feature/progress-format"
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "feat: add lint skill directories (agent, compliance, project, recipe, skill).chore: standardize worktree directory to .claude/worktrees/.Add cookbook-statusline.sh script from dev-team repo.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "tools"
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
          "hash": "80b2526",
          "message": "feat: add lint skill directories (agent, compliance, project, recipe, skill)"
        },
        {
          "hash": "60b97e1",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "102490f",
          "message": "Add cookbook-statusline.sh script from dev-team repo"
        },
        {
          "hash": "6288621",
          "message": "Initial commit: tools repo with rules, skills, and project setup"
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.chore: rename cat-herding \u2192 agentic-roadmaps in roadmap and demo script.refactor: rename runs to roadmaps across frontend, backend, and CLI.",
      "runCmd": "",
      "tags": [
        "apps",
        "ios",
        "ai"
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
          "hash": "0c6264a",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "3894133",
          "message": "chore: rename cat-herding \u2192 agentic-roadmaps in roadmap and demo script"
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
        }
      ],
      "syncNote": ""
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
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [
        "remote: worktree-appkit-conversion"
      ],
      "latestWork": "chore: add CLAUDE.md.chore: standardize worktree directory to .claude/worktrees/.feat: AI-powered session summarization with multi-provider support.",
      "runCmd": "",
      "tags": [
        "apps",
        "terminal",
        "macos"
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
          "hash": "d3bb5de",
          "message": "chore: add CLAUDE.md"
        },
        {
          "hash": "50cdef8",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
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
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "feat: add AppState, WindowExplorer, WorkGroups views and refactor app structure.chore: standardize worktree directory to .claude/worktrees/.Update CLAUDE.md: litterbox \u2192 agentic-cookbook.",
      "runCmd": "",
      "tags": [
        "apps",
        "macos"
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
          "hash": "814e3a3",
          "message": "feat: add AppState, WindowExplorer, WorkGroups views and refactor app structure"
        },
        {
          "hash": "4273eec",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "b8857de",
          "message": "Update CLAUDE.md: litterbox \u2192 agentic-cookbook"
        },
        {
          "hash": "0f564bd",
          "message": "feat: add Help window, Discovery window, oslog logging, rename contexts to Hairballs"
        },
        {
          "hash": "5ef2245",
          "message": "refactor: migrate 1 roadmaps to flat file format"
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.Update CLAUDE.md: litterbox \u2192 agentic-cookbook.fix: only update session summary on topic change, not every input.",
      "runCmd": "",
      "tags": [
        "apps",
        "macos",
        "ide"
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
          "hash": "763cc12",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "d48543a",
          "message": "Update CLAUDE.md: litterbox \u2192 agentic-cookbook"
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
        }
      ],
      "syncNote": ""
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
        "feature/repo-reorg",
        "remote: feature/dev-tools",
        "remote: feature/edit-ops-pr3",
        "remote: feature/edit-ops-pr4",
        "remote: feature/fix-xcode-warnings",
        "remote: feature/merge-queue",
        "remote: feature/rename-note-content",
        "remote: feature/test-data-fill"
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
              "message": "fix: simplify KMP build script \u2014 always skip Android, preserve JAVA_HOME"
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
          "summary": "7 commits \u2014 fix: extend platform availability guards to tvOS",
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
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.chore: rename cat-herding \u2192 agentic-roadmaps in shared project reference.Update CLAUDE.md: litterbox \u2192 agentic-cookbook.",
      "runCmd": "",
      "tags": [
        "apps",
        "specs",
        "cross-platform"
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
          "hash": "f600b40",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "cf2749c",
          "message": "chore: rename cat-herding \u2192 agentic-roadmaps in shared project reference"
        },
        {
          "hash": "83c4a21",
          "message": "Update CLAUDE.md: litterbox \u2192 agentic-cookbook"
        },
        {
          "hash": "a3e849b",
          "message": "fix: remove Swift .build artifacts and fix .gitignore"
        },
        {
          "hash": "6cf7187",
          "message": "feat: add full-stack verification playbook"
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "cleanup.chore: standardize worktree directory to .claude/worktrees/.Update CLAUDE.md: litterbox \u2192 agentic-cookbook.",
      "runCmd": "",
      "tags": [
        "apps",
        "macos",
        "ai"
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
          "hash": "4173947",
          "message": "cleanup"
        },
        {
          "hash": "f0cdd3a",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "eb5f062",
          "message": "Update CLAUDE.md: litterbox \u2192 agentic-cookbook"
        },
        {
          "hash": "caa388c",
          "message": "feat: AI session summarization, frontmost window tracking, minimal UI"
        },
        {
          "hash": "15a6a1b",
          "message": "fix: snapshot app metadata on main thread, enumerate windows on background"
        }
      ],
      "syncNote": ""
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
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "1 changed files",
      "openBranches": [
        "remote: config/remove-duplicated-workflow-rules",
        "remote: feature/agent-wrappers"
      ],
      "latestWork": "fix: make code reviews on-demand only, not automatic on PR open (#13).feat: add Anthropic code reviewer workflow (#11).feat: switch code review to claude-code-action via thorin-code-review (#10).",
      "runCmd": "",
      "tags": [
        "paused",
        "productivity"
      ],
      "modifiedFiles": [
        {
          "path": ".claude/worktrees/",
          "change": "untracked",
          "summary": "new directory (2 items)"
        }
      ],
      "branchDetails": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 1,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "9a45a91",
          "message": "fix: make code reviews on-demand only, not automatic on PR open (#13)"
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
        },
        {
          "hash": "d751ade",
          "message": "Remove duplicated workflow rules from CLAUDE.md (#2)"
        }
      ],
      "syncNote": ""
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.Add deep linking URL scheme (browsingpal://) (#13).Add Links Tracker window for saving and browsing URLs (#11).",
      "runCmd": "",
      "tags": [
        "paused",
        "macos"
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
          "hash": "084634a",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "c99e7a2",
          "message": "Add deep linking URL scheme (browsingpal://) (#13)"
        },
        {
          "hash": "3331cc9",
          "message": "Add Links Tracker window for saving and browsing URLs (#11)"
        },
        {
          "hash": "c88fb95",
          "message": "Move search terms into Settings tabs, remove SearchPal window (#12)"
        },
        {
          "hash": "da1ea57",
          "message": "Add browser switch setting, formed search autocomplete, and browser activation (#10)"
        }
      ],
      "syncNote": ""
    },
    {
      "id": "agentic-kitchen",
      "name": "Agentic Kitchen",
      "tagline": "",
      "status": "active",
      "techStack": [
        "macOS",
        "iOS"
      ],
      "openBranches": [],
      "latestCommits": [],
      "branch": "HEAD\nunknown",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "",
      "syncNote": ""
    },
    {
      "id": "mikefullerton-com",
      "name": "Mikefullerton Com",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Claude Code",
        "macOS",
        "iOS"
      ],
      "openBranches": [],
      "latestCommits": [
        {
          "hash": "e0c23b4",
          "message": "Move website files into site/ directory, docs to root"
        },
        {
          "hash": "04c1e07",
          "message": "Add .gitignore for tool-specific local files"
        },
        {
          "hash": "700ff42",
          "message": "chore: remove LLM chat widget research doc (moved elsewhere)"
        },
        {
          "hash": "1b9a984",
          "message": "fix: Fragment wrappers for flex layout, add label+url link style"
        },
        {
          "hash": "6509517",
          "message": "fix: add bubble engine to sub-tag panels, reset nested state on close"
        }
      ],
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "Move website files into site/ directory, docs to root.Add .gitignore for tool-specific local files.chore: remove LLM chat widget research doc (moved elsewhere).",
      "syncNote": ""
    },
    {
      "id": "myagenticprojects",
      "name": "Myagenticprojects",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Node.js",
        "macOS",
        "iOS"
      ],
      "openBranches": [],
      "latestCommits": [
        {
          "hash": "b9981d8",
          "message": "fix: update seed script to support password resets and lower minimum to 10 chars"
        },
        {
          "hash": "553f8fe",
          "message": "chore: update manifest with deployment URLs"
        },
        {
          "hash": "11441c7",
          "message": "chore: update templates to site-manager v1.3.0"
        },
        {
          "hash": "446f449",
          "message": "chore: update manifest with deployment URLs"
        },
        {
          "hash": "5b1fcea",
          "message": "chore: remove custom domain routes pending DNS setup"
        }
      ],
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "fix: update seed script to support password resets and lower minimum to 10 chars.chore: update manifest with deployment URLs.chore: update templates to site-manager v1.3.0.",
      "syncNote": ""
    },
    {
      "id": "market-research",
      "name": "Market Research",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Python",
        "Claude Code"
      ],
      "openBranches": [
        "remote: docs/project-history"
      ],
      "latestCommits": [
        {
          "hash": "67b2bcf",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "55a318e",
          "message": "Add project documentation (#2)"
        },
        {
          "hash": "e48a0a7",
          "message": "Add market research agent system (#1)"
        },
        {
          "hash": "8163769",
          "message": "Initial commit with .gitignore"
        }
      ],
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.Add project documentation (#2).Add market research agent system (#1).",
      "syncNote": ""
    },
    {
      "id": "mikeisdrumming",
      "name": "Mikeisdrumming",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Claude Code",
        "macOS",
        "iOS"
      ],
      "openBranches": [],
      "latestCommits": [
        {
          "hash": "2528232",
          "message": "chore: add .gitignore"
        },
        {
          "hash": "01dbdb0",
          "message": "feat: add GitHub Pages landing page and custom domain (#1)"
        },
        {
          "hash": "c4441aa",
          "message": "Add music service API research document"
        },
        {
          "hash": "35dbee6",
          "message": "Initial commit"
        }
      ],
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "chore: add .gitignore.feat: add GitHub Pages landing page and custom domain (#1).Add music service API research document.",
      "syncNote": ""
    },
    {
      "id": "workflows",
      "name": "Workflows",
      "tagline": "",
      "status": "active",
      "techStack": [
        "macOS",
        "iOS"
      ],
      "openBranches": [
        "remote: feature/add-dwalin-oin-nori-agents"
      ],
      "latestCommits": [
        {
          "hash": "5e7097e",
          "message": "Update dotfiles path reference to deprecated/dotfiles"
        },
        {
          "hash": "b2f9f07",
          "message": "chore: add .gitignore"
        },
        {
          "hash": "b4b5e3a",
          "message": "docs: update dotfiles path from ~/.dotfiles to ~/projects/dotfiles"
        },
        {
          "hash": "9171bdc",
          "message": "feat: cost optimization \u2014 max_turns, cheaper models, combined review (#13)"
        },
        {
          "hash": "8974cf7",
          "message": "feat: add Anthropic code reviewer agent (#12)"
        }
      ],
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "Update dotfiles path reference to deprecated/dotfiles.chore: add .gitignore.docs: update dotfiles path from ~/.dotfiles to ~/projects/dotfiles.",
      "syncNote": ""
    },
    {
      "id": "agentic-auth-service",
      "name": "Agentic Auth Service",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Node.js",
        "TypeScript",
        "Claude Code"
      ],
      "openBranches": [],
      "latestCommits": [
        {
          "hash": "7aed6ff",
          "message": "Add .claude/ project config"
        },
        {
          "hash": "a48b32d",
          "message": "docs: add architecture research document"
        },
        {
          "hash": "bb9a47c",
          "message": "chore: replace KeyLike with CryptoKey type in keys config"
        },
        {
          "hash": "08a9668",
          "message": "fix: standalone seed script, add deployed manifest and public key"
        },
        {
          "hash": "5696997",
          "message": "fix: standalone migration runner, increase healthcheck timeout"
        }
      ],
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "Add .claude/ project config.docs: add architecture research document.chore: replace KeyLike with CryptoKey type in keys config.",
      "syncNote": ""
    },
    {
      "id": "learntruefacts",
      "name": "Learntruefacts",
      "tagline": "",
      "status": "active",
      "techStack": [
        "macOS",
        "iOS"
      ],
      "openBranches": [],
      "latestCommits": [
        {
          "hash": "71263e8",
          "message": "Add docs/ and ignore .DS_Store"
        }
      ],
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "Add docs/ and ignore .DS_Store.",
      "syncNote": ""
    },
    {
      "id": "my-projects-overview",
      "name": "My Projects Overview",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Claude Code",
        "macOS",
        "iOS"
      ],
      "openBranches": [],
      "latestCommits": [
        {
          "hash": "0195821",
          "message": "refactor: arrange projects in disk order, remove category groups"
        },
        {
          "hash": "562513b",
          "message": "remove: status dots, badges, and filter buttons"
        },
        {
          "hash": "a1f0d8c",
          "message": "feat: project title headers and raw markdown popover"
        },
        {
          "hash": "119b16e",
          "message": "fix: embed project details inline for file:// compatibility"
        },
        {
          "hash": "114e0b4",
          "message": "feat: SPA navigation \u2014 sidebar clicks load project detail inline"
        }
      ],
      "branch": "main",
      "uncommitted": true,
      "uncommittedDetail": "13 changed files",
      "branchDetails": [],
      "modifiedFiles": [
        {
          "path": "site/index.html",
          "change": "modified",
          "summary": "+184/-127 \u2014 changed: <div class=\"nav-section\">~/projects/active/</div>"
        },
        {
          "path": "projects/QualityTime/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/code-review-pipeline-test/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/cookbook-tests/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/dev-team-tests/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/market-research/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/mikeisdrumming/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/my-agentic-interviews/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/roadmaps-tests/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/scratchyfish.com/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/search-helper/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/social-media-bot-tests/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        },
        {
          "path": "projects/workflows/",
          "change": "untracked",
          "summary": "new directory (1 items)"
        }
      ],
      "stagedCount": 0,
      "modifiedCount": 1,
      "untrackedCount": 12,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "refactor: arrange projects in disk order, remove category groups.remove: status dots, badges, and filter buttons.feat: project title headers and raw markdown popover.",
      "syncNote": ""
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
      "title": "Commit 1 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-catnip-terminal-branches",
      "projectId": "catnip-terminal",
      "title": "Review/merge 1 open branch",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-market-research-branches",
      "projectId": "market-research",
      "title": "Review/merge 1 open branch",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-my-projects-uncommitted",
      "projectId": "my-projects",
      "title": "Commit 3 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-my-projects-overview-uncommitted",
      "projectId": "my-projects-overview",
      "title": "Commit 12 changed files",
      "priority": "medium",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-mysetup-branches",
      "projectId": "mysetup",
      "title": "Review/merge 1 open branch",
      "priority": "low",
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
      "title": "Review/merge 2 open branches",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-temporal-branches",
      "projectId": "temporal",
      "title": "Review/merge 8 open branches",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-workflows-branches",
      "projectId": "workflows",
      "title": "Review/merge 1 open branch",
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
      "detail": "TODO at line 8 \u2014 hack related to origin/foo branch removal."
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
