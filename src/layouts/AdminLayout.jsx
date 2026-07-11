import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShieldCheck, Flag, Users, ArrowLeft } from 'lucide-react';

const adminLinks = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Verification Queue', path: '/admin/verification', icon: ShieldCheck },
  { label: 'Reports', path: '/admin/reports', icon: Flag },
  { label: 'User Management', path: '/admin/users', icon: Users },
];

export default function AdminLayout() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside className="sticky top-0 flex h-screen w-64 flex-col border-r border-neutral-100 bg-white self-start">
        {/* Header */}
        <div className="flex h-16 items-center gap-2.5 border-b border-neutral-100 px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold text-white">
            A
          </div>
          <span className="text-sm font-semibold text-neutral-900">Admin Panel</span>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {adminLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-150 ${
                  active
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Back link */}
        <div className="border-t border-neutral-100 p-3">
          <Link
            to="/"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-700"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
