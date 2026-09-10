import type { Skill, SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    items: [
      { icon: "react", name: "React" },
      { icon: "typescript", name: "TypeScript" },
      { icon: "tailwindcss", name: "Tailwind" },
      { icon: "vite", name: "Vite" },
      { icon: "bootstrap", name: "Bootstrap" },
    ],
    title: "Frontend",
  },
  {
    items: [
      { icon: "laravel", name: "Laravel" },
      { icon: "php", name: "PHP" },
    ],
    title: "Backend",
  },
  {
    items: [
      { icon: "docker", name: "Docker" },
      { icon: "docker", name: "Docker Compose" },
    ],
    title: "DevOps",
  },
  {
    items: [
      { icon: "linux", name: "Linux" },
      { icon: "windows", name: "Windows" },
    ],
    title: "Sistemas Operacionais",
  },
  {
    items: [
      { icon: "openai", name: "Prompt Engineering (LLMs)" },
      { icon: "openai", name: "LLM Fundamentals (tokens & context)" },
      { icon: "openai", name: "GPT / Codex" },
    ],
    title: "IA",
  },
  {
    items: [
      { icon: "github", name: "Git / GitHub" },
      { icon: "api", name: "APIs REST" },
    ],
    title: "Outros",
  },
];

export const skills: Skill[] = skillCategories.flatMap(
  (category) => category.items
);
