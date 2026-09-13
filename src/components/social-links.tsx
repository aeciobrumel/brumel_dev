import type { ComponentType } from "react";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MailIcon,
} from "@/components/icons";
import { buildMailto } from "@/lib/mailto";
import { cn } from "@/lib/utils";
import type { SocialLinks as SocialLinksType } from "@/types/profile";

interface SocialLinksProps {
  className?: string;
  links: SocialLinksType;
  variant?: "solid" | "ghost";
}

interface Entry {
  href: string;
  Icon: ComponentType<{ className?: string }>;
  key: string;
  label: string;
}

export function SocialLinks({
  links,
  className,
  variant = "ghost",
}: SocialLinksProps) {
  const entries: Entry[] = [
    {
      href: links.github,
      Icon: GithubLogoIcon,
      key: "github",
      label: "GitHub",
    },
    {
      href: links.linkedin,
      Icon: LinkedinLogoIcon,
      key: "linkedin",
      label: "LinkedIn",
    },
    {
      href: links.instagram,
      Icon: InstagramLogoIcon,
      key: "instagram",
      label: "Instagram",
    },
    {
      href: buildMailto({ to: links.email }),
      Icon: MailIcon,
      key: "email",
      label: "Email",
    },
  ];

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {entries.map(({ key, label, href, Icon }) => (
        <a
          aria-label={label}
          className={cn(
            "inline-flex items-center gap-2 rounded-xl border border-border/60 px-3 py-2 font-semibold text-sm transition hover:border-accent hover:text-accent",
            variant === "solid" && "bg-card/80"
          )}
          href={href}
          key={key}
          rel="noopener noreferrer"
          target={key === "email" ? undefined : "_blank"}
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  );
}
