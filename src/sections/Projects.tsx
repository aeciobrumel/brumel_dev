import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
