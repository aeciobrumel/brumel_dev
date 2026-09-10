import { SectionTitle } from "@/components/section-title";
import { SkillBadgeList } from "@/components/skill-badge-list";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="scroll-mt-20 px-4 pt-16 md:pt-20" id="skills">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          description="Stack principal, agrupada por área."
          kicker="Skills"
          title="Tecnologias que uso no dia a dia"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardContent className="space-y-3">
                <p className="font-semibold text-muted-foreground text-xs uppercase tracking-[0.2em]">
                  {category.title}
                </p>
                <SkillBadgeList skills={category.items} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
