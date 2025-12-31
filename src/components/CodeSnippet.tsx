interface CodeSnippetProps {
  title?: string;
  lines: string[];
}

export function CodeSnippet({ title = 'stack.ts', lines }: CodeSnippetProps) {
  return (
    <div className="max-w-full rounded-2xl border border-outline/70 bg-slate-900/90 text-slate-100 shadow-lg">
      <div className="flex items-center gap-2 border-b border-outline/60 px-3 py-2 text-xs uppercase tracking-wide text-slate-400">
        <span className="flex gap-1" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-tertiary" />
        </span>
        <span className="font-mono text-xs text-slate-300">{title}</span>
      </div>
      <div className="space-y-1 px-3 py-3 font-mono text-xs sm:text-[13px]">
        {lines.map((line) => (
          <p key={line} className="text-tertiary/80">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
