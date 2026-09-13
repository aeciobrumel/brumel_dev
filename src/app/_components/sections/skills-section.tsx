import { SectionTitle } from "@/components/section-title";
import { SkillBadge } from "@/components/skill-badge";
import { Marquee } from "@/components/ui/marquee";
import { skillCategories } from "@/data/skills";

const skillRows = [
  [skillCategories[0], skillCategories[1]],
  [skillCategories[2], skillCategories[3]],
  [skillCategories[4], skillCategories[5]],
].map((group) => ({
  items: group.flatMap((category) => category.items),
  key: group.map((category) => category.title).join("-"),
}));

export function SkillsSection() {
  return (
    <section className="scroll-mt-20 px-4 pt-10 pb-4 md:pt-12" id="skills">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          description="Tecnologias que uso no dia a dia."
          kicker="Skills"
          title="Tecnologias que uso no dia a dia"
        />

        <div className="space-y-3">
          {skillRows.map((row, index) => (
            <div className="relative overflow-hidden" key={row.key}>
              <Marquee
                className="p-0 [--duration:25s] [--gap:1rem]"
                pauseOnHover
                reverse={index % 2 === 1}
              >
                {row.items.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
