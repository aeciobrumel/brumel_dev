import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { SocialLinks } from '../components/SocialLinks';
import { MailIcon } from '../components/Icons';
import { SocialLinks as SocialLinksType } from '../types/portfolio';

export function Contact({ links }: { links: SocialLinksType }) {
  return (
    <section id="contact" className="scroll-mt-24 pt-16 pb-14 md:pt-20 md:pb-16">
      <SectionTitle
        kicker="Contato"
        title="Bora construir algo?"
        description="Me chama para freelas, consultorias ou só trocar ideia sobre stack e arquitetura."
      />

      <div className="card flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">Aberto para novas conversas</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Envie contexto, timelines e stack atual. Eu respondo rápido e posso sugerir caminhos técnicos.
          </p>
          <Button href={`mailto:${links.email}`} iconLeft={<MailIcon className="h-4 w-4" />}>
            Enviar email
          </Button>
        </div>

        <SocialLinks links={links} className="w-full md:max-w-md" />
      </div>
    </section>
  );
}
