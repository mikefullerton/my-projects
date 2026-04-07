import { useState, useCallback } from 'react';
import { useData } from './hooks/useData.ts';
import { useDB } from './context/DataContext.tsx';
import Sidebar from './components/Sidebar.tsx';
import StatsBar from './components/StatsBar.tsx';
import ProjectGrid from './components/ProjectGrid.tsx';
import ProjectDetail from './components/ProjectDetail.tsx';
import AttentionView from './components/AttentionView.tsx';
import TodosView from './components/TodosView.tsx';
import IssuesView from './components/IssuesView.tsx';
import DecisionsView from './components/DecisionsView.tsx';
import type { SeedData } from './types.ts';

export default function App() {
  const data = useData();
  const { reseed } = useDB();
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const navigate = useCallback((view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const selectProject = useCallback((projectId: string) => {
    setCurrentProjectId(projectId);
    setCurrentView('project-detail');
    window.scrollTo({ top: 0 });
  }, []);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const resp = await fetch('/api/refresh', { method: 'POST' });
      const result = await resp.json();
      if (result.ok && result.seedData) {
        await reseed(result.seedData as SeedData);
      }
    } catch {
      // silently fail
    } finally {
      setRefreshing(false);
    }
  }, [reseed]);

  if (!data) return null;

  const { projects, todos, issues, concerns, decisions, stats } = data;

  return (
    <div className="app">
      <Sidebar
        projects={projects}
        todos={todos}
        issues={issues}
        concerns={concerns}
        decisions={decisions}
        currentView={currentView}
        onNavigate={navigate}
        onSelectProject={selectProject}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
      <main>
        {currentView === 'dashboard' && (
          <>
            <div className="section" data-section="dashboard" id="dashboard">
              <div className="page-header">
                <h1><span>Project</span> Hub</h1>
                <div className="title-rule"></div>
                <p>Personal project management &mdash; {projects.length} projects across plugins, AI tools, web apps, and automation.</p>
              </div>
              <StatsBar stats={stats} />
            </div>
            <ProjectGrid
              projects={projects}
              todos={todos}
              issues={issues}
              onSelectProject={selectProject}
            />
          </>
        )}

        {currentView === 'attention' && (
          <AttentionView
            projects={projects}
            todos={todos}
            issues={issues}
            concerns={concerns}
            onSelectProject={selectProject}
          />
        )}

        {currentView === 'projects' && (
          <ProjectGrid
            projects={projects}
            todos={todos}
            issues={issues}
            onSelectProject={selectProject}
          />
        )}

        {currentView === 'project-detail' && currentProjectId && (
          <ProjectDetail projectId={currentProjectId} />
        )}

        {currentView === 'all-todos' && (
          <TodosView todos={todos} projects={projects} />
        )}

        {currentView === 'all-issues' && (
          <IssuesView issues={issues} projects={projects} />
        )}

        {currentView === 'all-decisions' && (
          <DecisionsView decisions={decisions} projects={projects} />
        )}
      </main>
    </div>
  );
}
