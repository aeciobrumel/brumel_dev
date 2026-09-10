import type { Skill, SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Vite", icon: "vite" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: "laravel" },
      { name: "PHP", icon: "php" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Docker Compose", icon: "docker" },
    ],
  },
  {
    title: "Sistemas Operacionais",
    items: [
      { name: "Linux", icon: "linux" },
      { name: "Windows", icon: "windows11" },
    ],
  },
  {
    title: "IA",
    items: [
      { name: "Prompt Engineering (LLMs)", icon: "openai" },
      { name: "LLM Fundamentals (tokens & context)", icon: "openai" },
      { name: "GPT / Codex", icon: "openai" },
    ],
  },
  {
    title: "Outros",
    items: [
      { name: "Git / GitHub", icon: "github" },
      { name: "APIs REST", icon: "openapiinitiative" },
    ],
  },
];

export const skills: Skill[] = skillCategories.flatMap(
  (category) => category.items
);
