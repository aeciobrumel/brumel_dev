import { useState } from 'react';
import { Project } from '../types/portfolio';
import { ExternalIcon, GitHubIcon } from './Icons';

export function ProjectCard({ project, variant = 'regular' }: { project: Project; variant?: 'regular' | 'featured' }) {
  const [imgSrc, setImgSrc] = useState(project.image || '/project-placeholder.svg');
  const isFeatured = variant === 'featured';

  return (
    <article
      className={`overflow-hidden rounded-xl border border-slate-200/80 bg-[#f9fafe] shadow-[0_18px_36px_rgba(15,23,42,0.05)] transition-all duration-200 md:hover:scale-[1.01] md:hover:-translate-y-0.5 md:hover:border-accent/40 dark:border-white/10 dark:bg-[#0a1221] dark:shadow-[0_24px_60px_rgba(5,8,18,0.28)] ${
        isFeatured ? 'flex h-full flex-col' : 'flex h-full min-h-[20rem] flex-col'
      }`}
    >
      <div className="overflow-hidden border-b border-slate-200/70 bg-[#111827] dark:border-white/10 dark:bg-[#0f1524]">
        <img
          src={imgSrc}
          alt={`Prévia do projeto ${project.title}`}
          loading="lazy"
          className="aspect-[16/9] w-full object-contain object-center bg-[#111827] dark:bg-[#0f1524]"
          onError={() => setImgSrc('/project-placeholder.svg')}
        />
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="min-w-0">
          <h3
            className={`text-base font-semibold text-slate-900 dark:text-slate-50 ${isFeatured ? 'lg:text-lg' : ''}`}
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {project.title}
          </h3>
          <p
            className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300"
            title={project.description}
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              maxHeight: '3rem'
            }}
          >
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1 text-sm font-semibold">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-slate-50 transition-colors md:hover:bg-primary/90"
              aria-label={`Demo do projeto ${project.title}`}
            >
              <ExternalIcon className="h-4 w-4" /> Ver demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-outline/60 px-4 text-slate-700 transition-colors md:hover:border-accent md:hover:text-accent dark:text-slate-200"
              aria-label={`GitHub do projeto ${project.title}`}
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
