import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  tone?: "default" | "onPrimary";
};

export function SectionTitle({
  kicker,
  title,
  description,
  className,
  tone = "default",
}: SectionTitleProps) {
  const onPrimary = tone === "onPrimary";

  return (
    <header className={cn("mb-8 space-y-2", className)}>
      {kicker ? (
        <p
          className={cn(
            "font-semibold text-xs uppercase tracking-[0.24em]",
            onPrimary ? "text-primary-foreground/80" : "text-primary"
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-semibold text-2xl",
          onPrimary ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-sm",
            onPrimary ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
