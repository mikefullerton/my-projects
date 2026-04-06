export default function AttentionView({ projects, todos, issues, concerns, onSelectProject }) {
  const cards = [];

  projects.filter(p => p.uncommitted).forEach(p => {
    cards.push({ type: 'warning', projectId: p.id, project: p.name, title: 'Uncommitted changes', detail: p.uncommittedDetail });
  });
  todos.filter(t => t.priority === 'high' && t.status !== 'done').forEach(t => {
    const p = projects.find(pr => pr.id === t.projectId);
    cards.push({ type: 'critical', projectId: t.projectId, project: p ? p.name : t.projectId, title: t.title, detail: 'High priority todo' });
  });
  issues.filter(i => i.status !== 'resolved').forEach(i => {
    const p = projects.find(pr => pr.id === i.projectId);
    cards.push({ type: i.severity === 'high' ? 'critical' : 'warning', projectId: i.projectId, project: p ? p.name : i.projectId, title: i.title, detail: i.detail });
  });

  const typeOrder = { critical: 0, warning: 1, info: 2 };
  cards.sort((a, b) => (typeOrder[a.type] || 1) - (typeOrder[b.type] || 1));

  const grouped = {};
  const projectOrder = [];
  cards.forEach(c => {
    if (!grouped[c.projectId]) { grouped[c.projectId] = []; projectOrder.push(c.projectId); }
    grouped[c.projectId].push(c);
  });

  return (
    <div className="section" data-section="attention" id="attention">
      <div className="section-header"><h2>Needs Attention</h2></div>
      <div className="attention-grid" id="attention-grid">
        {cards.length === 0 ? (
          <p style={{ color: 'var(--green)', fontSize: '0.85rem' }}>All clear &mdash; nothing needs attention right now.</p>
        ) : (
          projectOrder.map(pid => {
            const items = grouped[pid];
            return (
              <div key={pid}>
                <div className="project-group-header" style={{ marginTop: '12px' }}>{items[0].project}</div>
                {items.map((c, i) => (
                  <div
                    key={i}
                    className={`attention-card clickable ${c.type === 'critical' ? 'critical' : c.type === 'info' ? 'info' : ''}`}
                    onClick={() => onSelectProject(c.projectId)}
                  >
                    <h4>{c.title}</h4>
                    <p>{c.detail || ''}</p>
                  </div>
                ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
