import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, ShieldCheck, Flag, Users, Clock,
  BarChart3, Settings, ArrowLeft, ChevronLeft,
  ChevronRight, X, Activity,
} from 'lucide-react';

const adminLinks = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Verification Queue', path: '/admin/verification', icon: ShieldCheck },
  { label: 'Reports', path: '/admin/reports', icon: Flag },
  { label: 'User Management', path: '/admin/users', icon: Users },
  { label: 'Activity Log', path: '/admin/activity', icon: Activity },
];

const bottomLinks = [
  { label: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function AdminSidebar({ isMobileOpen, onMobileClose, isCollapsed, onToggleCollapse }) {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/admin') return location.pathname === '/admin' || location.pathname === '/admin/dashboard';
    return location.pathname.startsWith(path);
  };

  const sidebarContent = (
    <div className={`flex h-full flex-col ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className={`flex h-16 items-center border-b border-neutral-100 ${isCollapsed ? 'justify-center px-0' : 'gap-2 px-6'}`}>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold text-white">
          A
        </div>
        {!isCollapsed && (
          <span className="text-lg font-semibold tracking-tight text-neutral-900">Admin</span>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6" aria-label="Admin navigation">
        <div>
          {!isCollapsed && (
            <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Main
            </p>
          )}
          <div className={isCollapsed ? 'flex flex-col items-center gap-1' : 'space-y-0.5'}>
            {adminLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return isCollapsed ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative flex items-center justify-center rounded-xl p-2.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                  <div className="absolute left-full ml-2 hidden rounded-lg bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white shadow-md group-hover:block whitespace-nowrap">
                    {link.label}
                  </div>
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 ${
                    active
                      ? 'bg-neutral-100 text-neutral-900'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          {!isCollapsed && (
            <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400 opacity-60">
              Platform
            </p>
          )}
          <div className={`${isCollapsed ? 'flex flex-col items-center gap-1' : 'space-y-0.5 opacity-50'}`}>
            {bottomLinks.map((link) => {
              const Icon = link.icon;
              return isCollapsed ? (
                <div
                  key={link.path}
                  className="flex cursor-not-allowed items-center justify-center rounded-xl p-2.5 text-neutral-300"
                  aria-disabled="true"
                >
                  <Icon className="h-5 w-5" />
                </div>
              ) : (
                <div
                  key={link.path}
                  className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-400"
                  aria-disabled="true"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span>{link.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="border-t border-neutral-100 p-3">
        <Link
          to="/"
          className={`flex items-center gap-3 rounded-xl text-sm font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 ${
            isCollapsed ? 'justify-center p-2.5' : 'px-3 py-2.5'
          }`}
          aria-label={isCollapsed ? 'Back to site' : undefined}
        >
          <ArrowLeft className="h-5 w-5 shrink-0" />
          {!isCollapsed && <span>Back to site</span>}
        </Link>
      </div>

      {!isCollapsed && (
        <button
          onClick={onToggleCollapse}
          className="hidden border-t border-neutral-100 p-3 text-neutral-400 transition-colors hover:text-neutral-600 lg:flex items-center justify-center"
          aria-label="Collapse sidebar"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}
      {isCollapsed && (
        <button
          onClick={onToggleCollapse}
          className="hidden border-t border-neutral-100 p-3 text-neutral-400 transition-colors hover:text-neutral-600 lg:flex items-center justify-center"
          aria-label="Expand sidebar"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );

  return (
    <>
      <aside
        className={`hidden lg:flex lg:flex-col sticky top-0 h-screen shrink-0 bg-white border-r border-neutral-200/60 overflow-hidden transition-all duration-200 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'}`}
      >
        {sidebarContent}
      </aside>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-neutral-900/50 lg:hidden"
            onClick={onMobileClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: -288 }}
            animate={{ x: 0 }}
            exit={{ x: -288 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-soft-xl lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center justify-between border-b border-neutral-100 px-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold text-white">A</div>
                  <span className="text-lg font-semibold tracking-tight text-neutral-900">Admin</span>
                </div>
                <button
                  onClick={onMobileClose}
                  className="rounded-lg p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6" aria-label="Mobile admin navigation">
                <div>
                  <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">Main</p>
                  <div className="space-y-0.5">
                    {adminLinks.map((link) => {
                      const Icon = link.icon;
                      const active = isActive(link.path);
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={onMobileClose}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                            active ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                          }`}
                          aria-current={active ? 'page' : undefined}
                        >
                          <Icon className="h-5 w-5 shrink-0" />
                          <span>{link.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </nav>
              <div className="border-t border-neutral-100 p-3">
                <Link
                  to="/"
                  onClick={onMobileClose}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
                >
                  <ArrowLeft className="h-5 w-5 shrink-0" />
                  <span>Back to site</span>
                </Link>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
