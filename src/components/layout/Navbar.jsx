import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, LogIn } from 'lucide-react';
import { APP_NAME, NAV_LINKS } from '../../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm'
          : 'bg-white/80 backdrop-blur-lg border-b border-neutral-100'
      }`}
    >
      {/* Top accent gradient line */}
      <div className="accent-line" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-xl"
        >
          <div className="gradient-primary flex h-8 w-8 items-center justify-center rounded-xl text-sm font-black text-white shadow-md shadow-indigo-500/30 transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/40">
            S
          </div>
          <span className="font-bold text-neutral-900 text-[15px] tracking-tight">
            {APP_NAME}
          </span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-3.5 py-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              {isActive(link.path) && (
                <motion.span
                  layoutId="navbar-pill"
                  className="absolute inset-0 rounded-xl bg-primary-50"
                  transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                />
              )}
              <span
                className={`relative z-10 block text-sm font-medium transition-colors duration-150 ${
                  isActive(link.path)
                    ? 'text-primary-700 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* ── Desktop Right CTAs ── */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/login"
            className="flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium text-neutral-600 transition-all duration-150 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <LogIn className="h-4 w-4" aria-hidden="true" />
            Log in
          </Link>
          <Link
            to="/signup"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-xl"
          >
            <button className="gradient-primary group relative overflow-hidden rounded-xl px-5 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-px active:translate-y-0 active:shadow-md focus:outline-none">
              <span className="relative z-10 flex items-center gap-1.5">
                Get Started
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-neutral-600 transition-colors hover:bg-neutral-100 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-neutral-100 bg-white lg:hidden"
          >
            <div className="px-4 pb-5 pt-2 space-y-0.5">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-150 ${
                      isActive(link.path)
                        ? 'bg-primary-50 text-primary-700 font-semibold'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    {isActive(link.path) && (
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary-600" />
                    )}
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.04 }}
                className="mx-3.5 my-3 h-px bg-neutral-100"
              />

              {/* Mobile auth buttons */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.04 + 0.05, duration: 0.22 }}
                className="space-y-2 pt-1"
              >
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98]"
                >
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  Log in
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="gradient-primary group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition-all duration-200 active:scale-[0.98]"
                >
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Get Started Free
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-active:translate-x-full" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
