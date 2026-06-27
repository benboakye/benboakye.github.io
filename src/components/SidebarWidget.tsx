interface SidebarWidgetProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function SidebarWidget({ title, children, className = '' }: SidebarWidgetProps) {
  return (
    <section
      className={`rounded-2xl border border-white/10 bg-surface/70 p-4 backdrop-blur-sm ${className}`}
    >
      <h3 className="mb-3 font-display text-sm font-semibold text-text-main">{title}</h3>
      {children}
    </section>
  );
}
