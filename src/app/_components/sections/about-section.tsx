import { CodeSnippet } from "@/components/code-snippet";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { highlights } from "@/data/highlights";
import { profile } from "@/data/profile";
import { snippet } from "@/data/snippet";

export function AboutSection() {
  const lines = profile.summary.filter(Boolean);
  const [motto] = lines;
  const paragraphs = lines.slice(1, 4);
  const bullets = (profile.approach ?? []).filter(Boolean);

  return (
    <section className="scroll-mt-20 px-4 pt-16 md:pt-20" id="about">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          description="Um pouco do meu jeito de trabalhar e o que me guia como dev."
          kicker="Sobre"
          title="Código minimalista, entregas consistentes"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-3 text-muted-foreground text-sm">
              {motto ? (
                <span className="inline-flex rounded-full border border-outline/60 px-3 py-1 font-semibold text-accent">
                  {motto}
                </span>
              ) : null}
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3">
              <p className="font-semibold text-accent text-xs uppercase tracking-[0.2em]">
                Atitude
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {(bullets.length ? bullets : paragraphs).map((line) => (
                  <li className="flex gap-2" key={line}>
                    <span
                      aria-hidden
                      className="mt-1 size-1.5 rounded-full bg-accent"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <CodeSnippet lines={snippet} title="dev.ts" />
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title}>
              <CardContent className="space-y-2">
                <h3 className="font-semibold text-base text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
