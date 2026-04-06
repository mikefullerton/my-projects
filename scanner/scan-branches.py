#!/usr/bin/env python3
"""Scan open branches in current git repo, output JSON with summary and commits per branch."""
import json, subprocess, sys

def get_merge_base(branch):
    """Find the best base branch (main/master) to diff against."""
    for base in ['main', 'master']:
        result = subprocess.run(
            ['git', 'merge-base', base, branch],
            capture_output=True, text=True
        )
        if result.returncode == 0:
            return base
    return None

def get_branch_info(branch):
    """Get commits unique to this branch and a summary."""
    branch = branch.strip()
    if not branch:
        return None

    base = get_merge_base(branch)
    commits = []

    if base:
        # Commits on this branch not on base
        result = subprocess.run(
            ['git', 'log', f'{base}..{branch}', '--oneline', '--format=%h %s', '-20'],
            capture_output=True, text=True
        )
        for line in result.stdout.strip().split('\n'):
            if not line:
                continue
            parts = line.split(' ', 1)
            if len(parts) == 2:
                commits.append({'hash': parts[0], 'message': parts[1]})
    else:
        # No common base found, just show recent commits
        result = subprocess.run(
            ['git', 'log', branch, '--oneline', '--format=%h %s', '-5'],
            capture_output=True, text=True
        )
        for line in result.stdout.strip().split('\n'):
            if not line:
                continue
            parts = line.split(' ', 1)
            if len(parts) == 2:
                commits.append({'hash': parts[0], 'message': parts[1]})

    # Build summary from commits
    if len(commits) == 0:
        summary = 'no unique commits'
    elif len(commits) == 1:
        summary = commits[0]['message']
    else:
        # Summarize: count + first commit message
        summary = f"{len(commits)} commits — {commits[0]['message']}"

    return {
        'name': branch,
        'commits': commits,
        'summary': summary,
        'commitCount': len(commits),
    }

# Read branch names from stdin (one per line)
branches = []
for line in sys.stdin:
    line = line.strip()
    if not line:
        continue
    info = get_branch_info(line)
    if info:
        branches.append(info)

print(json.dumps(branches))
