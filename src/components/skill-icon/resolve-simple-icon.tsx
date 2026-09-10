import {
  siBootstrap,
  siDocker,
  siGit,
  siGithub,
  siLaravel,
  siLinux,
  siOpenapiinitiative,
  siPhp,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
} from "simple-icons";

export type SimpleIcon = {
  title: string;
  hex: string;
  path: string;
};

/** slug normalizado -> ícone do simple-icons */
const SIMPLE_ICON_BY_SLUG: Record<string, SimpleIcon> = {
  react: siReact,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  vite: siVite,
  bootstrap: siBootstrap,
  laravel: siLaravel,
  php: siPhp,
  docker: siDocker,
  linux: siLinux,
  github: siGithub,
  git: siGit,
  openapiinitiative: siOpenapiinitiative,
};

export function resolveSimpleIcon(slug: string): SimpleIcon | null {
  return SIMPLE_ICON_BY_SLUG[slug] ?? null;
}
