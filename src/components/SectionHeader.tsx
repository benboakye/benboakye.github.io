interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">{label}</p>
      <h2 className="font-display text-2xl font-bold text-text-main sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-3xl text-text-muted">{description}</p>}
    </div>
  );
}
