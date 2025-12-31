import { cn } from '../utils/cn';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'ghost' | 'outline';
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  target,
  rel,
  variant = 'primary',
  iconRight,
  iconLeft,
  className,
  ...props
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-surface',
    variant === 'primary' && 'bg-gradient-to-r from-primary via-accent to-secondary text-slate-900 shadow-lg shadow-accent/20 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-accent/25 dark:text-slate-900',
    variant === 'ghost' && 'border border-outline/70 bg-white/60 text-slate-800 hover:border-accent hover:text-slate-900 dark:border-outline dark:bg-white/5 dark:text-slate-100 dark:hover:border-accent',
    variant === 'outline' && 'border border-accent/70 text-accent hover:bg-accent/10',
    className
  );

  const content = (
    <span className="flex items-center gap-2">
      {iconLeft && <span aria-hidden>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span aria-hidden>{iconRight}</span>}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={base}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-label={typeof children === 'string' ? children : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {content}
    </button>
  );
}
