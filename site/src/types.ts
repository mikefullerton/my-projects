export interface Commit {
  hash: string;
  message: string;
}

export interface BranchDetail {
  name: string;
  commits: Commit[];
  summary: string;
  commitCount: number;
}

export interface ModifiedFile {
  path: string;
  change: string;
  summary: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  status: string;
  techStack: string[];
  path?: string;
  branch: string;
  uncommitted: boolean;
  uncommittedDetail: string;
  openBranches: string[];
  branchSummaries?: Record<string, string>;
  branchDetails: BranchDetail[];
  modifiedFiles: ModifiedFile[];
  stagedCount: number;
  modifiedCount: number;
  untrackedCount: number;
  deletedCount: number;
  aheadCount: number;
  behindCount: number;
  latestWork: string;
  latestCommits: Commit[];
  syncNote?: string;
  runCmd?: string;
  tags?: string[];
}

export interface Todo {
  id: string;
  projectId: string;
  title: string;
  detail?: string;
  priority: 'high' | 'medium' | 'low';
  status: 'open' | 'done';
  assignee?: string;
}

export interface Issue {
  id: string;
  projectId: string;
  title: string;
  detail?: string;
  severity: 'high' | 'medium' | 'low';
  status: 'open' | 'resolved';
}

export interface Concern {
  id: string;
  projectId: string;
  title: string;
  detail?: string;
  status: 'open' | 'closed';
  raiser?: string;
}

export interface Decision {
  id: string;
  projectId: string;
  title: string;
  rationale?: string;
  decidedBy?: string;
  date?: string;
}

export interface Dependency {
  id: string;
  projectId: string;
  dependsOn: string;
  type?: string;
}

export interface SeedData {
  projects: Project[];
  todos: Todo[];
  issues: Issue[];
  concerns: Concern[];
  decisions: Decision[];
  dependencies?: Dependency[];
}

export interface AppConfig {
  projects: Record<string, string>;
  projectOrder: string[];
}

export interface DashboardStats {
  projectCount: number;
  openTodos: number;
  totalTodos: number;
  openIssues: number;
  totalIssues: number;
  activeConcerns: number;
  totalDecisions: number;
}

export interface DashboardData {
  projects: Project[];
  todos: Todo[];
  issues: Issue[];
  concerns: Concern[];
  decisions: Decision[];
  dependencies: Dependency[];
  stats: DashboardStats;
}
