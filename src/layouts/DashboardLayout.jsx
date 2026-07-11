import { useState, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';
import Breadcrumb from '../components/dashboard/Breadcrumb';
import { PATH_TITLES } from '../constants';

export default function DashboardLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const pageTitle = useMemo(() => {
    return PATH_TITLES[location.pathname] || 'Dashboard';
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-neutral-50/70">
      <Sidebar
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopNav
          title={pageTitle}
          onMenuToggle={() => setIsMobileOpen(true)}
        />
        <Breadcrumb />
        <main className="flex flex-1 flex-col overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
