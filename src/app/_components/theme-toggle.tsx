"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { resolveTheme, useThemeStore } from "@/stores/theme";

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolved = mounted ? resolveTheme(theme) : "dark";
  const nextLabel = resolved === "dark" ? "claro" : "escuro";

  return (
    <Button
      aria-label={`Ativar modo ${nextLabel}`}
      onClick={toggleTheme}
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
