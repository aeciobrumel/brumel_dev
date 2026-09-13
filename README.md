# brumel_dev

Portfólio pessoal de Aécio Brumel. Site **estático** (sem backend), pt-BR.

![status](https://img.shields.io/badge/status-in%20development-yellow)
![next](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![react](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![typescript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![tailwindcss](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)

## Stack

- **Next.js 16** — App Router, `output: "export"` (build gera `out/`)
- **React 19** + **TypeScript** strict
- **Tailwind CSS v4** CSS-first (sem `tailwind.config`) + **shadcn/ui** (new-york, ícones Phosphor)
- **Zustand** (tema claro/escuro + troca de paleta em runtime) + `motion`
- **Biome / Ultracite** (lint + format), **Husky** + lint-staged, **Vitest**
- Conteúdo em `src/data/*`, lido por Server Components
- Deploy: FTP → Hostinger (`out/`)

## Instalação

```bash
npm install
npm run dev          # servidor de desenvolvimento (Turbopack)
```

## Scripts

- `npm run dev` — desenvolvimento
- `npm run build` — build de produção (gera `out/`)
- `npm run serve` — serve `out/` localmente (`next start` NÃO funciona com `output: export`)
- `npm run check` / `npm run fix` — lint/format (Ultracite)
- `npm run test` / `npm run test:watch` — testes (Vitest)

## Documentação

- [`AGENTS.md`](./AGENTS.md) — router de contexto + padrões de código
- [`agents/overview.md`](./agents/overview.md) — arquitetura, convenções, gotchas
- [`docs/migracao-yagrrusso.md`](./docs/migracao-yagrrusso.md) — histórico da migração Vite → Next.js

## Ambiente

`NEXT_PUBLIC_SITE_URL` (opcional) — URL pública usada em SEO/canonical/sitemap. Ver `.env.example`.
