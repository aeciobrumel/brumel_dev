import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { Project } from '../types/portfolio';

export function Projects({ projects }: { projects: Project[] }) {
  const [pageSize, setPageSize] = useState(5);
  const [columns, setColumns] = useState(3);
  const [featuredWebLayout, setFeaturedWebLayout] = useState(false);
  const [page, setPage] = useState(0);
  const autoPlayMs = 7000;
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const desktopQuery = window.matchMedia('(min-width: 1280px)');

    const updateLayout = () => {
      if (mobileQuery.matches) {
        setPageSize(3);
        setColumns(1);
        setFeaturedWebLayout(false);
        return;
      }

      if (desktopQuery.matches) {
        setPageSize(5);
        setColumns(3);
        setFeaturedWebLayout(true);
        return;
      }

      setPageSize(4);
      setColumns(2);
      setFeaturedWebLayout(false);
    };

    updateLayout();
    mobileQuery.addEventListener('change', updateLayout);
    desktopQuery.addEventListener('change', updateLayout);

    return () => {
      mobileQuery.removeEventListener('change', updateLayout);
      desktopQuery.removeEventListener('change', updateLayout);
    };
  }, []);

  const totalPages = Math.max(1, Math.ceil(projects.length / pageSize));
  const safePage = Math.min(page, totalPages - 1);
  const visibleProjects = projects.slice(safePage * pageSize, safePage * pageSize + pageSize);
  const pageProjects = useMemo(
    () => [...visibleProjects, ...Array.from({ length: Math.max(0, pageSize - visibleProjects.length) }, () => null)],
    [pageSize, visibleProjects]
  );

  useEffect(() => {
    setPage((current) => Math.min(current, totalPages - 1));
  }, [totalPages]);

  useEffect(() => {
    if (totalPages <= 1) return;

    const timer = window.setInterval(() => {
      setPage((current) => (current === totalPages - 1 ? 0 : current + 1));
    }, autoPlayMs);

    return () => window.clearInterval(timer);
  }, [totalPages, safePage]);

  const renderProjectSlot = (project: Project | null, index: number, variant: 'featured' | 'regular') => {
    if (project) {
      return (
        <div key={`${project.title}-${safePage}-${index}`} className="h-full">
          <ProjectCard project={project} variant={variant} />
        </div>
      );
    }

    return (
      <article
        key={`placeholder-${safePage}-${index}`}
        aria-hidden="true"
        className={`h-full overflow-hidden rounded-xl border border-slate-200/60 bg-[#f9fafe] dark:border-white/10 dark:bg-[#0a1221] ${
          variant === 'featured' ? 'flex flex-col' : 'flex min-h-[20rem] flex-col'
        }`}
      >
        <div className="aspect-[16/9] w-full animate-pulse bg-slate-300/35 dark:bg-slate-700/35" />
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="h-5 w-3/4 animate-pulse rounded bg-slate-300/35 dark:bg-slate-700/35" />
          <div className="h-4 w-full animate-pulse rounded bg-slate-300/30 dark:bg-slate-700/30" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-slate-300/30 dark:bg-slate-700/30" />
          <div className="mt-auto flex gap-2 pt-1">
            <div className="h-10 w-24 animate-pulse rounded-lg bg-slate-300/35 dark:bg-slate-700/35" />
            <div className="h-10 w-24 animate-pulse rounded-lg bg-slate-300/25 dark:bg-slate-700/25" />
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="projects" className="scroll-mt-14 pt-14">
      <SectionTitle
        kicker="Projetos"
        title="Builds recentes"
        description="Bases reais do meu GitHub, com foco em tipagem, responsividade e entrega."
      />

      <div className="mb-5">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-slate-100">
            Mostrando {visibleProjects.length} de {projects.length} projetos
          </p>
          <p className="text-sm text-slate-400">
            Página {safePage + 1} de {totalPages}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={safePage}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {featuredWebLayout ? (
            <>
              <div className="grid gap-4 xl:grid-cols-2">
                {pageProjects.slice(0, 2).map((project, index) => renderProjectSlot(project, index, 'featured'))}
              </div>
              <div className="grid gap-4 xl:grid-cols-3">
                {pageProjects
                  .slice(2, 5)
                  .map((project, index) => renderProjectSlot(project, index + 2, 'regular'))}
              </div>
            </>
          ) : (
            <div className={`grid gap-4 ${columns > 1 ? 'md:grid-cols-2' : ''}`}>
              {pageProjects.map((project, index) => renderProjectSlot(project, index, 'regular'))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              aria-label={`Ir para grupo ${index + 1} de projetos`}
              aria-current={safePage === index ? 'true' : undefined}
              className={`h-3.5 w-3.5 rounded-full transition-all duration-300 ${
                safePage === index ? 'scale-125 bg-primary' : 'scale-100 bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
