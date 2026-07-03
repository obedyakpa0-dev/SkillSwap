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
    <div className="flex min-h-screen bg-neutral-50">
      <Sidebar
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      <div className={`flex flex-1 flex-col transition-all duration-200 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}>
        <TopNav
          title={pageTitle}
          onMenuToggle={() => setIsMobileOpen(true)}
        />
        <Breadcrumb />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
