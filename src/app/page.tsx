export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-1 flex-col justify-center px-4 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
        brumel.dev
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-foreground">
        Migração para Next.js em andamento
      </h1>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">
        Esqueleto Next.js 16 (App Router, static export) + Tailwind v4 no ar. As
        sections são portadas nas fases seguintes.
      </p>
    </main>
  );
}
