import { SidebarNav } from '../components/SidebarNav';
import { HomeSection, RightSidebar } from '../sections/HomeSection';

interface DashboardLayoutProps {
  activeSection: string;
  children: React.ReactNode;
}

export function DashboardLayout({ activeSection, children }: DashboardLayoutProps) {
  return (
    <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-6 lg:grid-cols-[240px_minmax(0,1fr)_320px] lg:px-6">
      <SidebarNav activeSection={activeSection} />

      <main className="min-w-0 space-y-16">
        <HomeSection />
        <div className="xl:hidden">
          <RightSidebar />
        </div>
        {children}
      </main>

      <div className="hidden xl:block">
        <div className="sticky top-24">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
