# Visão geral da arquitetura

Portfólio estático em Next.js 16. Sem backend, sem i18n, sem data-fetching em
runtime. Todo o conteúdo vem de módulos TypeScript em `src/data/*` e é renderizado
por Server Components no build (`output: "export"` → `out/`).

## Fluxo de dados

```
src/data/*.ts  ──import──▶  Server Component (section)  ──props──▶  leaf "use client"
(constantes tipadas)          (lê os dados, compõe)                 (só interatividade)
```

- **Ler `src/data/*` só em Server Component.** Passar recortes por props para as
  leaves `"use client"` — nunca `import`ar `data/*` dentro de um arquivo
  `"use client"` (empacota o módulo inteiro no bundle do cliente).
- Se algum dia entrar um backend: troca-se o corpo de `data/*` por um `fetch` em
  Server Component; a assinatura para as sections não muda.

## Árvore de diretórios

```
src/
├── app/
│   ├── layout.tsx            # server: <html>/<head>, metadata, <script> anti-FOUC, fonts
│   ├── layout-client.tsx     # "use client": ThemeProvider + PaletteProvider + header/footer + Toaster
│   ├── page.tsx              # home: server, compõe as sections + JSON-LD Person
│   ├── robots.ts / sitemap.ts
│   ├── politica-privacidade/page.tsx
│   ├── cola-do-dev/page.tsx
│   └── _components/          # componentes LOCAIS da rota (header, footer, cards, sections/)
├── components/               # compartilhados, agnósticos de domínio
│   ├── ui/                   # primitivos shadcn — não editar à mão além do que o CLI gera
│   └── skill-icon/           # simple-icons + overrides Phosphor + fallback
├── forms/contact.tsx         # Zod + validator, envio via mailto:
├── hooks/reactive/           # use-active-section, use-debounce
├── lib/                      # utils(cn), fonts, seo, mailto, get-or-throw
├── stores/                   # Zustand persist: theme, palette
├── contexts/                 # aplicam .dark / .palette-<id> no <html>
├── consts/                   # home-sections, palettes, seo, stack
├── data/                     # profile, projects, skills, experiences, impact, highlights, snippet
├── types/                    # 1 arquivo por entidade (+ index barrel)
└── styles/
    ├── globals.css           # entry: @import tailwindcss + partials
    ├── base.css
    ├── tailwind/{configs,animations,utilities}.css
    └── theme/{index,default,original,palettes,status,fonts}.css
```

Convenção: **`_components/` = local da rota**, **`components/` = compartilhado**,
**`components/ui/` = primitivos** (gerados pelo shadcn).

## Tema e paleta (runtime)

- `stores/theme.ts` — `"light" | "dark" | "system"`, `persist` na chave `theme`.
- `stores/palette.ts` — id da paleta ativa (`azul` | `esmeralda` | `ambar`),
  `persist` na chave `palette`.
- `contexts/theme.tsx` / `contexts/palette.tsx` — num layout effect, aplicam
  `.dark` e `.palette-<id>` no `<html>` (mesmo elemento).
- **Anti-FOUC:** `<script>` inline síncrono no `<head>` (`app/layout.tsx`) lê os
  dois valores de `localStorage` e aplica as classes antes da primeira pintura.
- **Tokens de cor:** OKLCH em `styles/theme/*`. `configs.css` mapeia via
  `@theme inline` (`--color-primary: var(--primary)` …) para permitir troca em
  runtime. `original.css` = paleta `azul` (identidade base); `palettes.css` =
  blocos `.palette-<id>` e `.dark.palette-<id>` sobrescrevendo só o que muda.

## Patterns to follow

**Adicionar uma section:** criar `app/_components/sections/<nome>-section.tsx`
(Server Component), importar de `src/data/*`, compor com `SectionTitle` + Cards;
mover interatividade para uma leaf `"use client"`; registrar `id`/label em
`src/consts/home-sections.ts` (o menu e `use-active-section` leem daí).

**Adicionar uma paleta:** novo id em `src/consts/palettes.ts`; bloco
`.palette-<id>` (+ `.dark.palette-<id>`) em `styles/theme/palettes.css`;
acrescentar o id na lista do `<script>` anti-FOUC em `app/layout.tsx`.

**Adicionar um primitivo shadcn:** `npx shadcn@latest add <nome>` — depois trocar
`from "cn"` por `from "@/lib/utils"` se o CLI errar o alias.

**Adicionar um ícone de skill:** slug em `src/data/skills.ts`; se existir no
simple-icons, mapear em `components/skill-icon/resolve-simple-icon.tsx`; senão,
override Phosphor em `resolve-slug-override.tsx`.

## Gotchas

- **`output: "export"`** remove features de servidor: sem Route Handlers, sem
  middleware, `images.unoptimized: true` obrigatório. Form de contato é `mailto:`.
- **Anti-FOUC:** sem o `<script>` no `<head>`, a página pisca no tema/paleta
  errado (o HTML estático já sai com `class="dark palette-azul"` como default).
- **`cn()`** usa `tailwind-merge`: deduplica classes conflitantes
  (`px-2 px-4` → `px-4`).
- **Phosphor icons usam `createContext`** → qualquer módulo importado por Server
  Component que os renderize precisa de `"use client"` (ver `components/icons.tsx`,
  `components/skill-icon/`).
- **`mailto:` não é form-encoding:** `lib/mailto.ts` usa `encodeURIComponent`
  (espaço vira `%20`, não `+`).
- **Rotas com `trailingSlash: true`:** links internos vão para
  `/cola-do-dev/`, não `/cola-do-dev`.
- **Deploy aponta para `out/`** (não `dist/`); Node 20 no CI.
