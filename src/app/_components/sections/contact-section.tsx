import { SectionTitle } from "@/components/section-title";
import { SocialLinks } from "@/components/social-links";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { ContactForm } from "@/forms/contact";

export function ContactSection() {
  return (
    <section className="scroll-mt-20 px-4 pt-16 pb-16 md:pt-20" id="contact">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          description="Me chama para freelas, consultorias ou só trocar ideia sobre stack e arquitetura."
          kicker="Contato"
          title="Bora construir algo?"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="space-y-3">
              <p className="font-semibold text-foreground text-lg">
                Aberto para novas conversas
              </p>
              <p className="text-muted-foreground text-sm">
                Envie contexto, timelines e stack atual. Eu respondo rápido e
                posso sugerir caminhos técnicos.
              </p>
              <SocialLinks links={profile.links} />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <ContactForm to={profile.links.email} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
