#!/bin/bash
# Scans all git repos in config.js and outputs updated seed data entries.
# Usage: ./scan-projects.sh > scan-results.json

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "["

first=true
# Parse config.js to get project id and path pairs
# Extract lines like: "cat-herding": "../../personal/cat-herding",
grep -E '^\s+"[^"]+"\s*:\s*"[^"]+"\s*,?\s*$' "$BASE_DIR/config.js" | \
  grep -v 'projectOrder' | \
  sed 's/[",]//g' | \
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

    # Uncommitted changes
    uncommitted="false"
    uncommitted_detail=""
    dirty_count=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
    if [ "$dirty_count" -gt 0 ]; then
      uncommitted="true"
      uncommitted_detail="$dirty_count modified/untracked files"
    fi

    # Open branches (excluding current)
    branches_json="[]"
    other_branches=$(git branch --no-color 2>/dev/null | grep -v '^\*' | sed 's/^  //' | head -5)
    if [ -n "$other_branches" ]; then
      branches_json="["
      bfirst=true
      while IFS= read -r b; do
        if [ "$bfirst" = true ]; then bfirst=false; else branches_json="$branches_json,"; fi
        branches_json="$branches_json\"$b\""
      done <<< "$other_branches"
      branches_json="$branches_json]"
    fi

    # Recent work (last 3 commits)
    latest_work=$(git log --oneline -3 --format="%s" 2>/dev/null | tr '\n' '. ' | sed 's/\. $//')

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

    # Escape latest_work for JSON
    latest_escaped=$(echo "$latest_work" | sed 's/"/\\"/g' | sed "s/'/\\\\'/g")
    uncommitted_escaped=$(echo "$uncommitted_detail" | sed 's/"/\\"/g')

    cat <<ENTRY
  {
    "id": "$id",
    "branch": "$branch",
    "uncommitted": $uncommitted,
    "uncommittedDetail": "$uncommitted_escaped",
    "openBranches": $branches_json,
    "latestWork": "$latest_escaped",
    "techStack": $tech_json,
    "syncNote": "$sync_note"
  }
ENTRY

    cd "$BASE_DIR"
  done

echo ""
echo "]"
