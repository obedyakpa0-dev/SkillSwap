import { Inbox } from 'lucide-react';

export default function EmptyState({
  icon: Icon = Inbox,
  title = 'Nothing here yet',
  description = 'Content will appear here once available.',
  action,
  className = '',
}) {
  return (
    <div className={`flex min-h-[40vh] flex-col items-center justify-center py-12 text-center ${className}`}>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100/80">
        <Icon className="h-8 w-8 text-neutral-300" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-neutral-900">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-neutral-500">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
