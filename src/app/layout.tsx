import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LayoutClient } from "@/app/layout-client";
import { SITE_URL } from "@/consts/seo";
import { fontVariables } from "@/lib/fonts";
import { generateSEO } from "@/lib/seo";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

export const metadata: Metadata = {
  ...generateSEO(),
  applicationName: "Aécio Brumel",
  authors: [{ name: "Aécio Brumel", url: SITE_URL }],
  creator: "Aécio Brumel",
  icons: {
    icon: [
      { type: "image/svg+xml", url: "/favicon.svg" },
      {
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
        url: "/favicon-blue.svg",
      },
    ],
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#f4f8ff", media: "(prefers-color-scheme: light)" },
    { color: "#0c0c11", media: "(prefers-color-scheme: dark)" },
  ],
};

const ANTI_FOUC = `(function(){try{var d=document.documentElement;var t="dark";var raw=localStorage.getItem("theme");if(raw){var p=JSON.parse(raw);if(p&&p.state&&p.state.theme){t=p.state.theme;}}if(t==="system"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}d.classList.toggle("dark",t==="dark");d.style.colorScheme=t;var pal="azul";var praw=localStorage.getItem("palette");if(praw){var pp=JSON.parse(praw);if(pp&&pp.state&&pp.state.palette){pal=pp.state.palette;}}["azul","esmeralda","ambar"].forEach(function(id){d.classList.remove("palette-"+id);});d.classList.add("palette-"+pal);}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={cn("dark palette-azul scroll-smooth", ...fontVariables)}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: script anti-FOUC síncrono */}
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC }} />
        {process.env.NODE_ENV === "development" && (
          <script async src="https://tweakcn.com/live-preview.min.js" />
        )}
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
