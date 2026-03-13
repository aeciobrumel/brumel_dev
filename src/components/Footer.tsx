import { SocialLinks } from './SocialLinks';
import { SocialLinks as SocialLinksType } from '../types/portfolio';

interface FooterProps {
  name: string;
  role: string;
  links: SocialLinksType;
  siteStack: string[];
}

export function Footer({ name, role, links, siteStack }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">{name}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{role}</p>
          <p className="max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-500">
            Portfolio construido com foco em clareza visual, performance e uma experiencia mais proxima de produto.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {siteStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/45 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/[0.035] dark:text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-500">Links principais</p>
          <SocialLinks links={links} />
        </div>
      </div>
    </footer>
  );
}
