import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { navSections } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { AboutSection } from '../sections/AboutSection';
import { ArticlesSection } from '../sections/ArticlesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ResumeSection } from '../sections/ResumeSection';
import { SkillsSection } from '../sections/SkillsSection';

export function HomePage() {
  const sectionIds = navSections.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-text-main">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.08),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(34,211,238,0.06),_transparent_30%)]" />
      <div className="relative">
        <Navbar activeSection={activeSection} />
        <DashboardLayout activeSection={activeSection}>
          <AboutSection />
          <SkillsSection />
          <ResumeSection />
          <ProjectsSection />
          <ArticlesSection />
          <ContactSection />
        </DashboardLayout>
        <Footer />
      </div>
    </div>
  );
}
