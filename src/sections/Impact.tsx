import { Card } from '../components/Card';
import { IconLink } from '../components/IconLink';
import { ExternalIcon } from '../components/Icons';
import { SectionTitle } from '../components/SectionTitle';
import { ImpactSectionContent } from '../types/portfolio';

export function ImpactSection({ impact }: { impact: ImpactSectionContent }) {
  return (
    <section id="impact" className="scroll-mt-24 pt-16 md:pt-20">
      <SectionTitle kicker={impact.kicker} title={impact.title} description={impact.description} />

      <div className="grid gap-4 md:grid-cols-2">
        {impact.items.map((item) => (
          <Card key={item.title} className="flex flex-col gap-3">
            <div className="space-y-1">
              {item.subtitle && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.subtitle}</p>
              )}
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {item.links?.length ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.links.map((link) => (
                  <IconLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    icon={<ExternalIcon className="h-4 w-4" />}
                  />
                ))}
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
