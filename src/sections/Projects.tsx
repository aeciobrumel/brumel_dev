import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { Project } from '../types/portfolio';

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="scroll-mt-24 pt-16 md:pt-20">
      <SectionTitle
        kicker="Projetos"
        title="Builds recentes"
        description="Bases reais do meu GitHub, com foco em tipagem, responsividade e entrega."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 45}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
