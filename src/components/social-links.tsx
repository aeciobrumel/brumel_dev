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

type SocialLinksProps = {
  links: SocialLinksType;
  className?: string;
  variant?: "solid" | "ghost";
};

type Entry = {
  key: string;
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

export function SocialLinks({
  links,
  className,
  variant = "ghost",
}: SocialLinksProps) {
  const entries: Entry[] = [
    { key: "github", label: "GitHub", href: links.github, Icon: GithubLogoIcon },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: links.linkedin,
      Icon: LinkedinLogoIcon,
    },
    {
      key: "instagram",
      label: "Instagram",
      href: links.instagram,
      Icon: InstagramLogoIcon,
    },
    {
      key: "email",
      label: "Email",
      href: buildMailto({ to: links.email }),
      Icon: MailIcon,
    },
  ];

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {entries.map(({ key, label, href, Icon }) => (
        <a
          aria-label={label}
          className={cn(
            "inline-flex items-center gap-2 rounded-xl border border-outline/60 px-3 py-2 font-semibold text-sm transition hover:border-accent hover:text-accent",
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
