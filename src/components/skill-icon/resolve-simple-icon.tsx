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

export interface SimpleIcon {
  hex: string;
  path: string;
  title: string;
}

/** slug normalizado -> ícone do simple-icons */
const SIMPLE_ICON_BY_SLUG: Record<string, SimpleIcon> = {
  bootstrap: siBootstrap,
  docker: siDocker,
  git: siGit,
  github: siGithub,
  laravel: siLaravel,
  linux: siLinux,
  openapiinitiative: siOpenapiinitiative,
  php: siPhp,
  react: siReact,
  tailwindcss: siTailwindcss,
  typescript: siTypescript,
  vite: siVite,
};

export function resolveSimpleIcon(slug: string): SimpleIcon | null {
  return SIMPLE_ICON_BY_SLUG[slug] ?? null;
}
