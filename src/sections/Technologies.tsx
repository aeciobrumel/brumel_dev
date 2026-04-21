import { useEffect, useMemo, useState } from 'react';
import { Technology, TechnologyCategory } from '../types/portfolio';
import {
  SiBootstrap,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from 'react-icons/si';
import { TbApi, TbBrandWindows, TbBrain, TbBrandVscode } from 'react-icons/tb';
import { IconType } from 'react-icons';

function uniqByName(items: Technology[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.name)) return false;
    seen.add(item.name);
    return true;
  });
}

const iconByName: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  vite: SiVite,
  bootstrap: SiBootstrap,
  laravel: SiLaravel,
  php: SiPhp,
  mysql: SiMysql,
  sql: SiPostgresql,
  docker: SiDocker,
  'docker compose': SiDocker,
  'git / github': SiGithub,
  'git/github': SiGithub,
  git: SiGit,
  'apis rest': TbApi,
  api: TbApi,
  linux: SiLinux,
  windows: TbBrandWindows,
  'gpt / codex': TbBrain,
  vscode: TbBrandVscode,
  javascript: SiJavascript,
  html: SiHtml5,
  css: TbApi
};

function getTechIcon(tech: Technology): IconType {
  const fromName = iconByName[tech.name.trim().toLowerCase()];
  if (fromName) return fromName;

  const byHint: Record<string, IconType> = {
    react: SiReact,
    typescript: SiTypescript,
    tailwind: SiTailwindcss,
    vite: SiVite,
    bootstrap: SiBootstrap,
    laravel: SiLaravel,
    php: SiPhp,
    docker: SiDocker,
    'docker-compose': SiDocker,
    git: SiGit,
    api: TbApi,
    ai: TbBrain,
    linux: SiLinux,
    windows: TbBrandWindows
  };

  return byHint[tech.icon ?? 'api'] ?? TbApi;
}

export function Technologies({ technologies }: { technologies: TechnologyCategory[] }) {
  const [showAll, setShowAll] = useState(false);
  const [groupIndex, setGroupIndex] = useState(0);
  const [slots, setSlots] = useState(8);

  const allTech = useMemo(() => {
    const merged = technologies.flatMap((group) => [
      ...(group.primaryItems ?? group.items ?? []),
      ...(group.secondaryItems ?? [])
    ]);
    return uniqByName(merged);
  }, [technologies]);

  useEffect(() => {
    const groupsCount = Math.max(1, Math.ceil(allTech.length / slots));
    if (groupsCount <= 1) return;

    const timer = window.setInterval(() => {
      setGroupIndex((current) => (current + 1) % groupsCount);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [allTech.length, slots]);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const desktopQuery = window.matchMedia('(min-width: 1280px)');

    const updateSlots = () => {
      if (mobileQuery.matches) {
        setSlots(6);
        return;
      }
      if (desktopQuery.matches) {
        setSlots(10);
        return;
      }
      setSlots(8);
    };

    updateSlots();
    mobileQuery.addEventListener('change', updateSlots);
    desktopQuery.addEventListener('change', updateSlots);
    return () => {
      mobileQuery.removeEventListener('change', updateSlots);
      desktopQuery.removeEventListener('change', updateSlots);
    };
  }, []);

  const lineItems = useMemo(() => {
    if (!allTech.length) return [];
    const start = groupIndex * slots;
    const chunk = allTech.slice(start, start + slots);
    if (chunk.length === slots || allTech.length <= slots) return chunk;
    return [...chunk, ...allTech.slice(0, slots - chunk.length)];
  }, [allTech, groupIndex, slots]);

  return (
    <section id="technologies" className="pt-0" aria-label="Stack principal">
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-primary dark:bg-[#121722]">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-h-[68px] items-center">
            <div className={`grid w-full items-center gap-3 ${slots === 6 ? 'grid-cols-6' : slots === 8 ? 'grid-cols-8' : 'grid-cols-10'}`}>
              {lineItems.map((tech, index) => (
                <button
                  type="button"
                  key={`${tech.name}-${index}`}
                  className="flex h-10 w-full items-center justify-center text-slate-200/90 transition-all duration-500 hover:text-white dark:text-slate-400 dark:hover:text-accent sm:h-11"
                  title={tech.name}
                >
                  {(() => {
                    const Icon = getTechIcon(tech);
                    return <Icon className="h-6 w-6 sm:h-7 sm:w-7" />;
                  })()}
                </button>
              ))}
            </div>
          </div>

          <div className="-mt-1 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-1 px-1 py-0.5 text-[10px] font-semibold lowercase tracking-[0.06em] text-slate-200/90 transition hover:text-white dark:text-slate-200"
            >
              <span aria-hidden className={`text-[9px] transition-transform ${showAll ? 'rotate-180' : ''}`}>
                ˅
              </span>
              {showAll ? 'mostrar menos' : 'mostrar mais'}
            </button>
          </div>

          {showAll ? (
            <div className="mt-5 grid grid-cols-3 gap-3 pt-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {allTech.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-1.5 p-2 text-center">
                  <span className="flex h-10 w-10 items-center justify-center text-slate-100 dark:text-slate-300">
                    {(() => {
                      const Icon = getTechIcon(tech);
                      return <Icon className="h-6 w-6" />;
                    })()}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.05em] text-slate-100 dark:text-slate-300">{tech.name}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
