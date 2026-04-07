import type { DashboardStats } from '../types.ts';

interface StatsBarProps {
  stats: DashboardStats;
  dirtyCount?: number;
}

export default function StatsBar({ stats, dirtyCount = 0 }: StatsBarProps) {
  return (
    <div className="stats-bar" id="stats-bar">
      <div className="stat-card accent">
        <div className="stat-value">{stats.projectCount}</div>
        <div className="stat-label">Projects</div>
      </div>
      <div className={`stat-card ${dirtyCount === 0 ? 'green' : 'red'}`}>
        <div className="stat-value">{dirtyCount === 0 ? '\u2713' : '\u26D4'}</div>
        <div className="stat-label">{dirtyCount === 0 ? 'All Clean' : `${dirtyCount} Dirty`}</div>
      </div>
    </div>
  );
}
