import { techStack } from '../data/techStack';

export function TechStackRow() {
  return (
    <section
      className="rounded-2xl border border-white/10 bg-surface/50 p-4 backdrop-blur-sm sm:p-6"
      aria-label="Technology stack"
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-muted">
        Tech Stack
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {techStack.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group flex flex-col items-center gap-2 rounded-xl border border-transparent px-3 py-2 transition hover:border-accent/30 hover:bg-white/5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-background/80 group-hover:border-accent/40 group-hover:shadow-glow-cyan">
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <span className="text-xs text-text-muted group-hover:text-text-main">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
