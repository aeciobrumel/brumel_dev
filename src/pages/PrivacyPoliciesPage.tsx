const policies = [
  {
    name: 'Cola do Dev',
    path: '/cola-do-dev',
    description:
      'Política de privacidade e uso de dados da extensão Chrome voltada para armazenamento local de snippets.'
  }
];

export function PrivacyPoliciesPage() {
  return (
    <div className="min-h-screen bg-[#f4f8ff] text-slate-900 dark:bg-surface dark:text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-4xl items-center px-4 py-20">
        <section className="w-full rounded-[2rem] border border-slate-200/80 bg-[#f7fbff] p-8 shadow-[0_18px_36px_rgba(15,23,42,0.06)] sm:p-12 dark:border-white/10 dark:bg-[#0f1728]">
          <a
            href="/"
            className="inline-flex rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
          >
            Voltar ao site
          </a>

          <div className="mt-8 max-w-2xl space-y-4">
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:border-accent/30 dark:bg-accent/10 dark:text-accent">
              Área reservada
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Políticas de privacidade
            </h1>
            <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
              Esta área não aparece na navegação principal. Ela existe para disponibilizar documentos públicos por URL
              direta quando necessário.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {policies.map((policy) => (
              <a
                key={policy.path}
                href={policy.path}
                className="group rounded-3xl border border-slate-200/80 bg-white/75 p-6 transition hover:-translate-y-0.5 hover:border-accent/60 dark:border-white/10 dark:bg-[#0a1221]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-slate-900 group-hover:text-accent dark:text-white">{policy.name}</h2>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{policy.description}</p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Abrir
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
