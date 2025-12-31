import { Card } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { TimelineItem } from '../components/TimelineItem';
import { TimelineItem as TimelineItemType } from '../types/portfolio';

export function ExperienceSection({ timeline }: { timeline: TimelineItemType[] }) {
  return (
    <section id="timeline" className="scroll-mt-24 pt-16 md:pt-20">
      <SectionTitle
        kicker="Timeline"
        title="Commits da minha jornada"
        description="Marcos que mostram como evoluo entregando projetos reais."
      />

      <Card>
        <div className="relative space-y-6 border-l border-outline/60 pl-6">
          {timeline.map((item) => (
            <TimelineItem key={`${item.title}-${item.period}`} item={item} />
          ))}
        </div>
      </Card>
    </section>
  );
}
