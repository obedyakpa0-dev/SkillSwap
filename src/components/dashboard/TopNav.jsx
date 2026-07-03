import { useState } from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../ui/Badge';
import UserMenu from './UserMenu';

export default function TopNav({ title, onMenuToggle }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl shadow-xs">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-100 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold tracking-tight text-neutral-900">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-56 rounded-xl border border-neutral-200 bg-neutral-50 py-2 pl-10 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all focus:w-72 focus:border-primary-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-50"
                aria-label="Search"
              />
            </div>
          </div>

          <button
            className="rounded-xl p-2 text-neutral-500 transition-colors hover:bg-neutral-100 sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Toggle search"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            className="relative rounded-xl p-2 text-neutral-500 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <Badge color="danger" className="absolute -right-0.5 -top-0.5 h-4 min-w-4 px-1 text-[10px] leading-none">
              3
            </Badge>
          </button>

          <div className="ml-1 border-l border-neutral-200 pl-2">
            <UserMenu />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-neutral-100 px-4 pb-3 pt-2 sm:hidden"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-primary-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-50"
                aria-label="Search"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
