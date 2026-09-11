import { PartnerAvatar } from "@/components/partner-avatar";
import { PartnerLinks } from "@/components/partner-links";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { partners } from "@/data/partners";

export function PartnersSection() {
  return (
    <section className="scroll-mt-20 px-4 pt-16 md:pt-20" id="partners">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          description="Gente que já esteve comigo em projetos e recomendo de olhos fechados."
          kicker="Parceiros e contatos"
          title="Pessoas com quem já trabalhei e recomendo"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <Card key={partner.name}>
              <CardContent className="flex flex-col items-center gap-3 text-center">
                <PartnerAvatar
                  alt={partner.avatarAlt}
                  name={partner.name}
                  src={partner.avatarUrl}
                />
                <div className="space-y-0.5">
                  <p className="font-semibold text-foreground">
                    {partner.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {partner.role}
                  </p>
                </div>
                <PartnerLinks links={partner.links} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
