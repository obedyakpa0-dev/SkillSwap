import {
  CheckCircle, XCircle, AlertTriangle, ShieldOff,
  Ban, Flag, UserCheck, Settings,
} from 'lucide-react';

const activities = [
  { id: 1, action: 'User verified', user: 'Emily Watson', admin: 'Admin User', time: '2 minutes ago', icon: CheckCircle, color: 'bg-emerald-100 text-emerald-600' },
  { id: 2, action: 'Warning issued', user: 'John Doe', admin: 'Admin User', time: '15 minutes ago', icon: AlertTriangle, color: 'bg-amber-100 text-amber-600' },
  { id: 3, action: 'Report resolved', user: 'Sarah Kim vs Jane Smith', admin: 'Admin User', time: '1 hour ago', icon: Flag, color: 'bg-blue-100 text-blue-600' },
  { id: 4, action: 'User suspended', user: 'Mike Brown', admin: 'Admin User', time: '2 hours ago', icon: ShieldOff, color: 'bg-red-100 text-red-600' },
  { id: 5, action: 'Verification approved', user: 'Marcus Rivera', admin: 'Admin User', time: '3 hours ago', icon: CheckCircle, color: 'bg-emerald-100 text-emerald-600' },
  { id: 6, action: 'User banned', user: 'SpamBot_42', admin: 'Admin User', time: '5 hours ago', icon: Ban, color: 'bg-red-100 text-red-600' },
  { id: 7, action: 'Verification rejected', user: 'Fake Profile', admin: 'Admin User', time: '6 hours ago', icon: XCircle, color: 'bg-red-100 text-red-600' },
  { id: 8, action: 'New admin added', user: 'Sarah Admin', admin: 'System', time: '1 day ago', icon: UserCheck, color: 'bg-purple-100 text-purple-600' },
  { id: 9, action: 'Platform settings updated', user: '—', admin: 'Admin User', time: '1 day ago', icon: Settings, color: 'bg-neutral-200 text-neutral-600' },
];

export default function ActivityTimeline() {
  return (
    <div className="space-y-0">
      {activities.map((activity, index) => {
        const Icon = activity.icon;
        return (
          <div key={activity.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${activity.color}`}>
                <Icon className="h-4 w-4" />
              </div>
              {index < activities.length - 1 && (
                <div className="w-px flex-1 bg-neutral-200 mt-1.5 mb-1.5" />
              )}
            </div>
            <div className={`pb-4 ${index === activities.length - 1 ? '' : ''}`}>
              <p className="text-sm font-medium text-neutral-900">
                {activity.action}
                <span className="font-normal text-neutral-500"> — {activity.user}</span>
              </p>
              <p className="mt-0.5 text-xs text-neutral-400">
                by {activity.admin} · {activity.time}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
