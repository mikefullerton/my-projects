import GitIndicators from './GitIndicators.jsx';
import { groupProjects, formatGroupName } from '../hooks/useData.js';
import { useDB } from '../context/DataContext.jsx';
import { COLORS } from '../lib/theme.js';

function ProjectCard({ project, todos, issues, onSelect }) {
  const p = project;
  const highTodos = (todos || []).filter(t => t.projectId === p.id && t.priority === 'high' && t.status !== 'done');
  const openIssues = (issues || []).filter(i => i.projectId === p.id && i.status !== 'resolved');
  const branchCount = (p.openBranches || []).length;
  const isClean = !p.uncommitted && branchCount === 0 && highTodos.length === 0 && openIssues.length === 0;

  const attentionItems = [];
  if (p.uncommitted) attentionItems.push({ text: p.uncommittedDetail || 'Uncommitted changes', type: 'yellow' });
  highTodos.forEach(t => attentionItems.push({ text: t.title, type: 'red' }));
  openIssues.forEach(i => attentionItems.push({ text: i.title, type: 'red' }));

  return (
    <div className="project-card" id={`project-${p.id}`} onClick={() => onSelect(p.id)}>
      <div className="card-top">
        <h3>{p.name}</h3>
        <span className={`status-badge ${p.status}`}>{p.status}</span>
      </div>
      <div className="tagline">{p.tagline}</div>
      <div className="card-indicators">
        <GitIndicators project={p} />
        {highTodos.length > 0 && (
          <span className={`indicator-pill indicator-${COLORS.todoPriorityHigh}`}>
            {highTodos.length} high priority todo{highTodos.length > 1 ? 's' : ''}
          </span>
        )}
        {openIssues.length > 0 && (
          <span className={`indicator-pill indicator-${COLORS.issue}`}>
            {openIssues.length} open issue{openIssues.length > 1 ? 's' : ''}
          </span>
        )}
        {isClean && <span className={`indicator-pill indicator-${COLORS.gitClean}`}>clean</span>}
      </div>
      {attentionItems.length > 0 && (
        <div className="card-attention-list">
          {attentionItems.map((item, i) => (
            <div key={i} className={`card-attention-item ${item.type}`}>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectGrid({ projects, todos, issues, onSelectProject }) {
  const { appConfig } = useDB();
  const groups = groupProjects(projects, appConfig);

  return (
    <div className="section" data-section="projects" id="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <span className="count" id="project-count">{projects.length} projects</span>
      </div>
      <div className="project-grid" id="project-grid">
        {groups.map(g => (
          <div key={g.name}>
            <div className="project-group-header">{formatGroupName(g.name)}</div>
            {g.projects.map(p => (
              <ProjectCard
                key={p.id}
                project={p}
                todos={todos}
                issues={issues}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
