import { Card } from '../components/Card';
import { HighlightIconSymbol } from '../components/Icons';
import { ScrollReveal } from '../components/ScrollReveal';
import { Highlight } from '../types/portfolio';

export function Highlights({ highlights }: { highlights: Highlight[] }) {
  return (
    <section id="highlights" className="scroll-mt-24 pt-16 md:pt-20">
      <header className="mb-8 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">Destaques</p>
        <h2 className="text-2xl font-semibold text-slate-50">Pontos que levam meu código pra frente</h2>
        <p className="text-sm text-slate-200">
          Três focos que carrego em qualquer projeto: pensar arquitetura, cuidar de responsividade e entregar.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 45}>
            <Card className="flex flex-col gap-3 border-white/20 bg-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-slate-100">
                <HighlightIconSymbol name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-50">{item.title}</h3>
              <p className="text-sm text-slate-200">{item.description}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
