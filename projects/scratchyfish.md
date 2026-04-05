# Scratchy Fish

**Progressive jazz rock band website — scratchyfish.com**

## Tech Stack

- Jekyll 4.3 (Ruby static site generator)
- HTML5/CSS3/vanilla JS — no frontend framework
- Google Fonts (Oswald, Open Sans)
- GitHub Pages hosting
- Dark theme with red accent (#ff4444)

## Architecture

Data-driven Jekyll site. All content (members, albums, shows, photos, videos, social links) stored in JSON files under `_data/`. Liquid templates render pages from data. Responsive, mobile-first design with fixed header.

## Pages & Features

- **Home** — Latest news, albums, upcoming shows
- **Bio** — Member cards with photo/person toggle and silly/serious bio toggle
- **Music** — Albums with Spotify, YouTube, Bandcamp embeds + track listings
- **Photos** — Full-screen lightbox gallery (keyboard/swipe navigation)
- **Shows** — Upcoming and past shows
- **Videos** — YouTube embed collection
- **Friends** — Related bands/artists
- **News** — Blog posts (14 posts)

## Band Members

Phillip Bernosky (keys), Mike Fullerton (drums), Mike McKenna (guitar), Anton Ross (sax), Ian Schaeffer (bass), Steve Sinclair (sax)

## Music

- "Attack of the Banana Slugs" (2023) — 5 tracks
- "Live at Art Boutiki" (2024) — 46-minute live recording

## Current State

- **Branch:** `main` (up to date with origin)
- **Uncommitted work:** Modified `.gitignore`
- **No open branches**

## Latest Work

- Downloaded all external images to local assets
- Added Phil Bernosky serious bio and person photo with dog/person toggle
- Layout refinements (full-width galleries, card heights)
- Multi-language support (translate links for bio content)

## How to Run

```bash
bundle install
bundle exec jekyll serve    # http://localhost:4000
bundle exec jekyll build    # Outputs to _site/
```

## Key Links

- **Path:** `/Users/mfullerton/projects/personal/scratchyfish.com/`
- **Domain:** scratchyfish.com (GitHub Pages)
- **Size:** 104MB (mostly images)
