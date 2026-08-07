export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'mlops' | 'ai' | 'fullstack' | 'all';
  categoryLabel: string;
  description: string;
  longDescription?: string;
  architectureHighlights: string[];
  metrics: { value: string; label: string }[];
  tags: string[];
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
  date?: string;
  icon: string;
  gradient: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  badge: string;
}

export interface Certification {
  year: string;
  issuer: string;
  title: string;
  badge?: string;
}
