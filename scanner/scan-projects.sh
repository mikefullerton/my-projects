#!/bin/bash
# Scans all git repos in config.js and outputs updated seed data entries.
# Usage: ./scan-projects.sh > scan-results.json

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BASE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SITE_DIR="$BASE_DIR/site"

echo "["

first=true
# Parse config.js to get project id and path pairs
# Extract lines like: "cat-herding": "../../personal/cat-herding",
grep -E '^\s+"[^"]+"\s*:\s*"[^"]+"\s*,?\s*$' "$SITE_DIR/config.js" | \
  grep -v 'projectOrder' | \
  sed 's/[",:]//g' | \
  while read -r id path; do
    # Resolve path
    resolved="$BASE_DIR/$path"
    if [ ! -d "$resolved/.git" ] && [ ! -d "$resolved" ]; then
      continue
    fi

    # Skip if not a git repo
    if [ ! -d "$resolved/.git" ]; then
      continue
    fi

    cd "$resolved" 2>/dev/null || continue

    # Git info
    branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")

    # Uncommitted changes — granular counts
    porcelain=$(git status --porcelain 2>/dev/null || true)
    if [ -z "$porcelain" ]; then
      dirty_count=0; staged_count=0; modified_count=0; untracked_count=0; deleted_count=0
    else
      dirty_count=$(echo "$porcelain" | wc -l | tr -d ' ')
      staged_count=$(echo "$porcelain" | grep -c '^[MADRC]' || true)
      modified_count=$(echo "$porcelain" | grep -c '^.M' || true)
      untracked_count=$(echo "$porcelain" | grep -c '^??' || true)
      deleted_count=$(echo "$porcelain" | grep -c '^.D\|^D' || true)
    fi

    uncommitted="false"
    uncommitted_detail=""
    if [ "$dirty_count" -gt 0 ]; then
      uncommitted="true"
      uncommitted_detail="$dirty_count changed files"
    fi

    # Ahead/behind
    ahead_count="0"
    behind_count="0"
    if [ "$branch" != "HEAD" ]; then
      if [ "$branch" = "main" ] || [ "$branch" = "master" ]; then
        ahead_count=$(git rev-list --count "origin/$branch..HEAD" 2>/dev/null || echo "0")
        behind_count=$(git rev-list --count "HEAD..origin/$branch" 2>/dev/null || echo "0")
      else
        ahead_count=$(git rev-list --count "main..HEAD" 2>/dev/null || echo "0")
        behind_count=$(git rev-list --count "HEAD..main" 2>/dev/null || echo "0")
      fi
    fi

    # Modified files with change type and diff summary (cap at 20)
    modified_json=$(python3 "$SCRIPT_DIR/scan-modified.py" 2>/dev/null)

    # Open branches (excluding current) — names only for backward compat
    branches_json="[]"
    branches_detail_json="[]"
    other_branches=$(git branch --no-color 2>/dev/null | grep -v '^\*' | sed 's/^[[:space:]]*//' | sed 's/^+ //' | head -10)
    if [ -n "$other_branches" ]; then
      branches_json=$(echo "$other_branches" | python3 -c "import json,sys; print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))")
      branches_detail_json=$(echo "$other_branches" | python3 "$SCRIPT_DIR/scan-branches.py" 2>/dev/null)
    fi

    # Recent work (last 3 commits)
    latest_work=$(git log --oneline -3 --format="%s" 2>/dev/null | tr '\n' '. ' | sed 's/\. $//')
    latest_commits_json=$(git log --oneline -5 --format="%h %s" 2>/dev/null | python3 -c "
import json, sys
commits = []
for line in sys.stdin:
    line = line.strip()
    if not line: continue
    parts = line.split(' ', 1)
    if len(parts) == 2:
        commits.append({'hash': parts[0], 'message': parts[1]})
print(json.dumps(commits))
" 2>/dev/null)

    # Tech stack detection
    tech=()
    [ -f "Package.swift" ] && tech+=("Swift")
    [ -f "build.gradle.kts" ] || [ -f "build.gradle" ] && tech+=("Kotlin")
    [ -f "package.json" ] && tech+=("Node.js")
    [ -f "requirements.txt" ] || [ -f "pyproject.toml" ] && tech+=("Python")
    [ -f "Cargo.toml" ] && tech+=("Rust")
    [ -f "Gemfile" ] && tech+=("Ruby")
    [ -f "go.mod" ] && tech+=("Go")
    [ -f "tsconfig.json" ] && tech+=("TypeScript")
    ls *.xcodeproj >/dev/null 2>&1 && tech+=("Xcode")
    ls *.xcworkspace >/dev/null 2>&1 && tech+=("Xcode")
    [ -d ".claude" ] && tech+=("Claude Code")

    # Check for macOS/iOS
    if grep -q "import AppKit\|import Cocoa\|NSApplication" -r --include="*.swift" . 2>/dev/null | head -1 >/dev/null 2>&1; then
      tech+=("macOS")
    fi
    if grep -q "import UIKit\|import SwiftUI" -r --include="*.swift" . 2>/dev/null | head -1 >/dev/null 2>&1; then
      tech+=("iOS")
    fi

    tech_json="[]"
    if [ ${#tech[@]} -gt 0 ]; then
      tech_json="["
      tfirst=true
      for t in "${tech[@]}"; do
        if [ "$tfirst" = true ]; then tfirst=false; else tech_json="$tech_json,"; fi
        tech_json="$tech_json\"$t\""
      done
      tech_json="$tech_json]"
    fi

    # Remote sync check
    ahead=$(git rev-list --count @{upstream}..HEAD 2>/dev/null || echo "0")
    behind=$(git rev-list --count HEAD..@{upstream} 2>/dev/null || echo "0")
    sync_note=""
    if [ "$ahead" -gt 0 ]; then sync_note="$ahead ahead"; fi
    if [ "$behind" -gt 0 ]; then
      if [ -n "$sync_note" ]; then sync_note="$sync_note, "; fi
      sync_note="${sync_note}$behind behind"
    fi

    if [ "$first" = true ]; then first=false; else echo ","; fi

    # Use python3 for safe JSON escaping
    json_escape() { python3 -c "import json,sys; print(json.dumps(sys.stdin.read().strip()))"; }
    latest_escaped=$(echo "$latest_work" | json_escape)
    uncommitted_escaped=$(echo "$uncommitted_detail" | json_escape)
    branch_escaped=$(echo "$branch" | json_escape)
    sync_escaped=$(echo "$sync_note" | json_escape)

    cat <<ENTRY
  {
    "id": "$id",
    "branch": $branch_escaped,
    "uncommitted": $uncommitted,
    "uncommittedDetail": $uncommitted_escaped,
    "stagedCount": $staged_count,
    "modifiedCount": $modified_count,
    "untrackedCount": $untracked_count,
    "deletedCount": $deleted_count,
    "aheadCount": $ahead_count,
    "behindCount": $behind_count,
    "openBranches": $branches_json,
    "branchDetails": $branches_detail_json,
    "latestWork": $latest_escaped,
    "latestCommits": $latest_commits_json,
    "techStack": $tech_json,
    "syncNote": $sync_escaped,
    "modifiedFiles": $modified_json
  }
ENTRY

    cd "$BASE_DIR"
  done

echo ""
echo "]"
