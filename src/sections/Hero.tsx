import { useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CodeSnippet } from '../components/CodeSnippet';
import { LocationIcon, SparkleIcon, TerminalIcon } from '../components/Icons';
import { Profile } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
  snippet: string[];
}

export function Hero({ profile, snippet }: HeroProps) {
  const [hasError, setHasError] = useState(false);
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
    <section id="hero" className="scroll-mt-24 pt-24 md:pt-32">
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-outline/60 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm backdrop-blur dark:bg-white/5 dark:text-slate-300">
            <SparkleIcon className="h-3.5 w-3.5 text-accent" />
            {profile.availability ?? 'Disponível'}
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">{profile.headline}</p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
              Olá, eu sou <span className="gradient-text">{profile.name}</span>
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

        <div className="grid gap-4 md:justify-end">
          <div className="flex justify-start md:justify-end">
            <Card className="relative inline-flex items-center justify-center p-3 sm:p-4">
              <div className="absolute inset-0 animate-pulse rounded-2xl bg-accent/10 blur-2xl" aria-hidden />
              {!hasError ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.avatarAlt ?? 'Foto de perfil'}
                  onError={() => setHasError(true)}
                  loading="lazy"
                  className="h-24 w-24 rounded-2xl border border-outline/70 object-cover object-top shadow-xl ring-4 ring-accent/20 sm:h-28 sm:w-28 md:h-36 md:w-36"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-outline/70 bg-gradient-to-br from-primary/40 to-accent/30 font-semibold text-slate-900 shadow-xl ring-4 ring-accent/20 sm:h-28 sm:w-28 md:h-36 md:w-36">
                  {initials || 'AB'}
                </div>
              )}
            </Card>
          </div>
          <div className="max-w-md">
            <CodeSnippet title="stack.ts" lines={snippet} />
          </div>
        </div>
      </div>
    </section>
  );
}
