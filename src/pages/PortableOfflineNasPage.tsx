import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { NasArchitectureDiagram } from '../components/NasArchitectureDiagram';
import { SectionHeader } from '../components/SectionHeader';
import { nasCaseStudy } from '../data/nasCaseStudy';
import { assetPath } from '../utils/helpers';

export function PortableOfflineNasPage() {
  useEffect(() => {
    document.title = 'Portable Offline NAS Platform | Bernard Boakye Appiah';
    return () => {
      document.title = 'Bernard Boakye Appiah | Cybersecurity Portfolio';
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
            <a
              href={assetPath(nasCaseStudy.reportPath)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark hover:shadow-glow"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              View Report
            </a>
          </div>
        </header>

        <main className="mx-auto max-w-5xl space-y-16 px-4 py-10 lg:px-6">
          <HeroSection />
          <MetricsSection />
          <ProblemSolutionSection />
          <ELibrarySection />
          <ArchitectureSection />
          <ImageGallery title="Hardware Build" images={nasCaseStudy.images.hardware} />
          <ImplementationSection />
          <ImageGallery title="GCTU E Library Web Interface" images={nasCaseStudy.images.webUi} />
          <TestingSection />
          <ChallengesSection />
          <SecuritySection />
          <SkillsSection />
          <StatusSection />
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
      className="overflow-hidden rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-sm"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">{nasCaseStudy.category}</p>
          <span className="mt-3 inline-block rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium text-accent">
            {nasCaseStudy.status}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-text-main sm:text-4xl">
            {nasCaseStudy.title}
          </h1>
          <p className="mt-4 text-text-muted">{nasCaseStudy.subtitle}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {nasCaseStudy.tags.map((tag) => (
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
              href={assetPath(nasCaseStudy.reportPath)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark hover:shadow-glow"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              View Report
            </a>
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-text-muted/60">
              GitHub Coming Soon
            </span>
          </div>
        </div>
        <div className="border-t border-white/10 lg:border-l lg:border-t-0">
          <img
            src={assetPath(nasCaseStudy.images.hero)}
            alt="Completed portable offline NAS prototype top view"
            className="h-full min-h-[240px] w-full object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}

function MetricsSection() {
  return (
    <section>
      <SectionHeader label="At a Glance" title="Project Metrics" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {nasCaseStudy.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-white/10 bg-surface/50 p-4 transition hover:border-primary/30"
          >
            <p className="text-xs uppercase tracking-wide text-text-muted">{metric.label}</p>
            <p className="mt-2 font-medium text-text-main">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-surface/50 p-6">
        <SectionHeader label="Problem" title="Why This Project?" />
        <p className="text-sm leading-relaxed text-text-muted">{nasCaseStudy.problem}</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-surface/50 p-6">
        <SectionHeader label="Solution" title="What I Built" />
        <p className="text-sm leading-relaxed text-text-muted">{nasCaseStudy.solution}</p>
      </div>
    </section>
  );
}

function ELibrarySection() {
  return (
    <section className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
      <SectionHeader label="Application" title="GCTU E Library" />
      <p className="max-w-3xl text-sm leading-relaxed text-text-muted">{nasCaseStudy.eLibrary}</p>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section>
      <SectionHeader
        label="Architecture"
        title="System Design"
        description="Three-layer design: hardware, OpenWrt network stack, and browser-based file management."
      />
      <NasArchitectureDiagram />
    </section>
  );
}

function ImplementationSection() {
  return (
    <section>
      <SectionHeader label="Implementation" title="How It Was Built" />
      <div className="grid gap-4 md:grid-cols-2">
        {nasCaseStudy.implementation.map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-surface/50 p-5">
            <h3 className="font-display text-base font-semibold text-text-main">{item.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestingSection() {
  return (
    <section className="space-y-8">
      <div>
        <SectionHeader
          label="Testing"
          title="Performance & Load Testing"
          description={nasCaseStudy.testingMethodology}
        />
        <ul className="mt-4 space-y-2">
          {nasCaseStudy.results.map((result) => (
            <li key={result} className="flex gap-2 text-sm text-text-muted">
              <span className="text-accent-green">•</span>
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 font-display text-lg font-semibold text-text-main">Throughput Results</h3>
        <div className="grid gap-4 lg:grid-cols-3">
          {nasCaseStudy.images.throughput.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-xl border border-white/10 bg-surface/50"
            >
              <img src={assetPath(image.src)} alt={image.alt} className="w-full object-cover" />
              {image.caption && (
                <figcaption className="border-t border-white/10 px-3 py-2 text-xs text-text-muted">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-display text-lg font-semibold text-text-main">System Monitoring</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {nasCaseStudy.images.monitoring.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-xl border border-white/10 bg-surface/50"
            >
              <img src={assetPath(image.src)} alt={image.alt} className="w-full object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <section>
      <SectionHeader label="Engineering" title="Challenges & Solutions" />
      <div className="grid gap-4 md:grid-cols-2">
        {nasCaseStudy.challenges.map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-surface/50 p-5">
            <h3 className="font-medium text-text-main">{item.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.solution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="rounded-2xl border border-white/10 bg-surface/40 p-6">
      <SectionHeader label="Security" title="Security Considerations" />
      <p className="text-sm leading-relaxed text-text-muted">{nasCaseStudy.securityNote}</p>
    </section>
  );
}

function SkillsSection() {
  return (
    <section>
      <SectionHeader label="Skills" title="Skills Demonstrated" />
      <div className="flex flex-wrap gap-2">
        {nasCaseStudy.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs text-text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function StatusSection() {
  return (
    <section className="rounded-2xl border border-primary/30 bg-primary/10 p-6 sm:p-8">
      <SectionHeader label="Status" title="Project Status" />
      <p className="max-w-3xl text-sm leading-relaxed text-text-muted">{nasCaseStudy.statusNote}</p>
    </section>
  );
}

function ImageGallery({
  title,
  images,
}: {
  title: string;
  images: { src: string; alt: string; caption?: string }[];
}) {
  return (
    <section>
      <h2 className="mb-4 font-display text-xl font-semibold text-text-main">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-xl border border-white/10 bg-surface/50"
          >
            <img src={assetPath(image.src)} alt={image.alt} className="h-56 w-full object-cover" />
          </figure>
        ))}
      </div>
    </section>
  );
}
