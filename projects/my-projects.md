# My Projects

**Cross-project documentation and unified architecture specs**

## Tech Stack

- Markdown documentation
- Git

## Purpose

Central repo for documentation that spans multiple personal projects. Currently contains design specifications for unifying data across three agentic systems.

## Key Documents

### `docs/unified-data-abstraction.md`
Design for consolidating three separate SQLite databases into a shared web backend API:
- **Roadmaps System** — Multi-skill workflow for planning and implementing features
- **Dev-Team** — Multi-agent product discovery/analysis with 20+ specialist agents
- **Social Media Bot** — Content generation and multi-platform publishing

Proposes 10 core entity types (workspaces, workflows, steps, outputs, events, references, metrics, controls, state_machines, preferences) with JSONB props columns and discriminator columns for project-specific data.

### `docs/local-file-writing-projects.md`
Documents what each project writes where — paths, output locations, database schemas. Captures the current data architecture before unification.

## Current State

- **Branch:** `main`
- **Untracked files:** `.gitignore`, `docs/`
- **No commits yet** (fresh repo)

## Key Links

- **Path:** `/Users/mfullerton/projects/active/my-projects/`
- **Related:** social-media-bot, cat-herding (covered in unified data spec)
