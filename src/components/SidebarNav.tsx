import { navSections } from '../data/profile';
import { scrollToSection } from '../utils/helpers';

interface SidebarNavProps {
  activeSection: string;
}

export function SidebarNav({ activeSection }: SidebarNavProps) {
  return (
    <aside className="hidden lg:block">
      <nav
        className="sticky top-24 space-y-2 rounded-2xl border border-white/10 bg-surface/70 p-4 backdrop-blur-sm"
        aria-label="Section navigation"
      >
        <p className="mb-3 px-2 font-mono text-xs uppercase tracking-wider text-text-muted">
          Navigation
        </p>
        {navSections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={`group flex w-full items-start gap-3 rounded-xl border px-3 py-3 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActive
                  ? 'border-primary/50 bg-primary/10 shadow-glow'
                  : 'border-transparent hover:border-white/10 hover:bg-white/5'
              }`}
            >
              <Icon
                className={`mt-0.5 h-4 w-4 shrink-0 ${
                  isActive ? 'text-accent' : 'text-text-muted group-hover:text-accent'
                }`}
                aria-hidden="true"
              />
              <span>
                <span
                  className={`block text-sm font-medium ${
                    isActive ? 'text-text-main' : 'text-text-muted group-hover:text-text-main'
                  }`}
                >
                  {section.label}
                </span>
                <span className="mt-0.5 block text-xs text-text-muted">{section.description}</span>
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
