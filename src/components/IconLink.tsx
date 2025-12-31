import { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface IconLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
}

export function IconLink({ href, label, icon, className }: IconLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 rounded-xl border border-outline/50 bg-white/60 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:border-accent hover:text-slate-900 dark:bg-white/5 dark:text-slate-100',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className="text-accent">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
