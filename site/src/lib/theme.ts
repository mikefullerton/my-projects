/**
 * Centralized color mapping for the dashboard.
 *
 * Each key maps to a CSS indicator/badge class suffix.
 * Values: 'red' | 'yellow' | 'blue' | 'green' | 'dim'
 *
 * CSS classes used: indicator-{color}, nav-badge-{color}, priority-{level}, severity-{level}
 */

export const COLORS: Record<string, string> = {
  // ── Todos ──────────────────────────────────────────────────────────
  todo: 'blue',
  todoPriorityHigh: 'red',
  todoPriorityMedium: 'blue',
  todoPriorityLow: 'dim',

  // ── Issues ─────────────────────────────────────────────────────────
  issue: 'yellow',
  issueSeverityHigh: 'red',
  issueSeverityMedium: 'yellow',
  issueSeverityLow: 'dim',

  // ── Concerns ───────────────────────────────────────────────────────
  concern: 'yellow',

  // ── Decisions ──────────────────────────────────────────────────────
  decision: 'blue',

  // ── Dependencies ───────────────────────────────────────────────────
  dependency: 'blue',

  // ── Git status ─────────────────────────────────────────────────────
  gitStaged: 'green',
  gitModified: 'yellow',
  gitUntracked: 'yellow',
  gitDeleted: 'red',
  gitAhead: 'blue',
  gitBehind: 'yellow',
  gitBranches: 'blue',
  gitClean: 'green',

  // ── Attention ──────────────────────────────────────────────────────
  attentionCritical: 'red',
  attentionWarning: 'yellow',
  uncommitted: 'yellow',

  // ── Navigation ─────────────────────────────────────────────────────
  navAttentionHigh: 'red',
  navAttentionLow: 'yellow',
  navTodos: 'blue',
  navIssues: 'red',
};

/** Map a todo priority to a tracking-card CSS class */
export function todoCardClass(priority: string): string {
  if (priority === 'high') return 'critical';
  if (priority === 'low') return 'info';
  return 'todo';
}

/** Map an issue severity to a tracking-card CSS class */
export function issueCardClass(severity: string): string {
  if (severity === 'high') return 'critical';
  if (severity === 'low') return 'info';
  return '';
}

/** Map a todo priority to indicator-pill CSS class */
export function todoPillClass(priority: string): string {
  return `indicator-${COLORS['todoPriority' + priority.charAt(0).toUpperCase() + priority.slice(1)] || COLORS.todo}`;
}

/** Map an issue severity to indicator-pill CSS class */
export function issuePillClass(severity: string): string {
  return `indicator-${COLORS['issueSeverity' + severity.charAt(0).toUpperCase() + severity.slice(1)] || COLORS.issue}`;
}

/** Nav badge class for a color key */
export function navBadgeClass(colorKey: string): string {
  const color = COLORS[colorKey];
  return color ? `nav-badge-${color}` : '';
}
