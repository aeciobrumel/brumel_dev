import {
  BrainIcon,
  CodeIcon,
  type Icon,
  PlugsConnectedIcon,
  WindowsLogoIcon,
} from "@phosphor-icons/react";

/** slugs sem correspondência no simple-icons (removidos por política de marca, etc.) */
const OVERRIDE: Record<string, Icon> = {
  windows: WindowsLogoIcon,
  windows11: WindowsLogoIcon,
  openai: BrainIcon,
  gpt: BrainIcon,
  ai: BrainIcon,
  api: PlugsConnectedIcon,
};

export function resolveSlugOverride(slug: string): Icon | null {
  return OVERRIDE[slug] ?? null;
}

export const FallbackSkillIcon = CodeIcon;
