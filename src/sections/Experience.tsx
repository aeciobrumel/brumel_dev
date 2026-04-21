import { useMemo, useState } from 'react';
import { Card } from '../components/Card';
import { ScrollReveal } from '../components/ScrollReveal';
import { SectionTitle } from '../components/SectionTitle';
import { TimelineItem } from '../components/TimelineItem';
import { TimelineItem as TimelineItemType } from '../types/portfolio';

export function ExperienceSection({ timeline }: { timeline: TimelineItemType[] }) {
  const [expanded, setExpanded] = useState(false);
  const visibleTimeline = useMemo(() => (expanded ? timeline : timeline.slice(0, 1)), [expanded, timeline]);

  return (
    <section id="timeline" className="scroll-mt-24 pt-16 md:pt-20">
      <SectionTitle
        kicker="Experiência"
        title="Experiência em resumo"
        description="O ponto mais recente da minha trajetória e, se quiser, o histórico completo."
      />

      <Card>
        <div id="timeline-history" className="relative space-y-6 border-l border-outline/60 pl-6">
          {visibleTimeline.map((item, index) => (
            <ScrollReveal key={`${item.title}-${item.period}`} delay={index * 50}>
              <TimelineItem item={item} />
            </ScrollReveal>
          ))}
        </div>
        {timeline.length > 1 ? (
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="inline-flex min-h-10 items-center rounded-lg border border-outline/70 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent dark:text-slate-200"
              aria-expanded={expanded}
              aria-controls="timeline-history"
            >
              {expanded ? 'Mostrar só a experiência mais recente' : 'Ver experiências anteriores'}
            </button>
          </div>
        ) : null}
      </Card>
    </section>
  );
}
