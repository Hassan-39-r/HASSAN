
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  category: 'tool' | 'research' | 'exploit';
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'security' | 'tools';
  description: string;
}

export interface AuditResult {
  vulnerability: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  recommendation: string;
}
