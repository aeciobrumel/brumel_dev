import { SkillIcon } from "@/components/skill-icon";
import { resolveSimpleIcon } from "@/components/skill-icon/resolve-simple-icon";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types/skill";

export function SkillBadge({
  skill,
  className,
}: {
  skill: Skill;
  className?: string;
}) {
  const hex = resolveSimpleIcon((skill.icon ?? "").trim().toLowerCase())?.hex;

  return (
    <span
      className={cn(
        "flex items-center gap-2 rounded-md border border-border/60 bg-card px-3 py-2 font-semibold text-xs transition",
        className
      )}
      style={
        hex
          ? { color: `color-mix(in oklab, #${hex} 65%, var(--foreground))` }
          : undefined
      }
    >
      <SkillIcon
        className="h-4 w-4"
        slug={skill.icon}
        style={hex ? { color: `#${hex}` } : undefined}
      />
      <span>{skill.name}</span>
      {skill.level ? (
        <span className="text-muted-foreground text-xs">{skill.level}</span>
      ) : null}
    </span>
  );
}
