import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import { ContactForm } from './ContactForm';
import { SectionHeader } from './SectionHeader';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeader
        label="Contact"
        title="Get In Touch"
        description="Open to cybersecurity internships, lab collaborations, and professional networking."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <ContactInfoCard
            icon={Mail}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactInfoCard
            icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/ben-boakye"
            href={profile.linkedin}
          />
          <ContactInfoCard
            icon={Github}
            label="GitHub"
            value="github.com/benboakye"
            href={profile.github}
          />
          <ContactInfoCard icon={MapPin} label="Location" value={profile.location} />
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface/50 p-5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-surface/50 p-4 transition hover:border-accent/30">
      <Icon className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
      <div>
        <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
        <p className="text-sm text-text-main">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
