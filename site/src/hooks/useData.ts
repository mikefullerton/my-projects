import { useState, useEffect } from 'react';
import { useDB } from '../context/DataContext.tsx';
import type { Project, Todo, Issue, Concern, Decision, Dependency, DashboardData, AppConfig } from '../types.ts';

function getOrderedProjects(projects: Project[], appConfig: AppConfig): Project[] {
  const order = appConfig.projectOrder || [];
  if (order.length === 0) return projects;
  return order
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);
}

export function getProjectGroup(projectId: string, appConfig: AppConfig): string {
  const path = (appConfig.projects || {})[projectId] || '';
  const parts = path.replace(/^\.\.\/\.\.\//,'').split('/');
  return parts.length > 1 ? parts[0] : 'other';
}

export interface ProjectGroup {
  name: string;
  projects: Project[];
}

export function groupProjects(projects: Project[], appConfig: AppConfig): ProjectGroup[] {
  const groups: string[] = [];
  const groupMap: Record<string, Project[]> = {};
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

export function formatGroupName(name: string): string {
  return name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export function useData(): DashboardData | null {
  const { db, refreshKey, appConfig } = useDB();
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function load() {
      const allProjects = await db.getProjects() as Project[];
      const projects = getOrderedProjects(allProjects, appConfig);
      const [todos, issues, concerns, decisions, dependencies] = await Promise.all([
        db.list('todos') as Promise<Todo[]>,
        db.list('issues') as Promise<Issue[]>,
        db.list('concerns') as Promise<Concern[]>,
        db.list('decisions') as Promise<Decision[]>,
        db.list('dependencies') as Promise<Dependency[]>,
      ]);

      const visibleIds = new Set(projects.map(p => p.id));
      const vTodos = todos.filter(t => visibleIds.has(t.projectId));
      const vIssues = issues.filter(i => visibleIds.has(i.projectId));
      const vConcerns = concerns.filter(c => visibleIds.has(c.projectId));
      const vDecisions = decisions.filter(d => visibleIds.has(d.projectId));
      const vDependencies = dependencies.filter(d => visibleIds.has(d.projectId));

      setData({
        projects,
        todos: vTodos,
        issues: vIssues,
        concerns: vConcerns,
        decisions: vDecisions,
        dependencies: vDependencies,
        stats: {
          projectCount: projects.length,
          openTodos: vTodos.filter(t => t.status !== 'done').length,
          totalTodos: vTodos.length,
          openIssues: vIssues.filter(i => i.status !== 'resolved').length,
          totalIssues: vIssues.length,
          activeConcerns: vConcerns.filter(c => c.status !== 'closed').length,
          totalDecisions: vDecisions.length,
        },
      });
    }
    load();
  }, [db, refreshKey, appConfig]);

  return data;
}
