#!/usr/bin/env python3
"""Scan all git repos listed in config.ts and output JSON with current git status."""

from __future__ import annotations

import json
import os
import re
import subprocess
import sys

BRANCH_WHITELIST = {'gh-pages'}
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(SCRIPT_DIR)
SITE_DIR = os.path.join(BASE_DIR, 'site')
CONFIG_PATH = os.path.join(SITE_DIR, 'src', 'lib', 'config.ts')


def run_git(*args: str, cwd: str | None = None) -> str:
    """Run a git command and return stdout. Returns empty string on failure."""
    result = subprocess.run(
        ['git', *args],
        capture_output=True, text=True, cwd=cwd
    )
    return result.stdout.strip() if result.returncode == 0 else ''


def parse_config() -> dict[str, str]:
    """Parse config.ts to get project id -> relative path mapping."""
    with open(CONFIG_PATH) as f:
        src = f.read()
    projects: dict[str, str] = {}
    for m in re.finditer(r'"([^"]+)"\s*:\s*"([^"]+)"', src):
        key, val = m.group(1), m.group(2)
        if key != 'projectOrder':
            projects[key] = val
    return projects


def get_porcelain_counts(cwd: str) -> dict:
    """Parse git status --porcelain and return granular counts."""
    output = run_git('status', '--porcelain', cwd=cwd)
    if not output:
        return {
            'dirty_count': 0, 'staged_count': 0, 'modified_count': 0,
            'untracked_count': 0, 'deleted_count': 0,
        }
    lines = [l for l in output.split('\n') if l]
    staged = sum(1 for l in lines if l[0] in 'MADRC')
    modified = sum(1 for l in lines if len(l) > 1 and l[1] == 'M')
    untracked = sum(1 for l in lines if l.startswith('??'))
    deleted = sum(1 for l in lines if (len(l) > 1 and l[1] == 'D') or l[0] == 'D')
    return {
        'dirty_count': len(lines),
        'staged_count': staged,
        'modified_count': modified,
        'untracked_count': untracked,
        'deleted_count': deleted,
    }


def get_ahead_behind(branch: str, cwd: str) -> tuple[int, int]:
    """Get ahead/behind counts for the current branch."""
    if branch == 'HEAD':
        return 0, 0
    if branch in ('main', 'master'):
        ahead = run_git('rev-list', '--count', f'origin/{branch}..HEAD', cwd=cwd)
        behind = run_git('rev-list', '--count', f'HEAD..origin/{branch}', cwd=cwd)
    else:
        ahead = run_git('rev-list', '--count', 'main..HEAD', cwd=cwd)
        behind = run_git('rev-list', '--count', 'HEAD..main', cwd=cwd)
    return int(ahead or '0'), int(behind or '0')


def get_sync_note(cwd: str) -> str:
    """Get ahead/behind vs upstream."""
    ahead = run_git('rev-list', '--count', '@{upstream}..HEAD', cwd=cwd)
    behind = run_git('rev-list', '--count', 'HEAD..@{upstream}', cwd=cwd)
    parts = []
    if int(ahead or '0') > 0:
        parts.append(f'{ahead} ahead')
    if int(behind or '0') > 0:
        parts.append(f'{behind} behind')
    return ', '.join(parts)


def filter_whitelist(branches: list[str]) -> list[str]:
    """Remove whitelisted branch names."""
    return [b for b in branches if b not in BRANCH_WHITELIST]


def get_branches(cwd: str) -> tuple[list[str], list[str]]:
    """Get local other branches and remote-only branches, both filtered."""
    # Local branches excluding current
    raw = run_git('branch', '--no-color', cwd=cwd)
    local = []
    for line in raw.split('\n'):
        line = line.strip()
        if not line or line.startswith('*') or line.startswith('+'):
            continue
        local.append(line)
    local = filter_whitelist(local[:10])

    # Fetch and find remote-only
    run_git('fetch', '--all', '--prune', cwd=cwd)
    remote_raw = run_git('branch', '-r', '--no-color', cwd=cwd)
    remote_names: set[str] = set()
    for line in remote_raw.split('\n'):
        line = line.strip()
        if 'HEAD' in line or not line:
            continue
        # Strip remote prefix (origin/, etc)
        name = re.sub(r'^[^/]+/', '', line)
        if name not in ('main', 'master'):
            remote_names.add(name)

    # Get all local branch names
    local_names: set[str] = set()
    for line in run_git('branch', '--no-color', cwd=cwd).split('\n'):
        name = line.lstrip('* +').strip()
        if name:
            local_names.add(name)

    remote_only = filter_whitelist(sorted(remote_names - local_names)[:10])
    return local, remote_only


def get_branch_details(branches: list[str], cwd: str) -> list[dict]:
    """Get commit info for each local branch."""
    details = []
    for branch in branches:
        base = None
        for candidate in ('main', 'master'):
            result = subprocess.run(
                ['git', 'merge-base', candidate, branch],
                capture_output=True, text=True, cwd=cwd
            )
            if result.returncode == 0:
                base = candidate
                break

        if base:
            log = run_git('log', f'{base}..{branch}', '--oneline', '--format=%h %s', '-20', cwd=cwd)
        else:
            log = run_git('log', branch, '--oneline', '--format=%h %s', '-5', cwd=cwd)

        commits = []
        for line in log.split('\n'):
            if not line:
                continue
            parts = line.split(' ', 1)
            if len(parts) == 2:
                commits.append({'hash': parts[0], 'message': parts[1]})

        if not commits:
            summary = 'no unique commits'
        elif len(commits) == 1:
            summary = commits[0]['message']
        else:
            summary = f"{len(commits)} commits — {commits[0]['message']}"

        details.append({
            'name': branch,
            'commits': commits,
            'summary': summary,
            'commitCount': len(commits),
        })
    return details


def get_diff_description(path: str, cwd: str) -> str:
    """Get a meaningful description of what changed in a modified file."""
    diff = ''
    for args in [['git', 'diff', '--', path],
                 ['git', 'diff', '--cached', '--', path],
                 ['git', 'diff', 'HEAD', '--', path]]:
        result = subprocess.run(args, capture_output=True, text=True, cwd=cwd)
        if result.stdout.strip():
            diff = result.stdout.strip()
            break
    if not diff:
        return ''

    added_lines = []
    removed_lines = []
    for line in diff.split('\n'):
        if line.startswith('+') and not line.startswith('+++'):
            content = line[1:].strip()
            if content:
                added_lines.append(content)
        elif line.startswith('-') and not line.startswith('---'):
            content = line[1:].strip()
            if content:
                removed_lines.append(content)

    # Get numstat
    numstat = ''
    for cmd in [['git', 'diff', 'HEAD', '--numstat', '--', path],
                ['git', 'diff', '--numstat', '--', path]]:
        result = subprocess.run(cmd, capture_output=True, text=True, cwd=cwd)
        if result.stdout.strip():
            numstat = result.stdout.strip()
            break

    count_str = ''
    if numstat:
        parts = numstat.split('\t')
        a = parts[0] if parts[0] != '-' else '?'
        r = parts[1] if len(parts) > 1 and parts[1] != '-' else '?'
        count_str = f'+{a}/-{r}'

    desc_parts = []
    if count_str:
        desc_parts.append(count_str)
    if added_lines:
        sample = added_lines[0][:60]
        desc_parts.append(f"{'changed' if removed_lines else 'added'}: {sample}")
    elif removed_lines:
        desc_parts.append(f'removed: {removed_lines[0][:60]}')

    return ' \u2014 '.join(desc_parts)


def get_new_file_description(filepath: str, cwd: str) -> str:
    """Describe a new/untracked file."""
    full = os.path.join(cwd, filepath)
    if os.path.isdir(full):
        try:
            count = sum(1 for _ in os.scandir(full))
            return f'new directory ({count} items)'
        except Exception:
            return 'new directory'
    if not os.path.isfile(full):
        return 'new file'
    try:
        size = os.path.getsize(full)
        if size == 0:
            return 'empty file'
        with open(full, 'r', errors='ignore') as f:
            first = ''
            for raw_line in f:
                stripped = raw_line.strip()
                if not stripped or stripped in ('---', '"""', "'''"):
                    continue
                for prefix in ('#!', '#', '//', '/*', '<!--', '*'):
                    stripped = stripped.lstrip(prefix).strip()
                if stripped:
                    first = stripped
                    break
        if first:
            desc = first[:70] + ('...' if len(first) > 70 else '')
            size_str = f'{size}B' if size < 1024 else f'{size // 1024}KB'
            return f'{size_str} \u2014 {desc}'
        size_str = f'{size}B' if size < 1024 else f'{size // 1024}KB'
        return f'new file ({size_str})'
    except Exception:
        return 'new file'


def get_modified_files(cwd: str) -> list[dict]:
    """Get modified file details with diff summaries."""
    labels = {
        'M': 'modified', 'A': 'added', 'D': 'deleted', 'R': 'renamed',
        'C': 'copied', '??': 'untracked', 'MM': 'modified',
        'AM': 'added+modified', 'UU': 'conflict',
    }
    output = run_git('status', '--porcelain', cwd=cwd)
    files = []
    for line in output.split('\n')[:20]:
        if not line:
            continue
        code = line[:2].strip()
        filepath = line[3:]
        change = labels.get(code, code)
        if change == 'deleted':
            summary = 'file removed'
        elif change == 'untracked':
            summary = get_new_file_description(filepath, cwd)
        elif change in ('modified', 'added', 'added+modified'):
            summary = get_diff_description(filepath, cwd)
        elif change == 'renamed':
            summary = 'file renamed'
        else:
            summary = ''
        files.append({'path': filepath, 'change': change, 'summary': summary})
    return files


def detect_tech_stack(cwd: str) -> list[str]:
    """Detect tech stack from marker files."""
    tech = []
    checks = [
        ('Package.swift', 'Swift'),
        ('build.gradle.kts', 'Kotlin'), ('build.gradle', 'Kotlin'),
        ('package.json', 'Node.js'),
        ('requirements.txt', 'Python'), ('pyproject.toml', 'Python'),
        ('Cargo.toml', 'Rust'),
        ('Gemfile', 'Ruby'),
        ('go.mod', 'Go'),
        ('tsconfig.json', 'TypeScript'),
    ]
    seen: set[str] = set()
    for filename, label in checks:
        if label not in seen and os.path.isfile(os.path.join(cwd, filename)):
            tech.append(label)
            seen.add(label)

    try:
        for entry in os.listdir(cwd):
            if entry.endswith('.xcodeproj') or entry.endswith('.xcworkspace'):
                if 'Xcode' not in seen:
                    tech.append('Xcode')
                    seen.add('Xcode')
                break
    except OSError:
        pass

    if os.path.isdir(os.path.join(cwd, '.claude')):
        tech.append('Claude Code')

    return tech


def get_latest_commits(cwd: str) -> list[dict]:
    """Get last 5 commits as list of {hash, message}."""
    log = run_git('log', '--oneline', '-5', '--format=%h %s', cwd=cwd)
    commits = []
    for line in log.split('\n'):
        if not line:
            continue
        parts = line.split(' ', 1)
        if len(parts) == 2:
            commits.append({'hash': parts[0], 'message': parts[1]})
    return commits


def scan_project(project_id: str, rel_path: str) -> dict | None:
    """Scan a single git repo and return its status dict."""
    resolved = os.path.normpath(os.path.join(BASE_DIR, rel_path))
    if not os.path.isdir(os.path.join(resolved, '.git')):
        return None

    branch = run_git('rev-parse', '--abbrev-ref', 'HEAD', cwd=resolved) or 'unknown'
    counts = get_porcelain_counts(resolved)
    ahead, behind = get_ahead_behind(branch, resolved)
    local_branches, remote_only = get_branches(resolved)
    branch_details = get_branch_details(local_branches, resolved) if local_branches else []
    modified_files = get_modified_files(resolved)
    latest_work_lines = run_git('log', '--oneline', '-3', '--format=%s', cwd=resolved)
    latest_work = '. '.join(l for l in latest_work_lines.split('\n') if l) if latest_work_lines else ''

    # Combine branches: local names + remote-prefixed
    open_branches = list(local_branches)
    for rb in remote_only:
        open_branches.append(f'remote: {rb}')

    uncommitted = counts['dirty_count'] > 0

    return {
        'id': project_id,
        'branch': branch,
        'uncommitted': uncommitted,
        'uncommittedDetail': f"{counts['dirty_count']} changed files" if uncommitted else '',
        'stagedCount': counts['staged_count'],
        'modifiedCount': counts['modified_count'],
        'untrackedCount': counts['untracked_count'],
        'deletedCount': counts['deleted_count'],
        'aheadCount': ahead,
        'behindCount': behind,
        'openBranches': open_branches,
        'branchDetails': branch_details,
        'latestWork': latest_work,
        'latestCommits': get_latest_commits(resolved),
        'techStack': detect_tech_stack(resolved),
        'syncNote': get_sync_note(resolved),
        'modifiedFiles': modified_files,
    }


def main():
    # Discover new/moved/removed projects first
    discover_script = os.path.join(SCRIPT_DIR, 'discover.py')
    if os.path.isfile(discover_script):
        subprocess.run([sys.executable, discover_script], stderr=sys.stderr)

    projects = parse_config()
    results = []
    for pid, rel_path in projects.items():
        result = scan_project(pid, rel_path)
        if result:
            results.append(result)

    print(json.dumps(results, indent=2))


if __name__ == '__main__':
    main()
