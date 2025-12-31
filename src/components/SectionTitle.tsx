interface SectionTitleProps {
  kicker?: string;
  title: string;
  description?: string;
}

export function SectionTitle({ kicker, title, description }: SectionTitleProps) {
  return (
    <header className="mb-8 space-y-2">
      {kicker && <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{kicker}</p>}
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{title}</h2>
      {description && <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>}
    </header>
  );
}
