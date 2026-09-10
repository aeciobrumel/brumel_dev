"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { PaletteProvider } from "@/contexts/palette";
import { ThemeProvider } from "@/contexts/theme";

export function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <PaletteProvider>
        <div className="flex min-h-screen flex-col">{children}</div>
        <Toaster position="top-center" richColors />
      </PaletteProvider>
    </ThemeProvider>
  );
}
