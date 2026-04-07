import { useState, useCallback } from 'react';
import { useData } from './hooks/useData.js';
import { useDB } from './context/DataContext.jsx';
import Sidebar from './components/Sidebar.jsx';
import StatsBar from './components/StatsBar.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import AttentionView from './components/AttentionView.jsx';
import TodosView from './components/TodosView.jsx';
import IssuesView from './components/IssuesView.jsx';
import DecisionsView from './components/DecisionsView.jsx';

export default function App() {
  const data = useData();
  const { reseed } = useDB();
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const navigate = useCallback((view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const selectProject = useCallback((projectId) => {
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
        await reseed(result.seedData);
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
      />
      <main>
        {/* Dashboard view */}
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

        {/* Attention view */}
        {currentView === 'attention' && (
          <AttentionView
            projects={projects}
            todos={todos}
            issues={issues}
            concerns={concerns}
            onSelectProject={selectProject}
          />
        )}

        {/* Projects view */}
        {currentView === 'projects' && (
          <ProjectGrid
            projects={projects}
            todos={todos}
            issues={issues}
            onSelectProject={selectProject}
          />
        )}

        {/* Project detail view */}
        {currentView === 'project-detail' && currentProjectId && (
          <ProjectDetail projectId={currentProjectId} />
        )}

        {/* All Todos view */}
        {currentView === 'all-todos' && (
          <TodosView todos={todos} projects={projects} />
        )}

        {/* All Issues view */}
        {currentView === 'all-issues' && (
          <IssuesView issues={issues} projects={projects} />
        )}

        {/* All Decisions view */}
        {currentView === 'all-decisions' && (
          <DecisionsView decisions={decisions} projects={projects} />
        )}
      </main>
    </div>
  );
}
