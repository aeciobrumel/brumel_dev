export type Skill = {
  name: string;
  /** slug livre resolvido por components/skill-icon (simple-icons / override) */
  icon?: string;
  level?: string;
};

export type SkillCategory = {
  title: string;
  items: Skill[];
};
