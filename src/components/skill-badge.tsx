import { SkillIcon } from "@/components/skill-icon";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types/skill";

export function SkillBadge({
  skill,
  className,
}: {
  skill: Skill;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 rounded-full border border-outline/60 bg-card/80 px-3 py-2 font-semibold text-foreground text-xs shadow-sm backdrop-blur transition hover:border-accent hover:shadow-glow",
        className
      )}
    >
      <SkillIcon className="h-4 w-4 text-accent" slug={skill.icon} />
      <span>{skill.name}</span>
      {skill.level ? (
        <span className="text-muted-foreground text-xs">{skill.level}</span>
      ) : null}
    </span>
  );
}
