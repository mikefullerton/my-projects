# Projects with Local File-Writing Agents

Projects that use agents/skills to write to local markdown files and SQLite databases as part of their workflows.

## 1. Roadmaps System

- **Path**: `~/projects/agentic-cookbook/roadmaps/`
- **Description**: Multi-skill workflow for planning and implementing features through structured roadmaps. Skills include `/plan-roadmap`, `/plan-bugfix-roadmap`, `/implement-roadmap`, and `/progress-dashboard`.
- **Outputs**:
  - Markdown roadmaps: `~/.roadmaps/<project>/YYYY-MM-DD-<Name>/Roadmap.md`
  - State files: `~/.roadmaps/<project>/YYYY-MM-DD-<Name>/State/`
  - History logs: `~/.roadmaps/<project>/YYYY-MM-DD-<Name>/History/`
  - SQLite database: `~/.claude/dashboard.db` (roadmap execution tracking)

## 2. Dev-Team Plugin

- **Path**: `~/projects/agentic-cookbook/dev-team/`
- **Description**: Multi-agent product discovery, analysis, and project building system. Orchestrates 20+ specialist agents (domain, platform, and project-management) to interview users, analyze requirements, generate code, and create recipes.
- **Skills**: `/dev-team interview`, `/dev-team analysis`, `/dev-team review`, `/dev-team build`, `/dev-team audit`
- **Outputs**:
  - SQLite database: `~/.agentic-cookbook/dev-team/dev-team.db` (workflows, findings, artifacts, sessions — 10+ tables)
  - Session data: `~/.agentic-cookbook/dev-team/sessions/`
  - Generated recipes/artifacts written to workspace repos

## 3. Social Media Bot

- **Path**: `~/projects/personal/social-media-bot/`
- **Description**: Bot system that generates social media content, tracks drafts for approval, and publishes to multiple platforms. Includes activity scanning, bot prompt management, and a coordinator CLI.
- **Outputs**:
  - SQLite database: `~/projects/personal/social-media-bot/data/social-media-bot.db` (bot_runs, drafts, posts, metrics)
  - Draft files: `~/projects/personal/social-media-bot/data/drafts/`
  - Research artifacts: `~/projects/personal/social-media-bot/data/research/`

## Central Data Locations

| Location | Purpose | Project |
|----------|---------|---------|
| `~/.roadmaps/<project>/` | Roadmap MD files + state | Roadmaps |
| `~/.claude/dashboard.db` | Roadmap execution tracking (SQLite) | Roadmaps |
| `~/.agentic-cookbook/dev-team/dev-team.db` | Workflows, findings, artifacts (SQLite) | Dev-Team |
| `~/.agentic-cookbook/dev-team/sessions/` | Workflow session data | Dev-Team |
| `~/projects/personal/social-media-bot/data/` | Bot DB + drafts + research | Social Media Bot |
