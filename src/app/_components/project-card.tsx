"use client";

import { useState } from "react";
import {
  ArrowSquareOutIcon,
  GithubLogoIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

const PLACEHOLDER = "/project-placeholder.svg";

export function ProjectCard({
  project,
  variant = "regular",
}: {
  project: Project;
  variant?: "regular" | "featured";
}) {
  const [imgSrc, setImgSrc] = useState(project.image || PLACEHOLDER);
  const featured = variant === "featured";

  const cta =
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 font-semibold text-primary-foreground text-sm transition-colors hover:bg-primary/90";

  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border border-outline/50 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40",
        featured ? "" : "min-h-[20rem]"
      )}
    >
      <div className="overflow-hidden border-outline/40 border-b bg-[#111827]">
        {/* biome-ignore lint/performance/noImgElement: static export */}
        <img
          alt={`Prévia do projeto ${project.title}`}
          className="aspect-[16/9] w-full bg-[#111827] object-contain object-center"
          loading="lazy"
          onError={() => setImgSrc(PLACEHOLDER)}
          src={imgSrc}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="min-w-0">
          <h3
            className={cn(
              "ellipsis font-semibold text-base text-foreground",
              featured && "lg:text-lg"
            )}
          >
            {project.title}
          </h3>
          <p
            className="mt-1 line-clamp-2 text-muted-foreground text-sm leading-6"
            title={project.description}
          >
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          {project.links.chrome ? (
            <a
              aria-label={`Chrome Web Store — ${project.title}`}
              className={cta}
              href={project.links.chrome}
              rel="noopener noreferrer"
              target="_blank"
            >
              Chrome
            </a>
          ) : null}
          {project.links.firefox ? (
            <a
              aria-label={`Firefox Add-ons — ${project.title}`}
              className={cta}
              href={project.links.firefox}
              rel="noopener noreferrer"
              target="_blank"
            >
              Firefox
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              aria-label={`Demo — ${project.title}`}
              className={cta}
              href={project.links.demo}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowSquareOutIcon className="size-4" />
              Ver demo
            </a>
          ) : null}
          {project.links.github ? (
            <a
              aria-label={`GitHub — ${project.title}`}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-outline/60 px-4 font-semibold text-foreground text-sm transition-colors hover:border-accent hover:text-accent"
              href={project.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubLogoIcon className="size-4" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
