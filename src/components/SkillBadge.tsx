interface SkillGroupProps {
  title: string;
  skills: string[];
}

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface/50 p-5 transition hover:border-primary/30">
      <h3 className="font-display text-base font-semibold text-text-main">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs text-text-muted transition hover:border-accent/40 hover:text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
