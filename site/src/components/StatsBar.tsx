import type { DashboardStats } from '../types.ts';

interface StatsBarProps {
  stats: DashboardStats;
  dirtyCount?: number;
}

export default function StatsBar({ stats, dirtyCount = 0 }: StatsBarProps) {
  return (
    <div className="stats-bar" id="stats-bar">
      <div className="stat-card accent">
        <div className="stat-value">
          {dirtyCount === 0 && <span className="stat-check">&#10003;</span>}
          {stats.projectCount}
        </div>
        <div className="stat-label">Projects</div>
      </div>
    </div>
  );
}
