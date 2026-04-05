# Name Craft

**AI-powered silly character name generator for children's books**

## Tech Stack

- **Backend:** Flask 3.0+, Python 3, Anthropic Claude API (claude-sonnet-4-20250514)
- **Frontend:** Single-page HTML/CSS/JS app (26KB)
- **Data:** SQLite with WAL mode (word pools database)
- **Streaming:** Server-Sent Events for real-time name generation display

## Architecture

Users answer 9 playful questions about a character (genre, creature type, personality scales, smell). Responses feed into a Claude AI skill prompt that generates 3 silly names using sound symbolism (bouba-kiki effect), alliteration rules, and genre templates. Results stream token-by-token via SSE.

Word pools (~270 words) stored in SQLite, seeded from markdown reference, categorized by phonetic quality (Soft & Round, Hard & Sharp, Bouncy & Silly, Sleek & Strange).

## API Endpoints

- `POST /api/generate` — Submit questionnaire answers (202, spawns daemon thread)
- `GET /api/events/stream?client_id=<uuid>` — SSE stream (generating, token, complete, error)
- `GET /api/health` — Health check
- `GET /` — Serves SPA

## Current State

- **Branch:** `main`
- **Core system:** Complete and functional
- **Mock mode:** Works without API key (canned responses for frontend testing)
- **Many test branches:** Used for testing Claude Code agent automation (AllAuto3Step, SingleStep, MergeTest, etc.)

## Latest Work (April 2025)

- Added silly words pool to name-components reference
- Word builder database scaffolding complete
- Many automated test fixture branches (suggests CI/CD integration testing)

## How to Run

```bash
pip install -r requirements.txt
python -m services.server          # Starts on port 8765
# Or: NAME_CRAFT_PORT=9000 python -m services.server

# Word builder
python -m scripts.word_builder     # Show word counts
python -m scripts.word_builder.seed_db  # Rebuild DB
```

**Env vars:** `ANTHROPIC_API_KEY` (optional — falls back to mock mode), `NAME_CRAFT_PORT`

## Key Links

- **Path:** `/Users/mfullerton/projects/personal/name-craft/`
