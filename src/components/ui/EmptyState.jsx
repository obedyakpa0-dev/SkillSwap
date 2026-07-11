import { motion } from 'framer-motion';
import { Inbox } from 'lucide-react';

export default function EmptyState({
  icon: Icon = Inbox,
  title = 'Nothing here yet',
  description = 'Content will appear here once available.',
  action,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col items-center justify-center py-16 text-center ${className}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 shadow-lg">
        <Icon className="h-8 w-8 text-white" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-neutral-800">{title}</h3>
      <p className="mt-2 max-w-xs text-sm text-neutral-500">{description}</p>
      {action && <div className="mt-8">{action}</div>}
    </motion.div>
  );
}
