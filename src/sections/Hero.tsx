import { useEffect, useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CodeSnippet } from '../components/CodeSnippet';
import { LocationIcon, SparkleIcon, TerminalIcon } from '../components/Icons';
import { Profile, Theme } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
  snippet: string[];
  theme: Theme;
}

export function Hero({ profile, snippet, theme }: HeroProps) {
  const [hasError, setHasError] = useState(false);
  const avatarSrc = theme === 'dark' ? (profile.avatarUrlDark ?? profile.avatarUrl) : profile.avatarUrl;

  useEffect(() => {
    setHasError(false);
  }, [avatarSrc]);

  const initials = useMemo(
    () =>
      profile.name
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
    [profile.name]
  );

  return (
    <section id="hero" className="scroll-mt-24 pt-24 pb-24 md:pt-32">
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-outline/60 bg-[#eaf1ff]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur dark:bg-white/5 dark:text-slate-300">
            <SparkleIcon className="h-3.5 w-3.5 text-accent" />
            {profile.availability ?? 'Disponível'}
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">{profile.headline}</p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
              Olá, eu sou{' '}
              <span className="text-accent">{profile.name}</span>
            </h1>
            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">
              {profile.role} em {profile.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-outline/60 px-3 py-1 font-medium dark:border-outline/50">
              <LocationIcon className="h-4 w-4 text-accent" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-outline/60 px-3 py-1 font-medium text-tertiary">
              <TerminalIcon className="h-4 w-4" />
              Clean code.
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button href="#projects" iconRight={<span aria-hidden>→</span>}>
              Ver projetos
            </Button>
            <Button href={`mailto:${profile.links.email}`} variant="ghost" iconRight={<span aria-hidden>↗</span>}>
              Contato
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center sm:justify-items-stretch md:grid-cols-1 md:justify-items-end">
          <div className="flex w-full justify-center sm:justify-start md:justify-end">
            <Card className="relative inline-flex items-center justify-center p-3 sm:p-4 md:p-5">
              {!hasError ? (
                <img
                  src={avatarSrc}
                  alt={profile.avatarAlt ?? 'Foto de perfil'}
                  onError={() => setHasError(true)}
                  loading="lazy"
                  className="h-32 w-32 rounded-2xl border border-outline/10 object-cover object-top shadow-2xl ring-8 ring-accent/35 sm:h-40 sm:w-40 md:h-52 md:w-52"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-2xl border border-outline/70 bg-accent/25 font-semibold text-slate-900 shadow-2xl ring-8 ring-accent/35 sm:h-40 sm:w-40 md:h-52 md:w-52">
                  {initials || 'AB'}
                </div>
              )}
            </Card>
          </div>
          <div className="w-full min-w-0 max-w-sm sm:max-w-md md:max-w-md">
            <CodeSnippet title="stack.ts" lines={snippet} />
          </div>
        </div>
      </div>
    </section>
  );
}
