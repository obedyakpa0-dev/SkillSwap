import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Activity } from 'lucide-react';
import Card from '../components/ui/Card';
import SearchBar from '../components/ui/SearchBar';
import ActivityTimeline from '../components/admin/ActivityTimeline';

export default function ActivityLog() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All', count: 9 },
    { key: 'verification', label: 'Verification', count: 3 },
    { key: 'moderation', label: 'Moderation', count: 3 },
    { key: 'system', label: 'System', count: 2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-neutral-900">Activity Log</h1>
          <p className="text-sm text-neutral-500 mt-0.5">Track all administrative actions across the platform.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
        <SearchBar
          placeholder="Search activity..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-72"
        />
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                filter === f.key
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {f.label}
              <span className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs font-semibold ${
                filter === f.key ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
              }`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Card className="p-6">
        <ActivityTimeline />
      </Card>
    </motion.div>
  );
}
