import { ArrowSquareOutIcon } from "@/components/icons";
import { SectionTitle } from "@/components/section-title";
import { TitleLink } from "@/components/title-link";
import { Card, CardContent } from "@/components/ui/card";
import { impact } from "@/data/impact";

export function ImpactSection() {
  return (
    <section className="scroll-mt-20 px-4 pt-16 md:pt-20" id="impact">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          description={impact.description}
          kicker={impact.kicker}
          title={impact.title}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {impact.items.map((item) => (
            <Card key={item.title}>
              <CardContent className="flex flex-col gap-3">
                <div className="space-y-1">
                  {item.subtitle ? (
                    <p className="font-semibold text-accent text-xs uppercase tracking-[0.2em]">
                      {item.subtitle}
                    </p>
                  ) : null}
                  <h3 className="font-semibold text-base text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>

                <ul className="space-y-2 text-muted-foreground text-sm">
                  {item.highlights.map((highlight) => (
                    <li className="flex items-start gap-2" key={highlight}>
                      <span
                        aria-hidden
                        className="mt-1 size-1.5 rounded-full bg-accent"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {item.links?.length ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.links.map((link) => (
                      <TitleLink
                        href={link.href}
                        icon={<ArrowSquareOutIcon className="size-4" />}
                        key={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
