import { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
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
  currentProjectId: string | null;
  onNavigate: (view: string) => void;
  onSelectProject: (id: string) => void;
  onRefresh: () => void;
  refreshing: boolean;
}

export default function Sidebar({ projects, todos, issues, concerns, decisions, currentView, currentProjectId, onNavigate, onSelectProject, onRefresh, refreshing }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setHoveredItem(null), 200);
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
      {[
        { id: 'nav-attention', view: 'attention', label: 'Needs Attention', count: attentionCount, dotClass: attColor ? `nav-dot-${(hasHighTodos || hasOpenIssues) ? 'red' : 'yellow'}` : 'nav-dot-green',
          popoverText: `${projects.filter(p => p.uncommitted).length} uncommitted | ${todos.filter(t => t.priority === 'high' && t.status !== 'done').length} high todos | ${issues.filter(i => i.status !== 'resolved').length} open issues` },
        { id: 'nav-todos', view: 'all-todos', label: 'All Todos', count: todoCount, dotClass: todoCount > 0 ? 'nav-dot-blue' : 'nav-dot-green',
          popoverText: `${todos.filter(t => t.priority === 'high' && t.status !== 'done').length} high | ${todos.filter(t => t.priority === 'medium' && t.status !== 'done').length} medium | ${todos.filter(t => t.priority === 'low' && t.status !== 'done').length} low` },
        { id: 'nav-issues', view: 'all-issues', label: 'All Issues', count: issueCount, dotClass: issueCount > 0 ? 'nav-dot-red' : 'nav-dot-green',
          popoverText: issueCount > 0 ? `${issueCount} unresolved` : 'No issues' },
        { id: 'nav-decisions', view: 'all-decisions', label: 'All Decisions', count: decisionCount, dotClass: 'nav-dot-green',
          popoverText: decisionCount > 0 ? `${decisionCount} decision${decisionCount !== 1 ? 's' : ''} logged` : 'No decisions' },
      ].map(item => (
        <div
          key={item.id}
          className="nav-project-item"
          onMouseMove={(e) => {
            const nameSpan = e.currentTarget.querySelector('.nav-project-name');
            if (!nameSpan) return;
            const rect = nameSpan.getBoundingClientRect();
            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
              if (closeTimer.current) clearTimeout(closeTimer.current);
              closeTimer.current = null;
              const centerY = rect.top + rect.height / 2;
              setPopoverPos({ top: centerY, left: rect.right + 12 });
              setHoveredItem(item.id);
            } else if (hoveredItem === item.id) {
              scheduleClose();
            }
          }}
          onMouseLeave={scheduleClose}
        >
          <a
            href={`#${item.view}`}
            className={currentView === item.view ? 'active' : ''}
            id={item.id}
            onClick={e => { e.preventDefault(); onNavigate(item.view); }}
          >
            <span className={`nav-repo-dot ${item.dotClass}`} />
            <span className="nav-project-name">{item.label}</span>
          </a>
          {hoveredItem === item.id && createPortal(
            <div
              className="nav-popover"
              style={{ top: popoverPos.top, left: popoverPos.left, transform: 'translateY(-50%)' }}
            >
              <div className="nav-popover-line">{item.popoverText}</div>
            </div>,
            document.body
          )}
        </div>
      ))}

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

              const dirty = (p.stagedCount || 0) + (p.modifiedCount || 0) + (p.untrackedCount || 0) + (p.deletedCount || 0);
              const branches = (p.openBranches || []).length;
              const gitParts: string[] = [];
              // branch name omitted from popover intentionally
              if (dirty > 0) gitParts.push(`${dirty} files changed`);
              if (branches > 0) gitParts.push(`${branches} branch${branches > 1 ? 'es' : ''}`);
              if ((p.aheadCount || 0) > 0) gitParts.push(`${p.aheadCount} ahead`);
              if ((p.behindCount || 0) > 0) gitParts.push(`${p.behindCount} behind`);

              const itemParts = [
                pTodos.length > 0 && `${pTodos.length} todo${pTodos.length > 1 ? 's' : ''}`,
                pIssues.length > 0 && `${pIssues.length} issue${pIssues.length > 1 ? 's' : ''}`,
                pConcerns.length > 0 && `${pConcerns.length} concern${pConcerns.length > 1 ? 's' : ''}`,
              ].filter(Boolean) as string[];

              const hasPopover = true;

              const sep = <span className="nav-popover-sep">|</span>;

              return (
                <div
                  key={p.id}
                  className="nav-project-item"
                  onMouseMove={(e) => {
                    const nameSpan = e.currentTarget.querySelector('.nav-project-name');
                    if (!nameSpan) return;
                    const rect = nameSpan.getBoundingClientRect();
                    if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                      if (closeTimer.current) clearTimeout(closeTimer.current);
                      closeTimer.current = null;
                      const centerY = rect.top + rect.height / 2;
                      setPopoverPos({ top: centerY, left: rect.right + 12 });
                      setHoveredItem(p.id);
                    } else if (hoveredItem === p.id) {
                      scheduleClose();
                    }
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <a
                    href={`#project-${p.id}`}
                    className={currentView === 'project-detail' && currentProjectId === p.id ? 'active' : ''}
                    onClick={e => { e.preventDefault(); onSelectProject(p.id); }}
                  >
                    <span className={`nav-repo-dot ${repoDotClass}`} />
                    <span className="nav-project-name">{p.id}</span>
                  </a>
                  {hasPopover && hoveredItem === p.id && createPortal(
                    <div
                      className="nav-popover"
                      style={{ top: popoverPos.top, left: popoverPos.left, transform: 'translateY(-50%)' }}
                    >
                      {gitParts.length > 0 && <div className="nav-popover-line">{gitParts.map((part, i) => <span key={i}>{i > 0 && sep}{part}</span>)}</div>}
                      {itemParts.length > 0 && <div className="nav-popover-line">{itemParts.map((part, i) => <span key={i}>{i > 0 && sep}{part}</span>)}</div>}
                      {gitParts.length === 0 && itemParts.length === 0 && <div className="nav-popover-line">No issues</div>}
                    </div>,
                    document.body
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
