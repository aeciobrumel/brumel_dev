import { useEffect } from 'react';
import { portfolioData } from './data/portfolio';
import { palette } from './data/theme';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';
import { NavBar } from './components/NavBar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Technologies } from './sections/Technologies';
import { Projects } from './sections/Projects';
import { Highlights } from './sections/Highlights';
import { ExperienceSection } from './sections/Experience';
import { Contact } from './sections/Contact';
import { applyPalette } from './utils/theme';

const sections = [
  { id: 'hero', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'technologies', label: 'Stack' },
  { id: 'projects', label: 'Projetos' },
  { id: 'highlights', label: 'Destaques' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'contact', label: 'Contato' }
];

function App() {
  const activeId = useActiveSection(sections.map((section) => section.id));
  const { theme, toggleTheme } = useTheme('dark');

  useEffect(() => {
    applyPalette(palette);
  }, []);

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

      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 dark:opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-slate-50 dark:from-accent/10 dark:via-transparent dark:to-surface" aria-hidden />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16">
        <Hero profile={portfolioData.profile} snippet={portfolioData.snippet} />
        <About profile={portfolioData.profile} />
        <Technologies technologies={portfolioData.technologies} />
        <Projects projects={portfolioData.projects} />
        <Highlights highlights={portfolioData.highlights} />
        <ExperienceSection timeline={portfolioData.timeline} />
        <Contact links={portfolioData.profile.links} />
      </main>
    </div>
  );
}

export default App;
