"use client";

import { useState } from "react";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  ListIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HOME_SECTION_IDS, HOME_SECTIONS } from "@/consts/home-sections";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/reactive/use-active-section";
import { cn } from "@/lib/utils";
import { PaletteSelect } from "./palette-select";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const activeId = useActiveSection(HOME_SECTION_IDS);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-outline/60 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-(--layout-header-height) max-w-6xl items-center justify-between gap-3 px-4">
        <a className="flex items-center gap-2" href="#hero">
          <span className="rounded-lg bg-primary px-2 py-1 font-mono text-[11px] text-primary-foreground uppercase tracking-wide">
            dev
          </span>
          <span className="font-mono text-muted-foreground text-sm sm:text-base">
            {profile.username}.tsx
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 font-medium text-muted-foreground text-sm md:flex"
        >
          {HOME_SECTIONS.map((item) => (
            <a
              aria-current={activeId === item.id ? "true" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 transition hover:text-accent",
                activeId === item.id && "bg-primary/15 text-primary"
              )}
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1 md:flex">
            <a
              aria-label="GitHub"
              className="rounded-lg p-1.5 text-muted-foreground transition hover:text-accent"
              href={profile.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubLogoIcon className="size-4" />
            </a>
            <a
              aria-label="LinkedIn"
              className="rounded-lg p-1.5 text-muted-foreground transition hover:text-accent"
              href={profile.links.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedinLogoIcon className="size-4" />
            </a>
            <a
              aria-label="Instagram"
              className="rounded-lg p-1.5 text-muted-foreground transition hover:text-accent"
              href={profile.links.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramLogoIcon className="size-4" />
            </a>
          </div>
          <PaletteSelect />
          <ThemeToggle />
          <Sheet onOpenChange={setOpen} open={open}>
            <SheetTrigger asChild>
              <Button
                aria-label="Abrir menu"
                className="md:hidden"
                size="icon-sm"
                type="button"
                variant="ghost"
              >
                <ListIcon className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-72 gap-0 sm:max-w-xs" side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span className="rounded-lg bg-primary px-2 py-1 font-mono text-[11px] text-primary-foreground uppercase tracking-wide">
                    dev
                  </span>
                  <span className="font-mono text-muted-foreground text-sm">
                    {profile.username}.tsx
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav
                aria-label="Navegação"
                className="flex flex-col gap-1 px-4 py-2"
              >
                {HOME_SECTIONS.map((item) => (
                  <a
                    aria-current={activeId === item.id ? "true" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2 text-muted-foreground transition hover:bg-accent/10 hover:text-accent",
                      activeId === item.id && "bg-primary/15 text-primary"
                    )}
                    href={`#${item.id}`}
                    key={item.id}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex items-center gap-1 border-outline/50 border-t p-4">
                <a
                  aria-label="GitHub"
                  className="rounded-lg p-1.5 text-muted-foreground transition hover:text-accent"
                  href={profile.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubLogoIcon className="size-4" />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="rounded-lg p-1.5 text-muted-foreground transition hover:text-accent"
                  href={profile.links.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedinLogoIcon className="size-4" />
                </a>
                <a
                  aria-label="Instagram"
                  className="rounded-lg p-1.5 text-muted-foreground transition hover:text-accent"
                  href={profile.links.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <InstagramLogoIcon className="size-4" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
