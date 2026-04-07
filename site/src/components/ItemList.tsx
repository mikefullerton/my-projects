import { useDB } from '../context/DataContext.tsx';
import type { Row, TableName } from '../lib/db.ts';

interface ItemListProps {
  items: Row[];
  type: 'todo' | 'issue' | 'concern';
}

export default function ItemList({ items, type }: ItemListProps) {
  const { db, refresh } = useDB();

  if (!items.length) {
    return <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>No {type}s</p>;
  }

  const priorityField = type === 'issue' ? 'severity' : 'priority';
  const table = (type + 's') as TableName;

  async function markDone(id: string) {
    const item = await db.getById(table, id);
    if (item) {
      item.status = table === 'issues' ? 'resolved' : table === 'concerns' ? 'closed' : 'done';
      await db.save(table, item);
      refresh();
    }
  }

  async function markUndone(id: string) {
    const item = await db.getById(table, id);
    if (item) {
      item.status = 'open';
      await db.save(table, item);
      refresh();
    }
  }

  return (
    <ul className="item-list">
      {items.map(item => {
        const level = item[priorityField] || 'medium';
        const cssClass = type === 'issue' ? `severity-${level}` : `priority-${level}`;
        const isDone = item.status === 'done' || item.status === 'resolved';

        return (
          <li key={item.id} className={isDone ? 'done' : ''}>
            <input
              type="checkbox"
              className="item-checkbox"
              checked={isDone}
              onChange={(e) => {
                e.stopPropagation();
                if (e.target.checked) markDone(item.id);
                else markUndone(item.id);
              }}
            />
            <span className="item-title">
              {item.title}
              {item.detail && <div className="item-detail">{item.detail}</div>}
            </span>
            <span className={`item-priority ${cssClass}`}>{level}</span>
          </li>
        );
      })}
    </ul>
  );
}
