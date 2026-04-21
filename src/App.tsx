import { useEffect } from 'react';
import { portfolioData } from './data/portfolio';
import { palette } from './data/theme';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';
import { NavBar } from './components/NavBar';
import { Hero } from './sections/Hero';
// import { About } from './sections/About';
import { Technologies } from './sections/Technologies';
import { Projects } from './sections/Projects';
import { Highlights } from './sections/Highlights';
import { ImpactSection } from './sections/Impact';
import { ExperienceSection } from './sections/Experience';
import { Contact } from './sections/Contact';
import { applyPalette } from './utils/theme';
import { PrivacyPoliciesPage } from './pages/PrivacyPoliciesPage';
import { ColaDoDevPrivacyPage } from './pages/ColaDoDevPrivacyPage';
import { ReactNode } from 'react';
import { cn } from './utils/cn';

const sections = [
  { id: 'hero', label: 'Início' },
  { id: 'technologies', label: 'Stack' },
  { id: 'projects', label: 'Projetos' },
  { id: 'impact', label: 'Impacto' },
  { id: 'contact', label: 'Contato' }
];

function SectionBlock({
  tone,
  children,
  className
}: {
  tone: 'base' | 'panel' | 'accent';
  children: ReactNode;
  className?: string;
}) {
  const toneClass = {
    base: 'bg-[#f4f8ff] dark:bg-[#070b14]',
    panel: 'bg-[#eaf1ff] dark:bg-[#111a2d]',
    accent: 'bg-[#e2ecff] dark:bg-[#121722]'
  }[tone];

  return (
    <section className={cn('relative overflow-hidden py-5 md:py-7', toneClass, className)}>
      <div className="relative z-10 mx-auto max-w-5xl px-4 xl:max-w-6xl 2xl:max-w-7xl">{children}</div>
    </section>
  );
}

function App() {
  const activeId = useActiveSection(sections.map((section) => section.id));
  const { theme, toggleTheme } = useTheme('dark');
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  useEffect(() => {
    applyPalette(palette);
  }, []);

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Brumel Dev',
      '/politica-privacidade': 'Política de Privacidade | Brumel Dev',
      '/cola-do-dev': 'Cola do Dev | Política de Privacidade'
    };

    document.title = titles[pathname] ?? 'Brumel Dev';
  }, [pathname]);

  if (pathname === '/politica-privacidade') {
    return <PrivacyPoliciesPage />;
  }

  if (pathname === '/cola-do-dev') {
    return <ColaDoDevPrivacyPage />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <NavBar
        sections={sections}
        activeId={activeId}
        onToggleTheme={toggleTheme}
        theme={theme}
        links={portfolioData.profile.links}
        brand={portfolioData.profile.username}
      />

      <main className="relative z-10 pb-16">
        <SectionBlock tone="base" className="!pb-0 md:!pb-0">
          <Hero profile={portfolioData.profile} snippet={portfolioData.snippet} theme={theme} />
          <Technologies technologies={portfolioData.technologies} />
        </SectionBlock>
        {/* <About profile={portfolioData.profile} /> */}
        <SectionBlock tone="accent" className="!pt-0 md:!pt-0 !bg-[#dce7ff] dark:!bg-[#111a2d]">
          <Projects projects={portfolioData.projects} />
        </SectionBlock>
        <SectionBlock tone="base">
          <ImpactSection impact={portfolioData.impact} />
        </SectionBlock>
        <SectionBlock tone="panel" className="!bg-primary dark:!bg-[#111a2d]">
          <Highlights highlights={portfolioData.highlights} />
        </SectionBlock>
        <SectionBlock tone="accent">
          <ExperienceSection timeline={portfolioData.timeline} />
        </SectionBlock>
        <SectionBlock tone="base">
          <Contact links={portfolioData.profile.links} />
        </SectionBlock>
      </main>
    </div>
  );
}

export default App;
