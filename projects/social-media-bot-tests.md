# Social Media Bot Tests

**Integration test harness for the social-media-bot pipeline**

## Tech Stack

- TypeScript (ES2022)
- Vitest 3.2.1 (600s timeout, single-threaded, verbose)
- better-sqlite3 for direct DB assertions
- Runs against the Python bot via subprocess

## Architecture

Creates isolated test environments in `/tmp`, seeds them with config/data, executes Python bot commands via subprocess (`python -m coordinator.cli`), then asserts on database state, file artifacts, and JSONL event logs. Each test gets a fresh temp directory and empty database.

## Test Suites (7 files, ~500 lines)

| Suite | Tests | Coverage |
|-------|-------|----------|
| smoke | 3 | Basic bot execution, event logging, DB recording |
| full-pipeline | 2 | End-to-end: aggregate → drafts → approve → post |
| approval-flow | 6 | CLI: queue, approve, reject, show, approve-all |
| auto-poster | 5 | Posting: due dates, platform URLs, scheduling |
| draft-creator | 5 | Draft fields, platform validation, content limits |
| activity-aggregator | 4 | Research artifacts, git repo analysis |
| health-backoff | 3 | Failure tracking, platform backoff after 3 failures |

## Current State

- **Branch:** `main` (1 commit ahead of origin)
- **Many feature branches** — Used for testing Claude Code agent automation workflows (AllAuto3Step, SingleStep, MergeTest, etc.)
- **No TODOs** — Maintenance-complete

## How to Run

```bash
npm test                # All tests
npm run test:smoke      # Smoke tests only
npm run test:fast       # Fast tests (approval, poster, health)
npm run test:watch      # Watch mode
npm run clean           # Remove /tmp/smbot-test-* dirs
```

**Requires:** Python bot repo at `/Users/mfullerton/projects/active/social-media-bot` with venv

## Key Links

- **Path:** `/Users/mfullerton/projects/tests/social-media-bot-tests/`
- **Tests for:** social-media-bot
