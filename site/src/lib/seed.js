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
      "openBranches": [
        "feature/yolo-install-uninstall"
      ],
      "branchSummaries": {
        "feature/yolo-install-uninstall": "Adding install/uninstall commands for YOLO plugin"
      },
      "latestWork": "feat(repo-tools): add needs-push, needs-pull, branches to status chart.feat(repo-tools): show all-repo status chart, skip -tests dirs.chore: simplify git workflow rule to commit-and-push.",
      "runCmd": "claude --plugin-dir ./plugins/webinitor",
      "tags": [
        "plugins",
        "infrastructure",
        "scaffolding"
      ],
      "modifiedFiles": [
        {
          "path": "cli/site-manager/build/",
          "change": "untracked",
          "summary": "new directory (2 items)"
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
      "modifiedCount": 0,
      "untrackedCount": 1,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "b7ea2e7",
          "message": "feat(repo-tools): add needs-push, needs-pull, branches to status chart"
        },
        {
          "hash": "42f0a72",
          "message": "feat(repo-tools): show all-repo status chart, skip -tests dirs"
        },
        {
          "hash": "4369236",
          "message": "chore: simplify git workflow rule to commit-and-push"
        },
        {
          "hash": "6362312",
          "message": "Add site-manager add/deploy fix plan and spec docs"
        },
        {
          "hash": "ad30fab",
          "message": "Update repo-tools and custom-status-line plugins"
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [
        "remove-deprecated"
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
      "branchDetails": [
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "fix: scanner was reading stale pre-React config.js.fix: scanner does full sync — no hardcoded paths or special entries.fix: refresh creates new projects and removes stale ones from seed data.",
      "runCmd": "open index.html",
      "tags": [
        "meta",
        "documentation",
        "architecture"
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
          "hash": "aa7ad50",
          "message": "fix: scanner was reading stale pre-React config.js"
        },
        {
          "hash": "905f39e",
          "message": "fix: scanner does full sync — no hardcoded paths or special entries"
        },
        {
          "hash": "f65635f",
          "message": "fix: refresh creates new projects and removes stale ones from seed data"
        },
        {
          "hash": "3869be9",
          "message": "feat: exclude test repos from discovery and dashboard"
        },
        {
          "hash": "5768347",
          "message": "feat: auto-discover new/moved/removed projects before scanning"
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
      ]
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
      "openBranches": [
        "feature/rename-concoction-to-cookbook"
      ],
      "latestWork": "docs: add rename concoction-to-cookbook design spec.Add 22 database-design cookbook artifacts for platform-database specialist.Rename concoction to project cookbook (#44).",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "documentation"
      ],
      "modifiedFiles": [],
      "branchDetails": [
        {
          "name": "feature/rename-concoction-to-cookbook",
          "commits": [
            {
              "hash": "c5bffab",
              "message": "Fix change history entries to say cookbook not project cookbook"
            },
            {
              "hash": "7a44aa8",
              "message": "Simplify terminology: use 'cookbook' not 'project cookbook' everywhere"
            },
            {
              "hash": "9aa9299",
              "message": "Replace all concoction references with project cookbook terminology"
            },
            {
              "hash": "1550d64",
              "message": "Rename concoction files and directories to cookbook"
            },
            {
              "hash": "76e29c3",
              "message": "chore: init branch for concoction → cookbook rename"
            }
          ],
          "summary": "5 commits — Fix change history entries to say cookbook not project cookbook",
          "commitCount": 5
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [
        "feature/add-site-design-rule"
      ],
      "latestWork": "Ignore .superpowers/ directory.chore: gitignore PNG screenshots in project root.Add cookbook project config and meta files.",
      "runCmd": "",
      "tags": [
        "agentic-cookbook",
        "website"
      ],
      "modifiedFiles": [],
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
      "latestWork": "Reorganize tests into testing/unit and testing/functional structure.Remove old arbitrator/markdown and project-storage/markdown backends.Unify storage into single storage-provider, arbitrator delegates to it.",
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
        },
        {
          "hash": "f8d88f7",
          "message": "Move pyproject.toml into tests/ to keep repo root clean"
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
      ]
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [
        "feature/catnipwebservice-step-4",
        "feature/catnipwebservice-step-5",
        "feature/deployment-step-12",
        "feature/frontend-dashboard-step-10",
        "feature/roadmaps-api",
        "feature/websocket-integration-step-11",
        "feature/websocket-step-8"
      ],
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.chore: rename cat-herding → agentic-roadmaps in roadmap and demo script.refactor: rename runs to roadmaps across frontend, backend, and CLI.",
      "runCmd": "",
      "tags": [
        "apps",
        "ios",
        "ai"
      ],
      "modifiedFiles": [],
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [
        "worktree-appkit-conversion"
      ],
      "latestWork": "chore: add CLAUDE.md.chore: standardize worktree directory to .claude/worktrees/.feat: AI-powered session summarization with multi-provider support.",
      "runCmd": "",
      "tags": [
        "apps",
        "terminal",
        "macos"
      ],
      "modifiedFiles": [],
      "branchDetails": [
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
            }
          ],
          "summary": "5 commits — fix: show ~ instead of username when session CWD is home directory",
          "commitCount": 5
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "feat: add AppState, WindowExplorer, WorkGroups views and refactor app structure.chore: standardize worktree directory to .claude/worktrees/.Update CLAUDE.md: litterbox → agentic-cookbook.",
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
          "message": "Update CLAUDE.md: litterbox → agentic-cookbook"
        },
        {
          "hash": "0f564bd",
          "message": "feat: add Help window, Discovery window, oslog logging, rename contexts to Hairballs"
        },
        {
          "hash": "5ef2245",
          "message": "refactor: migrate 1 roadmaps to flat file format"
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.Update CLAUDE.md: litterbox → agentic-cookbook.fix: only update session summary on topic change, not every input.",
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.chore: rename cat-herding → agentic-roadmaps in shared project reference.Update CLAUDE.md: litterbox → agentic-cookbook.",
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [],
      "latestWork": "cleanup.chore: standardize worktree directory to .claude/worktrees/.Update CLAUDE.md: litterbox → agentic-cookbook.",
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
          "message": "Update CLAUDE.md: litterbox → agentic-cookbook"
        },
        {
          "hash": "caa388c",
          "message": "feat: AI session summarization, frontmost window tracking, minimal UI"
        },
        {
          "hash": "15a6a1b",
          "message": "fix: snapshot app metadata on main thread, enumerate windows on background"
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
      "uncommitted": false,
      "uncommittedDetail": "",
      "openBranches": [
        "feature/anthropic-review",
        "feature/thorin-code-review",
        "fix/on-demand-reviews",
        "main"
      ],
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.Update CLAUDE.md: litterbox → agentic-cookbook.docs: update CLAUDE.md.",
      "runCmd": "",
      "tags": [
        "paused",
        "productivity"
      ],
      "modifiedFiles": [],
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
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 7,
      "behindCount": 0,
      "latestCommits": [
        {
          "hash": "a62f072",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
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
      ]
    },
    {
      "id": "agentic-kitchen",
      "name": "Agentic Kitchen",
      "tagline": "",
      "status": "active",
      "techStack": [],
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
      "behindCount": 0
    },
    {
      "id": "mikefullerton-com",
      "name": "Mikefullerton Com",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Claude Code"
      ],
      "openBranches": [
        "master",
        "worktree-new-website-design"
      ],
      "latestCommits": [
        {
          "hash": "81195c6",
          "message": "Add cats_and_dogs_quotes.md and ignore .superpowers/"
        },
        {
          "hash": "45a4c9c",
          "message": "chore: add .gitignore"
        },
        {
          "hash": "a4d197a",
          "message": "Center social icons below all content (#9)"
        },
        {
          "hash": "842c6d0",
          "message": "Fix spelling: emphasises -> emphasizes (#8)"
        },
        {
          "hash": "fc05de8",
          "message": "Re-crop OG preview image to include full face"
        }
      ],
      "branch": "gh-pages",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [
        {
          "name": "master",
          "commits": [],
          "summary": "no unique commits",
          "commitCount": 0
        },
        {
          "name": "worktree-new-website-design",
          "commits": [
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
            },
            {
              "hash": "c35f4a3",
              "message": "chore: remove legacy files, add .gitignore"
            },
            {
              "hash": "87def67",
              "message": "feat: add Hero component, wire up App"
            },
            {
              "hash": "32c4c1c",
              "message": "feat: add TagRow component with bubble engine"
            },
            {
              "hash": "3980312",
              "message": "feat: add typed site content data module"
            },
            {
              "hash": "13c67e5",
              "message": "feat: add PetFactTicker component"
            },
            {
              "hash": "7bdfcc6",
              "message": "feat: add ActivityFeed component"
            },
            {
              "hash": "1868d66",
              "message": "feat: convert bubble engine to typed ES module"
            },
            {
              "hash": "6cc209d",
              "message": "feat: add TagPanel component"
            },
            {
              "hash": "4a19190",
              "message": "feat: scaffold Vite + React + TypeScript project"
            },
            {
              "hash": "3c060a1",
              "message": "Add React migration implementation plan"
            },
            {
              "hash": "dbe2681",
              "message": "Add React + TypeScript migration design spec"
            },
            {
              "hash": "8968904",
              "message": "Add LLM chat widget research doc"
            },
            {
              "hash": "cf3cb8c",
              "message": "Hide activity feed, add feed architecture research"
            },
            {
              "hash": "f38c0d7",
              "message": "Add pet facts ticker with cat/dog quotes"
            },
            {
              "hash": "ebb6dda",
              "message": "Redesign landing page with portrait hero and tag navigation"
            },
            {
              "hash": "c0c5251",
              "message": "Add site content JSON and interactive JS"
            },
            {
              "hash": "c45d6c9",
              "message": "Add optimized B&W portrait photo"
            }
          ],
          "summary": "20 commits — chore: remove LLM chat widget research doc (moved elsewhere)",
          "commitCount": 20
        }
      ],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "Add cats_and_dogs_quotes.md and ignore .superpowers/.chore: add .gitignore.Center social icons below all content (#9)."
    },
    {
      "id": "myagenticprojects",
      "name": "Myagenticprojects",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Node.js"
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
      "latestWork": "fix: update seed script to support password resets and lower minimum to 10 chars.chore: update manifest with deployment URLs.chore: update templates to site-manager v1.3.0."
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
        "main"
      ],
      "latestCommits": [
        {
          "hash": "9ba46f4",
          "message": "chore: standardize worktree directory to .claude/worktrees/"
        },
        {
          "hash": "fdacaa3",
          "message": "Add project documentation"
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
      "branch": "docs/project-history",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [
        {
          "name": "main",
          "commits": [],
          "summary": "no unique commits",
          "commitCount": 0
        }
      ],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 2,
      "behindCount": 0,
      "latestWork": "chore: standardize worktree directory to .claude/worktrees/.Add project documentation.Add market research agent system (#1)."
    },
    {
      "id": "mikeisdrumming",
      "name": "Mikeisdrumming",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Claude Code"
      ],
      "openBranches": [
        "main"
      ],
      "latestCommits": [
        {
          "hash": "51b931d",
          "message": "chore: add .gitignore"
        },
        {
          "hash": "552c896",
          "message": "feat: add GitHub Pages landing page and custom domain"
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
      "branch": "feature/github-pages-landing",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [
        {
          "name": "main",
          "commits": [],
          "summary": "no unique commits",
          "commitCount": 0
        }
      ],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 2,
      "behindCount": 0,
      "latestWork": "chore: add .gitignore.feat: add GitHub Pages landing page and custom domain.Add music service API research document."
    },
    {
      "id": "workflows",
      "name": "Workflows",
      "tagline": "",
      "status": "active",
      "techStack": [],
      "openBranches": [
        "feature/agent-wrappers",
        "feature/anthropic-code-reviewer",
        "feature/code-review-action-and-rename-personas",
        "feature/cost-optimization"
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
          "message": "feat: cost optimization — max_turns, cheaper models, combined review (#13)"
        },
        {
          "hash": "8974cf7",
          "message": "feat: add Anthropic code reviewer agent (#12)"
        }
      ],
      "branch": "main",
      "uncommitted": false,
      "uncommittedDetail": "",
      "branchDetails": [
        {
          "name": "feature/agent-wrappers",
          "commits": [
            {
              "hash": "4f2b652",
              "message": "feat: add agent wrapper workflows for centralized pipeline config"
            }
          ],
          "summary": "feat: add agent wrapper workflows for centralized pipeline config",
          "commitCount": 1
        },
        {
          "name": "feature/anthropic-code-reviewer",
          "commits": [
            {
              "hash": "b3ea608",
              "message": "feat: add Anthropic code reviewer agent"
            }
          ],
          "summary": "feat: add Anthropic code reviewer agent",
          "commitCount": 1
        },
        {
          "name": "feature/code-review-action-and-rename-personas",
          "commits": [
            {
              "hash": "e77c698",
              "message": "feat: add claude-code-action review workflow and rename dwarf personas"
            }
          ],
          "summary": "feat: add claude-code-action review workflow and rename dwarf personas",
          "commitCount": 1
        },
        {
          "name": "feature/cost-optimization",
          "commits": [
            {
              "hash": "ebdce39",
              "message": "feat: cost optimization — max_turns, cheaper models, combined review"
            }
          ],
          "summary": "feat: cost optimization — max_turns, cheaper models, combined review",
          "commitCount": 1
        }
      ],
      "modifiedFiles": [],
      "stagedCount": 0,
      "modifiedCount": 0,
      "untrackedCount": 0,
      "deletedCount": 0,
      "aheadCount": 0,
      "behindCount": 0,
      "latestWork": "Update dotfiles path reference to deprecated/dotfiles.chore: add .gitignore.docs: update dotfiles path from ~/.dotfiles to ~/projects/dotfiles."
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
      "latestWork": "Add .claude/ project config.docs: add architecture research document.chore: replace KeyLike with CryptoKey type in keys config."
    },
    {
      "id": "learntruefacts",
      "name": "Learntruefacts",
      "tagline": "",
      "status": "active",
      "techStack": [],
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
      "latestWork": "Add docs/ and ignore .DS_Store."
    },
    {
      "id": "my-projects-overview",
      "name": "My Projects Overview",
      "tagline": "",
      "status": "active",
      "techStack": [
        "Claude Code"
      ],
      "openBranches": [],
      "latestCommits": [
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
          "message": "feat: SPA navigation — sidebar clicks load project detail inline"
        },
        {
          "hash": "88a5965",
          "message": "redesign: match my-projects layout with sidebar navigation"
        },
        {
          "hash": "338309a",
          "message": "update: refresh remaining overviews from parallel agents"
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
      "latestWork": "feat: project title headers and raw markdown popover.fix: embed project details inline for file:// compatibility.feat: SPA navigation — sidebar clicks load project detail inline."
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
      "id": "auto-cat-herding-branches",
      "projectId": "cat-herding",
      "title": "Review/merge 1 open branch",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-catnip-branches",
      "projectId": "catnip",
      "title": "Review/merge 7 open branches",
      "priority": "low",
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
      "id": "auto-cookbook-branches",
      "projectId": "cookbook",
      "title": "Review/merge 1 open branch",
      "priority": "low",
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
      "id": "auto-market-research-branches",
      "projectId": "market-research",
      "title": "Review/merge 1 open branch",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-mikefullerton-com-branches",
      "projectId": "mikefullerton-com",
      "title": "Review/merge 2 open branches",
      "priority": "low",
      "status": "open",
      "assignee": "Mike"
    },
    {
      "id": "auto-mikeisdrumming-branches",
      "projectId": "mikeisdrumming",
      "title": "Review/merge 1 open branch",
      "priority": "low",
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
      "id": "auto-qualitytime-branches",
      "projectId": "qualitytime",
      "title": "Review/merge 4 open branches",
      "priority": "low",
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
      "id": "auto-workflows-branches",
      "projectId": "workflows",
      "title": "Review/merge 4 open branches",
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
