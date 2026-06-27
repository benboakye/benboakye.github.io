import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { scrollToSection } from '../utils/helpers';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-surface/50 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-text-main sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-medium text-transparent sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-2 text-sm text-text-muted">{profile.tagline}</p>
          <p className="mt-4 max-w-2xl text-text-muted">{profile.intro}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-dark hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-lg border border-primary/60 px-5 py-2.5 text-sm font-medium text-text-main transition hover:border-primary hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 p-2 text-text-muted transition hover:border-accent/50 hover:text-accent"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 p-2 text-text-muted transition hover:border-accent/50 hover:text-accent"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-white/10 p-2 text-text-muted transition hover:border-accent/50 hover:text-accent"
              aria-label="Send email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs text-text-muted"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </motion.section>
  );
}
