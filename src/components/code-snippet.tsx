import { cn } from "@/lib/utils";

interface CodeSnippetProps {
  className?: string;
  lines: string[];
  title?: string;
}

export function CodeSnippet({
  title = "stack.ts",
  lines,
  className,
}: CodeSnippetProps) {
  return (
    <div
      className={cn(
        "max-w-full rounded-2xl border border-outline/70 bg-[#0d1117] text-slate-100 shadow-lg",
        className
      )}
    >
      <div className="flex items-center gap-2 border-outline/60 border-b px-3 py-2 text-slate-400 text-xs uppercase tracking-wide">
        <span aria-hidden className="flex gap-1">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-tertiary" />
        </span>
        <span className="font-mono text-slate-300 text-xs">{title}</span>
      </div>
      <div className="space-y-1 px-3 py-3 font-mono text-xs sm:text-[13px]">
        {lines.map((line) => (
          <p className="text-tertiary/80" key={line}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
