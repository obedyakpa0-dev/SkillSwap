import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { PATH_TITLES } from '../../constants';

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  if (pathSegments.length === 0) return null;

  const items = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    return {
      label: PATH_TITLES[path] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: path,
      isLast: index === pathSegments.length - 1,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <ol className="flex items-center gap-1.5 text-sm text-neutral-500">
        <li>
          <Link to="/dashboard" className="flex items-center gap-1 transition-colors hover:text-neutral-700" aria-label="Dashboard home">
            <Home className="h-3.5 w-3.5" />
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-neutral-300" aria-hidden="true" />
            {item.isLast ? (
              <span className="font-medium text-neutral-700" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="transition-colors hover:text-neutral-700"
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
