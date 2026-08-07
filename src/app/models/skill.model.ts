export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: string;
  icon?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  skills: SkillItem[];
}
