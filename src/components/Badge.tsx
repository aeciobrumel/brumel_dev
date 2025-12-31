import { cn } from '../utils/cn';

type BadgeProps = {
  label: string;
  variant?: 'muted' | 'accent' | 'outline';
  className?: string;
};

export function Badge({ label, variant = 'muted', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'pill whitespace-nowrap text-xs',
        variant === 'accent' && 'border-none bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 text-slate-900 shadow-glow',
        variant === 'outline' && 'bg-transparent text-slate-800 dark:text-slate-200',
        className
      )}
    >
      {label}
    </span>
  );
}
