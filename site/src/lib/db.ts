/**
 * ProjectDB — Data abstraction layer for project management.
 *
 * Adapter pattern: currently uses localStorage. Replace LocalStorageAdapter
 * with a SQLiteAdapter or ApiAdapter when the web service is ready.
 * The DB interface stays the same — consumers never touch storage directly.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Row = Record<string, any>;

const TABLES = ['projects', 'todos', 'issues', 'concerns', 'decisions', 'dependencies'] as const;
type TableName = (typeof TABLES)[number];

interface StorageAdapter {
  getAll(table: TableName): Promise<Row[]>;
  get(table: TableName, id: string): Promise<Row | null>;
  put(table: TableName, record: Row): Promise<Row>;
  remove(table: TableName, id: string): Promise<boolean>;
  clear(table: TableName): Promise<boolean>;
}

class LocalStorageAdapter implements StorageAdapter {
  private ns: string;

  constructor(namespace = 'pmhub') {
    this.ns = namespace;
  }

  private _key(table: TableName): string { return `${this.ns}:${table}`; }

  private _load(table: TableName): Row[] {
    try { return JSON.parse(localStorage.getItem(this._key(table)) || '[]'); }
    catch { return []; }
  }

  private _save(table: TableName, rows: Row[]): void {
    localStorage.setItem(this._key(table), JSON.stringify(rows));
  }

  getAll(table: TableName) {
    return Promise.resolve(this._load(table));
  }

  get(table: TableName, id: string) {
    const rows = this._load(table);
    return Promise.resolve(rows.find(r => r.id === id) || null);
  }

  put(table: TableName, record: Row) {
    const rows = this._load(table);
    const idx = rows.findIndex(r => r.id === record.id);
    if (idx >= 0) rows[idx] = { ...rows[idx], ...record, updatedAt: new Date().toISOString() };
    else rows.push({ ...record, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    this._save(table, rows);
    return Promise.resolve(record);
  }

  remove(table: TableName, id: string) {
    const rows = this._load(table).filter(r => r.id !== id);
    this._save(table, rows);
    return Promise.resolve(true);
  }

  clear(table: TableName) {
    localStorage.removeItem(this._key(table));
    return Promise.resolve(true);
  }
}

// ─── ProjectDB ──────────────────────────────────────────────────────────────

class ProjectDB {
  private adapter: StorageAdapter;

  constructor(adapter?: StorageAdapter) {
    this.adapter = adapter || new LocalStorageAdapter();
  }

  // ── Generic CRUD ────────────────────────────────────────────────────────
  async list(table: TableName, filter?: (r: Row) => boolean): Promise<Row[]> {
    let rows = await this.adapter.getAll(table);
    if (filter) rows = rows.filter(filter);
    return rows;
  }

  async getById(table: TableName, id: string): Promise<Row | null> {
    return this.adapter.get(table, id);
  }

  async save(table: TableName, record: Row): Promise<Row> {
    if (!record.id) record.id = crypto.randomUUID();
    return this.adapter.put(table, record);
  }

  async remove(table: TableName, id: string): Promise<boolean> {
    return this.adapter.remove(table, id);
  }

  // ── Projects ────────────────────────────────────────────────────────────
  async getProjects() { return this.list('projects'); }
  async getProject(id: string) { return this.getById('projects', id); }
  async saveProject(p: Row) { return this.save('projects', p); }
  async removeProject(id: string) { return this.remove('projects', id); }

  // ── Todos ───────────────────────────────────────────────────────────────
  async getTodos(projectId?: string) {
    return this.list('todos', projectId ? r => r.projectId === projectId : undefined);
  }
  async saveTodo(t: Row) { return this.save('todos', t); }
  async removeTodo(id: string) { return this.remove('todos', id); }

  // ── Issues ──────────────────────────────────────────────────────────────
  async getIssues(projectId?: string) {
    return this.list('issues', projectId ? r => r.projectId === projectId : undefined);
  }
  async saveIssue(i: Row) { return this.save('issues', i); }
  async removeIssue(id: string) { return this.remove('issues', id); }

  // ── Concerns ────────────────────────────────────────────────────────────
  async getConcerns(projectId?: string) {
    return this.list('concerns', projectId ? r => r.projectId === projectId : undefined);
  }
  async saveConcern(c: Row) { return this.save('concerns', c); }
  async removeConcern(id: string) { return this.remove('concerns', id); }

  // ── Decisions ───────────────────────────────────────────────────────────
  async getDecisions(projectId?: string) {
    return this.list('decisions', projectId ? r => r.projectId === projectId : undefined);
  }
  async saveDecision(d: Row) { return this.save('decisions', d); }
  async removeDecision(id: string) { return this.remove('decisions', id); }

  // ── Dependencies ────────────────────────────────────────────────────────
  async getDependencies(projectId?: string) {
    return this.list('dependencies', projectId ? r => r.projectId === projectId : undefined);
  }
  async saveDependency(d: Row) { return this.save('dependencies', d); }
  async removeDependency(id: string) { return this.remove('dependencies', id); }

  // ── Cross-cutting queries ───────────────────────────────────────────────
  async getOpenItems(projectId?: string) {
    const [todos, issues, concerns] = await Promise.all([
      this.getTodos(projectId),
      this.getIssues(projectId),
      this.getConcerns(projectId),
    ]);
    return {
      todos: todos.filter(t => t.status !== 'done'),
      issues: issues.filter(i => i.status !== 'resolved'),
      concerns: concerns.filter(c => c.status !== 'closed'),
    };
  }

  async getDashboardStats() {
    const projects = await this.getProjects();
    const [todos, issues, concerns, decisions] = await Promise.all([
      this.list('todos'),
      this.list('issues'),
      this.list('concerns'),
      this.list('decisions'),
    ]);
    return {
      projectCount: projects.length,
      openTodos: todos.filter(t => t.status !== 'done').length,
      totalTodos: todos.length,
      openIssues: issues.filter(i => i.status !== 'resolved').length,
      totalIssues: issues.length,
      activeConcerns: concerns.filter(c => c.status !== 'closed').length,
      totalDecisions: decisions.length,
    };
  }

  // ── Seed / Reset ────────────────────────────────────────────────────────
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async seed(data: Record<string, any>) {
    for (const table of TABLES) {
      if (data[table]) {
        for (const record of data[table] as Row[]) {
          await this.save(table, record);
        }
      }
    }
  }

  async reset() {
    for (const table of TABLES) {
      await this.adapter.clear(table);
    }
  }
}

export { ProjectDB, LocalStorageAdapter, TABLES };
export type { StorageAdapter, TableName, Row };
