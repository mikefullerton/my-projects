import { useState, useEffect } from 'react';
import GitIndicators from './GitIndicators.jsx';
import ItemList from './ItemList.jsx';
import { useDB } from '../context/DataContext.jsx';

const changeColors = {
  'modified': 'var(--yellow)', 'added': 'var(--green)', 'added+modified': 'var(--green)',
  'deleted': 'var(--red)', 'untracked': 'var(--text-dim)', 'renamed': 'var(--blue)', 'conflict': 'var(--red)',
};

export default function ProjectDetail({ projectId }) {
  const { db, refresh, refreshKey } = useDB();
  const [project, setProject] = useState(null);
  const [todos, setTodos] = useState([]);
  const [issues, setIssues] = useState([]);
  const [concerns, setConcerns] = useState([]);
  const [decisions, setDecisions] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState('medium');

  useEffect(() => {
    async function load() {
      const [p, t, i, c, d] = await Promise.all([
        db.getProject(projectId),
        db.getTodos(projectId),
        db.getIssues(projectId),
        db.getConcerns(projectId),
        db.getDecisions(projectId),
      ]);
      setProject(p);
      setTodos(t);
      setIssues(i);
      setConcerns(c);
      setDecisions(d);
    }
    load();
  }, [db, projectId, refreshKey]);

  if (!project) return null;

  const p = project;
  const branchCount = (p.openBranches || []).length;
  const openTodos = todos.filter(t => t.status !== 'done');
  const openIssues = issues.filter(i => i.status !== 'resolved');
  const openConcerns = concerns.filter(c => c.status !== 'closed');

  async function addTodo() {
    const title = newTitle.trim();
    if (!title) return;
    await db.saveTodo({ projectId, title, priority: newPriority, status: 'open', assignee: 'Mike' });
    setNewTitle('');
    setShowAddForm(false);
    refresh();
  }

  return (
    <div className="section" data-section="project-detail" id="project-detail">
      {/* Path / Branch / Run */}
      <div className="detail-extra detail-info-row">
        {[
          { label: 'Path', value: p.path },
          { label: 'Branch', value: p.branch },
          { label: 'Run', value: p.runCmd },
        ].filter(item => item.value).map(item => (
          <div key={item.label} className="detail-info-cell">
            <div className="detail-extra-label">{item.label}</div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.75rem',
              color: item.label === 'Run' ? 'var(--accent)' : 'var(--text-muted)'
            }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Project card */}
      <div className="project-card" style={{ cursor: 'default' }}>
        <div className="card-top">
          <h3 style={{ fontSize: '1.3rem' }}>{p.name}</h3>
          <span className={`status-badge ${p.status}`}>{p.status}</span>
        </div>
        <div className="tagline">{p.tagline}</div>

        {/* git: row */}
        <div className="indicator-row">
          <span className="indicator-row-label">git:</span>
          <div className="card-indicators" style={{ margin: '0' }}>
            <GitIndicators project={p} />
            {!p.uncommitted && branchCount === 0 && (p.stagedCount || 0) === 0 && (p.modifiedCount || 0) === 0 && (p.untrackedCount || 0) === 0 && (p.deletedCount || 0) === 0 && (p.aheadCount || 0) === 0 && (p.behindCount || 0) === 0 && (
              <span className="indicator-pill indicator-green">clean</span>
            )}
          </div>
        </div>

        {/* tracking: row */}
        <div className="indicator-row">
          <span className="indicator-row-label">tracking:</span>
          <div className="card-indicators" style={{ margin: '0' }}>
            {openTodos.length > 0 && (
              <span className={`indicator-pill ${todos.some(t => t.priority === 'high' && t.status !== 'done') ? 'indicator-red' : 'indicator-yellow'}`}>
                {openTodos.length} todo{openTodos.length > 1 ? 's' : ''}
              </span>
            )}
            {openIssues.length > 0 && (
              <span className="indicator-pill indicator-red">
                {openIssues.length} issue{openIssues.length > 1 ? 's' : ''}
              </span>
            )}
            {openConcerns.length > 0 && (
              <span className="indicator-pill indicator-yellow">
                {openConcerns.length} concern{openConcerns.length > 1 ? 's' : ''}
              </span>
            )}
            {decisions.length > 0 && (
              <span className="indicator-pill indicator-blue">
                {decisions.length} decision{decisions.length > 1 ? 's' : ''}
              </span>
            )}
            {openTodos.length === 0 && openIssues.length === 0 && openConcerns.length === 0 && decisions.length === 0 && (
              <span className="indicator-pill indicator-green">no issues</span>
            )}
          </div>
        </div>
      </div>

      {/* Tech stack */}
      {(p.techStack || []).length > 0 && (
        <div className="detail-extra">
          <div className="detail-extra-label">Tech Stack</div>
          <div className="tech-stack">
            {p.techStack.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>
        </div>
      )}

      {/* Latest commits */}
      {((p.latestCommits || []).length > 0 || p.latestWork) && (
        <div className="detail-extra">
          <div className="detail-extra-label">Latest Commits</div>
          {(p.latestCommits || []).length > 0 ? (
            p.latestCommits.map((c, i) => (
              <div key={i} className="branch-commit">
                <span className="commit-hash">{c.hash}</span>
                <span className="commit-message">{c.message}</span>
              </div>
            ))
          ) : (
            p.latestWork.split(/(?<=\.)\s+/).filter(s => s.trim()).map((c, i) => (
              <div key={i} className="branch-commit">
                <span className="commit-message">{c.replace(/\.$/, '').trim()}</span>
              </div>
            ))
          )}
        </div>
      )}

      {/* Open branches */}
      {branchCount > 0 && (
        <div className="detail-extra">
          <div className="detail-extra-label">Open Branches ({branchCount})</div>
          {p.openBranches.map(b => {
            const detail = (p.branchDetails || []).find(d => d.name === b);
            const manualSummary = (p.branchSummaries && p.branchSummaries[b]) || '';
            const summaryText = manualSummary || (detail ? detail.summary : '');

            return (
              <div key={b}>
                <div className="branch-detail-header" style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span className="branch-tag">{b}</span>
                  {summaryText && <span className="branch-summary">{summaryText}</span>}
                </div>
                {detail && detail.commits && detail.commits.length > 0 && (
                  <div className="branch-commits" style={{ borderTop: 'none', marginBottom: '8px' }}>
                    {detail.commits.map((c, i) => (
                      <div key={i} className="branch-commit">
                        <span className="commit-hash">{c.hash}</span>
                        <span className="commit-message">{c.message}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modified files */}
      {(p.modifiedFiles || []).length > 0 && (
        <div className="detail-extra">
          <div className="detail-extra-label">Modified Files ({p.modifiedFiles.length})</div>
          <div className="modified-files-list">
            {p.modifiedFiles.map((f, i) => (
              <div key={i} className="modified-file-item">
                <span className="modified-file-change" style={{ color: changeColors[f.change] || 'var(--text-dim)' }}>{f.change}</span>
                <span className="modified-file-path">{f.path}</span>
                {f.summary && <span className="modified-file-summary">{f.summary}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Todos */}
      <div className="detail-inline-section">
        <div className="section-header">
          <h2 style={{ fontSize: '1.4rem' }}>Todos ({openTodos.length})</h2>
        </div>
        <button className="add-trigger" onClick={() => setShowAddForm(!showAddForm)}>+ Add todo</button>
        {showAddForm && (
          <div className="add-form visible">
            <input
              type="text"
              placeholder="What needs to be done?"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
            />
            <select value={newPriority} onChange={e => setNewPriority(e.target.value)}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <div className="btn-row">
              <button className="btn btn-accent btn-small" onClick={addTodo}>Add</button>
              <button className="btn btn-ghost btn-small" onClick={() => setShowAddForm(false)}>Cancel</button>
            </div>
          </div>
        )}
        <ItemList items={todos} type="todo" />
      </div>

      {/* Issues */}
      <div className="detail-inline-section">
        <div className="section-header">
          <h2 style={{ fontSize: '1.4rem' }}>Issues ({openIssues.length})</h2>
        </div>
        <ItemList items={issues} type="issue" />
      </div>

      {/* Concerns */}
      <div className="detail-inline-section">
        <div className="section-header">
          <h2 style={{ fontSize: '1.4rem' }}>Concerns ({openConcerns.length})</h2>
        </div>
        {concerns.length === 0 ? (
          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>No concerns</p>
        ) : (
          concerns.map(c => (
            <div key={c.id} className="decision-item">
              <div className="decision-title">{c.title}</div>
              <div className="decision-rationale">{c.detail || ''}</div>
              <div className="decision-meta">{c.status} &middot; raised by {c.raiser || '\u2014'}</div>
            </div>
          ))
        )}
      </div>

      {/* Decisions */}
      <div className="detail-inline-section">
        <div className="section-header">
          <h2 style={{ fontSize: '1.4rem' }}>Decisions ({decisions.length})</h2>
        </div>
        {decisions.length === 0 ? (
          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>No decisions recorded</p>
        ) : (
          decisions.map(d => (
            <div key={d.id} className="decision-item">
              <div className="decision-title">{d.title}</div>
              <div className="decision-rationale">{d.rationale || ''}</div>
              <div className="decision-meta">decided by {d.decidedBy || '\u2014'}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
