import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/types/experience";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="relative pl-6">
      <span
        aria-hidden
        className="absolute top-2 left-0 size-3 rounded-full border border-accent bg-accent/20 shadow-glow"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-semibold text-foreground text-sm">{item.title}</p>
        <span className="text-muted-foreground text-xs uppercase tracking-wide">
          {item.period}
        </span>
      </div>
      <p className="mt-2 text-muted-foreground text-sm">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
