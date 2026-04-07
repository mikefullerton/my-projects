import { useState, useEffect } from 'react';
import { useDB } from '../context/DataContext.jsx';

function getOrderedProjects(projects, appConfig) {
  const order = appConfig.projectOrder || [];
  if (order.length === 0) return projects;
  return order
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean);
}

export function getProjectGroup(projectId, appConfig) {
  const path = (appConfig.projects || {})[projectId] || '';
  const parts = path.replace(/^\.\.\/\.\.\//,'').split('/');
  return parts.length > 1 ? parts[0] : 'other';
}

export function groupProjects(projects, appConfig) {
  const groups = [];
  const groupMap = {};
  projects.forEach(p => {
    const g = getProjectGroup(p.id, appConfig);
    if (!groupMap[g]) {
      groupMap[g] = [];
      groups.push(g);
    }
    groupMap[g].push(p);
  });
  return groups.map(name => ({ name, projects: groupMap[name] }));
}

export function formatGroupName(name) {
  return name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export function useData() {
  const { db, refreshKey, appConfig } = useDB();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const allProjects = await db.getProjects();
      const projects = getOrderedProjects(allProjects, appConfig);
      const [todos, issues, concerns, decisions, dependencies] = await Promise.all([
        db.list('todos'),
        db.list('issues'),
        db.list('concerns'),
        db.list('decisions'),
        db.list('dependencies'),
      ]);

      const visibleIds = new Set(projects.map(p => p.id));
      const vTodos = todos.filter(t => visibleIds.has(t.projectId));
      const vIssues = issues.filter(i => visibleIds.has(i.projectId));
      const vConcerns = concerns.filter(c => visibleIds.has(c.projectId));
      const vDecisions = decisions.filter(d => visibleIds.has(d.projectId));
      const vDependencies = dependencies.filter(d => visibleIds.has(d.projectId));

      const stats = {
        projectCount: projects.length,
        openTodos: vTodos.filter(t => t.status !== 'done').length,
        totalTodos: vTodos.length,
        openIssues: vIssues.filter(i => i.status !== 'resolved').length,
        totalIssues: vIssues.length,
        activeConcerns: vConcerns.filter(c => c.status !== 'closed').length,
        totalDecisions: vDecisions.length,
      };

      setData({
        projects,
        todos: vTodos,
        issues: vIssues,
        concerns: vConcerns,
        decisions: vDecisions,
        dependencies: vDependencies,
        stats,
      });
    }
    load();
  }, [db, refreshKey, appConfig]);

  return data;
}
