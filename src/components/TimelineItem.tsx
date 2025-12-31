import { TimelineItem as TimelineItemType } from '../types/portfolio';
import { Badge } from './Badge';

export function TimelineItem({ item }: { item: TimelineItemType }) {
  return (
    <div className="relative pl-6">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full border border-accent bg-accent/20 shadow-glow" aria-hidden />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{item.title}</p>
        <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.period}</span>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <Badge key={tag} label={tag} variant="outline" />
        ))}
      </div>
    </div>
  );
}
