import { COLORS } from '../lib/theme.ts';
import type { Project } from '../types.ts';

interface GitIndicatorsProps {
  project: Project;
}

export default function GitIndicators({ project }: GitIndicatorsProps) {
  const p = project;
  const modCount = p.modifiedCount || 0;
  const stagedCount = p.stagedCount || 0;
  const untrackedCount = p.untrackedCount || 0;
  const deletedCount = p.deletedCount || 0;
  const aheadCount = p.aheadCount || 0;
  const behindCount = p.behindCount || 0;
  const branchCount = (p.openBranches || []).length;

  const pills = [];
  if (stagedCount > 0) pills.push({ cls: `indicator-${COLORS.gitStaged}`, text: `${stagedCount} staged` });
  if (modCount > 0) pills.push({ cls: `indicator-${COLORS.gitModified}`, text: `${modCount} modified` });
  if (untrackedCount > 0) pills.push({ cls: `indicator-${COLORS.gitUntracked}`, text: `${untrackedCount} untracked` });
  if (deletedCount > 0) pills.push({ cls: `indicator-${COLORS.gitDeleted}`, text: `${deletedCount} deleted` });
  if (aheadCount > 0) pills.push({ cls: `indicator-${COLORS.gitAhead}`, text: `${aheadCount} ahead` });
  if (behindCount > 0) pills.push({ cls: `indicator-${COLORS.gitBehind}`, text: `${behindCount} behind` });
  if (branchCount > 0) pills.push({ cls: `indicator-${COLORS.gitBranches}`, text: `${branchCount} branch${branchCount > 1 ? 'es' : ''}` });

  return (
    <>
      {pills.map((pill, i) => (
        <span key={i} className={`indicator-pill ${pill.cls}`}>{pill.text}</span>
      ))}
    </>
  );
}
