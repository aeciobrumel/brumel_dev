import type { ComponentType } from "react";
import {
  GithubLogoIcon,
  GlobeIcon,
  LinkedinLogoIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import type { PartnerLinks as PartnerLinksType } from "@/types/partner";

interface PartnerLinksProps {
  className?: string;
  links?: PartnerLinksType;
}

interface Entry {
  href: string;
  Icon: ComponentType<{ className?: string }>;
  key: string;
  label: string;
}

export function PartnerLinks({ links, className }: PartnerLinksProps) {
  if (!links) {
    return null;
  }

  const entries: Entry[] = [
    links.github && {
      href: links.github,
      Icon: GithubLogoIcon,
      key: "github",
      label: "GitHub",
    },
    links.linkedin && {
      href: links.linkedin,
      Icon: LinkedinLogoIcon,
      key: "linkedin",
      label: "LinkedIn",
    },
    links.website && {
      href: links.website,
      Icon: GlobeIcon,
      key: "website",
      label: "Site",
    },
  ].filter(Boolean) as Entry[];

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex gap-2", className)}>
      {entries.map(({ key, label, href, Icon }) => (
        <a
          aria-label={label}
          className="inline-flex size-8 items-center justify-center rounded-md border border-border/60 transition hover:border-accent hover:text-accent"
          href={href}
          key={key}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}
