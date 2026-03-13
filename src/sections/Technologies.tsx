import { Card } from '../components/Card';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionTitle } from '../components/SectionTitle';
import { TechBadge } from '../components/TechBadge';
import { TechnologyCategory } from '../types/portfolio';

export function Technologies({ technologies }: { technologies: TechnologyCategory[] }) {
  return (
    <section id="technologies" className="scroll-mt-24 pt-16 md:pt-20">
      <SectionTitle
        kicker="Stack"
        title="Tecnologias que guiam meu código"
        description="Frontend direto ao ponto, backend pragmático e DevOps."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((group, index) => (
          <ScrollReveal key={group.title} delay={index * 45}>
            <Card className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{group.title}</p>
                <span className="text-xs text-slate-500 dark:text-slate-400">{group.items.length} itens</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <TechBadge key={tech.name} tech={tech} />
                ))}
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
