import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, LayoutDashboard } from 'lucide-react';
import { PATH_TITLES } from '../../constants';

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length <= 1) return null;

  const items = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    return {
      label: PATH_TITLES[path] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: path,
      isLast: index === pathSegments.length - 1,
    };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-neutral-100 bg-white/60 px-5 sm:px-6 py-2"
    >
      <ol className="flex items-center gap-1 text-xs">
        {/* Home */}
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-1 rounded-lg px-1.5 py-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Dashboard home"
          >
            <LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Segments */}
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3 text-neutral-300 shrink-0" aria-hidden="true" />
            {item.isLast ? (
              <span className="rounded-lg px-1.5 py-1 font-semibold text-neutral-700" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="rounded-lg px-1.5 py-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
