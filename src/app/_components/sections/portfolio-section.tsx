import { PortfolioClient } from "@/app/_components/portfolio-client";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/projects";

export function PortfolioSection() {
  return (
    <section className="scroll-mt-20 px-4" id="my-portfolio">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          description="Bases reais do meu GitHub, com foco em tipagem, responsividade e entrega."
          kicker="Projetos"
          title="Builds recentes"
        />
        <PortfolioClient projects={projects} />
      </div>
    </section>
  );
}
