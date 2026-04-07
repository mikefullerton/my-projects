#!/usr/bin/env python3
"""Discover git repos under ~/projects and update config.ts."""

from __future__ import annotations

import os
import re
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(SCRIPT_DIR)
CONFIG_PATH = os.path.join(BASE_DIR, 'site', 'src', 'lib', 'config.ts')
PROJECTS_ROOT = os.path.expanduser('~/projects')


def discover_repos() -> dict[str, str]:
    """Walk ~/projects/*/ for git repos, return id -> relative path."""
    discovered: dict[str, str] = {}
    for category in sorted(os.listdir(PROJECTS_ROOT)):
        category_path = os.path.join(PROJECTS_ROOT, category)
        if not os.path.isdir(category_path) or category.startswith('.'):
            continue
        for dirname in sorted(os.listdir(category_path)):
            repo_path = os.path.join(category_path, dirname)
            if not os.path.isdir(os.path.join(repo_path, '.git')):
                continue
            if category == 'tests' or dirname.endswith('-tests'):
                continue
            relpath = f'../../{category}/{dirname}'
            pid = dirname.lower().replace(' ', '-')
            if pid not in discovered:
                discovered[pid] = relpath
    return discovered


def parse_config() -> tuple[dict[str, str], list[str]]:
    """Parse current config.ts projects and order."""
    with open(CONFIG_PATH) as f:
        src = f.read()

    current_projects: dict[str, str] = {}
    proj_match = re.search(r'"projects"\s*:\s*\{([^}]+)\}', src, re.DOTALL)
    if proj_match:
        for m in re.finditer(r'"([^"]+)"\s*:\s*"([^"]+)"', proj_match.group(1)):
            current_projects[m.group(1)] = m.group(2)

    current_order: list[str] = []
    order_match = re.search(r'"projectOrder"\s*:\s*\[([^\]]+)\]', src, re.DOTALL)
    if order_match:
        for m in re.finditer(r'"([^"]+)"', order_match.group(1)):
            current_order.append(m.group(1))

    return current_projects, current_order


def reconcile(
    discovered: dict[str, str],
    current: dict[str, str],
    current_order: list[str],
) -> tuple[dict[str, str], list[str], list[str]]:
    """Merge discovered repos with existing config. Returns (projects, order, changes)."""
    path_to_current_id = {v: k for k, v in current.items()}
    new_projects: dict[str, str] = {}
    changes: list[str] = []

    for pid, path in discovered.items():
        existing_id = path_to_current_id.get(path)
        if existing_id and existing_id != pid:
            new_projects[existing_id] = path
        elif pid in current:
            if current[pid] != path:
                changes.append(f'  moved: {pid} ({current[pid]} -> {path})')
            new_projects[pid] = path
        elif existing_id:
            new_projects[existing_id] = path
        else:
            changes.append(f'  added: {pid} ({path})')
            new_projects[pid] = path

    for pid, path in current.items():
        if pid not in new_projects:
            if pid.endswith('-tests') or pid.endswith('-test') or '/tests/' in path:
                changes.append(f'  removed: {pid} ({path})')
                continue
            abs_path = os.path.normpath(os.path.join(BASE_DIR, path))
            if os.path.isdir(os.path.join(abs_path, '.git')):
                new_projects[pid] = path
            else:
                changes.append(f'  removed: {pid} ({path})')

    new_order = [pid for pid in current_order if pid in new_projects]
    for pid in sorted(new_projects.keys()):
        if pid not in new_order and pid != 'projects-root':
            new_order.append(pid)

    return new_projects, new_order, changes


def write_config(projects: dict[str, str], order: list[str]) -> None:
    """Write updated config.ts."""
    lines = ['import type { AppConfig } from \'../types.ts\';', '',
             'export const APP_CONFIG: AppConfig = {', '  "projects": {']
    sorted_projects = sorted(projects.items())
    for i, (pid, path) in enumerate(sorted_projects):
        comma = ',' if i < len(sorted_projects) - 1 else ''
        lines.append(f'    "{pid}": "{path}"{comma}')
    lines.append('  },')
    lines.append('  "projectOrder": [')
    for i, pid in enumerate(order):
        comma = ',' if i < len(order) - 1 else ''
        lines.append(f'    "{pid}"{comma}')
    lines.append('  ]')
    lines.append('};')
    lines.append('')
    with open(CONFIG_PATH, 'w') as f:
        f.write('\n'.join(lines))


def main():
    discovered = discover_repos()
    current, current_order = parse_config()
    new_projects, new_order, changes = reconcile(discovered, current, current_order)
    write_config(new_projects, new_order)
    if changes:
        print('Config updated:', file=sys.stderr)
        for c in changes:
            print(c, file=sys.stderr)
    else:
        print('No changes detected.', file=sys.stderr)


if __name__ == '__main__':
    main()
