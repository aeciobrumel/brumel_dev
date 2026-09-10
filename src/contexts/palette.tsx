"use client";

import { type ReactNode, useEffect, useLayoutEffect } from "react";
import { PALETTE_IDS } from "@/consts/palettes";
import { usePaletteStore } from "@/stores/palette";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function PaletteProvider({ children }: { children: ReactNode }) {
  const palette = usePaletteStore((state) => state.palette);

  useIsomorphicLayoutEffect(() => {
    const root = document.documentElement;
    for (const id of PALETTE_IDS) {
      root.classList.remove(`palette-${id}`);
    }
    root.classList.add(`palette-${palette}`);
  }, [palette]);

  return <>{children}</>;
}
