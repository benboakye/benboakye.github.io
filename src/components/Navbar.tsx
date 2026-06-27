import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navSections } from '../data/profile';
import { scrollToSection } from '../utils/helpers';
import { DownloadCvButton } from './DownloadCvButton';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="font-mono text-sm font-semibold text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:text-base"
          aria-label="Go to home"
        >
          {'</> Bernard Appiah'}
        </button>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navSections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleNav(section.id)}
              className={`rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeSection === section.id
                  ? 'bg-primary/20 text-accent'
                  : 'text-text-muted hover:text-text-main'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <DownloadCvButton className="hidden sm:inline-flex" />
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-text-main xl:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-surface px-4 py-4 xl:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-2">
            {navSections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => handleNav(section.id)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                    activeSection === section.id
                      ? 'bg-primary/20 text-accent'
                      : 'text-text-muted hover:bg-white/5 hover:text-text-main'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <DownloadCvButton className="w-full justify-center" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
