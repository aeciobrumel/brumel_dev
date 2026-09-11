"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { MoonIcon, SunIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { resolveTheme, useThemeStore } from "@/stores/theme";

const TRANSITION_DURATION = 500;

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolved = mounted ? resolveTheme(theme) : "dark";
  const nextLabel = resolved === "dark" ? "claro" : "escuro";

  function handleToggle(event: MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const applyTheme = () => flushSync(toggleTheme);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || typeof document.startViewTransition !== "function") {
      applyTheme();
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(applyTheme);

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
            filter: ["blur(6px)", "blur(0px)"],
          },
          {
            duration: TRANSITION_DURATION,
            easing: "ease-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {
        // transição cancelada (outra troca disparada antes) — sem ação
      });
  }

  return (
    <Button
      aria-label={`Ativar modo ${nextLabel}`}
      onClick={handleToggle}
      size="icon-sm"
      type="button"
      variant="ghost"
    >
      {resolved === "dark" ? (
        <SunIcon className="size-4" />
      ) : (
        <MoonIcon className="size-4" />
      )}
    </Button>
  );
}
