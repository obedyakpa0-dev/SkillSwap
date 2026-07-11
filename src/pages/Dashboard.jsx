import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, Users, Calendar, BookOpen, TrendingUp,
  MessageSquare, Bell, Zap, Flame, Star,
  ArrowRight, Clock, CheckCircle, Activity,
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';

// ─── Animation variants ──────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const upcomingSessions = [
  { id: 1, skill: 'React Fundamentals', partner: 'Sarah Kim', date: 'Today, 3:00 PM', avatar: 'SK' },
  { id: 2, skill: 'UI/UX Design Basics', partner: 'James Chen', date: 'Tomorrow, 10:00 AM', avatar: 'JC' },
  { id: 3, skill: 'Python for Data Science', partner: 'Maria Lopez', date: 'Jul 5, 2:30 PM', avatar: 'ML' },
];

const recentActivity = [
  { id: 1, text: 'Completed a session on React Hooks with Emily', time: '2 hours ago', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { id: 2, text: 'Received a new match request for JavaScript', time: '5 hours ago', icon: Users, color: 'text-primary-500', bg: 'bg-primary-50' },
  { id: 3, text: 'Earned "Quick Learner" badge', time: '1 day ago', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 4, text: 'Started learning Python Basics path', time: '2 days ago', icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-50' },
];

const suggestedSkills = [
  { id: 1, name: 'TypeScript', level: 'Intermediate', matches: 12, color: 'from-blue-500 to-blue-600' },
  { id: 2, name: 'Node.js', level: 'Beginner', matches: 8, color: 'from-green-500 to-green-600' },
  { id: 3, name: 'Graphic Design', level: 'Advanced', matches: 5, color: 'from-purple-500 to-purple-600' },
];

const recentMessages = [
  { id: 1, name: 'Emily Parker', preview: 'Sure! Let me share my screen...', time: '5m ago', avatar: 'EP', unread: 2 },
  { id: 2, name: 'David Wilson', preview: 'Thanks for the session today!', time: '1h ago', avatar: 'DW', unread: 0 },
  { id: 3, name: 'Lisa Zhang', preview: 'Can we reschedule to Friday?', time: '3h ago', avatar: 'LZ', unread: 1 },
];

const leaderboardPreview = [
  { rank: 1, name: 'Maya Patel', points: 2840, avatar: 'MP' },
  { rank: 2, name: 'Alex Chen', points: 2750, avatar: 'AC' },
  { rank: 3, name: "Ryan O'Brien", points: 2610, avatar: 'RO' },
];

const notificationsPreview = [
  { id: 1, text: 'Your session with Sarah starts in 30 minutes', time: '30m ago', type: 'reminder' },
  { id: 2, text: 'New match found for UI/UX Design', time: '2h ago', type: 'match' },
  { id: 3, text: 'You earned 50 XP for completing a session', time: '4h ago', type: 'achievement' },
];

const stats = [
  {
    icon: Users,
    label: 'Active Matches',
    value: '8',
    trend: '+2',
    trendUp: true,
    gradient: 'from-primary-500 to-primary-600',
    bg: 'bg-primary-50',
    iconColor: 'text-primary-600',
  },
  {
    icon: Calendar,
    label: 'Sessions This Week',
    value: '5',
    trend: '+1',
    trendUp: true,
    gradient: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Star,
    label: 'Skill Points',
    value: '2,750',
    trend: '+120',
    trendUp: true,
    gradient: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Flame,
    label: 'Day Streak',
    value: '7',
    trend: null,
    trendUp: null,
    gradient: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

const quickActions = [
  { to: '/matches', label: 'Find Match', icon: Users, gradient: 'from-primary-500 to-primary-600', bg: 'bg-primary-50', hover: 'hover:bg-primary-100' },
  { to: '/learning', label: 'Browse Skills', icon: BookOpen, gradient: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50', hover: 'hover:bg-indigo-100' },
  { to: '/events', label: 'Join Event', icon: Calendar, gradient: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', hover: 'hover:bg-emerald-100' },
  { to: '/sessions', label: 'Book Session', icon: Clock, gradient: 'from-amber-500 to-amber-600', bg: 'bg-amber-50', hover: 'hover:bg-amber-100' },
];

// ─── Section card wrapper ─────────────────────────────────────────────────────
function SectionCard({ title, viewAllTo, viewAllLabel = 'View all', children, headerRight }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-card">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-neutral-900">{title}</h2>
        {viewAllTo ? (
          <Link
            to={viewAllTo}
            className="text-xs font-medium text-primary-600 transition-colors hover:text-primary-700"
          >
            {viewAllLabel} →
          </Link>
        ) : (
          headerRight
        )}
      </div>
      {children}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const { user } = useAuth();

  // Greeting logic (preserved)
  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  })();

  const firstName = user?.name?.split(' ')[0] || 'Alex';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-6 sm:py-8"
    >
      {/* ── Greeting header ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
            {greeting}, {firstName} 👋
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Here&rsquo;s what&rsquo;s happening with your learning today.
          </p>
        </div>

        {/* Avatar + notification bell */}
        <div className="flex shrink-0 items-center gap-3">
          <Link to="/notifications" className="relative">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-card transition-all hover:shadow-card-hover hover:border-primary-200">
              <Bell className="h-4 w-4 text-neutral-600" />
            </button>
            {/* unread dot */}
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary-500" />
          </Link>
          <Link to="/profile">
            <Avatar
              initials={user?.name?.slice(0, 2) || 'AL'}
              size="md"
              className="cursor-pointer ring-2 ring-primary-100 ring-offset-2 transition-all hover:ring-primary-300"
            />
          </Link>
        </div>
      </motion.div>

      {/* ── Stat cards row ────────────────────────────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={item}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 shadow-card transition-all hover:shadow-card-hover"
            >
              {/* decorative bg blob */}
              <div className={`pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-3xl ${stat.bg} opacity-40`} />

              {/* top row: icon + trend badge */}
              <div className="flex items-start justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                </div>
                {stat.trend && (
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    {stat.trend}
                  </span>
                )}
              </div>

              {/* value */}
              <p
                className={`mt-4 bg-gradient-to-br ${stat.gradient} bg-clip-text text-3xl font-black text-transparent`}
              >
                {stat.value}
              </p>
              {/* label */}
              <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Quick Actions + Progress ──────────────────────────────────────── */}
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-card">
            <h2 className="mb-5 text-sm font-semibold text-neutral-900">Quick Actions</h2>
            {/* 2×2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  to={action.to}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-neutral-100 p-5 transition-all hover:border-primary-100 hover:shadow-card-hover"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${action.gradient} shadow-md`}
                  >
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-700 transition-colors group-hover:text-neutral-900">
                    {action.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-card">
            <h2 className="mb-5 text-sm font-semibold text-neutral-900">Your Progress</h2>

            {/* Profile Completion bar */}
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-neutral-600">Profile Completion</span>
                <span className="text-sm font-semibold text-neutral-900">75%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
                />
              </div>
            </div>

            {/* Weekly Goal bar */}
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-neutral-600">Weekly Goal</span>
                <span className="text-sm font-semibold text-neutral-900">4 / 5 sessions</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '80%' }}
                  transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                />
              </div>
            </div>

            {/* Streak callout in amber */}
            <div className="mt-auto flex items-center gap-3 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-md shadow-amber-500/30">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-900">7-Day Streak 🔥</p>
                <p className="text-xs text-amber-700">Keep it going! 3 more for a badge.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Upcoming Sessions | Recent Activity | Suggested Skills ───────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3"
      >
        {/* Upcoming Sessions */}
        <motion.div variants={item}>
          <SectionCard title="Upcoming Sessions" viewAllTo="/sessions">
            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <motion.div
                  key={session.id}
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-3 transition-colors hover:border-primary-100 hover:bg-primary-50/30"
                >
                  <Avatar initials={session.avatar} size="sm" className="shrink-0 ring-2 ring-white" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-neutral-900">{session.skill}</p>
                    <p className="text-xs text-neutral-500">with {session.partner}</p>
                    <div className="mt-1 flex items-center gap-1">
                      <Clock className="h-3 w-3 text-primary-500" />
                      <span className="text-xs font-medium text-primary-600">{session.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionCard>
        </motion.div>

        {/* Recent Activity */}
        <motion.div variants={item}>
          <SectionCard title="Recent Activity" headerRight={<Activity className="h-4 w-4 text-neutral-400" />}>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${activity.bg}`}>
                    <activity.icon className={`h-3.5 w-3.5 ${activity.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs leading-relaxed text-neutral-700">{activity.text}</p>
                    <p className="mt-0.5 text-xs text-neutral-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </motion.div>

        {/* Suggested Skills */}
        <motion.div variants={item}>
          <SectionCard title="Suggested Skills" viewAllTo="/learning" viewAllLabel="Browse all">
            <div className="space-y-3">
              {suggestedSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50/50 p-3 transition-colors hover:border-primary-100 hover:bg-primary-50/30"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${skill.color} shadow-sm`}
                    >
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{skill.name}</p>
                      <p className="text-xs text-neutral-500">
                        {skill.level} · {skill.matches} matches
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-neutral-400" />
                </motion.div>
              ))}
            </div>
          </SectionCard>
        </motion.div>
      </motion.div>

      {/* ── Messages | Leaderboard | Notifications ────────────────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-4 lg:grid-cols-3"
      >
        {/* Recent Messages */}
        <motion.div variants={item}>
          <SectionCard title="Recent Messages" viewAllTo="/messages">
            <div className="space-y-1">
              {recentMessages.map((msg) => (
                <Link
                  key={msg.id}
                  to="/messages"
                  className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-neutral-50"
                >
                  <Avatar initials={msg.avatar} size="sm" className="shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium text-neutral-900">{msg.name}</p>
                      <span className="shrink-0 text-xs text-neutral-400">{msg.time}</span>
                    </div>
                    <p className="truncate text-xs text-neutral-500">{msg.preview}</p>
                  </div>
                  {msg.unread > 0 && (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-[10px] font-bold text-white">
                      {msg.unread}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </SectionCard>
        </motion.div>

        {/* Leaderboard */}
        <motion.div variants={item}>
          <SectionCard title="Leaderboard" viewAllTo="/leaderboard">
            <div className="space-y-2">
              {leaderboardPreview.map((entry) => (
                <div
                  key={entry.rank}
                  className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${
                    entry.name === 'Alex Chen'
                      ? 'border border-primary-100 bg-primary-50'
                      : 'hover:bg-neutral-50'
                  }`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      entry.rank === 1
                        ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-sm'
                        : entry.rank === 2
                          ? 'bg-gradient-to-br from-slate-300 to-slate-400 text-white shadow-sm'
                          : 'bg-gradient-to-br from-orange-300 to-orange-400 text-white shadow-sm'
                    }`}
                  >
                    {entry.rank}
                  </div>
                  <Avatar initials={entry.avatar} size="sm" className="shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-neutral-900">{entry.name}</p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-neutral-600">
                    {entry.points.toLocaleString()} XP
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>
        </motion.div>

        {/* Notifications */}
        <motion.div variants={item}>
          <SectionCard title="Notifications" viewAllTo="/notifications">
            <div className="space-y-3">
              {notificationsPreview.map((notif) => (
                <div
                  key={notif.id}
                  className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-3"
                >
                  <div
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      notif.type === 'reminder'
                        ? 'bg-primary-100'
                        : notif.type === 'match'
                          ? 'bg-emerald-100'
                          : 'bg-amber-100'
                    }`}
                  >
                    {notif.type === 'reminder' ? (
                      <Bell className="h-3.5 w-3.5 text-primary-600" />
                    ) : notif.type === 'match' ? (
                      <Users className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <Zap className="h-3.5 w-3.5 text-amber-600" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs leading-relaxed text-neutral-700">{notif.text}</p>
                    <p className="mt-0.5 text-xs text-neutral-400">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
