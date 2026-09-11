import { GithubContributionGraph } from "@/components/github-contribution-graph";
import { PartnerAvatar } from "@/components/partner-avatar";
import { SectionTitle } from "@/components/section-title";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/data/profile";
import { ContactForm } from "@/forms/contact";
import { getGithubContributions } from "@/lib/github-contributions";

function getGithubLogin(profileUrl: string) {
  return new URL(profileUrl).pathname.replaceAll("/", "");
}

export async function ContactSection() {
  const login = getGithubLogin(profile.links.github);
  const contributions = await getGithubContributions(login);

  return (
    <section className="scroll-mt-20 px-4 pt-16 pb-16 md:pt-20" id="contact">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          description="Me chama para freelas, consultorias ou só trocar ideia sobre stack e arquitetura."
          kicker="Contato"
          title="Bora construir algo?"
        />

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <PartnerAvatar
                alt={profile.avatarAlt}
                className="size-14"
                name={profile.name}
                src={profile.avatarUrl}
              />
              <div>
                <p className="font-semibold text-foreground">{profile.name}</p>
                <p className="text-muted-foreground text-sm">{profile.role}</p>
              </div>
            </div>

            <SocialLinks links={profile.links} />

            <p className="text-muted-foreground text-sm">
              Envie contexto, timelines e stack atual. Eu respondo rápido e
              posso sugerir caminhos técnicos.
            </p>
          </div>

          <ContactForm to={profile.links.email} />
        </div>

        {contributions ? (
          <div className="mt-10 border-outline/50 border-t pt-8">
            <GithubContributionGraph contributions={contributions} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
