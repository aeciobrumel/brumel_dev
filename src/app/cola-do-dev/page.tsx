import type { Metadata } from "next";
import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Cola do Dev — Política de privacidade",
  description:
    'Política de privacidade e uso de dados da extensão Chrome "Cola do Dev".',
  path: "/cola-do-dev/",
});

const sections = [
  {
    title: "1. Visão geral",
    content:
      'A extensão Chrome "Cola do Dev" foi criada para armazenar, organizar, pesquisar, editar, importar e exportar snippets de código. Os dados utilizados na extensão são inseridos pelo próprio usuário e permanecem sob seu controle.',
  },
  {
    title: "2. Quais dados são tratados",
    content:
      "A extensão trata apenas os snippets de código, títulos, descrições, tags e demais conteúdos que o próprio usuário decidir salvar, editar, importar ou exportar. A extensão não coleta histórico de navegação, URLs visitadas, localização, cookies, credenciais, dados de analytics ou telemetria.",
  },
  {
    title: "3. Como os dados são usados",
    content:
      "Os dados são usados exclusivamente para permitir o funcionamento da extensão: salvar, organizar, pesquisar, editar, importar e exportar snippets de código dentro da experiência oferecida ao usuário.",
  },
  {
    title: "4. Onde os dados são armazenados",
    content:
      'Os dados ficam salvos localmente no navegador do usuário, por meio da API chrome.storage. A extensão utiliza apenas a permissão "storage" e não envia essas informações para servidores externos.',
  },
  {
    title: "5. Compartilhamento de dados",
    content:
      'A "Cola do Dev" não compartilha, vende, transfere ou disponibiliza dados do usuário para terceiros. Os dados permanecem armazenados localmente, no navegador do próprio usuário.',
  },
  {
    title: "6. Código remoto",
    content:
      "A extensão não executa código remoto. Todo o funcionamento ocorre com os arquivos que fazem parte do pacote instalado pelo usuário no navegador.",
  },
  {
    title: "7. Controle e exclusão de dados",
    content:
      "O usuário pode acessar, editar, exportar e excluir seus dados a qualquer momento diretamente pela própria extensão ou removendo os dados armazenados localmente no navegador.",
  },
  {
    title: "8. Segurança",
    content:
      "Como os dados permanecem localmente no navegador do usuário e não são enviados para servidores externos, a exposição é reduzida ao ambiente do próprio dispositivo. Ainda assim, a proteção do computador, do navegador e do perfil de uso continua sendo responsabilidade do usuário.",
  },
  {
    title: "9. Alterações nesta política",
    content:
      "Esta política poderá ser atualizada no futuro para refletir melhorias da extensão, mudanças legais ou ajustes de clareza. Quando houver alteração relevante, a versão publicada para a extensão será atualizada.",
  },
  {
    title: "10. Contato",
    content:
      "Para dúvidas sobre esta política de privacidade e uso de dados, utilize o canal de contato informado na página de publicação da extensão Chrome Web Store ou no site oficial do responsável pelo projeto.",
  },
];

export default function ColaDoDevPrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <section className="rounded-[2rem] border border-outline/60 bg-card p-8 shadow-sm sm:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            className="inline-flex rounded-full border border-outline/60 px-4 py-2 font-medium text-muted-foreground text-sm transition hover:border-accent hover:text-accent"
            href="/politica-privacidade/"
          >
            Voltar
          </Link>
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary text-sm">
            Chrome Extension
          </span>
        </div>

        <header className="mt-8 space-y-4">
          <p className="font-semibold text-primary text-sm uppercase tracking-[0.22em]">
            Política de privacidade
          </p>
          <h1 className="font-semibold text-4xl text-foreground tracking-tight sm:text-5xl">
            Cola do Dev
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground leading-7">
            Política de privacidade e uso de dados da extensão Chrome "Cola do
            Dev", escrita em português do Brasil, com linguagem simples e
            objetiva para publicação pública.
          </p>
        </header>

        <div className="mt-10 space-y-5">
          {sections.map((section) => (
            <article
              className="rounded-3xl border border-outline/60 bg-background/50 p-6"
              key={section.title}
            >
              <h2 className="font-semibold text-foreground text-xl">
                {section.title}
              </h2>
              <p className="mt-3 text-muted-foreground text-sm leading-7">
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
