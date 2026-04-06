import { useDB } from '../context/DataContext.jsx';

export default function IssuesView({ issues, projects }) {
  const { db, refresh } = useDB();

  const open = issues.filter(i => i.status !== 'resolved');

  const sorted = [...issues].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    if ((a.status === 'resolved') !== (b.status === 'resolved')) return a.status === 'resolved' ? 1 : -1;
    return (order[a.severity] || 1) - (order[b.severity] || 1);
  });

  const grouped = {};
  const pOrder = [];
  sorted.forEach(i => {
    if (!grouped[i.projectId]) { grouped[i.projectId] = []; pOrder.push(i.projectId); }
    grouped[i.projectId].push(i);
  });

  async function markDone(id) {
    const item = await db.getById('issues', id);
    if (item) { item.status = 'resolved'; await db.save('issues', item); refresh(); }
  }

  async function markUndone(id) {
    const item = await db.getById('issues', id);
    if (item) { item.status = 'open'; await db.save('issues', item); refresh(); }
  }

  return (
    <div className="section" data-section="all-issues" id="all-issues">
      <div className="section-header">
        <h2>All Issues</h2>
        <span className="count" id="issue-count">{open.length} open / {issues.length} total</span>
      </div>
      <div id="all-issues-list">
        {pOrder.map(pid => {
          const p = projects.find(pr => pr.id === pid);
          return (
            <div key={pid}>
              <div className="project-group-header" style={{ marginTop: '12px' }}>{p ? p.name : pid}</div>
              {grouped[pid].map(i => {
                const isDone = i.status === 'resolved';
                const accentClass = i.severity === 'high' ? 'critical' : i.severity === 'low' ? 'info' : '';
                return (
                  <div key={i.id} className={`tracking-card ${accentClass} ${isDone ? 'done' : ''}`}>
                    <div className="tracking-card-top">
                      <input
                        type="checkbox"
                        className="item-checkbox"
                        checked={isDone}
                        onChange={() => isDone ? markUndone(i.id) : markDone(i.id)}
                      />
                      <h4>{i.title}</h4>
                      <span className={`item-priority ${i.severity === 'high' ? 'severity-high' : i.severity === 'low' ? 'severity-low' : 'severity-medium'}`}>
                        {i.severity || 'medium'}
                      </span>
                    </div>
                    {i.detail && (
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', paddingLeft: '28px' }}>{i.detail}</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
