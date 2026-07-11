import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bell, CheckCheck, MessageSquare, Handshake, Calendar,
  Star, Award, Users, AlertCircle, Clock, Inbox,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import EmptyState from '../components/ui/EmptyState';

const notificationGroups = [
  {
    date: 'Today',
    items: [
      { id: 1, type: 'reminder', icon: Clock, iconBg: 'bg-primary-100', iconColor: 'text-primary-600', title: 'Session Reminder', text: 'Your React Fundamentals session with Sarah Kim starts in 30 minutes.', time: '9:30 AM', read: false },
      { id: 2, type: 'match', icon: Handshake, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', title: 'New Match', text: 'You have a new match request from Emily Watson for UI/UX Design.', time: '8:15 AM', read: false },
      { id: 3, type: 'achievement', icon: Star, iconBg: 'bg-amber-100', iconColor: 'text-amber-600', title: 'Achievement Unlocked', text: 'Congratulations! You earned the "Quick Learner" badge.', time: '7:00 AM', read: true },
    ],
  },
  {
    date: 'Yesterday',
    items: [
      { id: 4, type: 'session', icon: Calendar, iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', title: 'Session Completed', text: 'Your TypeScript session with David Wilson has been marked as complete.', time: '4:30 PM', read: true },
      { id: 5, type: 'message', icon: MessageSquare, iconBg: 'bg-purple-100', iconColor: 'text-purple-600', title: 'New Message', text: 'Emily Parker sent you a message: "Thanks for the great session!"', time: '2:00 PM', read: true },
      { id: 6, type: 'match', icon: Handshake, iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', title: 'Match Accepted', text: 'James Chen accepted your match request for UI/UX Design Basics.', time: '11:00 AM', read: true },
    ],
  },
  {
    date: 'This Week',
    items: [
      { id: 7, type: 'achievement', icon: Award, iconBg: 'bg-amber-100', iconColor: 'text-amber-600', title: 'Level Up', text: 'You reached Level 12! Keep learning to unlock more rewards.', time: 'Jul 1', read: true },
      { id: 8, type: 'system', icon: Bell, iconBg: 'bg-neutral-100', iconColor: 'text-neutral-600', title: 'System Update', text: 'SkillSwap has new features! Check out the updated learning paths.', time: 'Jun 30', read: true },
      { id: 9, type: 'reminder', icon: Clock, iconBg: 'bg-primary-100', iconColor: 'text-primary-600', title: 'Weekly Roundup', text: 'You completed 5 sessions this week. Great job keeping the streak!', time: 'Jun 29', read: true },
    ],
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(notificationGroups);
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All', icon: Bell },
    { key: 'unread', label: 'Unread', icon: AlertCircle },
    { key: 'match', label: 'Matches', icon: Handshake },
    { key: 'reminder', label: 'Reminders', icon: Clock },
    { key: 'achievement', label: 'Achievements', icon: Award },
  ];

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((group) => ({
        ...group,
        items: group.items.map((item) => ({ ...item, read: true })),
      }))
    );
  };

  const unreadCount = notifications.reduce(
    (sum, group) => sum + group.items.filter((i) => !i.read).length,
    0
  );

  const filteredGroups = notifications.map((group) => {
    let items = group.items;
    if (filter === 'unread') {
      items = items.filter((i) => !i.read);
    } else if (filter !== 'all') {
      items = items.filter((i) => i.type === filter);
    }
    return { ...group, items };
  }).filter((group) => group.items.length > 0);

  const hasItems = filteredGroups.some((g) => g.items.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 max-w-4xl mx-auto"
    >
      {/* Page Header Section */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/30">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                Notifications
              </h1>
              <p className="text-sm text-neutral-500 mt-1">Stay updated with your latest activities</p>
            </div>
          </div>
          {unreadCount > 0 && (
            <Badge color="primary" variant="solid" className="text-base px-4 py-2">
              {unreadCount} new
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        {unreadCount > 0 && (
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" icon={CheckCheck} onClick={markAllRead}>
              Mark all as read
            </Button>
          </div>
        )}
      </div>

      {/* Premium Filter Pills */}
      <div className="mb-8 flex flex-wrap gap-3 overflow-x-auto pb-2">
        {filters.map((f) => {
          const Icon = f.icon;
          const count = f.key === 'unread'
            ? unreadCount
            : f.key === 'all'
              ? notifications.reduce((s, g) => s + g.items.length, 0)
              : notifications.reduce((s, g) => s + g.items.filter((i) => i.type === f.key).length, 0);
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex items-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                filter === f.key
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105'
                  : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-primary-300 hover:bg-primary-50 hover:scale-102'
              }`}
            >
              <Icon className={`h-4.5 w-4.5 ${filter === f.key ? 'text-white' : 'text-neutral-500'}`} />
              {f.label}
              {count > 0 && (
                <span className={`inline-flex h-6 min-w-[24px] items-center justify-center rounded-full px-2 text-xs font-bold ${
                  filter === f.key ? 'bg-white/25 text-white' : 'bg-primary-100 text-primary-700'
                }`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Notifications List */}
      {!hasItems ? (
        <Card className="p-10">
          <EmptyState
            icon={Inbox}
            title="No notifications"
            description="You are all caught up! New notifications will appear here."
          />
        </Card>
      ) : (
        <div className="space-y-8">
          {filteredGroups.map((group) => (
            <div key={group.date}>
              {/* Group Header with Spacious Design */}
              <div className="mb-6 flex items-center gap-4">
                <h2 className="text-base font-bold uppercase tracking-wider text-neutral-400">
                  {group.date}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent" />
              </div>

              {/* Notification Cards */}
              <div className="space-y-4">
                {group.items.map((notif) => {
                  const Icon = notif.icon;
                  return (
                    <Card
                      key={notif.id}
                      hover
                      className={`relative flex items-start gap-6 p-6 transition-all duration-200 ${
                        !notif.read 
                          ? 'border-l-4 border-l-primary-500 bg-gradient-to-r from-primary-50/50 to-transparent shadow-md shadow-primary-500/5' 
                          : 'border-l-4 border-l-transparent'
                      }`}
                    >
                      {/* Icon Container */}
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm ${notif.iconBg}`}>
                        <Icon className={`h-6 w-6 ${notif.iconColor}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <p className="text-base font-bold text-neutral-900">{notif.title}</p>
                              {!notif.read && (
                                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500 ring-4 ring-primary-100" />
                              )}
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{notif.text}</p>
                          </div>
                          <span className="text-xs font-medium text-neutral-400 whitespace-nowrap">{notif.time}</span>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
