export interface Skill {
  /** slug livre resolvido por components/skill-icon (simple-icons / override) */
  icon?: string;
  level?: string;
  name: string;
}

export interface SkillCategory {
  items: Skill[];
  title: string;
}
