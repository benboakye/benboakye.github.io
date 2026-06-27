import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { navSections, profile } from '../data/profile';
import { scrollToSection } from '../utils/helpers';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/10 bg-surface/40">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-4 py-10 lg:grid-cols-3 lg:px-6">
        <div>
          <p className="font-mono text-sm font-semibold text-accent">{'</> Bernard Appiah'}</p>
          <p className="mt-2 max-w-sm text-sm text-text-muted">
            Cybersecurity portfolio focused on network security, critical infrastructure, and
            infrastructure defense projects.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-text-main">Quick Links</p>
          <ul className="space-y-2">
            {navSections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className="text-sm text-text-muted transition hover:text-accent"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-text-main">Connect</p>
          <div className="flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 p-2 text-text-muted hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 p-2 text-text-muted hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-white/10 p-2 text-text-muted hover:text-accent"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:text-text-main"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-text-muted">
        © {year} Bernard Boakye Appiah. All rights reserved.
      </div>
    </footer>
  );
}
