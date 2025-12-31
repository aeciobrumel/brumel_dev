import { Card } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { TerminalIcon } from '../components/Icons';
import { Profile } from '../types/portfolio';

export function About({ profile }: { profile: Profile }) {
  const lines = profile.summary.filter(Boolean);
  const motto = lines[0];
  const paragraphTexts = lines.slice(1, 4);
  const bulletItems = (profile.approach ?? []).filter(Boolean);

  return (
    <section id="about" className="scroll-mt-24 pt-16 md:pt-20">
      <SectionTitle
        kicker="Sobre"
        title="Código minimalista, entregas consistentes"
        description="Um pouco do meu jeito de trabalhar e o que me guia como dev."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
          {motto && (
            <span className="inline-flex rounded-full border border-outline/60 px-3 py-1 font-semibold text-accent">
              {motto}
            </span>
          )}
          {paragraphTexts.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </Card>
        <Card className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Atitude</p>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {(bulletItems.length ? bulletItems : paragraphTexts).map((line) => (
              <li key={line} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 rounded-xl border border-outline/60 bg-slate-900/80 px-3 py-2 font-mono text-xs text-tertiary shadow-glow">
            <TerminalIcon className="h-4 w-4 text-accent" /> stack &lt;= Laravel + React + Docker + TS
          </div>
        </Card>
      </div>
    </section>
  );
}
