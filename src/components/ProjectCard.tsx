import { useState } from 'react';
import { Project } from '../types/portfolio';
import { Badge } from './Badge';
import { ExternalIcon, GitHubIcon } from './Icons';

export function ProjectCard({ project, variant = 'regular' }: { project: Project; variant?: 'regular' | 'featured' }) {
  const [imgSrc, setImgSrc] = useState(project.image || '/project-placeholder.svg');
  const visibleHighlights = project.highlights.slice(0, 2);
  const isFeatured = variant === 'featured';
  const shouldClampText = !isFeatured;

  return (
    <article
      className={`overflow-hidden rounded-xl border border-slate-200/80 bg-[#f9fafe] shadow-[0_18px_36px_rgba(15,23,42,0.05)] transition-all duration-200 hover:scale-[1.01] hover:-translate-y-0.5 hover:border-accent/40 dark:border-white/10 dark:bg-[#0a1221] dark:shadow-[0_24px_60px_rgba(5,8,18,0.28)] ${
        isFeatured ? '' : 'xl:h-[30rem]'
      }`}
    >
      <div className="overflow-hidden border-b border-slate-200/70 bg-[#111827] dark:border-white/10 dark:bg-[#0f1524]">
        <img
          src={imgSrc}
          alt={`Prévia do projeto ${project.title}`}
          loading="lazy"
          className={`w-full object-contain object-center bg-[#111827] dark:bg-[#0f1524] ${
            isFeatured ? 'aspect-[16/7.6]' : 'aspect-[16/8.4]'
          }`}
          onError={() => setImgSrc('/project-placeholder.svg')}
        />
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={`font-semibold text-slate-900 dark:text-slate-50 ${isFeatured ? 'text-lg' : 'text-base'}`}
              style={
                shouldClampText
                  ? {
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }
                  : undefined
              }
            >
              {project.title}
            </h3>
            <p
              className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300"
              title={!isFeatured ? project.description : undefined}
              style={
                shouldClampText
                  ? {
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      maxHeight: '4.5rem'
                    }
                  : undefined
              }
            >
              {project.description}
            </p>
          </div>
          <Badge label={project.stack[0] ?? 'Projeto'} variant="accent" className="shrink-0" />
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((item) => (
            <Badge key={item} label={item} variant="outline" />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {visibleHighlights.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent dark:bg-accent/12"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-1 text-sm font-semibold">
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

      </div>
    </article>
  );
}
