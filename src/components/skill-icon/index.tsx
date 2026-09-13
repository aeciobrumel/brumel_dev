"use client";

import { cn } from "@/lib/utils";
import { resolveSimpleIcon } from "./resolve-simple-icon";
import {
  FallbackSkillIcon,
  resolveSlugOverride,
} from "./resolve-slug-override";

interface SkillIconProps {
  className?: string;
  label?: string;
  slug?: string;
  style?: React.CSSProperties;
}

export function SkillIcon({ slug, label, className, style }: SkillIconProps) {
  const normalized = (slug ?? "").trim().toLowerCase();

  const simpleIcon = normalized ? resolveSimpleIcon(normalized) : null;
  if (simpleIcon) {
    return (
      <svg
        aria-hidden={label ? undefined : true}
        aria-label={label}
        className={cn("size-4", className)}
        fill="currentColor"
        role={label ? "img" : undefined}
        style={style}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{label ?? simpleIcon.title}</title>
        <path d={simpleIcon.path} />
      </svg>
    );
  }

  const Override = normalized ? resolveSlugOverride(normalized) : null;
  const IconComponent = Override ?? FallbackSkillIcon;

  return (
    <IconComponent
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={cn("size-4", className)}
      style={style}
      weight="regular"
    />
  );
}
