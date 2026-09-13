"use client";

import { useState } from "react";
import { ExperienceCard } from "@/app/_components/experience-card";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import type { Experience } from "@/types/experience";

export function ExperienceList({ items }: { items: Experience[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 1);

  return (
    <>
      <div className="relative space-y-6 border-border/60 border-l pl-6">
        {visible.map((item, index) => (
          <AnimateOnScroll
            delay={index * 50}
            key={`${item.title}-${item.period}`}
          >
            <ExperienceCard item={item} />
          </AnimateOnScroll>
        ))}
      </div>
      {items.length > 1 ? (
        <div className="mt-6">
          <Button
            aria-expanded={expanded}
            onClick={() => setExpanded((current) => !current)}
            type="button"
            variant="outline"
          >
            {expanded
              ? "Mostrar só a experiência mais recente"
              : "Ver experiências anteriores"}
          </Button>
        </div>
      ) : null}
    </>
  );
}
