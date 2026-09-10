import { AboutSection } from "@/app/_components/sections/about-section";
import { ContactSection } from "@/app/_components/sections/contact-section";
import { ExperienceSection } from "@/app/_components/sections/experience-section";
import { HeroSection } from "@/app/_components/sections/hero-section";
import { ImpactSection } from "@/app/_components/sections/impact-section";
import { PortfolioSection } from "@/app/_components/sections/portfolio-section";
import { SkillsSection } from "@/app/_components/sections/skills-section";
import { Separator } from "@/components/ui/separator";
import { SITE_URL } from "@/consts/seo";
import { profile } from "@/data/profile";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.username,
  jobTitle: profile.role,
  description: profile.summary[0],
  url: SITE_URL,
  image: new URL(profile.avatarUrl, SITE_URL).toString(),
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "Rio Grande do Sul",
  },
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
    profile.links.instagram,
  ],
  email: `mailto:${profile.links.email}`,
  knowsAbout: ["Laravel", "React", "TypeScript", "Docker", "PHP", "Next.js"],
};

export default function HomePage() {
  return (
    <>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD */}
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        type="application/ld+json"
      />
      <HeroSection />
      <Separator className="mx-auto max-w-6xl opacity-60" />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ImpactSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
