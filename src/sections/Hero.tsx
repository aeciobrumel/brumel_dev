import { useEffect, useMemo, useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Profile, Theme } from '../types/portfolio';
import { getEmailComposeHref } from '../utils/email';

interface HeroProps {
  profile: Profile;
  theme: Theme;
}

export function Hero({ profile, theme }: HeroProps) {
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
    <section id="hero" className="scroll-mt-14 pt-24 pb-14 md:pt-31">
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Olá, eu sou {profile.name}</p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
              {profile.role}
            </h1>
            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">
              Desenvolvedor Full Stack focado em React, TypeScript e Laravel. Entrego soluções claras, rápidas e fáceis de manter.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button href="#projects" iconRight={<span aria-hidden>→</span>}>
              Ver projetos
            </Button>
            <a
              href={getEmailComposeHref(profile.links.email)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 underline-offset-4 transition-colors hover:text-accent hover:underline dark:text-slate-300"
              aria-label="Contato"
            >
              Contato ↗
            </a>
          </div>
        </div>

        <div className="flex w-full justify-center md:justify-end">
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
      </div>
    </section>
  );
}
