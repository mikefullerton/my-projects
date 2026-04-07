import type { Project, Decision } from '../types.ts';

interface DecisionsViewProps {
  decisions: Decision[];
  projects: Project[];
}

export default function DecisionsView({ decisions, projects }: DecisionsViewProps) {
  const grouped: Record<string, Decision[]> = {};
  const pOrder: string[] = [];
  decisions.forEach(d => {
    if (!grouped[d.projectId]) { grouped[d.projectId] = []; pOrder.push(d.projectId); }
    grouped[d.projectId].push(d);
  });

  return (
    <div className="section" data-section="all-decisions" id="all-decisions">
      <div className="section-header">
        <h2>All Decisions</h2>
        <span className="count" id="decision-count">{decisions.length} recorded</span>
      </div>
      <div id="all-decisions-list">
        {pOrder.map(pid => {
          const p = projects.find(pr => pr.id === pid);
          return (
            <div key={pid}>
              <div className="project-group-header" style={{ marginTop: '12px' }}>{p ? p.name : pid}</div>
              {grouped[pid].map(d => (
                <div key={d.id} className="tracking-card info">
                  <h4>{d.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px' }}>{d.rationale || ''}</p>
                  <div className="decision-meta">decided by {d.decidedBy || '\u2014'}</div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
