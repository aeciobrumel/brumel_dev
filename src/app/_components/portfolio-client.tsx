"use client";

import { useEffect, useMemo, useState } from "react";
import { ProjectCard } from "@/app/_components/project-card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

const PAGE_SIZE = 3;
const AUTOPLAY_MS = 12_000;

export function PortfolioClient({ projects }: { projects: Project[] }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages - 1);

  const visible = useMemo(
    () =>
      projects.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE),
    [projects, safePage]
  );

  useEffect(() => {
    if (totalPages <= 1) {
      return;
    }
    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % totalPages);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [totalPages]);

  return (
    <div className="space-y-5">
      <p className="text-muted-foreground text-sm">
        Mostrando {visible.length} de {projects.length} projetos · página{" "}
        {safePage + 1} de {totalPages}
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="flex items-center justify-center gap-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              aria-current={safePage === index ? "true" : undefined}
              aria-label={`Ir para grupo ${index + 1} de projetos`}
              className={cn(
                "size-3 rounded-full transition-all",
                safePage === index
                  ? "scale-125 bg-primary"
                  : "bg-primary/30 hover:bg-primary/50"
              )}
              // biome-ignore lint/suspicious/noArrayIndexKey: as bolinhas SÃO as páginas 0..n
              key={`page-${index}`}
              onClick={() => setPage(index)}
              type="button"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
