import { useState, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminTopNav from '../components/admin/AdminTopNav';

const PATH_TITLES = {
  '/admin': 'Admin Dashboard',
  '/admin/dashboard': 'Admin Dashboard',
  '/admin/verification': 'Verification Queue',
  '/admin/reports': 'Reports',
  '/admin/users': 'User Management',
  '/admin/activity': 'Activity Log',
  '/admin/analytics': 'Platform Analytics',
  '/admin/settings': 'Settings',
};

export default function AdminLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const pageTitle = useMemo(() => {
    return PATH_TITLES[location.pathname] || 'Admin';
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <AdminSidebar
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <AdminTopNav
          title={pageTitle}
          onMenuToggle={() => setIsMobileOpen(true)}
        />
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
