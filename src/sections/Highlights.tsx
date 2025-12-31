import { Card } from '../components/Card';
import { HighlightIconSymbol } from '../components/Icons';
import { SectionTitle } from '../components/SectionTitle';
import { Highlight } from '../types/portfolio';

export function Highlights({ highlights }: { highlights: Highlight[] }) {
  return (
    <section id="highlights" className="scroll-mt-24 pt-16 md:pt-20">
      <SectionTitle
        kicker="Destaques"
        title="Pontos que levam meu código pra frente"
        description="Três focos que carrego em qualquer projeto: pensar arquitetura, cuidar de responsividade e entregar."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="flex flex-col gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <HighlightIconSymbol name={item.icon} className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{item.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
