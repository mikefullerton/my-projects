#!/usr/bin/env python3
"""Scan modified files in current git repo, output JSON with change type and description."""
import json, subprocess, os

status = subprocess.run(['git', 'status', '--porcelain'], capture_output=True, text=True).stdout
files = []
labels = {
    'M': 'modified', 'A': 'added', 'D': 'deleted', 'R': 'renamed',
    'C': 'copied', '??': 'untracked', 'MM': 'modified',
    'AM': 'added+modified', 'UU': 'conflict',
}


def get_diff_description(path):
    """Get a meaningful description of what changed in a modified file."""
    # Try to get the actual diff lines
    for diff_cmd in [
        ['git', 'diff', '--', path],
        ['git', 'diff', '--cached', '--', path],
        ['git', 'diff', 'HEAD', '--', path],
    ]:
        result = subprocess.run(diff_cmd, capture_output=True, text=True)
        diff = result.stdout.strip()
        if diff:
            break
    else:
        return ''

    # Parse diff to extract meaningful changes
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

    # Get numstat for counts
    numstat = subprocess.run(
        ['git', 'diff', 'HEAD', '--numstat', '--', path],
        capture_output=True, text=True
    ).stdout.strip()
    if not numstat:
        numstat = subprocess.run(
            ['git', 'diff', '--numstat', '--', path],
            capture_output=True, text=True
        ).stdout.strip()

    count_str = ''
    if numstat:
        parts = numstat.split('\t')
        a = parts[0] if parts[0] != '-' else '?'
        r = parts[1] if len(parts) > 1 and parts[1] != '-' else '?'
        count_str = f'+{a}/-{r}'

    # Build a meaningful description
    desc_parts = []
    if count_str:
        desc_parts.append(count_str)

    # Show first meaningful added or changed content
    if added_lines:
        sample = added_lines[0][:60]
        if len(added_lines) == 1 and not removed_lines:
            desc_parts.append(f'added: {sample}')
        elif removed_lines:
            desc_parts.append(f'changed: {sample}')
        else:
            desc_parts.append(f'added: {sample}')
    elif removed_lines:
        sample = removed_lines[0][:60]
        desc_parts.append(f'removed: {sample}')

    return ' — '.join(desc_parts) if desc_parts else ''


def get_new_file_description(path):
    """Describe a new/untracked file."""
    if os.path.isdir(path):
        try:
            count = sum(1 for _ in os.scandir(path))
            return f'new directory ({count} items)'
        except Exception:
            return 'new directory'

    if not os.path.isfile(path):
        return 'new file'

    try:
        size = os.path.getsize(path)
        if size == 0:
            return 'empty file'

        # Try to read first meaningful line
        with open(path, 'r', errors='ignore') as f:
            first = ''
            for raw_line in f:
                stripped = raw_line.strip()
                if not stripped:
                    continue
                # Skip comment-only / frontmatter lines
                if stripped in ('---', '"""', "'''"):
                    continue
                for prefix in ['#!', '#', '//', '/*', '<!--', '*']:
                    stripped = stripped.lstrip(prefix).strip()
                if stripped:
                    first = stripped
                    break

        if first:
            desc = first[:70]
            if len(first) > 70:
                desc += '...'
            size_str = f'{size}B' if size < 1024 else f'{size//1024}KB'
            return f'{size_str} — {desc}'
        else:
            size_str = f'{size}B' if size < 1024 else f'{size//1024}KB'
            return f'new file ({size_str})'
    except Exception:
        return 'new file'


for line in status.rstrip().split('\n')[:20]:
    if not line:
        continue
    code = line[:2].strip()
    path = line[3:]
    change = labels.get(code, code)

    if change == 'deleted':
        summary = 'file removed'
    elif change == 'untracked':
        summary = get_new_file_description(path)
    elif change in ('modified', 'added', 'added+modified'):
        summary = get_diff_description(path)
    elif change == 'renamed':
        summary = 'file renamed'
    else:
        summary = ''

    files.append({'path': path, 'change': change, 'summary': summary})

print(json.dumps(files))
