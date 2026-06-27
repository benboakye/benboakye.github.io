import { DownloadCvButton } from '../components/DownloadCvButton';
import { ResumeTimeline } from '../components/ResumeTimeline';
import { SectionHeader } from '../components/SectionHeader';
import { certification, resumeSummary } from '../data/profile';

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-24">
      <SectionHeader
        label="Resume"
        title="Education & Experience"
        description={resumeSummary}
      />

      <div className="mb-6 rounded-xl border border-accent-green/30 bg-accent-green/10 p-4">
        <p className="font-medium text-text-main">{certification.name}</p>
        <p className="text-sm text-accent-green">{certification.status}</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-surface/50 p-6">
        <ResumeTimeline />
      </div>

      <div className="mt-6">
        <DownloadCvButton label="Download Full Resume" />
      </div>
    </section>
  );
}
