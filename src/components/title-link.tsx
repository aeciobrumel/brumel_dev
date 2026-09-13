import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TitleLinkProps {
  className?: string;
  external?: boolean;
  href: string;
  icon?: ReactNode;
  label: string;
}

export function TitleLink({
  href,
  label,
  icon,
  className,
  external = true,
}: TitleLinkProps) {
  return (
    <a
      aria-label={label}
      className={cn(
        "group inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card/80 px-3 py-2 font-medium text-sm shadow-sm transition-colors hover:border-accent hover:text-accent",
        className
      )}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {icon ? <span className="text-accent">{icon}</span> : null}
      <span>{label}</span>
    </a>
  );
}
