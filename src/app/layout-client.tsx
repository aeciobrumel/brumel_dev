"use client";

import type { ReactNode } from "react";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/theme";

export function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  );
}
