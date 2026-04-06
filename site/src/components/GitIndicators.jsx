export default function GitIndicators({ project }) {
  const p = project;
  const modCount = p.modifiedCount || 0;
  const stagedCount = p.stagedCount || 0;
  const untrackedCount = p.untrackedCount || 0;
  const deletedCount = p.deletedCount || 0;
  const aheadCount = p.aheadCount || 0;
  const behindCount = p.behindCount || 0;
  const branchCount = (p.openBranches || []).length;

  const pills = [];
  if (stagedCount > 0) pills.push({ cls: 'indicator-green', text: `${stagedCount} staged` });
  if (modCount > 0) pills.push({ cls: 'indicator-yellow', text: `${modCount} modified` });
  if (untrackedCount > 0) pills.push({ cls: 'indicator-yellow', text: `${untrackedCount} untracked` });
  if (deletedCount > 0) pills.push({ cls: 'indicator-red', text: `${deletedCount} deleted` });
  if (aheadCount > 0) pills.push({ cls: 'indicator-blue', text: `${aheadCount} ahead` });
  if (behindCount > 0) pills.push({ cls: 'indicator-yellow', text: `${behindCount} behind` });
  if (branchCount > 0) pills.push({ cls: 'indicator-blue', text: `${branchCount} branch${branchCount > 1 ? 'es' : ''}` });

  return (
    <>
      {pills.map((pill, i) => (
        <span key={i} className={`indicator-pill ${pill.cls}`}>{pill.text}</span>
      ))}
    </>
  );
}
