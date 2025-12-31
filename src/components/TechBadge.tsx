import { Technology } from '../types/portfolio';
import { cn } from '../utils/cn';
import { TechIcon } from './Icons';

export function TechBadge({ tech }: { tech: Technology }) {
  return (
    <span
      className={cn(
        'flex items-center gap-2 rounded-full border border-outline/60 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:border-accent hover:shadow-glow dark:bg-white/5 dark:text-slate-100'
      )}
    >
      <TechIcon name={tech.icon} className="h-4 w-4 text-accent" />
      <span>{tech.name}</span>
      {tech.level && <span className="text-xs text-slate-500 dark:text-slate-400">{tech.level}</span>}
    </span>
  );
}
