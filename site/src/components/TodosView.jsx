import { useState } from 'react';
import { useDB } from '../context/DataContext.jsx';

export default function TodosView({ todos, projects }) {
  const { db, refresh } = useDB();
  const [showForm, setShowForm] = useState(false);
  const [formProject, setFormProject] = useState(projects[0]?.id || '');
  const [formTitle, setFormTitle] = useState('');
  const [formPriority, setFormPriority] = useState('medium');

  const open = todos.filter(t => t.status !== 'done');

  const sorted = [...todos].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    if ((a.status === 'done') !== (b.status === 'done')) return a.status === 'done' ? 1 : -1;
    return (order[a.priority] || 1) - (order[b.priority] || 1);
  });

  const grouped = {};
  const pOrder = [];
  sorted.forEach(t => {
    if (!grouped[t.projectId]) { grouped[t.projectId] = []; pOrder.push(t.projectId); }
    grouped[t.projectId].push(t);
  });

  async function markDone(id) {
    const item = await db.getById('todos', id);
    if (item) { item.status = 'done'; await db.save('todos', item); refresh(); }
  }

  async function markUndone(id) {
    const item = await db.getById('todos', id);
    if (item) { item.status = 'open'; await db.save('todos', item); refresh(); }
  }

  async function addTodo() {
    const title = formTitle.trim();
    if (!title) return;
    await db.saveTodo({ projectId: formProject, title, priority: formPriority, status: 'open', assignee: 'Mike' });
    setFormTitle('');
    setShowForm(false);
    refresh();
  }

  return (
    <div className="section" data-section="all-todos" id="all-todos">
      <div className="section-header">
        <h2>All Todos</h2>
        <span className="count" id="todo-count">{open.length} open / {todos.length} total</span>
      </div>
      <button className="add-trigger" onClick={() => setShowForm(!showForm)}>+ Add todo</button>
      {showForm && (
        <div className="add-form visible">
          <select value={formProject} onChange={e => setFormProject(e.target.value)}>
            {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <input type="text" placeholder="What needs to be done?" value={formTitle} onChange={e => setFormTitle(e.target.value)} />
          <select value={formPriority} onChange={e => setFormPriority(e.target.value)}>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <div className="btn-row">
            <button className="btn btn-accent btn-small" onClick={addTodo}>Add</button>
            <button className="btn btn-ghost btn-small" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}
      <div id="all-todos-list">
        {pOrder.map(pid => {
          const p = projects.find(pr => pr.id === pid);
          return (
            <div key={pid}>
              <div className="project-group-header" style={{ marginTop: '12px' }}>{p ? p.name : pid}</div>
              {grouped[pid].map(t => {
                const isDone = t.status === 'done';
                const accentClass = t.priority === 'high' ? 'critical' : t.priority === 'low' ? 'info' : '';
                return (
                  <div key={t.id} className={`tracking-card ${accentClass} ${isDone ? 'done' : ''}`}>
                    <div className="tracking-card-top">
                      <input
                        type="checkbox"
                        className="item-checkbox"
                        checked={isDone}
                        onChange={() => isDone ? markUndone(t.id) : markDone(t.id)}
                      />
                      <h4>{t.title}</h4>
                      <span className={`item-priority ${t.priority === 'high' ? 'priority-high' : t.priority === 'low' ? 'priority-low' : 'priority-medium'}`}>
                        {t.priority || 'medium'}
                      </span>
                    </div>
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
