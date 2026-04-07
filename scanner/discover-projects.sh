#!/bin/bash
# Discovers git repos under ~/projects and updates config.js with new/moved projects.
# Removes entries for repos that no longer exist.
# Preserves projectOrder (appends new projects at the end).
# Usage: ./discover-projects.sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BASE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIG="$BASE_DIR/site/src/lib/config.js"
PROJECTS_ROOT="$HOME/projects"

python3 - "$CONFIG" "$PROJECTS_ROOT" "$BASE_DIR" <<'PYEOF'
import sys, re, os, json

config_path = sys.argv[1]
projects_root = sys.argv[2]
base_dir = sys.argv[3]

# Discover all git repos under ~/projects/*/
discovered = {}
for category in sorted(os.listdir(projects_root)):
    category_path = os.path.join(projects_root, category)
    if not os.path.isdir(category_path) or category.startswith('.'):
        continue
    for dirname in sorted(os.listdir(category_path)):
        repo_path = os.path.join(category_path, dirname)
        if not os.path.isdir(os.path.join(repo_path, '.git')):
            continue
        relpath = f"../../{category}/{dirname}"
        # Generate id: lowercase, replace dots/spaces with dashes
        pid = dirname.lower().replace(' ', '-')
        # Handle case-sensitive dir names that map to same id
        if pid in discovered:
            continue
        discovered[pid] = relpath

# Always include self and root
discovered["my-projects"] = "."
discovered["projects-root"] = "../.."

# Read current config
with open(config_path) as f:
    src = f.read()

# Parse current projects
current_projects = {}
proj_match = re.search(r'"projects"\s*:\s*\{([^}]+)\}', src, re.DOTALL)
if proj_match:
    for m in re.finditer(r'"([^"]+)"\s*:\s*"([^"]+)"', proj_match.group(1)):
        current_projects[m.group(1)] = m.group(2)

# Parse current order
current_order = []
order_match = re.search(r'"projectOrder"\s*:\s*\[([^\]]+)\]', src, re.DOTALL)
if order_match:
    for m in re.finditer(r'"([^"]+)"', order_match.group(1)):
        current_order.append(m.group(1))

# Match discovered repos to existing config entries by path
# This handles renamed ids (e.g. dir "Hairball" -> id "hairball")
path_to_current_id = {v: k for k, v in current_projects.items()}

new_projects = {}
added = []
moved = []
removed = []

for pid, path in discovered.items():
    # Check if this path already exists under a different id
    existing_id = path_to_current_id.get(path)
    if existing_id and existing_id != pid:
        # Keep the existing id to preserve references
        new_projects[existing_id] = path
    elif pid in current_projects:
        if current_projects[pid] != path:
            moved.append(f"  moved: {pid} ({current_projects[pid]} -> {path})")
        new_projects[pid] = path
    elif existing_id:
        new_projects[existing_id] = path
    else:
        added.append(f"  added: {pid} ({path})")
        new_projects[pid] = path

for pid, path in current_projects.items():
    if pid not in new_projects:
        # Check if the path still exists on disk
        abs_path = os.path.normpath(os.path.join(base_dir, path))
        if os.path.isdir(abs_path):
            # Path exists but wasn't discovered (maybe not a git repo)
            new_projects[pid] = path
        else:
            removed.append(f"  removed: {pid} ({path})")

# Update order: keep existing, append new at end
new_order = [pid for pid in current_order if pid in new_projects]
for pid in sorted(new_projects.keys()):
    if pid not in new_order and pid != 'projects-root':
        new_order.append(pid)

# Write updated config
lines = ['export const APP_CONFIG = {', '  "projects": {']
sorted_projects = sorted(new_projects.items())
for i, (pid, path) in enumerate(sorted_projects):
    comma = ',' if i < len(sorted_projects) - 1 else ''
    lines.append(f'    "{pid}": "{path}"{comma}')
lines.append('  },')
lines.append('  "projectOrder": [')
for i, pid in enumerate(new_order):
    comma = ',' if i < len(new_order) - 1 else ''
    lines.append(f'    "{pid}"{comma}')
lines.append('  ]')
lines.append('};')
lines.append('')

with open(config_path, 'w') as f:
    f.write('\n'.join(lines))

# Report
changes = added + moved + removed
if changes:
    print("Config updated:")
    for c in changes:
        print(c)
else:
    print("No changes detected.")
PYEOF
