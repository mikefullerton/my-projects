import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { ProjectDB } from '../lib/db.ts';
import { SEED_DATA } from '../lib/seed.ts';
import { APP_CONFIG } from '../lib/config.ts';
import type { AppConfig, SeedData } from '../types.ts';

const SEED_VERSION = 44;

interface DataContextValue {
  db: ProjectDB;
  refreshKey: number;
  refresh: () => void;
  reseed: (data: SeedData) => Promise<void>;
  appConfig: AppConfig;
}

const DataContext = createContext<DataContextValue | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  const [db] = useState(() => new ProjectDB());
  const [ready, setReady] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    async function init() {
      const currentVersion = localStorage.getItem('pmhub:seed_version');
      if (!currentVersion || parseInt(currentVersion) < SEED_VERSION) {
        await db.reset();
        await db.seed(SEED_DATA);
        localStorage.setItem('pmhub:seed_version', String(SEED_VERSION));
      }

      for (const [id, path] of Object.entries(APP_CONFIG.projects || {})) {
        const project = await db.getProject(id);
        if (project) {
          project.configPath = path;
          await db.saveProject(project);
        }
      }

      setReady(true);
    }
    init();
  }, [db]);

  const refresh = useCallback(() => {
    setRefreshKey(k => k + 1);
  }, []);

  const reseed = useCallback(async (newSeedData: SeedData) => {
    await db.reset();
    await db.seed(newSeedData);
    for (const [id, path] of Object.entries(APP_CONFIG.projects || {})) {
      const project = await db.getProject(id);
      if (project) {
        project.configPath = path;
        await db.saveProject(project);
      }
    }
    setRefreshKey(k => k + 1);
  }, [db]);

  if (!ready) return null;

  return (
    <DataContext.Provider value={{ db, refreshKey, refresh, reseed, appConfig: APP_CONFIG }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDB(): DataContextValue {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useDB must be inside DataProvider');
  return ctx;
}
