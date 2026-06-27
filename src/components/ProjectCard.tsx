import { ExternalLink, FileText, Github } from 'lucide-react';
import type { Project } from '../data/projects';
import { assetPath } from '../utils/helpers';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const hasLink = (url?: string) => Boolean(url);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/70 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-surface-soft">
        <img
          src={assetPath(project.thumbnail)}
          alt={`${project.title} project thumbnail`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {project.status && (
          <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-2 py-1 text-xs font-medium text-white">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">{project.category}</p>
        <h3 className="mt-2 font-display text-lg font-semibold text-text-main">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-text-muted">{project.description}</p>

        {!compact && project.highlights && (
          <ul className="mt-3 space-y-1 text-xs text-text-muted">
            {project.highlights.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent-green">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, compact ? 3 : 5).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-background/50 px-2 py-0.5 text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <ProjectLinkButton
            icon={FileText}
            label="Case Study"
            href={project.links.caseStudy}
            disabled={!hasLink(project.links.caseStudy)}
          />
          <ProjectLinkButton
            icon={Github}
            label="GitHub"
            href={project.links.github}
            disabled={!hasLink(project.links.github)}
          />
          <ProjectLinkButton
            icon={ExternalLink}
            label="Live Demo"
            href={project.links.liveDemo}
            disabled={!hasLink(project.links.liveDemo)}
          />
        </div>
      </div>
    </article>
  );
}

function ProjectLinkButton({
  icon: Icon,
  label,
  href,
  disabled,
}: {
  icon: typeof Github;
  label: string;
  href?: string;
  disabled: boolean;
}) {
  if (disabled) {
    return (
      <span className="inline-flex items-center gap-1 rounded-md border border-white/5 px-2.5 py-1.5 text-xs text-text-muted/50">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        Coming Soon
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-text-muted transition hover:border-accent/50 hover:text-accent"
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </a>
  );
}
