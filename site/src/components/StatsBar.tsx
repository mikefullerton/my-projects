import type { DashboardStats } from '../types.ts';

interface StatsBarProps {
  stats: DashboardStats;
}

export default function StatsBar({ stats }: StatsBarProps) {
  const cards = [
    { val: stats.projectCount, label: 'Projects', cls: 'accent' },
    { val: stats.openTodos, label: 'Open Todos', cls: stats.openTodos > 0 ? 'red' : 'green' },
    { val: stats.openIssues, label: 'Open Issues', cls: stats.openIssues > 0 ? 'red' : 'green' },
    { val: stats.activeConcerns, label: 'Active Concerns', cls: stats.activeConcerns > 0 ? '' : 'green' },
    { val: stats.totalDecisions, label: 'Decisions', cls: 'blue' },
  ];

  return (
    <div className="stats-bar" id="stats-bar">
      {cards.map((c, i) => (
        <div key={i} className={`stat-card ${c.cls}`}>
          <div className="stat-value">{c.val}</div>
          <div className="stat-label">{c.label}</div>
        </div>
      ))}
    </div>
  );
}
