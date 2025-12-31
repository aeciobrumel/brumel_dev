import { useState } from 'react';
import { Project } from '../types/portfolio';
import { Badge } from './Badge';
import { ExternalIcon, GitHubIcon } from './Icons';

export function ProjectCard({ project }: { project: Project }) {
  const [imgSrc, setImgSrc] = useState(project.image || '/project-placeholder.svg');

  return (
    <article className="card flex h-full flex-col gap-4 transition-transform duration-200 hover:-translate-y-1 hover:border-accent/50">
      <div className="overflow-hidden rounded-xl border border-outline/60 bg-slate-950/70">
        <img
          src={imgSrc}
          alt={`Prévia do projeto ${project.title}`}
          loading="lazy"
          className="h-40 w-full object-cover"
          onError={() => setImgSrc('/project-placeholder.svg')}
        />
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
        </div>
        <Badge label={project.stack[0] ?? 'Projeto'} variant="accent" />
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Badge key={item} label={item} variant="outline" />
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.highlights.map((tag) => (
          <span key={tag} className="rounded-lg bg-accent/10 px-2 py-1 text-xs font-semibold text-accent">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 text-sm font-semibold">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-700 transition hover:text-accent dark:text-slate-200"
            aria-label={`GitHub do projeto ${project.title}`}
          >
            <GitHubIcon className="h-4 w-4" /> GitHub
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-700 transition hover:text-accent dark:text-slate-200"
            aria-label={`Demo do projeto ${project.title}`}
          >
            <ExternalIcon className="h-4 w-4" /> Demo
          </a>
        )}
      </div>
    </article>
  );
}
