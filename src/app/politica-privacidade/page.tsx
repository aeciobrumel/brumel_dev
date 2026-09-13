import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  description:
    "Documentos públicos de privacidade e uso de dados dos projetos de Aécio Brumel.",
  path: "/politica-privacidade/",
  title: "Políticas de privacidade",
});

const policies = [
  {
    description:
      "Política de privacidade e uso de dados da extensão Chrome voltada para armazenamento local de snippets.",
    name: "Cola do Dev",
    path: "/cola-do-dev/",
  },
];

export default function PrivacyPoliciesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <section className="w-full rounded-[2rem] border border-border/60 bg-card p-8 shadow-sm sm:p-12">
        <Link
          className="inline-flex rounded-full border border-border/60 px-4 py-2 font-medium text-muted-foreground text-sm transition hover:border-accent hover:text-accent"
          href="/"
        >
          Voltar ao site
        </Link>

        <div className="mt-8 max-w-2xl space-y-4">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary text-sm">
            Área reservada
          </span>
          <h1 className="font-semibold text-4xl text-foreground tracking-tight sm:text-5xl">
            Políticas de privacidade
          </h1>
          <p className="text-base text-muted-foreground leading-7">
            Esta área não aparece na navegação principal. Ela existe para
            disponibilizar documentos públicos por URL direta quando necessário.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {policies.map((policy) => (
            <Link
              className="group rounded-3xl border border-border/60 bg-background/50 p-6 transition hover:-translate-y-0.5 hover:border-accent/60"
              href={policy.path}
              key={policy.path}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="font-semibold text-foreground text-xl group-hover:text-accent">
                    {policy.name}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-6">
                    {policy.description}
                  </p>
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent text-xs uppercase tracking-[0.18em]">
                  Abrir
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
