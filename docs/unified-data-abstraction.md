# Unified Data Type Abstraction for Shared Web Backend

## Context

Three projects — Roadmaps, Dev-Team, and Social Media Bot — each maintain independent SQLite databases and file-based storage with overlapping patterns. The goal is to design a unified data type abstraction that a shared web backend can serve, so all three projects persist and query through a single API rather than bespoke local storage.

---

## Part 1: Overlapping Concepts

All three projects follow the same fundamental hierarchy: **Container -> Workflow/Run -> Steps/Tasks -> Outputs + Events**

### Shared Entity Patterns

| Abstract Concept | Roadmaps | Dev-Team | Social Media Bot |
|---|---|---|---|
| **Container** | `roadmaps` table | `projects` table | Implicit (bot config) |
| **Workflow/Run** | Roadmap lifecycle (state machine) | `sessions` | `bot_runs` |
| **Steps/Tasks** | `steps` (ordered, typed) | `session_state` (specialist runs) | Pipeline stages (analyze → topic → draft → post) |
| **Outputs/Products** | Issues, PRs created | `findings`, `interpretations`, `artifacts` | `commit_analyses`, `topics`, `drafts` |
| **Events/Audit** | `state_transitions`, `history_events`, `runtime_events` | `messages`, `retries` | `health_events` |
| **External Refs** | GitHub issues/PRs (number, url, status) | Artifact paths, file references | Platform posts (post_id, url), transcript paths |
| **Controls** | `controls` (pause/resume/stop) | Gate messages with options | Bot scheduling config |

### Shared Field Patterns

- **Status enums**: All use `TEXT` status columns with project-specific values
- **Timestamps**: All use ISO 8601. Patterns: `created_at`, `started_at`, `completed_at`, `updated_at`
- **Actor/Author**: Roadmaps: `author`. Dev-Team: `changed_by`/`specialist`. Bot: `bot_name`
- **Title + Description**: Every entity has a short name/title plus optional longer description/detail/narrative
- **Severity/Priority**: Dev-Team findings (critical/high/medium/low). Bot reading_list (urgent/important/interesting/fyi)
- **Ordering**: Roadmap steps have `number`. Dev-Team states are sequenced. Bot pipeline has implicit order

### Shared Relationship Patterns

- **Parent-child cascading**: Container → Workflows → Steps → Outputs
- **State machines**: All have lifecycle states with defined transitions
- **Append-only event logs**: All record timestamped events for audit/history
- **External link tracking**: All reference external systems (GitHub, platforms, files)

---

## Part 2: Bespoke Concepts

### Unique to Roadmaps
- Git integration: `repo`, `repo_url`, `branch`, `machine`, `worktree`
- Dual state/status model: lifecycle `state` (planning phase) vs operational `status` (running/idle)
- Step complexity sizing (`S/M/L`)
- Real-time control channel (pause/resume/stop polling table)
- Markdown file representation (Roadmap.md + State/ directory alongside DB)

### Unique to Dev-Team
- Multi-agent architecture: team-leads, specialists, specialty-teams
- Worker-verifier loop with retries and iteration counts
- Persona-based interpretations of findings
- Gate messages with selectable options
- Dual storage backends (SQLite + file-based JSON sessions)
- Project management items: milestones, todos, issues, concerns, dependencies, decisions
- Screenshot comparisons with similarity percentages
- Requirements coverage tracking

### Unique to Social Media Bot
- Content pipeline: commit analysis → topics → research → drafts → posts → metrics
- Multi-platform targeting (X, LinkedIn, Bluesky, Substack)
- Engagement metrics (likes, reposts, comments, impressions, clicks, followers)
- Content scheduling (`scheduled_for`)
- Reading list with priority tiers
- Interview transcripts with extraction status
- Topic scoring (priority_score, audience_interest, uniqueness, timeliness, depth_potential)

---

## Part 3: Unified Data Type Abstraction

### Design Principles

1. **Shared columns for universal patterns** — timestamps, status, actor, title/description
2. **`props` JSONB for project-specific data** — avoids EAV anti-pattern, keeps schema stable
3. **Discriminator columns** (`kind`, `type`) — distinguish project contexts without separate tables
4. **State machines as data** — transitions defined in DB, validated by backend

---

### Core Types

#### 1. `workspaces`
> Replaces: roadmaps, projects, bot config

The top-level container that owns everything.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | PK |
| `user_id` | FK → users | Owner |
| `name` | text | Display name |
| `kind` | text | `'roadmap'` / `'dev_team'` / `'content_pipeline'` |
| `state` | text | Lifecycle state |
| `archived` | boolean | Soft delete |
| `props` | jsonb | Extension data (see below) |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

**Props by kind:**
- `roadmap`: `{ repo, repo_url, branch, machine, worktree, description }`
- `dev_team`: `{ project_path, cookbook_repo }`
- `content_pipeline`: `{ config_path, repos_path }`

---

#### 2. `workflows`
> Replaces: roadmap execution, sessions, bot_runs

A single run/execution within a workspace.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | PK |
| `workspace_id` | FK → workspaces | |
| `name` | text | Workflow name/label |
| `workflow_type` | text | Subtype: `'implementation'`, `'interview'`, `'analysis'`, `'deep-commit-analyzer'`, etc. |
| `state` | text | Lifecycle state |
| `status` | text | Operational: `idle` / `running` / `error` / `complete` |
| `actor` | text | Who/what started it |
| `props` | jsonb | Extension data |
| `started_at` | timestamp | |
| `completed_at` | timestamp | |
| `updated_at` | timestamp | |

**Props by context:**
- Roadmap: `{ roadmap_number }`
- Dev-Team: `{ playbook_id, team_lead_id, user, machine }`
- Bot: `{ bot_name, artifacts_produced, error_message }`

---

#### 3. `steps`
> Replaces: roadmap steps, session_state, pipeline stages

Ordered work items within a workflow.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | PK |
| `workflow_id` | FK → workflows | |
| `ordinal` | integer | Ordering (unique per workflow) |
| `name` | text | Step title/description |
| `state` | text | `not_started` / `in_progress` / `complete` / `error` |
| `step_type` | text | `'auto'` / `'manual'` / specialist domain / bot stage |
| `actor` | text | Who/what is responsible |
| `props` | jsonb | Extension data |
| `started_at` | timestamp | |
| `completed_at` | timestamp | |
| `updated_at` | timestamp | |

**Props by context:**
- Roadmap: `{ complexity, detail }`
- Dev-Team: `{ specialist_domain, output_path, iteration, verifier_feedback }`
- Bot: `{ stage_name }`

---

#### 4. `outputs`
> Replaces: findings, drafts, commit_analyses, topics, interpretations

Work products — the "things produced" by steps/workflows.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | PK |
| `workflow_id` | FK → workflows | |
| `step_id` | FK → steps | Nullable — can attach at workflow level |
| `output_type` | text | Discriminator: `'finding'`, `'draft'`, `'commit_analysis'`, `'topic'`, `'topic_research'`, `'interpretation'`, `'comparison'`, `'reading_list_item'` |
| `title` | text | |
| `status` | text | Output-specific status |
| `severity` | text | Nullable — for findings/priorities |
| `actor` | text | Who/what produced it |
| `content` | text | Nullable — body text (draft content, analysis narrative, etc.) |
| `props` | jsonb | Extension data |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

**Props by output_type:**
- `finding`: `{ category, artifact_path, specialist }`
- `draft`: `{ platform, reasoning, source_artifact, scheduled_for, preview_path }`
- `commit_analysis`: `{ repo_name, commit_hash, commit_message, author, files_changed, insertions, deletions, motivations, decisions, patterns, trade_offs, content_potential }`
- `topic`: `{ narrative, commit_hashes, repos, priority_score, audience_interest, uniqueness, timeliness, depth_potential }`
- `topic_research`: `{ topic_id, research_syllabus, key_concepts, industry_trends, related_work, research_path }`
- `interpretation`: `{ finding_id, specialist }`
- `comparison`: `{ baseline_path, target_path, preservation_pct, regressions_count }`
- `reading_list_item`: `{ url, source, priority }`

---

#### 5. `events`
> Replaces: state_transitions, history_events, runtime_events, health_events, messages

Append-only audit trail.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | PK |
| `workflow_id` | FK → workflows | |
| `step_id` | FK → steps | Nullable |
| `event_type` | text | `'state_transition'`, `'runtime_log'`, `'health_check'`, `'notification'`, `'gate'`, `'retry'`, etc. |
| `actor` | text | |
| `message` | text | |
| `props` | jsonb | Extension data: `{ previous_state, new_state }` for transitions, `{ options }` for gates, `{ reason }` for retries |
| `created_at` | timestamp | |

---

#### 6. `references`
> Replaces: issues, pull_requests, posts, file paths, screenshots

Links to external systems.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | PK |
| `workspace_id` | FK → workspaces | Nullable |
| `workflow_id` | FK → workflows | Nullable |
| `step_id` | FK → steps | Nullable |
| `output_id` | FK → outputs | Nullable |
| `ref_type` | text | `'github_issue'`, `'github_pr'`, `'platform_post'`, `'file_path'`, `'screenshot'`, `'transcript'` |
| `external_number` | integer | Nullable — GitHub issue/PR number |
| `external_id` | text | Nullable — platform post ID |
| `title` | text | Nullable |
| `url` | text | Nullable |
| `status` | text | Nullable — `open/closed/merged` etc. |
| `props` | jsonb | Extension data |
| `created_at` | timestamp | |
| `updated_at` | timestamp | |

---

#### 7. `metrics`
> Replaces: engagement metrics, similarity scores, coverage percentages

Quantitative measurements on references or outputs.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | PK |
| `reference_id` | FK → references | Nullable |
| `output_id` | FK → outputs | Nullable |
| `metric_type` | text | `'likes'`, `'reposts'`, `'impressions'`, `'similarity_pct'`, `'preservation_pct'`, etc. |
| `value` | numeric | |
| `measured_at` | timestamp | |

---

#### 8. `controls`
> Replaces: roadmap controls, gate messages

Commands and decision points.

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | PK |
| `workflow_id` | FK → workflows | |
| `control_type` | text | `'pause'`, `'resume'`, `'stop'`, `'gate'` |
| `payload` | jsonb | Nullable — gate options, etc. |
| `acknowledged` | boolean | Default false |
| `created_at` | timestamp | |

---

#### 9. `state_machines`
> Lifecycle definitions as data

| Table | Columns |
|-------|---------|
| `state_machines` | `id`, `kind` (text), `name` (text) |
| `state_definitions` | `id`, `state_machine_id` (FK), `state_name`, `ordinal`, `is_terminal` (bool) |
| `allowed_transitions` | `id`, `state_machine_id` (FK), `from_state`, `to_state` |

Three machines at init:
1. **roadmap_lifecycle**: Created → Planning → Ready → Implementing → Paused → Complete/Declined/Archived
2. **dev_team_session**: created → interviewing → analyzing → reviewing → building → completed/failed
3. **content_draft**: pending_review → approved → posted / rejected / failed

---

#### 10. `preferences`
> Replaces: ui_preferences, meta

| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | PK |
| `workspace_id` | FK → workspaces | Nullable (null = global) |
| `key` | text | |
| `value` | jsonb | |

---

### Entity Relationship Summary

```
workspaces (container)
  ├── workflows (runs/sessions)      1:many
  │     ├── steps (ordered tasks)    1:many
  │     │     └── outputs            0:many
  │     ├── outputs (work products)  1:many
  │     ├── events (audit log)       1:many
  │     ├── controls (commands)      1:many
  │     └── references               0:many
  ├── references (external links)    0:many
  └── preferences (settings)         0:many

outputs
  ├── references                     0:many
  └── metrics                        0:many

references
  └── metrics                        0:many
```

---

### How Each Project Maps

**Roadmaps** → workspace(kind=roadmap) → workflow per execution → steps with ordinals and complexity → references for issues/PRs → controls for pause/resume/stop → events for state transitions and runtime logs

**Dev-Team** → workspace(kind=dev_team) → workflow per session → steps per specialist run → outputs for findings and interpretations → events for messages and retries → controls with type=gate for decision points → references for artifact paths

**Social Media Bot** → workspace(kind=content_pipeline) → workflow per bot run → steps per pipeline stage → outputs for commit_analyses, topics, drafts → references for platform posts → metrics for engagement data → outputs for reading_list_items
