# Social Media Bot

**AI content pipeline: analyze git commits, research topics, generate social media posts**

## Tech Stack

- **Language:** Python 3.12+
- **CLI:** Click-based coordinator
- **AI:** Claude Code agents via claude-agent-sdk (bots are markdown prompt files)
- **Database:** SQLite with WAL mode
- **Platforms:** X (tweepy), LinkedIn (requests), Bluesky (atproto), Substack (python-substack)
- **Credentials:** macOS Keychain (keyring)
- **Data:** iCloud Documents folder (cross-device access)

## Architecture

12-bot sequential pipeline, each feeding the next:

```
ANALYSIS           RESEARCH               OUTPUT                 PUBLISHING
commit-analyzer  → online-researcher    → draft-post-creator   → auto-poster
topic-organizer  → live-event-tracker   → reading-list-creator → engagement-analyst
topic-researcher → competitor-tracker   → dev-process-advisor
                   interview-extractor
```

The commit analyzer reads actual diffs (not just messages) to understand *why* changes were made. All drafts require human approval before posting. Per-run data stored in timestamped directories with live HTML dashboards.

## Key Design Decisions

- **Bots as markdown prompts** — Easy iteration, no redeployment for reasoning changes
- **Editorial control** — No autonomous publishing; all drafts need approval
- **Deep diff analysis** — Reads code changes to extract motivations, patterns, trade-offs
- **Engagement feedback loop** — Post metrics feed back into future drafting
- **Per-run isolation** — Immutable, resumable run records with full audit trail

## Current State

- **Branch:** `main` (no open feature branches)
- **136 unit tests** (pytest with asyncio)
- **Voice guide:** TBD (brand voice not yet defined)
- **Search provider:** Stubbed (not yet connected to live web search)

## Latest Work (April 2025)

- Per-run data storage with live HTML dashboards (auto-refresh every 5s)
- Deep activity pipeline: commit-by-commit analysis with topic research
- Interview system and updated bot config
- Moved data directory to iCloud for cross-device access
- Added engagement feedback loops, dev process advisor, reading list creator

## How to Run

```bash
pip install -e .
smbot setup-credentials          # Store API keys in Keychain
smbot run                        # Full pipeline
smbot run --bot deep-commit-analyzer  # Single bot
smbot queue                      # List pending drafts
smbot approve <id>               # Approve for posting
smbot status                     # Recent run statuses
smbot actionable --open          # Reading list + dev recommendations
```

**Data location:** `~/Library/Mobile Documents/com~apple~CloudDocs/social-media-bot/` (override with `SMBOT_DATA_DIR`)

## Key Links

- **Path:** `/Users/mfullerton/projects/active/social-media-bot/`
- **Tests:** `/Users/mfullerton/projects/tests/social-media-bot-tests/`
- **Related:** my-projects (unified data architecture spec)
