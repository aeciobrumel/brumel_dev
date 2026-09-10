"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_PALETTE, type PaletteId } from "@/consts/palettes";

type PaletteState = {
  palette: PaletteId;
  setPalette: (palette: PaletteId) => void;
};

export const usePaletteStore = create<PaletteState>()(
  persist(
    (set) => ({
      palette: DEFAULT_PALETTE,
      setPalette: (palette) => set({ palette }),
    }),
    { name: "palette" }
  )
);
