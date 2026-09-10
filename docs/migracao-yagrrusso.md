# Migração do brumel_dev para a estrutura do yagrrusso (dados estáticos)

> Documento de orientação. **Não implementar ainda** — este arquivo descreve o alvo, o
> mapeamento arquivo‑a‑arquivo, as dependências, os snippets de config e a ordem de
> execução para migrar o portfólio para a arquitetura do `yagrrusso.github.io`,
> **mantendo os dados 100% estáticos e locais (sem backend, sem GraphQL)**.

---

## 0. Decisões travadas

| # | Tema | Decisão |
|---|---|---|
| 1 | i18n | **Não.** Só front, single locale pt‑BR. Sem `next-intl`, sem `[locale]`, sem `messages/`. |
| 2 | Camada de dados | **Server Components.** `src/data/*` importado direto nos componentes de servidor. Sem TanStack Query, sem factories, sem hydration. |
| 3 | Formulário de contato | **`mailto:`.** Sem backend nem serviço externo. |
| 4 | Troca de paleta em runtime | **Sim, manter.** Reimplementar via store Zustand + classes `palette-*` no `<html>` (mecanismo multi‑tema do yagrrusso). |
| 5 | Docs p/ IA | **Sim.** Trazer `AGENTS.md` + `agents/overview.md` descrevendo a arquitetura nova. |
| 6 | Deploy | **Hostinger / FTP** (mantém o atual), apontando para `out/`. |

---

## 1. Objetivo e escopo

Adotar a **estrutura de frontend** do yagrrusso:

- Next.js 16 (App Router, `output: "export"`) + React 19 + TypeScript `strict`.
- shadcn/ui (`new-york`, baseColor `neutral`, ícones Phosphor) + registries Magic UI / Kibo UI.
- Tailwind CSS v4 CSS‑first (sem `tailwind.config`), com tokens OKLCH e partials organizados.
- Zustand (preferência de tema **e** de paleta) + `contexts/*` (aplicação no DOM).
- Conteúdo em módulos `src/data/*` lidos direto por Server Components.
- Formulário de contato com validação Zod, envio via `mailto:`.
- Biome + Ultracite, Husky + lint-staged, Vitest.
- SEO (metadata, `sitemap.ts`, `robots.ts`, JSON-LD, imagens OG).
- `AGENTS.md` + `agents/overview.md`.

**Fora do escopo:** backend `profile-info`, `graphql-codegen`, `@0no-co/graphqlsp`,
`schema.graphql`, `execute()`/`fetch`, TanStack Query, `next-intl`, `wrangler`/Cloudflare.

### Camada de dados (decisão #2)

`src/data/*.ts` exporta constantes tipadas. Server Components importam direto:

```ts
// src/app/_components/sections/portfolio-section.tsx  (Server Component)
import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/section-title";
import { PortfolioClient } from "./portfolio-client";

export function PortfolioSection() {
  return (
    <section id="my-portfolio" className="container">
      <SectionTitle>Projetos</SectionTitle>
      {/* interatividade fica num leaf client; dados ficam no servidor */}
      <PortfolioClient projects={projects.slice(0, 3)} />
    </section>
  );
}
```

Regras:

- **Ler dados só em Server Component.** Passar para leaves `"use client"` via props
  (evita empacotar o `data/` inteiro no bundle do cliente).
- "Top N / ordenação" resolve-se com `.slice()` / pré-ordenação no próprio módulo de
  dados, ou com o helper opcional `src/classes/query.ts` (o `QueryHelper` com lodash do
  yagrrusso) se surgir uma listagem filtrável.
- Se um dia entrar um backend, troca-se o corpo do módulo `data/*` por um `fetch` em
  Server Component — a assinatura para as sections não muda.

---

## 2. Estado atual (brumel_dev) × alvo

| Tema | brumel_dev hoje | Alvo |
|---|---|---|
| Bundler/framework | Vite + React 18 SPA | Next.js 16 App Router, static export, React 19 |
| Roteamento | `window.location.pathname` manual | rotas de arquivo em `src/app/…` (sem `[locale]`) |
| HTML shell | `index.html` | `app/layout.tsx` (metadata) |
| Fontes | `<link>` Google Fonts no `index.html` | `next/font` em `src/lib/fonts.ts` (CSS vars) |
| Tailwind | v3 + `tailwind.config.cjs` + `autoprefixer` | v4 CSS-first + `@tailwindcss/postcss` |
| `cn()` | `classes.filter(Boolean).join(' ')` | `clsx` + `tailwind-merge` em `src/lib/utils.ts` |
| Componentes base | `Button`/`Card`/`Badge` caseiros | primitivos shadcn em `src/components/ui/` |
| Ícones | `react-icons` + `Icons.tsx` | `@phosphor-icons/react` + `simple-icons` + `components/skill-icon/` |
| Animação | `framer-motion` | `motion` (mesma lib, pacote renomeado) + Magic UI |
| Tema claro/escuro | `useTheme.ts` (useState + localStorage) | `stores/theme.ts` (Zustand persist) + `contexts/theme.tsx` |
| Paleta em runtime | `applyPalette` (CSS vars RGB via `data/theme.ts`) | `stores/palette.ts` + `contexts/palette.tsx` + classes `palette-*` (OKLCH) |
| i18n | pt-BR fixo | **continua pt-BR fixo** (sem next-intl) |
| Dados | `src/data/portfolio.ts` (um objetão) | `src/data/*.ts` por entidade, lidos por Server Components |
| Data-fetching | — | — (sem TanStack Query) |
| Lint/format | ausente | Biome + Ultracite |
| Git hooks | ausente | Husky + lint-staged |
| `.gitignore` | **ausente** (`node_modules/` e `dist/` versionados) | entradas do yagrrusso + `git rm -r --cached node_modules dist` |
| SPA fallback | `public/_redirects` + `public/.htaccess` reescrevem tudo p/ `index.html` | removidos (rotas de arquivo reais) |
| Testes | ausente | Vitest (`tests/`) |
| SEO | `<meta>` fixo no `index.html` | `lib/seo.ts`, `sitemap.ts`, `robots.ts`, JSON-LD, OG |
| Alias TS | nenhum | `@/*` → `src/*` |
| Alvo de build | `dist/` | `out/` |
| Deploy | FTP → Hostinger | **mantém** FTP → Hostinger, apontando para `out/` |

---

## 3. Estrutura de diretórios alvo

```
.
├── AGENTS.md                      # router de contexto p/ IA
├── agents/overview.md             # arquitetura + convenções
├── biome.jsonc
├── components.json
├── next.config.ts
├── postcss.config.mjs             # substitui postcss.config.cjs
├── tsconfig.json                  # sem tsconfig.node.json
├── vitest.config.ts
├── .husky/pre-commit
├── .vscode/{extensions,settings}.json
├── public/                        # imagens movidas de src/assets, favicons, OG
│   ├── favicon.svg / favicon-blue.svg   # JÁ existem no repo — reaproveitar, não recriar
│   ├── .htaccess                        # SEM rewrite catch-all (ver §11) — no máx. ErrorDocument 404
│   └── images/{portrait.jpg, og/default.png}
└── src/
    ├── app/
    │   ├── layout.tsx             # server: <html>, fonts, metadata, script anti-FOUC, <LayoutClient>
    │   ├── layout-client.tsx      # "use client": <body>, header, footer, menu, ThemeProvider, PaletteProvider, Toaster
    │   ├── page.tsx               # home: Server Component, importa data/*, compõe as sections
    │   ├── robots.ts
    │   ├── sitemap.ts
    │   ├── _components/
    │   │   ├── layout-menu.tsx    # menu + toggle tema + seletor de paleta
    │   │   ├── project-card.tsx
    │   │   ├── experience-card.tsx
    │   │   └── sections/
    │   │       ├── hero-section.tsx
    │   │       ├── about-section.tsx
    │   │       ├── portfolio-section.tsx
    │   │       ├── skills-section.tsx
    │   │       ├── skills-marquee-section.tsx
    │   │       ├── experience-section.tsx
    │   │       ├── impact-section.tsx
    │   │       └── contact-section.tsx
    │   ├── politica-privacidade/page.tsx
    │   └── cola-do-dev/page.tsx
    ├── components/
    │   ├── ui/                    # primitivos shadcn / Magic UI / Kibo UI
    │   ├── skill-icon/            # index.tsx + resolve-simple-icon.tsx + resolve-slug-override.tsx
    │   ├── animate-on-scroll.tsx  # substitui ScrollReveal (usa `motion`)
    │   ├── section-title.tsx
    │   ├── social-links.tsx
    │   ├── title-link.tsx
    │   ├── skill-badge.tsx / skill-badge-list.tsx
    │   └── code-snippet.tsx       # custom, mantido
    ├── hooks/
    │   └── reactive/
    │       ├── use-active-section.ts
    │       └── use-debounce.ts
    ├── forms/
    │   └── contact.tsx            # validação Zod + envio mailto:
    ├── lib/
    │   ├── utils.ts               # cn()
    │   ├── fonts.ts               # next/font
    │   ├── seo.ts                 # generateSEO() sem getMe
    │   ├── mailto.ts              # de src/utils/email.ts
    │   └── get-or-throw.ts
    ├── stores/
    │   ├── theme.ts               # "light" | "dark" | "system"  (persist)
    │   └── palette.ts             # id da paleta ativa            (persist)
    ├── contexts/
    │   ├── theme.tsx              # aplica .dark no <html>
    │   └── palette.tsx            # aplica .palette-<id> no <html>
    ├── consts/
    │   ├── home-sections.ts
    │   ├── palettes.ts            # lista de paletas (id + label)
    │   ├── seo.ts                 # título/descrição do site
    │   ├── stack.tsx
    │   └── urls.tsx
    ├── data/
    │   ├── profile.ts
    │   ├── projects.ts
    │   ├── skills.ts
    │   ├── experiences.ts
    │   ├── impact.ts
    │   ├── highlights.ts          # 7ª chave do portfolio.ts atual (ou fundir em profile.ts)
    │   └── snippet.ts
    ├── types/
    │   └── *.ts                   # por entidade (de src/types/portfolio.ts)
    └── styles/
        ├── globals.css            # entry
        ├── base.css
        ├── tailwind/{animations,configs,utilities}.css
        └── theme/{index,default,original,palettes,fonts,status}.css
```

Convenção: **`_components/` = local da rota**, **`components/` = compartilhado e
agnóstico de domínio**, **`components/ui/` = primitivos** (não editar à mão além do que
o shadcn gera).

---

## 4. Mudanças de dependências

### Adicionar (produção)

```
next@16  react@19  react-dom@19
zustand
class-variance-authority  clsx  tailwind-merge
radix-ui                     # pacote unificado — o shadcn "new-york" atual NÃO usa mais os @radix-ui/react-* avulsos
@phosphor-icons/react  simple-icons
motion                       # remove framer-motion
sonner                       # toasts
zod  validator               # validação do form de contato
tailwindcss@4  tw-animate-css
```

Opcionais (Magic UI / extras usados nas sections): `embla-carousel-react`,
`canvas-confetti` + `@types/canvas-confetti`, `rough-notation`, `cmdk`, `lodash` +
`@types/lodash` (só se usar `src/classes/query.ts`).

### Adicionar (dev)

```
@biomejs/biome  ultracite
husky  lint-staged
vitest
@tailwindcss/postcss
@types/node  @types/react@19  @types/react-dom@19
```

### Remover

```
vite  @vitejs/plugin-react
react-icons
autoprefixer  postcss  tailwindcss@3   # o par standalone postcss@8 + autoprefixer, trocado por @tailwindcss/postcss
framer-motion
```

### Não trazer (fora de escopo)

```
next-intl  next-themes
@tanstack/react-query  @tanstack/react-form
@graphql-codegen/*  @graphql-typed-document-node/core  @0no-co/graphqlsp
wrangler  serve  cheerio  baseline-browser-mapping  dotenv  @swc/helpers  @parcel/watcher
```

### Scripts `package.json` alvo

```jsonc
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",   // gera ./out por causa de output:"export"
    "serve": "npx serve out",            // preview do export — `next start` NÃO funciona com output:"export"
    "check": "ultracite check",
    "fix": "ultracite fix",
    "test": "vitest run",
    "test:watch": "vitest",
    "prepare": "husky || true"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,jsonc,css,scss,md,mdx}": ["npx ultracite fix"]
  }
}
```

---

## 5. Config — arquivos a criar / substituir

### `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_BUILD_DATE: new Date().toISOString() },
  images: { unoptimized: true },   // obrigatório com output:"export"
  output: "export",
  trailingSlash: true,             // hospedagem estática / FTP
};

export default nextConfig;
```

### `tsconfig.json`

```jsonc
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "strictNullChecks": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Deletar `tsconfig.node.json`. Remover `allowImportingTsExtensions` (imports sem `.ts`).

### `postcss.config.mjs` (substitui `postcss.config.cjs`)

```js
const config = { plugins: ["@tailwindcss/postcss"] };
export default config;
```

### `components.json`

```jsonc
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "phosphor",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {
    "@magicui": "https://magicui.design/r/{name}.json",
    "@kibo-ui": "https://www.kibo-ui.com/r/{name}.json"
  }
}
```

### `biome.jsonc`

Copiar o do yagrrusso, `extends` `ultracite/biome/{core,next,react}` (remover `remix`),
e limpar as entradas de `graphql` do `files.includes`.

### `vitest.config.ts`

```ts
import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "./src") } },
  test: { include: ["tests/**/*.test.ts"] },
});
```

### `.husky/pre-commit`

```sh
npx lint-staged
```

### `.vscode/settings.json` / `extensions.json`

Copiar do yagrrusso (Biome como formatter, `formatOnSave`, `codeActionsOnSave` Biome;
extensões `biomejs.biome`, `bradlc.vscode-tailwindcss`). Remover extensões `GraphQL.*`.

### Deletar

`index.html`, `vite.config.ts`, `tailwind.config.cjs`, `tsconfig.node.json`,
`postcss.config.cjs`, `src/main.tsx`, `src/index.css`, `public/_redirects` (e o rewrite
catch-all de `public/.htaccess` — ver §11).

---

## 6. Sistema de estilo (Tailwind v4)

Reproduzir a árvore `src/styles/` do yagrrusso:

- **`globals.css`** — entry:
  ```css
  @import "tailwindcss";
  @import "tw-animate-css";
  @import "./tailwind/animations.css";
  @import "./tailwind/configs.css";
  @import "./tailwind/utilities.css";
  @import "./theme/index.css";
  @import "./base.css";

  @layer base {
    * { @apply border-border outline-ring/50; }
    body { @apply bg-background font-sans text-foreground; }
  }
  ```
- **`tailwind/configs.css`** — `@custom-variant dark (&:is(.dark *))`, reset das cores
  default do Tailwind (`--color-red-*: initial` …), `@theme inline` mapeando os tokens
  shadcn (`--color-background: var(--background)` …), escala de `--radius`, `--shadow-*`,
  breakpoint `--breakpoint-3xl`.
- **`tailwind/animations.css`** — keyframes `marquee`, `marquee-vertical`, `orbit`,
  `astronaut-float`, `blink-cursor` + `@theme inline { --animate-*: … }`.
- **`tailwind/utilities.css`** — `@utility container` (ajustar o padding ao gosto do
  brumel), `@utility ellipsis`, `@utility scrollbar-hidden`.
- **`theme/index.css`** — importa `default.css`, `original.css` (paleta base),
  `palettes.css` (paletas alternativas — ver seção 7), `status.css`, `fonts.css`.
- **`theme/default.css` / `original.css`** — blocos `:root { … }` e `.dark { … }` com
  os tokens em **OKLCH**: `--background --foreground --card --popover --primary
  --secondary --muted --accent --border --input --ring --sidebar-* --chart-1..5
  --radius`. A paleta azul atual do brumel (`22 63 120`, `18 48 96`, `46 105 190`,
  `147 181 230`) entra aqui convertida para OKLCH em `--primary` / `--secondary` /
  `--accent` / e derivados.
- **`theme/fonts.css`** — recebe `--font-family-sans/mono` (as vars "cruas" que o
  `next/font` cria em `lib/fonts.ts`) e as remapeia para os tokens Tailwind
  `--font-sans/mono/serif` em `@theme inline`. Os dois conjuntos de nomes têm que bater.
- **`base.css`** — `--layout-header-height: 4rem`, regras de `::view-transition-*`,
  `.dark .logo-adaptive { filter: invert(1); }`.

**Fontes** — `src/lib/fonts.ts`:

```ts
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
// vars "cruas"; `theme/fonts.css` as remapeia p/ --font-sans / --font-mono via @theme inline
const fontSans = Space_Grotesk({ subsets: ["latin"], variable: "--font-family-sans" });
const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-family-mono" });
export const fontVariables = [fontSans.variable, fontMono.variable];
```

Aplicadas no `<html>` do `app/layout.tsx` via
`cn("dark scroll-smooth", ...fontVariables)`.

---

## 7. Troca de paleta em runtime (decisão #4)

Reimplementar o `applyPalette` atual com o mecanismo multi‑tema do yagrrusso: uma
classe `palette-<id>` no `<html>` que sobrescreve os tokens de cor, persistida em
Zustand.

**`src/consts/palettes.ts`**

```ts
export const PALETTES = [
  { id: "azul", label: "Azul" },          // paleta base atual do brumel
  { id: "esmeralda", label: "Esmeralda" },
  { id: "ambar", label: "Âmbar" },
] as const;

export type PaletteId = (typeof PALETTES)[number]["id"];
export const DEFAULT_PALETTE: PaletteId = "azul";
```

**`src/styles/theme/palettes.css`** — um bloco por paleta (light + dark), sobrescrevendo
só os tokens que mudam:

```css
.palette-esmeralda {
  --primary: oklch(0.69 0.15 160);
  --accent: oklch(0.75 0.13 165);
  --ring: oklch(0.69 0.15 160);
}
.dark .palette-esmeralda {
  --primary: oklch(0.72 0.14 162);
  --accent: oklch(0.30 0.05 165);
  --ring: oklch(0.55 0.10 162);
}
/* … idem para .palette-ambar. .palette-azul usa os tokens de default/original.css */
```

**`src/stores/palette.ts`** — Zustand `persist` (`name: "palette"`), guarda o `PaletteId`
ativo, `setPalette(id)`.

**`src/contexts/palette.tsx`** — `"use client"`; num `useLayoutEffect` remove qualquer
`palette-*` do `<html>` e adiciona `palette-<id>` da store. Montado no `layout-client.tsx`
junto do `ThemeProvider`.

**Controle na UI** — um `Select` (ou `ToggleGroup`) shadcn em `_components/layout-menu.tsx`
listando `PALETTES`, chamando `setPalette`.

**Anti‑FOUC** — no `<head>` do `app/layout.tsx`, um `<script>` inline síncrono que lê
`localStorage` (`theme` + `palette`) e aplica `.dark` / `.palette-<id>` no
`document.documentElement` **antes** da primeira pintura. Mesmo padrão usado para o
tema claro/escuro.

> **A chave de storage muda.** O `useTheme.ts` atual persiste em `portfolio-theme`; o
> alvo usa `theme` (Zustand `persist`, `name: "theme"`). O `<script>` anti‑FOUC lê
> `theme` / `palette` — a preferência de visitantes antigos é descartada (one-time, ok).

---

## 8. Mapeamento componente-a-componente

| brumel_dev atual | Alvo |
|---|---|
| `src/App.tsx` (`SectionBlock`, roteamento manual, `applyPalette`) | `app/layout.tsx` + `app/layout-client.tsx` + `app/page.tsx` |
| `src/main.tsx` | some (Next controla o bootstrap) |
| `src/components/Button.tsx` | `components/ui/button.tsx` (shadcn) — migrar `variant`s p/ CVA |
| `src/components/Badge.tsx` | `components/ui/badge.tsx` (shadcn) |
| `src/components/Card.tsx` | `components/ui/card.tsx` (shadcn) |
| `src/components/NavBar.tsx` | `<header>` em `layout-client.tsx` + `_components/layout-menu.tsx` |
| `src/components/Footer.tsx` | `<footer>` em `layout-client.tsx` |
| `src/components/ScrollReveal.tsx` | `components/animate-on-scroll.tsx` (usa `motion`) |
| `src/components/SectionTitle.tsx` | `components/section-title.tsx` |
| `src/components/SocialLinks.tsx` | `components/social-links.tsx` |
| `src/components/IconLink.tsx` | `components/title-link.tsx` |
| `src/components/TechBadge.tsx` | `components/skill-badge.tsx` + `skill-badge-list.tsx` |
| `src/components/TimelineItem.tsx` | `components/ui/timeline.tsx` (Kibo UI) |
| `src/components/Icons.tsx` | `components/skill-icon/` + `@phosphor-icons/react` + `simple-icons` |
| `src/components/ProjectCard.tsx` | `app/_components/project-card.tsx` |
| `src/components/CodeSnippet.tsx` | `components/code-snippet.tsx` (mantido, custom) |
| `src/sections/Hero.tsx` | `app/_components/sections/hero-section.tsx` |
| `src/sections/About.tsx` | `.../sections/about-section.tsx` — **hoje comentada** no `App.tsx`; portar = reativar |
| `src/sections/Technologies.tsx` | `.../sections/skills-section.tsx` (+ `skills-marquee-section.tsx`) |
| `src/sections/Projects.tsx` | `.../sections/portfolio-section.tsx` |
| `src/sections/Impact.tsx` | `.../sections/impact-section.tsx` |
| `src/sections/Experience.tsx` | `.../sections/experience-section.tsx` |
| `src/sections/Contact.tsx` | `.../sections/contact-section.tsx` |
| `src/sections/Highlights.tsx` | `.../sections/` (nova) ou dobrar em `about-section` — **hoje dormente** (não montada no `App.tsx`); dado → `data/highlights.ts` |
| `src/hooks/useActiveSection.ts` | `hooks/reactive/use-active-section.ts` (versão yagrrusso) |
| `src/hooks/useTheme.ts` | `stores/theme.ts` (Zustand persist) + `contexts/theme.tsx` |
| `src/utils/cn.ts` | `lib/utils.ts` (`clsx` + `twMerge`) |
| `src/utils/email.ts` | `lib/mailto.ts` (consumido por `forms/contact.tsx`) |
| `src/utils/theme.ts` (`applyPalette`) | `stores/palette.ts` + `contexts/palette.tsx` + `styles/theme/palettes.css` (seção 7) |
| `src/data/portfolio.ts` | `src/data/{profile,projects,skills,experiences,impact,highlights,snippet}.ts` |
| `src/data/theme.ts` (`palette`) | `src/consts/palettes.ts` + tokens OKLCH em `styles/theme/*` |
| `src/types/portfolio.ts` | `src/types/*` por entidade |
| `src/pages/PrivacyPoliciesPage.tsx` | `app/politica-privacidade/page.tsx` |
| `src/pages/ColaDoDevPrivacyPage.tsx` | `app/cola-do-dev/page.tsx` |
| `src/assets/*.jpeg` | `public/images/*` (referência por path) ou import estático c/ `next/image` `unoptimized` |
| `index.html` `<head>` | `app/layout.tsx` `metadata` + `<script>` anti-FOUC |

### Layout composition

- **`app/layout.tsx`** (server) — `export const metadata` (título, descrição, favicons
  light/dark); `<html className={cn("dark scroll-smooth", ...fontVariables)}>`; `<head>`
  com o `<script>` anti‑FOUC (tema + paleta); renderiza `<LayoutClient>{children}</LayoutClient>`.
- **`app/layout-client.tsx`** (`"use client"`) — `<body>` flex‑col; `<Toaster/>` (sonner);
  `<header>` sticky (logo + `<LayoutMenu/>` + `<ScrollProgress/>` opcional); `<ThemeProvider>`
  + `<PaletteProvider>` envolvendo `<main>{children}</main>`; `<footer>` (direitos + data de
  build via `process.env.NEXT_PUBLIC_BUILD_DATE`).
- **`app/page.tsx`** (server) — importa `data/*`, compõe
  `<HeroSection/> <Separator/> <AboutSection/> …`. Pode ser função síncrona (imports
  estáticos). Sem `page-client.tsx` — o que precisa de estado é leaf `"use client"`
  dentro de cada section.

### Tema claro/escuro

`stores/theme.ts` guarda `"light" | "dark" | "system"` persistido (`name: "theme"`).
`contexts/theme.tsx` num `useLayoutEffect` adiciona/remove `.dark` no `<html>`.
Bônus opcional (de `_components/layout-menu.tsx` do yagrrusso): trocar com
`document.startViewTransition` + animação de `clip-path` saindo do ponto do clique.

---

## 9. Formulário de contato (decisão #3)

- **`src/lib/mailto.ts`** — monta a URL `mailto:` (destinatário fixo, `subject`, `body`
  com nome + mensagem + email do remetente). **Código novo:** o `src/utils/email.ts`
  atual gera um link de compose do Gmail web (`https://mail.google.com/mail/?view=cm&…`),
  sem `subject`/`body` — não há lógica reaproveitável além do `encodeURIComponent`.
- **`src/forms/contact.tsx`** — form controlado simples + schema `zod`
  (`nome` obrigatório, `email` via `validator.isEmail`, `mensagem` mín. N chars).
  `onSubmit`: valida → `window.location.href = buildMailto(values)` → `toast.success(...)`
  (sonner). Sem `@tanstack/react-form` (mailto não precisa de máquina de estado de form).
- Primitivos shadcn: `input`, `textarea`, `label`, `button`, `sonner`.

---

## 10. SEO

- **`src/consts/seo.ts`** — `SITE_NAME`, `SITE_DESCRIPTION`, `SITE_URL`
  (`process.env.NEXT_PUBLIC_SITE_URL`).
- **`src/lib/seo.ts`** — `generateSEO({ title?, description?, path? })` (versão do
  yagrrusso **sem** `getMe` e **sem** `alternates.languages`): OpenGraph, Twitter,
  `alternates.canonical`, imagem OG (`public/images/og/default.png`).
- **`src/app/robots.ts`** e **`src/app/sitemap.ts`** — copiar do yagrrusso, origem em
  `SITE_URL`, listar as 3 rotas (`/`, `/politica-privacidade/`, `/cola-do-dev/`).
- **JSON-LD `Person`** na home — `<script type="application/ld+json">` com dados de
  `src/data/profile.ts`.
- **`app/layout.tsx` `metadata.icons`** — reaproveitar `public/favicon.svg` +
  `public/favicon-blue.svg` (já no repo; o `index.html` atual aponta p/ `/logobrumel.png`).
- **`.env.example`** — só `NEXT_PUBLIC_SITE_URL`.

---

## 11. CI / Deploy (decisão #6)

Manter Hostinger/FTP. Ajustes em `.github/workflows/deploy.yml`:

- `node-version: 18` → `20` (Next 16 exige Node ≥ 20.9; `vitest.config.ts` usa
  `import.meta.dirname`, Node ≥ 20.11).
- `local-dir: dist/` → `local-dir: out/`.
- Next com `output: "export"` gera `out/` após `npm run build`.
- (Opcional) steps `npm run check` e `npm run test` antes do build.

**SPA fallback — remover.** O repo tem hoje `public/_redirects` (`/* /index.html 200`) e
`public/.htaccess` com rewrite catch-all p/ `/index.html` (+ cópias já buildadas em
`dist/`). Com rotas de arquivo reais no export + `trailingSlash: true`, esse rewrite
universal **sequestra** `/politica-privacidade/` e `/cola-do-dev/` (o servidor devolve o
`index.html` da home). Ação: **apagar `public/_redirects`**; **apagar ou reduzir
`public/.htaccess`** para no máximo `ErrorDocument 404 /404.html` (sem
`RewriteRule . /index.html`).

**Git — limpeza.** Não há `.gitignore` no projeto e `node_modules/` (~4,7 k arquivos) +
`dist/` (~29) estão versionados. Antes de criar o `.gitignore`:

```sh
git rm -r --cached node_modules dist
```

Depois criar `.gitignore` com as entradas do yagrrusso (`/node_modules`, `/.next/`,
`/out/`, `*.tsbuildinfo`, `next-env.d.ts`, `.env*`, `/build`).

---

## 12. Documentação p/ IA (decisão #5)

- **`AGENTS.md`** — router curto: o que é o repo (portfólio estático Next.js, sem
  backend, pt‑BR, deploy FTP Hostinger) + ponteiro para `agents/overview.md`.
- **`agents/overview.md`** — adaptar o do yagrrusso: visão geral, fluxo (dados estáticos
  em `src/data/*` lidos por Server Components), árvore de diretórios, convenções
  (`_components/` vs `components/`, tokens de cor, paletas), "patterns to follow"
  (adicionar uma section, adicionar uma paleta, adicionar um primitivo shadcn),
  gotchas (static export, anti‑FOUC, `cn()` deduplica).

---

## 13. Ordem de execução (fases)

Cada fase termina com o projeto **buildando** (`npm run build`) e navegável.

- **Fase 0 — Preparação.** Branch `feat/estrutura-yagrrusso`. Inventário das strings
  hardcoded nas sections (vão para `src/data/*`).
- **Fase 1 — Esqueleto Next.js.** Trocar deps (seção 4). Criar `next.config.ts`,
  `tsconfig.json`, `postcss.config.mjs`, `src/app/layout.tsx`, `src/app/page.tsx`.
  Deletar `index.html`, `vite.config.ts`, `main.tsx`, `tailwind.config.cjs`,
  `postcss.config.cjs`. Alias `@/*`. Meta: `npm run build` gera `out/` com página vazia.
- **Fase 2 — Tailwind v4 + tokens.** Criar `src/styles/**` (seção 6), `lib/fonts.ts`,
  `lib/utils.ts` (`clsx`+`twMerge`). Converter a paleta azul p/ OKLCH em
  `theme/original.css`. Ainda sem shadcn.
- **Fase 3 — shadcn.** `components.json` + `npx shadcn@latest add button badge card
  separator tooltip popover select toggle-group dropdown-menu dialog input textarea
  label switch avatar sonner`. Substituir `Button`/`Badge`/`Card` caseiros pelos
  primitivos (adaptar `variant`s p/ CVA).
- **Fase 4 — Dados estáticos.** Quebrar `portfolio.ts` em `src/data/*` (incl.
  `highlights.ts` — a 7ª chave, hoje sem section montada); tipos em `src/types/*`.
  Ajustar imports.
- **Fase 5 — Layout + tema + paleta.** `app/layout.tsx` + `layout-client.tsx` +
  header/footer/menu. `stores/theme.ts` + `contexts/theme.tsx` (substitui `useTheme.ts`).
  **`stores/palette.ts` + `contexts/palette.tsx` + `consts/palettes.ts` +
  `styles/theme/palettes.css` + seletor de paleta na UI + `<script>` anti‑FOUC**
  (seção 7). `use-active-section` no menu.
- **Fase 6 — Sections.** Portar uma por vez para `_components/sections/*-section.tsx`,
  importando `data/*` em Server Component e passando props a leaves `"use client"`.
  `ScrollReveal` → `animate-on-scroll`. Ícones → `skill-icon/` + Phosphor.
- **Fase 7 — Rotas extras.** `app/politica-privacidade/page.tsx` e
  `app/cola-do-dev/page.tsx` como rotas reais (adeus `window.location.pathname`).
  Apagar `public/_redirects` e o rewrite catch-all do `public/.htaccess` (§11) — senão
  as duas rotas caem na home no servidor.
- **Fase 8 — Form (mailto) + SEO.** `forms/contact.tsx` + `lib/mailto.ts`; `consts/seo.ts`,
  `lib/seo.ts`, `sitemap.ts`, `robots.ts`, JSON-LD, imagem OG.
- **Fase 9 — Tooling.** `biome.jsonc` + `ultracite`, `.husky/pre-commit` + `lint-staged`,
  `vitest.config.ts` + `tests/`, `.vscode/*`. Rodar `npm run fix` no repo todo.
- **Fase 10 — Docs p/ IA.** `AGENTS.md` + `agents/overview.md` (seção 12).
- **Fase 11 — CI/Deploy.** Ajustar `deploy.yml` (`out/`, Node 20).
  `git rm -r --cached node_modules dist` + criar `.gitignore` (§11).
- **Fase 12 — Polimento Magic UI (opcional).** `marquee` (skills), `number-ticker`
  (impacto), `orbiting-circles` / `interactive-grid-pattern` (hero), `scroll-progress`,
  `highlighter` / `rough-notation`, `confetti` no contato.

---

## 14. Riscos e pontos de atenção

- **`output: "export"` remove features de servidor:** sem Route Handlers, sem
  middleware, sem `next/image` otimizado (`images.unoptimized: true` obrigatório). O
  form de contato **tem** que ser `mailto:` ou serviço externo — decidido: `mailto:`.
- **Dados estáticos em componente client incham o bundle:** ler `src/data/*` só em
  Server Component; passar recortes por props. Não `import`ar `data/*` dentro de arquivo
  `"use client"`.
- **FOUC de tema/paleta:** com static export o HTML vai sem classe; sem o `<script>`
  anti‑FOUC no `<head>`, a página pisca no tema/paleta errado antes da hidratação.
- **`cn()` muda de semântica:** `tailwind-merge` deduplica classes conflitantes
  (`px-2 px-4` → `px-4`). Revisar componentes com muitas classes condicionais
  (`Button`, `Card`, o antigo `App`).
- **Imagens de `src/assets`:** o import Vite (`import foto from './x.jpeg'`) muda. Mover
  para `public/images/` e referenciar por string, ou import estático com `next/image`
  `unoptimized`.
- **React 18 → 19:** `framer-motion` → pacote `motion`; checar peer deps de terceiros.
- **Roteamento manual → rotas de arquivo:** links internos montados à mão
  (`href="/cola-do-dev"`) precisam do `trailingSlash` (`/cola-do-dev/`).
- **SPA fallback herdado:** `public/_redirects` + `public/.htaccess` reescrevem tudo p/
  `/index.html`; com rotas reais isso quebra `/politica-privacidade/` e `/cola-do-dev/`
  no servidor — apagar/reduzir (§11).
- **`node_modules/` versionado:** sem `.gitignore`, ~4,7 k arquivos de `node_modules/` e
  `dist/` estão no controle de versão — `git rm -r --cached` antes do `.gitignore`.
- **`dist/` → `out/`:** atualizar workflow, `.gitignore` e qualquer config do painel
  Hostinger que aponte para `dist`.
- **Turbopack no build:** se der problema em CI, cair para `next build` sem `--turbopack`.
- **Volume de trabalho:** é reescrita de arquitetura, não refactor incremental. Fases
  1–6 são o grosso; Fase 12 (Magic UI) é destacável.

---

## 15. Checklist de conclusão

- [ ] `npm run build` gera `out/` sem erros; servir `out/` com servidor estático (`npx serve out`) navega em todas as rotas (via `file://` os assets `/_next/*` não carregam).
- [ ] `npm run check` (Ultracite) limpo; `npm run test` (Vitest) verde.
- [ ] Dark/light + `system` persistindo via Zustand; **sem flash** de tema (anti‑FOUC).
- [ ] Seletor de paleta troca `--primary`/`--accent` em runtime, persiste e não pisca no reload.
- [ ] Menu ativo acompanha a section visível (`use-active-section`).
- [ ] Todos os primitivos de UI vêm de `src/components/ui/` (sem `Button`/`Card`/`Badge` caseiros).
- [ ] `src/data/*` (incl. `highlights`) é a única fonte de conteúdo; nenhuma string de conteúdo hardcoded em section; `data/*` só importado em Server Components.
- [ ] Rotas `/politica-privacidade/` e `/cola-do-dev/` funcionam como rotas de arquivo.
- [ ] `public/_redirects` apagado e `public/.htaccess` sem rewrite catch-all; as duas rotas abrem direto no servidor (não caem na home).
- [ ] Form de contato valida (Zod) e abre o cliente de email via `mailto:`.
- [ ] SEO: `sitemap.xml`, `robots.txt`, `<meta og:*>`, JSON-LD `Person` presentes no HTML exportado.
- [ ] `AGENTS.md` + `agents/overview.md` descrevem a arquitetura nova.
- [ ] `.github/workflows/deploy.yml` publica `out/` no Hostinger (Node 20).
- [ ] `node_modules/` e `dist/` fora do controle de versão (`git rm -r --cached`); `.gitignore` cobre `/node_modules`, `/.next/` e `/out/`.
