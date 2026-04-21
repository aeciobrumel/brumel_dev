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
        'whitespace-nowrap rounded-full border border-slate-300/70 bg-[#eaf1ff]/85 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-slate-100',
        variant === 'accent' && 'border-none bg-accent text-white shadow-glow',
        variant === 'outline' && 'bg-transparent text-slate-800 dark:text-slate-200',
        className
      )}
    >
      {label}
    </span>
  );
}
