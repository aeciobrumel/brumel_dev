import { ExperienceList } from "@/app/_components/experience-list";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/experiences";

export function ExperienceSection() {
  return (
    <section className="scroll-mt-20 px-4 pt-16 md:pt-20" id="experience">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          description="O ponto mais recente da minha trajetória e, se quiser, o histórico completo."
          kicker="Experiência"
          title="Experiência em resumo"
        />
        <Card>
          <CardContent>
            <ExperienceList items={experiences} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
