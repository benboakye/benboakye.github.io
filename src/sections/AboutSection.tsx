import { SectionHeader } from '../components/SectionHeader';
import { profile, resumeSummary } from '../data/profile';
import { assetPath } from '../utils/helpers';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeader
        label="About"
        title="About Me"
        description="Background in telecommunications engineering with a growing focus on cybersecurity operations and infrastructure defense."
      />

      <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
        <img
          src={assetPath('/images/profile-placeholder.svg')}
          alt="Bernard Boakye Appiah profile placeholder"
          className="mx-auto h-44 w-44 rounded-2xl border border-white/10 object-cover lg:mx-0"
        />
        <div className="space-y-4 rounded-2xl border border-white/10 bg-surface/50 p-6">
          <p className="text-text-muted">{resumeSummary}</p>
          <p className="text-text-muted">{profile.about}</p>
          <p className="font-mono text-sm text-accent">{profile.headline}</p>
        </div>
      </div>
    </section>
  );
}
