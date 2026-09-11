# Guia de Frontend — Padrões e Tecnologias

> Documento norteador para iniciar **qualquer** projeto novo de frontend seguindo as
> boas práticas destiladas do projeto `yagrrusso.github.io`.
> Copie este arquivo para a raiz do novo repositório e adapte o que não se aplicar.
>
> Regra de ouro do projeto de referência: **todo artefato de código (nomes, comentários,
> arquivos, commits) é escrito em inglês.** Este guia está em português porque é material
> de apoio; o código não.

---

## 1. Filosofia

1. **App estático sempre que possível.** Sem servidor Node em runtime. Os dados são
   buscados em *build time*, embutidos no HTML e reidratados no cliente.
2. **Tipagem estrita de ponta a ponta.** TypeScript `strict`, `unknown` em vez de `any`,
   *type narrowing* em vez de *type assertion*, tipos gerados a partir do schema quando
   houver API.
3. **Componentes pequenos, previsíveis e compostos.** Function components, sem componente
   definido dentro de componente, `props` derivadas de `ComponentProps<...>`.
4. **Design tokens primeiro.** Toda cor/raio/sombra/fonte vem de CSS variables. Nenhum
   valor hardcoded de cor no JSX.
5. **Uma ferramenta por responsabilidade.** Query = TanStack Query. Form = TanStack Form
   + Zod. Estado global = Zustand (mínimo). Lint/format = Biome/Ultracite. Nada de
   sobreposição.
6. **Acessibilidade e SEO não são opcionais.** HTML semântico, ARIA, hierarquia de
   headings, `hreflang`, canonical, OG images, sitemap/robots.
7. **Documentação legível por IA versionada no repo** (`AGENTS.md` + `agents/`).

---

## 2. Stack de referência

| Camada | Tecnologia | Observações |
| --- | --- | --- |
| Framework | **Next.js (App Router)** + `output: "export"` | Turbopack em dev e build. `images.unoptimized: true` e `trailingSlash: true` são obrigatórios no export estático. |
| UI | **React 19** | Server Components para *shells* de página; `"use client"` só onde há interatividade. `ref` como prop (sem `forwardRef`). |
| Linguagem | **TypeScript strict** | `moduleResolution: "bundler"`, alias `@/*` → `src/*`. |
| Estilo | **Tailwind CSS v4** (CSS-first, sem `tailwind.config.js`) | Config em `@theme` dentro de CSS. `tw-animate-css` para animações utilitárias. |
| Componentes | **shadcn/ui (estilo `new-york`) + Radix UI** | Ícones **Phosphor**. Registries extras: Magic UI, Kibo UI. |
| Data fetching | **TanStack Query v5** | Prefetch no server + `HydrationBoundary` + `dehydrate`. |
| Formulários | **TanStack Form** + **Zod** + **validator** | Schema colocado junto do form. |
| i18n | **next-intl v4** | Rotas `[locale]`, mensagens em `messages/<locale>.json`. |
| Estado global | **Zustand** (com `persist`) | Só para o que é realmente global (ex.: preferência de tema). |
| API tipada (opcional) | **GraphQL Code Generator** (client preset) + `@0no-co/graphqlsp` | Só quando o backend for GraphQL. |
| Datas | **dayjs** (ou `date-fns` para tree-shaking agressivo) | Um só, não os dois. |
| Animação | **motion** (`motion/react`) | Wrapper próprio `AnimateOnScroll`. |
| Lint/Format | **Biome** via **Ultracite** | `npm run fix` / `npm run check`. |
| Testes | **Vitest** (+ `cheerio` para smoke test de HTML) | Testes de SEO rodam sobre o build. |
| Git hooks | **Husky** + **lint-staged** | `pre-commit` roda `npx lint-staged`. |
| Deploy | **Cloudflare Workers static assets** (`wrangler`) ou GitHub Pages | CI só builda e testa; deploy é passo separado. |

> Fixe versões exatas de `next`, `react` e `react-dom` no `package.json` (sem `^`).

---

## 3. Estrutura de pastas

```
.
├── AGENTS.md                    # Router de contexto para IA (aponta para agents/)
├── agents/
│   └── overview.md              # Contexto completo do projeto para IA
├── biome.jsonc                  # Config Biome (extends ultracite/*)
├── components.json              # Config do CLI shadcn/ui
├── next.config.ts               # Static export + plugin next-intl + env de build
├── postcss.config.mjs           # Apenas @tailwindcss/postcss
├── tsconfig.json                # strict, paths @/*
├── vitest.config.ts             # alias @, include tests/
├── wrangler.jsonc               # Deploy Cloudflare (assets ./out)
├── codegen.ts                   # (opcional) GraphQL Code Generator
├── .env.example                 # Só chaves NEXT_PUBLIC_*, valores fake
├── .github/workflows/           # CI (build + test)
├── .husky/pre-commit            # npx lint-staged
├── .vscode/                     # settings + extensions recomendadas
├── messages/                    # en.json, pt.json ...
├── public/images/og/            # Imagens Open Graph por página
├── scripts/setup.sh             # Bootstrap idempotente da máquina
├── tests/                       # Smoke tests (ex.: seo.test.ts)
└── src/
    ├── app/
    │   ├── layout.tsx           # Root layout: só metadata de favicon
    │   ├── page.tsx             # Redirect para /<locale>/ (client, static-safe)
    │   ├── robots.ts            # export const dynamic = "force-static"
    │   ├── sitemap.ts           # idem
    │   └── [locale]/
    │       ├── layout.tsx       # Server: fontes, intl provider, analytics, prefetch base
    │       ├── layout-client.tsx# Client shell: header, footer, providers, theme
    │       ├── page.tsx         # Server: metadata + prefetch + HydrationBoundary
    │       ├── page-client.tsx  # Client: composição das seções
    │       ├── queries.ts       # Constantes tipadas de variáveis de prefetch
    │       ├── _components/     # UI local da rota (cards, chrome, sections/)
    │       └── <rota>/          # Mesmo split: page.tsx + page-client.tsx (+ queries.ts)
    ├── components/              # Reusáveis DOMAIN-AGNOSTIC (sem regra de negócio)
    │   └── ui/                  # Primitivos shadcn/Radix/Magic UI
    ├── hooks/
    │   ├── factories/           # defineQuery, defineInfiniteQuery, execute
    │   ├── queries/             # Um arquivo por entidade da API
    │   └── reactive/            # useDebounce, useMessages, useActiveSection ...
    ├── forms/                   # Um form + seu schema Zod por arquivo
    ├── i18n/                    # routing.ts, request.ts, navigation.ts
    ├── lib/                     # Helpers puros: utils(cn), seo, dehydrate, pagination ...
    ├── stores/                  # Zustand stores
    ├── contexts/                # React contexts (aplicação de efeito no DOM)
    ├── consts/                  # Mapeamentos estáticos (ícones, slugs, seções)
    ├── classes/                 # Helpers OO opcionais (ex.: QueryHelper de filtro/sort)
    ├── graphql/                 # GERADO — nunca editar (se usar GraphQL)
    └── styles/
        ├── globals.css          # Entry: @import tailwind + parciais + @layer base
        ├── base.css             # Variáveis de layout, view-transitions, overrides
        ├── tailwind/
        │   ├── configs.css      # Bridge de tokens shadcn, breakpoints, radius, shadow
        │   ├── animations.css   # @keyframes + --animate-*
        │   └── utilities.css    # @utility container / ellipsis / scrollbar-hidden
        └── theme/
            ├── index.css        # @import de todos os temas
            ├── default.css      # Paleta base (:root + .dark) em OKLCH
            ├── <tema>.css        # Paletas alternativas (.theme-x / .theme-x.dark)
            ├── status.css       # Tokens de status (success/info/warning/destructive)
            └── fonts.css        # Trava --font-* por último
```

### Onde cada componente mora

| Tipo | Local | Regra |
| --- | --- | --- |
| Primitivo de UI (Button, Dialog, Select...) | `src/components/ui/` | Instalado via shadcn CLI e adaptado. Zero regra de negócio. |
| Reusável genérico (SectionTitle, Counter, SocialLinks) | `src/components/` | Domain-agnostic. Não importa tipos de entidade da API. |
| Específico de rota/entidade (ProjectCard, ExperienceCard) | `src/app/[locale]/<rota>/_components/` | Pode conhecer o domínio. Prefixo `_` impede virar rota. |

---

## 4. Configuração base (copie e ajuste)

### `tsconfig.json` — pontos não-negociáveis
```jsonc
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "moduleResolution": "bundler",
    "noEmit": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "paths": { "@/*": ["./src/*"] },
    "plugins": [{ "name": "next" }]
  }
}
```

### `next.config.ts` (export estático)
```ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_BUILD_DATE: new Date().toISOString() },
  images: { unoptimized: true },
  output: "export",
  trailingSlash: true,
};

export default createNextIntlPlugin("./src/i18n/request.ts")(nextConfig);
```

### `biome.jsonc`
```jsonc
{
  "extends": ["ultracite/biome/core", "ultracite/biome/next", "ultracite/biome/react"],
  "files": {
    "includes": ["!!**/out", "!!**/.next", "!!**/node_modules", "!!**/graphql", "!!**/*.graphql", "!!**/*.svg"]
  }
}
```
- **Ignore `**/*.svg`**: a ordenação de atributos do Biome quebra a declaração XML
  (`version` precisa vir primeiro).
- **Ignore a pasta de código gerado** (`graphql/`).

### `.vscode/settings.json`
```jsonc
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.rulers": [120],
  "files.associations": { "*.css": "tailwindcss" },
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```
Extensões recomendadas: `biomejs.biome`, `bradlc.vscode-tailwindcss`
(+ `GraphQL.vscode-graphql` se aplicável).

### `package.json` — scripts padrão
```jsonc
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "serve": "serve out -l 4000",
    "deploy": "wrangler deploy",
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
Se usar GraphQL: `"dev": "graphql-codegen --config codegen.ts --watch & next dev --turbopack"`.

### Variáveis de ambiente
- **Só `NEXT_PUBLIC_*`** (embutidas no build; não há segredo em runtime no export estático).
- `.env.development` local (copiado de `.env.example`), `.env.production` para build local
  de produção, *repository variables* no CI.
- **Valide toda env obrigatória** com um helper que lança erro cedo:

```ts
// src/lib/get-or-throw.ts
export function getOrThrow<T>(value: T | null | undefined, label: string): T {
  if (value == null || value === "") throw new Error(`Missing ${label}`);
  return value;
}
```

---

## 5. Padrões de componente

### Assinatura padrão
```tsx
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"div"> {
  title: string;
}

export function Card({ className, title, ...props }: Props) {
  return (
    <div className={cn("rounded border bg-card/40 p-6", className)} {...props}>
      <h3 className="font-semibold text-2xl">{title}</h3>
    </div>
  );
}
```

Regras:
- **Function components** apenas. Hooks no topo, *dependency arrays* corretas.
- **Nunca** defina um componente dentro de outro componente.
- Estenda `ComponentProps<"tag">` ou `ComponentProps<typeof OutroComp>` e **repasse `...props`**.
- Sempre exponha `className` e mescle com `cn()` (último a ganhar).
- React 19: use `ref` como prop normal; nada de `forwardRef`.
- HTML semântico + ARIA: `label`, hierarquia de headings, `alt`, handlers de teclado.
- Links externos: `target="_blank"` **sempre** com `rel="noopener noreferrer"`.
- Evite `dangerouslySetInnerHTML` (exceção: JSON-LD).

### Variantes com CVA (padrão shadcn)
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva("inline-flex items-center justify-center rounded-md ...", {
  variants: {
    variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", outline: "border bg-card/40 ..." },
    size: { default: "h-9 px-4 py-2", sm: "h-8 px-3", icon: "size-9" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

function Button({ className, variant, size, asChild = false, ...props }:
  ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button" data-variant={variant} data-size={size}
      {...props}
    />
  );
}
```
- **`data-slot`** em todo primitivo (permite estilizar filhos via `[&_[data-slot=x]]`).
- **`data-*`** para estado visual (`data-variant`, `data-state`, `data-fetching`) e
  seletores Tailwind (`group-data-[state=loading]:hidden`).
- **`asChild` + `<Slot>`** para compor sem `<div>` extra.

### Compound components — padrão de export por objeto
O projeto adapta os primitivos shadcn para **exportar um objeto namespaced** em vez de
vários exports soltos:

```tsx
export const Field = {
  Root: FieldRoot,
  Group: FieldGroup,
  Label: FieldLabel,
  Error: FieldError,
  // ... (Biome ordena as chaves alfabeticamente automaticamente)
};

// uso
<Field.Root>
  <Field.Label htmlFor={id}>Nome</Field.Label>
  <Input id={id} />
  <Field.Error errors={errors} />
</Field.Root>
```
Idem para `Tooltip.*`, `Select.*`, `Dialog.*`, `Timeline.*`, `Pagination.*`,
`Request.*`, `InputGroup.*`, `Breadcrumb.*`.

### shadcn/ui — instalação, config e como adaptar

**shadcn/ui não é uma dependência**: o CLI **copia** o código-fonte de cada primitivo
para `src/components/ui/`, e a partir daí o arquivo é seu — você edita à vontade. Radix
UI (headless + acessível) faz o comportamento; Tailwind + tokens fazem o visual.

#### `components.json` (gerado por `npx shadcn@latest init`, depois ajustado)
```jsonc
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",              // estilo do projeto de referência
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",                   // vazio: Tailwind v4 é CSS-first, sem tailwind.config.js
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "phosphor",        // @phosphor-icons/react (não lucide)
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

#### Adicionar componentes
```bash
npx shadcn@latest add button dialog select        # do registry oficial
npx shadcn@latest add @magicui/marquee            # de um registry extra
npx shadcn@latest add @kibo-ui/...                # idem
```
Registries extras usados no projeto de referência: **Magic UI** (marquee, orbiting
circles, number ticker, hyper text, interactive grid...) e **Kibo UI** (contribution
graph, timeline, status...).

#### Convenções de adaptação (aplicar em TODO arquivo de `ui/` após o `add`)
1. **`data-slot` em todo elemento** — `data-slot="button"`, `data-slot="dialog-content"`.
   Permite estilizar por composição: `[&_[data-slot=badge]]:size-3`.
2. **Reescrever os exports como objeto namespaced** — em vez de
   `export { Dialog, DialogContent, DialogTrigger, ... }`, exporte
   `export const Dialog = { Root, Content, Trigger, Header, Title, ... }`.
   O Biome ordena as chaves alfabeticamente sozinho.
3. **Variantes só com CVA**, `defaultVariants` sempre definido, `asChild` + `<Slot>`
   quando fizer sentido compor.
4. **Zero cor literal** — só tokens (`bg-primary`, `text-muted-foreground`,
   `border-border`, `ring-ring/50`). É isso que faz o dark mode e os temas alternativos
   "simplesmente funcionarem".
5. **`cn()` por último** no `className` (props do consumidor ganham do default).
6. Ícones: trocar imports de `lucide-react` por `@phosphor-icons/react`
   (`<CaretRightIcon weight="bold" />`).
7. Componentes com hooks/estado/browser API levam `"use client"` no topo; os puramente
   visuais (Skeleton, Badge) não precisam.

#### Token bridge (o que faz o shadcn enxergar suas cores)
`src/styles/tailwind/configs.css` mapeia cada CSS variable do tema para um
`--color-*` do Tailwind dentro de `@theme inline` (`--color-primary: var(--primary)`,
`--color-background: var(--background)`, ...). Sem esse bridge, classes como
`bg-primary` não existem. Ver §8.3.

#### O que NÃO fazer
- Não instalar `shadcn` como dependência de runtime nem importar de um pacote `shadcn`.
- Não deixar o CLI sobrescrever um `ui/*.tsx` já adaptado sem revisar o diff.
- Não misturar `lucide-react` e Phosphor no mesmo projeto.
- Não pôr regra de negócio ou tipo de entidade da API dentro de `components/ui/`.

### Componente utilitário de estado de request (sem libs)
Um `Request.*` puramente CSS que alterna `loading / empty / content` via `data-state`
no elemento raiz com classe `group`:

```tsx
<Request.Root isLoading={q.isLoading} isFetching={q.isFetching} isEmpty={q.data?.total === 0}>
  <Request.Loading><Skeleton className="h-64 w-full" /></Request.Loading>
  <Request.Empty><Alert.Root>...</Alert.Root></Request.Empty>
  <Request.Content>{/* lista */}</Request.Content>
</Request.Root>
```

---

## 6. Data fetching (TanStack Query + prefetch no server)

### 6.1 Factory de query — `src/hooks/factories/query.ts`
Encapsula `queryOptions` + `prefetchQuery` + `useQuery` numa API única:

```ts
export const defineQuery = <Data, Params = undefined>(
  queryKey: string,
  queryFn: (params: Params | undefined) => Promise<Data> | Data
) => {
  const key = (params?: Params) => [queryKey, params];
  const options = (params?: Params) => queryOptions({ queryKey: key(params), queryFn: () => queryFn(params) });
  const prefetch = (client: QueryClient, params?: Params) => client.prefetchQuery(options(params));
  const use = (params?: Params, opts?) => useQuery({ ...options(params), ...opts });
  return { key, options, prefetch, use };
};
```
Existe também `defineInfiniteQuery` para paginação infinita.

### 6.2 Wrapper de fetch — `src/hooks/factories/execute.ts`
Um único ponto que injeta URL + auth e trata erro. (No projeto de referência é GraphQL
com `X-Api-Key`; para REST, adapte para `fetch(url, { headers })`.)

### 6.3 Módulo por entidade — `src/hooks/queries/<entidade>.ts`
```ts
export const { prefetch: prefetchFindManySkills, use: useFindManySkills } =
  defineQuery<FindManySkillsQuery, FindManySkillsQueryVariables>(
    "findManySkills",
    async (params) => (await execute(findManySkills, params ?? {})).data!
  );
```
- **Selecione só os campos que a UI lê** (incluindo shapes aninhados).
- Exporte sempre o par `prefetch*` + `use*` com nomes renomeados.

### 6.4 QueryClient — `src/lib/get-query-client.ts`
Um client por request no SSR, **singleton** no browser:
```ts
export function getQueryClient() {
  if (typeof window === "undefined") return makeQueryClient();
  return (browserQueryClient ??= makeQueryClient());
}
```
Defaults recomendados: `staleTime: 10min`, `retry: 5`, `retryDelay: 30s`,
`refetchOnWindowFocus: false`.

### 6.5 Dehydrate com invalidação proposital — `src/lib/dehydrate.ts`
```ts
export function dehydrate(queryClient: QueryClient) {
  queryClient.invalidateQueries(); // força refetch no cliente após hydration
  return primitiveDehydrate(queryClient);
}
```
Sem isso, o dado do build seria tratado como "fresco para sempre".

### 6.6 Split server/client de cada rota
```tsx
// page.tsx  (Server Component)
export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const queryClient = new QueryClient();
  await prefetchGetMe(queryClient);
  await prefetchFindManyProjects(queryClient, HOME_PROJECTS_VARS);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientPage />
    </HydrationBoundary>
  );
}
```
```tsx
// page-client.tsx  ("use client")
export function ClientPage() {
  const projects = useFindManyProjects(HOME_PROJECTS_VARS); // lê do cache hidratado, depois refetch
  // ...
}
```
- Variáveis de prefetch vivem em `queries.ts` como **constantes tipadas**
  (`HOME_PROJECTS_VARS: FindManyProjectsQueryVariables = { ... }`).
- **Não renomeie `data`**: mantenha `projects.data?.findManyProjects`, não
  `const list = projects.data`. Em páginas com muitas queries isso evita colisão de
  `isLoading`, `isFetching`, `refetch` etc.

### 6.7 Dados client-only (APIs de terceiros)
Use `useQuery` direto (sem a factory, sem prefetch) — ex.: contribuições do GitHub.

---

## 7. Formulários (TanStack Form + Zod)

```tsx
export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  phone: z.string().refine(validator.isMobilePhone),
  message: z.string().min(8).max(1000),
});
export type ContactSchema = z.infer<typeof contactSchema>;

export function ContactForm({ onSub, defaultValues, disabled }: Props) {
  const form = useForm({
    defaultValues: { name: "", email: "", phone: "", message: "", ...defaultValues },
    validators: { onChange: contactSchema, onSubmit: contactSchema },
    onSubmit: (data) => onSub?.(data.value),
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(); }}>
      <Field.Set disabled={disabled}>
        <Field.Group>
          <form.Field name="name" children={(field) => {
            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field.Root data-invalid={isInvalid}>
                <Field.Label htmlFor={field.name}>Nome</Field.Label>
                <Input id={field.name} name={field.name} value={field.state.value}
                  aria-invalid={isInvalid}
                  onChange={(e) => field.handleChange(e.target.value)} />
                {isInvalid && <Field.Error errors={field.state.meta.errors} />}
              </Field.Root>
            );
          }} />
          <form.Subscribe children={(s) => (
            <Button type="submit" disabled={!s.canSubmit}>Enviar</Button>
          )} />
        </Field.Group>
      </Field.Set>
    </form>
  );
}
```
- Schema Zod **no mesmo arquivo** do form; exporte o `type` inferido.
- Valide em `onChange` **e** `onSubmit`.
- Estado de erro derivado: `isTouched && !isValid`.
- Props comuns padronizadas (`onSub`, `defaultValues`, `disabled`) num tipo
  `CommonFormProps<T>`.

---

## 8. Estilo & Design Tokens (Tailwind v4)

### 8.1 Entry — `src/styles/globals.css`
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

### 8.2 Tokens em OKLCH, definidos em `:root` e `.dark`
`src/styles/theme/default.css` define `--background`, `--foreground`, `--card`,
`--primary`, `--muted`, `--accent`, `--border`, `--ring`, `--chart-1..5`, `--radius`,
`--sidebar*` etc. Temas alternativos usam `.theme-<nome>` / `.theme-<nome>.dark`.
`status.css` traz `--success/-foreground`, `--info`, `--warning`, `--destructive`.

### 8.3 Bridge para o Tailwind — `src/styles/tailwind/configs.css`
```css
@custom-variant dark (&:is(.dark *));

@theme inline {
  --breakpoint-3xl: 90rem;               /* breakpoint custom */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-border: var(--border);
  /* ...um --color-* para cada token */
}
```
Opcional: dentro de `@theme { --color-red-*: initial; ... }` para **zerar a paleta padrão**
do Tailwind e forçar o uso só dos tokens do design system.

### 8.4 Utilitários custom — `src/styles/tailwind/utilities.css`
```css
@utility container { max-width: 1280px; padding: 6rem 3rem; margin-inline: auto;
  @media (max-width: 768px) { padding: 3rem 1.5rem; } }
@utility ellipsis { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
@utility scrollbar-hidden { scrollbar-width: none; &::-webkit-scrollbar { display: none; } }
```

### 8.5 Animações — `src/styles/tailwind/animations.css`
`@keyframes` + registro em `@theme inline { --animate-marquee: marquee var(--duration) infinite linear; }`.

### 8.6 Fontes — `src/lib/fonts.ts` + `theme/fonts.css`
```ts
import { JetBrains_Mono, Space_Grotesk, Merriweather } from "next/font/google";
const fontSans  = Space_Grotesk({ subsets: ["latin"], variable: "--font-family-sans" });
const fontMono  = JetBrains_Mono({ subsets: ["latin"], variable: "--font-family-mono" });
const fontSerif = Merriweather({ subsets: ["latin"], variable: "--font-family-serif" });
export const fontVariables = [fontSans.variable, fontMono.variable, fontSerif.variable];
```
`theme/fonts.css` amarra `--font-sans/mono/serif` às `--font-family-*` e é **importado por
último**. No JSX use só `font-sans` / `font-mono` / `font-serif`.

### 8.7 `cn()` — `src/lib/utils.ts`
```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

### 8.8 Regras práticas de estilo
- **Nunca** cor literal no JSX. Sempre token (`bg-card/40`, `text-muted-foreground`).
- Responsivo *mobile-first*; breakpoints custom via `--breakpoint-*`.
- Variáveis de layout (`--layout-header-height`) em `base.css`, consumidas com
  `h-(--layout-header-height)`.
- `tweakcn` é usado para exportar paletas → cole em `theme/default.css`.

---

## 9. Tema (light / dark / system)

```
stores/theme.ts      → Zustand + persist (localStorage key "preference"): "light" | "dark" | "system"
contexts/theme.tsx   → ThemeProvider aplica/remove classe .dark em document.documentElement
                       via useLayoutEffect, resolvendo "system" com matchMedia
```
- `layout.tsx` do `[locale]` já entrega `<html className="theme-<nome> dark ...">` como
  estado inicial (evita flash).
- Componentes que precisam saber o tema resolvido consomem `useTheme()` do context
  (lança erro fora do provider).

---

## 10. Internacionalização (next-intl)

```
i18n/routing.ts     → defineRouting({ defaultLocale, locales }); exporta Locale, Messages, Namespace
i18n/request.ts     → getRequestConfig: carrega messages/<locale>.json
i18n/navigation.ts  → createNavigation(routing): Link, redirect, usePathname, useRouter
messages/<loc>.json → árvore de mensagens (routes, common, form, layout, <página>)
global.d.ts         → declara AppConfig["Messages"] = Messages (type-safe nas keys)
```
Regras:
- **Todas** as páginas ficam sob `src/app/[locale]/`. Cada `page.tsx` exporta
  `generateStaticParams` retornando `routing.locales`.
- Use **`Link`/`redirect`/`useRouter` de `@/i18n/navigation`**, nunca os de `next/navigation`.
- Links de âncora na mesma página (`#secao`) usam `<a>` nativo, não o `Link` do next-intl.
- `setRequestLocale(locale)` no topo de cada Server Component de rota.
- Conteúdo vindo da API que já vem localizado: helper `useMessages()` seleciona o objeto
  do locale atual a partir de um array `{ locale, messages }[]`.
- Rótulos: prefira `titulo ?? slug ?? id` para exibição.

---

## 11. SEO

- Helper único `src/lib/seo.ts` → `generateSEO({ namespace, locale, path })` monta
  `Metadata` a partir das mensagens (`title`, `description`), com:
  - `alternates.canonical` + `alternates.languages` (hreflang para cada locale)
  - `openGraph` + `twitter` (`summary_large_image`)
  - imagem OG em `public/images/og/<namespace>-<locale>.png`, com fallback
    `default-<locale>.png` (checado com `fs.existsSync`)
- `robots.ts` e `sitemap.ts` com `export const dynamic = "force-static"`.
- JSON-LD (`Person`, `Organization`...) como `<script type="application/ld+json">`
  na página — única exceção ao `dangerouslySetInnerHTML`.
- Teste de smoke (`tests/seo.test.ts`) parseia o HTML de `out/` com cheerio e valida
  title, description, canonical, hreflang, OG/Twitter, `<html lang>`, ausência de estados
  de loading presos e as query keys esperadas no estado desidratado.

---

## 12. Acessibilidade (checklist)

- [ ] HTML semântico (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<time>`).
- [ ] Um só `<h1>` por página; hierarquia de headings sem pular níveis.
- [ ] `alt` descritivo em imagens de conteúdo; `alt=""` / `aria-hidden` em decorativas.
- [ ] `label`/`htmlFor` em todo input; `aria-invalid` + mensagem de erro com `role="alert"`.
- [ ] Foco visível (`focus-visible:ring-*`) preservado nos primitivos.
- [ ] Handlers de teclado onde há interação custom; `tabIndex` coerente.
- [ ] `rel="noopener noreferrer"` em `target="_blank"`.
- [ ] Contraste conforme WCAG AA nos tokens de cor.

---

## 13. Performance

- **Export estático**: HTML por rota, sem fallback SPA.
- **Imports específicos**, nunca barrel files (`import { X } from "lib/x"`, não `from "lib"`).
- Imagens: `next/image` com `unoptimized` no export; defina `width`/`height`; `priority`
  só no *above the fold*.
- `staleTime` alto (10 min) + prefetch no build = zero spinner no primeiro paint.
- Cache de resolução cara (ex.: ícones) em `Map` no módulo.
- Seções pesadas como componentes separados em `_components/sections/` (mais fácil
  dividir/lazy depois).
- Animações via `motion` com `onViewportEnter/Leave` (não observers manuais espalhados).

---

## 14. Qualidade & Tooling

- **Ultracite (Biome)**: `npm run fix` antes de commitar; `npm run check` no CI.
  - Gerados (`src/graphql/`) e `*.svg` fora do lint.
- **TypeScript strict**: `unknown` > `any`; narrowing > assertion; tipos da API vêm do
  codegen.
- **Vitest**: asserções dentro de `it()`/`test()`; sem `.only`/`.skip` commitado.
  Testes que dependem do build (SEO) exigem `npm run build` antes.
- **Husky + lint-staged**: `pre-commit` roda `npx lint-staged` (Ultracite nos arquivos
  staged). Sem hook de formatação "stash-based" (frágil).
- **Convenção de commit**: `type: resumo` (`feat:`, `fix:`, `chore:`, `refactor:`,
  `docs:`), imperativo, em inglês.
- `scripts/setup.sh`: bootstrap idempotente da máquina (Node LTS + npm), seguro para
  reexecutar.

---

## 15. CI/CD & Deploy

### CI (`.github/workflows/*.yml`)
- Dispara em `push` na branch principal + `workflow_dispatch`.
- `concurrency` com `cancel-in-progress: true`.
- Passos: (opcional "acordar API") → `checkout` → `setup-node` (versão fixa, `cache: npm`)
  → `npm ci` → `npm run build` → `npm run test`.
- Envs de build vêm de **repository variables** (`vars.*`), não secrets, por serem
  `NEXT_PUBLIC_*`.
- **CI não faz deploy.** Deploy é passo separado/manual ou pipeline próprio.

### Deploy
- **Cloudflare Workers static assets**: `wrangler.jsonc` aponta `assets.directory: "./out"`,
  `html_handling: "force-trailing-slash"` (casa com `trailingSlash: true`),
  `not_found_handling: "404-page"`. Deploy: `npm run build && npm run deploy`.
- **Alternativa GitHub Pages**: job `deploy` com `actions/deploy-pages` após o build.

---

## 16. Documentação para IA (versionada)

- **`AGENTS.md`** na raiz: router curto. "AI agents: leia `agents/` para contexto completo."
- **`agents/overview.md`**: contexto profundo — overview, arquitetura/fluxo, tecnologias e
  onde vivem, breakdown de diretórios, padrões ao estender, convenções, mapa de
  diretórios, variáveis de ambiente, scripts, build/deploy/testes, *gotchas*.
- Instrua os agentes a **atualizarem esses arquivos na mesma sessão** em que aprenderem
  algo não-óbvio e duradouro.
- README fica **conciso** (onboarding humano); o aprofundamento vai para `agents/`.
- Adaptadores locais de IDE (ex.: `.cursor/rules/`) ficam **gitignored** — cada dev
  mantém o seu, apenas apontando para `AGENTS.md` + `agents/overview.md`.

---

## 17. Checklist para começar um projeto novo

1. `npx create-next-app@latest --ts --app --no-tailwind` (Tailwind v4 será adicionado à mão).
2. Adicionar deps base:
   `next-intl @tanstack/react-query @tanstack/react-form zod validator zustand motion clsx tailwind-merge class-variance-authority tailwindcss @tailwindcss/postcss tw-animate-css @phosphor-icons/react`.
   Dev: `@biomejs/biome ultracite husky lint-staged vitest serve`.
3. Copiar `tsconfig.json` (strict + `@/*`), `next.config.ts` (export), `postcss.config.mjs`,
   `biome.jsonc`, `.vscode/`.
4. Criar `src/styles/` com a estrutura da seção 8 (globals → tailwind/ → theme/ → base).
5. `npx shadcn@latest init` (estilo `new-york`, base color `neutral`, ícones `phosphor`,
   CSS vars). Ajustar `components.json` (aliases, registries Magic UI / Kibo UI).
6. Montar `src/i18n/` (`routing.ts`, `request.ts`, `navigation.ts`) + `messages/en.json`
   + `global.d.ts`.
7. Criar `src/lib/`: `utils.ts` (`cn`), `get-or-throw.ts`, `get-query-client.ts`,
   `dehydrate.ts`, `seo.ts`, `pagination.ts`.
8. Criar `src/hooks/factories/` (`query.ts`, `execute.ts`) — adaptar `execute` para
   REST/GraphQL do projeto.
9. Estruturar `src/app/layout.tsx` (favicon), `src/app/page.tsx` (redirect de locale),
   `src/app/[locale]/{layout,layout-client,page,page-client}.tsx`, `robots.ts`, `sitemap.ts`.
10. `src/stores/theme.ts` + `src/contexts/theme.tsx`.
11. `husky init` + bloco `lint-staged` no `package.json`; `pre-commit` = `npx lint-staged`.
12. `.github/workflows/ci.yml` (build + test), `.env.example`, `scripts/setup.sh`.
13. `AGENTS.md` + `agents/overview.md` + `README.md` conciso.
14. `wrangler.jsonc` (ou workflow de Pages).
15. Primeiro commit: `chore: project scaffolding`.

---

## 18. Anexo — *gotchas* que economizam horas

- `output: "export"` exige `images.unoptimized` e **não** suporta rotas dinâmicas sem
  `generateStaticParams`.
- Root `src/app/page.tsx` só redireciona para `/<locale>/`; preview real é em `/en/` ou `/pt/`.
- `dehydrate()` invalida de propósito — o cliente **vai** refazer o fetch após hydration.
- Biome ordena chaves de objeto e atributos JSX alfabeticamente — por isso os exports
  compound saem em ordem alfabética. **Não** rode nos `.svg`.
- `SectionTitle` (que carrega o `id` da âncora) fica **fora** dos wrappers de animação,
  senão o scroll para `#secao` quebra.
- Em hooks de query, **não** aliaseie `data` para um nome curto — mantenha
  `query.data?.<nomeDaQuery>`.
- `sitemap.ts` / `robots.ts` precisam de `export const dynamic = "force-static"` no export.
- `.env*` é gitignored, exceto `*.example`.
- Fontes: `theme/fonts.css` tem de ser o **último** `@import` de tema para travar
  `--font-*`.
- Versão de Node do CI costuma ser mais nova que a mínima local — fixe `node-version` no
  workflow.
