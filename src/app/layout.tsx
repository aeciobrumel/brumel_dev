import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { LayoutClient } from "@/app/layout-client";
import { SITE_URL } from "@/consts/seo";
import { generateSEO } from "@/lib/seo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  ...generateSEO(),
  applicationName: "Aécio Brumel",
  authors: [{ name: "Aécio Brumel", url: SITE_URL }],
  creator: "Aécio Brumel",
  icons: {
    icon: [
      { type: "image/svg+xml", url: "/favicon-logo-black.svg" },
      {
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
        url: "/favicon-logo-white.svg",
      },
    ],
    shortcut: "/favicon-logo-black.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#ffffff", media: "(prefers-color-scheme: light)" },
    { color: "#000000", media: "(prefers-color-scheme: dark)" },
  ],
};

const ANTI_FOUC = `(function(){try{var d=document.documentElement;var t="dark";var raw=localStorage.getItem("theme");if(raw){var p=JSON.parse(raw);if(p&&p.state&&p.state.theme){t=p.state.theme;}}if(t==="system"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}d.classList.toggle("dark",t==="dark");d.style.colorScheme=t;}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="dark scroll-smooth" lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Fontes do tema ativo (styles/theme/tokens.css). Ao colar um tema novo
            do tweakcn, troque as famílias na URL abaixo pelas que ele declara em
            --font-sans / --font-mono. */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Instrument+Serif:ital@0;1&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: script anti-FOUC síncrono */}
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC }} />
        {process.env.NODE_ENV === "development" && (
          <script
            async
            crossOrigin="anonymous"
            src="https://tweakcn.com/live-preview.min.js"
          />
        )}
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
