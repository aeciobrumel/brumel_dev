import { SkillBadge } from "@/components/skill-badge";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types/skill";

export function SkillBadgeList({
  skills,
  className,
}: {
  skills: Skill[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {skills.map((skill) => (
        <SkillBadge key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
