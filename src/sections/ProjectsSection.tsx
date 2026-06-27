import { ProjectCard } from '../components/ProjectCard';
import { SectionHeader } from '../components/SectionHeader';
import { projects } from '../data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader
        label="Projects"
        title="Cybersecurity & Infrastructure Projects"
        description="Hands-on labs and research spanning network security, risk assessment, infrastructure systems, IAM, and AI-based network defense."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
