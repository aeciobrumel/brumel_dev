import { ContactSection } from "@/app/_components/sections/contact-section";
import { ExperienceSection } from "@/app/_components/sections/experience-section";
import { HeroSection } from "@/app/_components/sections/hero-section";
import { ImpactSection } from "@/app/_components/sections/impact-section";
import { PartnersSection } from "@/app/_components/sections/partners-section";
import { PortfolioSection } from "@/app/_components/sections/portfolio-section";
import { SkillsSection } from "@/app/_components/sections/skills-section";
import { SITE_URL } from "@/consts/seo";
import { profile } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "Rio Grande do Sul",
  },
  alternateName: profile.username,
  description: profile.summary[0],
  email: `mailto:${profile.links.email}`,
  image: new URL(profile.avatarUrl, SITE_URL).toString(),
  jobTitle: profile.role,
  knowsAbout: ["Laravel", "React", "TypeScript", "Docker", "PHP", "Next.js"],
  name: profile.name,
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
    profile.links.instagram,
  ],
  url: SITE_URL,
};

export default function HomePage() {
  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático, sem entrada de usuário
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        type="application/ld+json"
      />
      <HeroSection />
      <PortfolioSection />
      <SkillsSection />
      <ImpactSection />
      <ExperienceSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
