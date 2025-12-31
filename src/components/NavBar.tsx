import { useEffect, useRef, useState } from 'react';
import { SocialLinks, Theme } from '../types/portfolio';
import { cn } from '../utils/cn';
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, MoonIcon, SunIcon } from './Icons';
import { Button } from './Button';

interface NavBarProps {
  sections: { id: string; label: string }[];
  activeId: string;
  onToggleTheme: () => void;
  theme: Theme;
  links: SocialLinks;
  brand: string;
}

export function NavBar({ sections, activeId, onToggleTheme, theme, links, brand }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEscape);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline/70 bg-white/80 backdrop-blur-md dark:bg-surface/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-4 sm:py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-100">

          <span className="font-mono text-sm text-slate-600 dark:text-slate-300 sm:text-base">{brand}.tsx</span>
          <span className="rounded-lg bg-gradient-to-r from-primary/40 to-accent/40 px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-accent">
            dev
          </span>
        </div>

        <nav
          className="hidden items-center gap-3 text-sm font-medium text-slate-600 md:flex dark:text-slate-300"
          aria-label="Navegação principal"
        >
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'rounded-lg px-3 py-2 transition hover:text-accent',
                activeId === item.id && 'bg-accent/10 text-accent'
              )}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            className="hidden md:inline-flex"
            href={`mailto:${links.email}`}
            aria-label="Enviar email"
            iconLeft={<MailIcon className="h-4 w-4" />}
          >
            Contato
          </Button>
          <div className="flex items-center gap-1 rounded-full border border-outline/70 bg-white/60 px-1.5 py-1 shadow-sm backdrop-blur dark:bg-white/5">
            <div className="hidden items-center gap-1 md:flex">
              <a
                href={links.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-1.5 text-slate-600 transition hover:text-accent dark:text-slate-300"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={links.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-1.5 text-slate-600 transition hover:text-accent dark:text-slate-300"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={links.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-1.5 text-slate-600 transition hover:text-accent dark:text-slate-300"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-lg p-1.5 text-slate-600 transition hover:text-accent dark:text-slate-300"
              aria-label={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
            >
              {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              ref={toggleRef}
              className="md:hidden rounded-lg p-1.5 text-slate-600 transition hover:text-accent dark:text-slate-300"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Abrir menu</span>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={cn(
          'md:hidden absolute left-0 right-0 top-full mt-2 border border-outline/50 bg-white/95 px-3 py-3 text-sm shadow-lg backdrop-blur transition-all duration-200 dark:bg-surface/95',
          menuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        )}
        style={{ zIndex: 60 }}
      >
        <nav className="flex flex-col gap-1" aria-label="Navegação móvel">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={cn(
                'rounded-lg px-3 py-2 text-slate-700 transition hover:bg-accent/10 hover:text-accent dark:text-slate-200',
                activeId === item.id && 'bg-accent/10 text-accent'
              )}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={`mailto:${links.email}`}
            className="rounded-lg border border-outline/70 px-3 py-2 text-slate-700 transition hover:border-accent hover:text-accent dark:text-slate-200"
            aria-label="Enviar email"
            onClick={handleNavClick}
          >
            Email
          </a>
        </div>
      </div>

      {menuOpen && (
        <button
          aria-label="Fechar menu"
          className="fixed inset-0 z-40 h-full w-full bg-black/30 transition-opacity duration-200 md:hidden"
          onClick={() => setMenuOpen(false)}
          type="button"
        />
      )}
    </header>
  );
}
