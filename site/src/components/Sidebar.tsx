import { useState, useRef, useCallback } from 'react';
import { groupProjects, formatGroupName } from '../hooks/useData.ts';
import { useDB } from '../context/DataContext.tsx';
import { COLORS } from '../lib/theme.ts';
import type { Project, Todo, Issue, Concern, Decision } from '../types.ts';

interface SidebarProps {
  projects: Project[];
  todos: Todo[];
  issues: Issue[];
  concerns: Concern[];
  decisions: Decision[];
  currentView: string;
  onNavigate: (view: string) => void;
  onSelectProject: (id: string) => void;
  onRefresh: () => void;
  refreshing: boolean;
}

export default function Sidebar({ projects, todos, issues, concerns, decisions, currentView, onNavigate, onSelectProject, onRefresh, refreshing }: SidebarProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setHoveredProject(null), 200);
  }, []);
  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const { appConfig } = useDB();
  const groups = groupProjects(projects, appConfig);

  // Nav counts
  const attentionCount = projects.filter(p => p.uncommitted).length
    + todos.filter(t => t.priority === 'high' && t.status !== 'done').length
    + issues.filter(i => i.status !== 'resolved').length;
  const todoCount = todos.filter(t => t.status !== 'done').length;
  const issueCount = issues.filter(i => i.status !== 'resolved').length;
  const decisionCount = decisions.length;

  const hasHighTodos = todos.some(t => t.priority === 'high' && t.status !== 'done');
  const hasOpenIssues = issues.some(i => i.status !== 'resolved');

  function navBadge(count: number, colorClass?: string) {
    if (count === 0) return null;
    return (
      <>
        <span className="nav-count">({count})</span>
        {colorClass && <span className={`nav-dot ${colorClass}`} />}
      </>
    );
  }

  const attColor = (hasHighTodos || hasOpenIssues) ? `nav-badge-${COLORS.navAttentionHigh}` : attentionCount > 0 ? `nav-badge-${COLORS.navAttentionLow}` : '';
  const todoNavColor = todoCount > 0 ? `nav-badge-${COLORS.navTodos}` : '';
  const issueNavColor = issueCount > 0 ? `nav-badge-${COLORS.navIssues}` : '';

  return (
    <nav>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '16px' }}>
        <div className="nav-title">Project Hub</div>
        <button className="btn btn-accent btn-small" id="refresh-btn" onClick={onRefresh} disabled={refreshing}>
          {refreshing ? 'Scanning\u2026' : 'Refresh'}
        </button>
      </div>
      <div className="nav-sub">Mike Fullerton</div>

      <div className="nav-section">Overview</div>
      <a
        href="#dashboard"
        className={currentView === 'dashboard' ? 'active' : ''}
        onClick={e => { e.preventDefault(); onNavigate('dashboard'); }}
      >Dashboard</a>

      <div className="nav-section">Tracking</div>
      <a
        href="#attention"
        className={`${currentView === 'attention' ? 'active' : ''} ${attColor}`}
        id="nav-attention"
        onClick={e => { e.preventDefault(); onNavigate('attention'); }}
      >
        Needs Attention{navBadge(attentionCount, attColor)}
      </a>
      <a
        href="#all-todos"
        className={`${currentView === 'all-todos' ? 'active' : ''} ${todoNavColor}`}
        id="nav-todos"
        onClick={e => { e.preventDefault(); onNavigate('all-todos'); }}
      >
        All Todos{navBadge(todoCount, todoNavColor)}
      </a>
      <a
        href="#all-issues"
        className={`${currentView === 'all-issues' ? 'active' : ''} ${issueNavColor}`}
        id="nav-issues"
        onClick={e => { e.preventDefault(); onNavigate('all-issues'); }}
      >
        All Issues{navBadge(issueCount, issueNavColor)}
      </a>
      <a
        href="#all-decisions"
        className={currentView === 'all-decisions' ? 'active' : ''}
        id="nav-decisions"
        onClick={e => { e.preventDefault(); onNavigate('all-decisions'); }}
      >
        All Decisions{navBadge(decisionCount)}
      </a>

      <div id="nav-projects">
        {groups.map(g => (
          <div key={g.name}>
            <div className="nav-section">{formatGroupName(g.name)}</div>
            {g.projects.map(p => {
              const isRepoClean = !p.uncommitted
                && (p.openBranches || []).length === 0
                && (p.aheadCount || 0) === 0
                && (p.behindCount || 0) === 0;
              const repoDotClass = isRepoClean ? 'nav-dot-green' : 'nav-dot-red';

              const pTodos = todos.filter(t => t.projectId === p.id && t.status !== 'done');
              const pIssues = issues.filter(i => i.projectId === p.id && i.status !== 'resolved');
              const pConcerns = concerns.filter(c => c.projectId === p.id && c.status !== 'closed');

              const gitStats = [];
              const dirty = (p.stagedCount || 0) + (p.modifiedCount || 0) + (p.untrackedCount || 0) + (p.deletedCount || 0);
              if (dirty > 0) gitStats.push(`${dirty} files changed`);
              const branches = (p.openBranches || []).length;
              if (branches > 0) gitStats.push(`${branches} branch${branches > 1 ? 'es' : ''}`);
              if ((p.aheadCount || 0) > 0) gitStats.push(`${p.aheadCount} ahead`);
              if ((p.behindCount || 0) > 0) gitStats.push(`${p.behindCount} behind`);
              const gitInfo = !isRepoClean && p.branch
                ? `git:(${p.branch}) ${gitStats.join(', ')}`
                : '';

              const itemCounts = [
                pTodos.length > 0 && `${pTodos.length} todo${pTodos.length > 1 ? 's' : ''}`,
                pIssues.length > 0 && `${pIssues.length} issue${pIssues.length > 1 ? 's' : ''}`,
                pConcerns.length > 0 && `${pConcerns.length} concern${pConcerns.length > 1 ? 's' : ''}`,
              ].filter(Boolean);
              const summaryText = itemCounts.length > 0 ? itemCounts.join(', ') : '';

              const hasPopover = gitInfo || summaryText;

              return (
                <div
                  key={p.id}
                  className="nav-project-item"
                  onMouseEnter={(e) => {
                    cancelClose();
                    const rect = e.currentTarget.getBoundingClientRect();
                    setPopoverPos({ top: rect.top, left: rect.right + 8 });
                    setHoveredProject(p.id);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <a
                    href={`#project-${p.id}`}
                    onClick={e => { e.preventDefault(); onSelectProject(p.id); }}
                  >
                    <span className={`nav-repo-dot ${repoDotClass}`} />
                    {p.name}
                  </a>
                  {hasPopover && hoveredProject === p.id && (
                    <div
                      className="nav-popover"
                      style={{ top: popoverPos.top, left: popoverPos.left }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {gitInfo && <div className="nav-popover-line">{gitInfo}</div>}
                      {summaryText && <div className="nav-popover-line">{summaryText}</div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </nav>
  );
}
