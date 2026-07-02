import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { SectionHeader } from '../components/SectionHeader';
import { northGridCaseStudy } from '../data/northGridCaseStudy';
import { assetPath } from '../utils/helpers';

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function CybersecurityRiskAssessmentPage() {
  useEffect(() => {
    document.title = northGridCaseStudy.pageTitle;
    setMetaDescription(northGridCaseStudy.metaDescription);
    return () => {
      document.title = 'Bernard Boakye Appiah | Cybersecurity Portfolio';
      setMetaDescription(
        'Portfolio of Bernard Boakye Appiah, an aspiring Critical Infrastructure and OT Cybersecurity professional focused on network security, infrastructure defense, packet analysis, and cybersecurity operations.',
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-main">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.08),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.06),_transparent_30%)]" />
      <div className="relative">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Projects
            </Link>
            <div className="flex flex-wrap gap-2">
              <a
                href="#assessment-detail"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark hover:shadow-glow"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                View Full Assessment
              </a>
              <a
                href="#downloads"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-text-muted transition hover:border-accent/50 hover:text-accent"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Evidence Briefs
              </a>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl space-y-16 px-4 py-10 lg:px-6">
          <HeroSection />
          <MetricsSection />
          <BoundaryNoteSection />
          <div id="assessment-detail" className="scroll-mt-24 space-y-16">
            <RoleScopeSection />
            <ProblemSolutionSection />
            <OutcomesSection />
            <EvidenceGallerySection />
            <PhaseSummarySection />
            <PhasesSection />
            <IncidentLessonsSection />
            <DownloadsSection />
            <SkillsSection />
            <StatusSection />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm p-6 sm:p-8"
    >
      <p className="font-mono text-xs uppercase tracking-wider text-accent">{northGridCaseStudy.category}</p>
      <span className="mt-3 inline-block rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium text-accent">
        {northGridCaseStudy.status}
      </span>
      <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-text-main sm:text-4xl">
        {northGridCaseStudy.title}
      </h1>
      <p className="mt-3 text-sm font-medium text-accent">{northGridCaseStudy.orgLabel}</p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
        {northGridCaseStudy.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {northGridCaseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#assessment-detail"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark hover:shadow-glow"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          View Full Assessment
        </a>
        <a
          href="#downloads"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-text-muted transition hover:border-accent/50 hover:text-accent"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download Evidence Briefs
        </a>
      </div>
    </motion.section>
  );
}

function MetricsSection() {
  return (
    <section>
      <SectionHeader label="At a Glance" title="Assessment Metrics" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {northGridCaseStudy.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-white/10 bg-surface/50 p-4 transition hover:border-primary/30"
          >
            <p className="text-xs uppercase tracking-wide text-text-muted">{metric.label}</p>
            <p className="mt-2 text-sm font-medium leading-snug text-text-main">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BoundaryNoteSection() {
  return (
    <section className="rounded-2xl border border-white/10 bg-surface/40 p-6 sm:p-8">
      <SectionHeader label="Scope" title="Project Boundary" />
      <p className="max-w-3xl text-sm leading-relaxed text-text-muted">{northGridCaseStudy.boundaryNote}</p>
    </section>
  );
}

function RoleScopeSection() {
  return (
    <section className="rounded-2xl border border-white/10 bg-surface/50 p-6 sm:p-8">
      <SectionHeader label="Role" title="My Role and Scope" />
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-text-muted">Role</h3>
          <p className="mt-1 text-sm text-text-main">{northGridCaseStudy.role}</p>
        </div>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-text-muted">Scope</h3>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">{northGridCaseStudy.scope}</p>
        </div>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-text-muted">Tools and methods</h3>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">{northGridCaseStudy.toolsAndMethods}</p>
        </div>
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wide text-text-muted">Deliverables</h3>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">{northGridCaseStudy.deliverables}</p>
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-surface/50 p-6">
        <SectionHeader label="Challenge" title="Starting Security Posture" />
        <p className="text-sm leading-relaxed text-text-muted">{northGridCaseStudy.problem}</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-surface/50 p-6">
        <SectionHeader label="Approach" title="Phased Assessment Method" />
        <p className="text-sm leading-relaxed text-text-muted">{northGridCaseStudy.solution}</p>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
      <SectionHeader label="Outcomes" title="Impact" />
      <ul className="mt-4 space-y-2">
        {northGridCaseStudy.programOutcomes.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-text-muted">
            <span className="text-accent-green">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function EvidenceGallerySection() {
  return (
    <section>
      <SectionHeader
        label="Evidence"
        title="Evidence Gallery"
        description={northGridCaseStudy.evidenceGalleryIntro}
      />
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {northGridCaseStudy.evidenceGallery.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/10 bg-surface/50 p-5 transition hover:border-primary/30"
          >
            <div className="mb-3 flex h-24 items-center justify-center rounded-lg border border-dashed border-white/10 bg-background/40">
              <FileText className="h-8 w-8 text-accent/40" aria-hidden="true" />
            </div>
            <h3 className="font-medium text-text-main">{item.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PhaseSummarySection() {
  return (
    <section>
      <SectionHeader
        label="Overview"
        title="Six-Phase Summary"
        description="Each phase builds on the previous to move from baseline profiling to a governance roadmap."
      />
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {northGridCaseStudy.phases.map((phase, index) => (
          <a
            key={phase.id}
            href={`#${phase.id}`}
            className="group rounded-xl border border-white/10 bg-surface/50 p-4 transition hover:border-primary/40 hover:bg-surface/70"
          >
            <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-2 text-sm font-semibold text-text-main group-hover:text-accent">
              {phase.shortTitle}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-text-muted">{phase.mainOutcome}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function PhasesSection() {
  return (
    <section className="space-y-8">
      <SectionHeader label="Detail" title="Phase-by-Phase Findings" />
      {northGridCaseStudy.phases.map((phase, index) => (
        <motion.article
          key={phase.id}
          id={phase.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          className="scroll-mt-24 rounded-2xl border border-white/10 bg-surface/50 p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-start gap-3">
            <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 font-mono text-xs text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-text-main">{phase.title}</h3>
              <p className="mt-1 text-sm text-accent">{phase.subtitle}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">{phase.summary}</p>
          <div className="mt-5">
            <h4 className="text-xs font-medium uppercase tracking-wide text-text-muted">Key findings</h4>
            <ul className="mt-2 space-y-2">
              {phase.findings.map((finding) => (
                <li key={finding} className="flex gap-2 text-sm text-text-muted">
                  <span className="text-accent-green">•</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {phase.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 text-xs text-text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </section>
  );
}

function IncidentLessonsSection() {
  return (
    <section>
      <SectionHeader label="Context" title="Real-World Incident Lessons Applied" />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {northGridCaseStudy.incidentLessons.map((item) => (
          <div key={item.incident} className="rounded-xl border border-white/10 bg-surface/50 p-5">
            <h3 className="font-medium text-text-main">{item.incident}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.lesson}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DownloadsSection() {
  return (
    <section id="downloads" className="scroll-mt-24">
      <SectionHeader
        label="Downloads"
        title="Technical Briefs & Evidence"
        description="Sanitized portfolio deliverables for recruiters, hiring managers, and technical reviewers."
      />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {northGridCaseStudy.downloads.map((file) => (
          <a
            key={file.path}
            href={assetPath(file.path)}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-surface/50 p-4 transition hover:border-primary/40 hover:bg-surface/70"
          >
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-text-main group-hover:text-accent">{file.label}</p>
                <p className="mt-1 text-xs text-text-muted">{file.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section>
      <SectionHeader label="Skills" title="Skills Demonstrated" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {northGridCaseStudy.skillGroups.map((group) => (
          <div key={group.category} className="rounded-xl border border-white/10 bg-surface/50 p-5">
            <h3 className="text-sm font-semibold text-text-main">{group.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 text-xs text-text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatusSection() {
  return (
    <section className="rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:p-8">
      <SectionHeader label="Note" title="About This Project" />
      <p className="max-w-3xl text-sm leading-relaxed text-text-muted">{northGridCaseStudy.statusNote}</p>
    </section>
  );
}
