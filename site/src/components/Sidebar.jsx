import { groupProjects, formatGroupName } from '../hooks/useData.js';
import { useDB } from '../context/DataContext.jsx';
import { COLORS } from '../lib/theme.js';

export default function Sidebar({ projects, todos, issues, concerns, decisions, currentView, onNavigate, onSelectProject, onRefresh, refreshing }) {
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

  function navBadge(count, colorClass) {
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

              return (
                <a
                  key={p.id}
                  href={`#project-${p.id}`}
                  onClick={e => { e.preventDefault(); onSelectProject(p.id); }}
                >
                  <span className={`nav-repo-dot ${repoDotClass}`} />
                  {p.name}
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </nav>
  );
}
