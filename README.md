# Portfólio Dev (React + TypeScript + Tailwind)

Portfólio minimalista com vibe dev, dark-first e responsivo, feito em React + Vite + TypeScript + Tailwind. Conteúdo tipado e vindo de um único arquivo de dados.

## Requisitos

- Node 18+ (recomendado)
- npm (ou pnpm/yarn, ajustando comandos)

## Como rodar

```bash
npm install
npm run dev
```

O Vite sobe em `http://localhost:5173`.

## Scripts

- `npm run dev` – ambiente de desenvolvimento com HMR.
- `npm run build` – build de produção.
- `npm run preview` – serve o build para inspeção local.

## Onde editar conteúdo

Tudo fica em `src/data/portfolio.ts` (perfil, stack, projetos, destaques, timeline, snippet do hero). Tipos em `src/types/portfolio.ts`.

Altere a foto em `src/assets/profile.jpg` (há fallback de iniciais AB). Placeholders de imagem de projeto em `public/project-placeholder.svg`.

### Paleta de cores
- Ajuste as cores principais em `src/data/theme.ts` (formato `\"r g b\"` para primary, secondary, accent).
- O carregamento aplica as variáveis CSS automaticamente via `applyPalette`.

## Estrutura

- `src/components/` – UI reutilizável (Button, Badge, Card, ProjectCard, SectionTitle, SocialLinks etc.)
- `src/sections/` – Hero, Sobre, Tecnologias, Projetos, Destaques, Timeline, Contato.
- `src/hooks/` – `useTheme`, `useActiveSection`.
- `src/utils/` – helpers (`cn`).
- `src/types/` – tipagem central (`portfolio.ts`).

## Notas de UX/A11y

- Navbar fixa com scroll suave e seção ativa.
- Foco visível, aria-label em ícones/links, contraste OK.
- Dark mode padrão com toggle; imagens com `loading="lazy"` e fallback de avatar.
