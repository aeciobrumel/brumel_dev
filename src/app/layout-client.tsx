"use client";

import type { ReactNode } from "react";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { PaletteProvider } from "@/contexts/palette";
import { ThemeProvider } from "@/contexts/theme";

export function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <PaletteProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster position="top-center" richColors />
      </PaletteProvider>
    </ThemeProvider>
  );
}
