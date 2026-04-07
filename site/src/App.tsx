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
        currentProjectId={currentProjectId}
        onNavigate={navigate}
        onSelectProject={selectProject}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
      <main>
        {currentView === 'dashboard' && (() => {
          const dirtyProjects = projects.filter(p => p.uncommitted || (p.openBranches || []).length > 0 || (p.aheadCount || 0) > 0 || (p.behindCount || 0) > 0);
          return (
            <>
              <div className="section" data-section="dashboard" id="dashboard">
                <div className="page-header">
                  <h1><span>Project</span> Hub</h1>
                  <div className="title-rule"></div>
                  <p>Personal project management &mdash; {projects.length} projects across plugins, AI tools, web apps, and automation.</p>
                </div>
                <StatsBar stats={stats} />
                {dirtyProjects.length > 0 ? (
                  <div className="dirty-repos-section">
                    <h2 className="dirty-repos-title">Repos Needing Attention ({dirtyProjects.length})</h2>
                    <div className="dirty-repos-list">
                      {dirtyProjects.map(p => {
                        const details: string[] = [];
                        const dirty = (p.stagedCount || 0) + (p.modifiedCount || 0) + (p.untrackedCount || 0) + (p.deletedCount || 0);
                        if (dirty > 0) details.push(`${dirty} files changed`);
                        const branches = (p.openBranches || []).length;
                        if (branches > 0) details.push(`${branches} branch${branches > 1 ? 'es' : ''}`);
                        if ((p.aheadCount || 0) > 0) details.push(`${p.aheadCount} ahead`);
                        if ((p.behindCount || 0) > 0) details.push(`${p.behindCount} behind`);
                        return (
                          <div key={p.id} className="dirty-repo-item" onClick={() => selectProject(p.id)}>
                            <span className="dirty-repo-name">{p.id}</span>
                            <span className="dirty-repo-detail">{details.join(' | ')}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="all-clean-section">
                    <div className="all-clean-check">&#10003;</div>
                    <div className="all-clean-text">All repos clean</div>
                  </div>
                )}
              </div>
              {/* ProjectGrid removed from dashboard */}
            </>
          );
        })()}

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
