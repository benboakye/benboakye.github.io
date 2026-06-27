import { motion } from 'framer-motion';
import { ArticleCard } from '../components/ArticleCard';
import { ContactForm } from '../components/ContactForm';
import { DownloadCvButton } from '../components/DownloadCvButton';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ResumeTimeline } from '../components/ResumeTimeline';
import { SidebarWidget } from '../components/SidebarWidget';
import { TechStackRow } from '../components/TechStackRow';
import { articles } from '../data/articles';
import { profile } from '../data/profile';
import { featuredProjects } from '../data/projects';
import { assetPath } from '../utils/helpers';

export function HomeSection() {
  return (
    <section id="home" className="scroll-mt-24 space-y-6">
      <Hero />
      <StatsRow />
      <TechStackRow />

      <div>
        <h2 className="mb-4 font-display text-xl font-semibold text-text-main">Featured Projects</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} compact />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsRow() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {profile.stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-surface/50 p-4 text-center backdrop-blur-sm"
        >
          <p className="font-display text-2xl font-bold text-accent">{stat.value}</p>
          <p className="mt-1 text-xs text-text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function RightSidebar() {
  return (
    <aside className="space-y-4">
      <SidebarWidget title="About Me">
        <div className="flex gap-3">
          <img
            src={assetPath('/images/profile-placeholder.svg')}
            alt="Bernard Boakye Appiah profile placeholder"
            className="h-14 w-14 shrink-0 rounded-lg border border-white/10 object-cover"
          />
          <p className="text-xs leading-relaxed text-text-muted">{profile.about.slice(0, 180)}…</p>
        </div>
      </SidebarWidget>

      <SidebarWidget title="Resume">
        <ResumeTimeline compact />
        <div className="mt-4">
          <DownloadCvButton variant="outline" className="w-full justify-center" label="Download Full Resume" />
        </div>
      </SidebarWidget>

      <SidebarWidget title="Articles">
        <div className="space-y-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} compact />
          ))}
        </div>
      </SidebarWidget>

      <SidebarWidget title="Contact Me">
        <ContactForm compact />
      </SidebarWidget>
    </aside>
  );
}
