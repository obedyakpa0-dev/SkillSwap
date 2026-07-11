import { motion } from 'framer-motion';
import { Users, ShieldCheck, Flag, Activity, TrendingUp, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';

const stats = [
  {
    label: 'Total Users',
    value: '12,847',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    gradient: 'from-blue-500 to-blue-600',
    bg: 'from-blue-50 to-blue-100/50',
  },
  {
    label: 'Pending Verifications',
    value: '28',
    change: '-8.2%',
    trend: 'down',
    icon: ShieldCheck,
    gradient: 'from-amber-500 to-amber-600',
    bg: 'from-amber-50 to-amber-100/50',
  },
  {
    label: 'Active Reports',
    value: '14',
    change: '+3.1%',
    trend: 'up',
    icon: Flag,
    gradient: 'from-rose-500 to-rose-600',
    bg: 'from-rose-50 to-rose-100/50',
  },
  {
    label: 'Active Sessions',
    value: '1,249',
    change: '+18.7%',
    trend: 'up',
    icon: Activity,
    gradient: 'from-emerald-500 to-emerald-600',
    bg: 'from-emerald-50 to-emerald-100/50',
  },
];

const recentActivity = [
  { id: 1, user: 'Sarah Kim', action: 'Completed verification', time: '2 minutes ago', avatar: 'SK', status: 'success' },
  { id: 2, user: 'James Chen', action: 'Submitted report', time: '15 minutes ago', avatar: 'JC', status: 'warning' },
  { id: 3, user: 'Maria Garcia', action: 'New user registered', time: '23 minutes ago', avatar: 'MG', status: 'info' },
  { id: 4, user: 'Alex Johnson', action: 'Session completed', time: '1 hour ago', avatar: 'AJ', status: 'success' },
  { id: 5, user: 'Emily Davis', action: 'Requested verification', time: '2 hours ago', avatar: 'ED', status: 'pending' },
  { id: 6, user: 'Michael Brown', action: 'Profile updated', time: '3 hours ago', avatar: 'MB', status: 'info' },
];

const quickActions = [
  { label: 'Review Verifications', icon: ShieldCheck, path: '/admin/verification', color: 'primary' },
  { label: 'Manage Reports', icon: Flag, path: '/admin/reports', color: 'rose' },
  { label: 'View All Users', icon: Users, path: '/admin/users', color: 'blue' },
  { label: 'System Settings', icon: Activity, path: '/admin/settings', color: 'emerald' },
];

export default function AdminDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 px-8 py-10"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Page Header */}
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Admin Dashboard
          </h1>
          <Badge variant="primary" className="px-4 py-1.5 text-sm font-semibold">
            Administrator
          </Badge>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-8 shadow-lg border-neutral-100/50 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <div className="space-y-4">
                    <div className={`inline-flex rounded-2xl bg-gradient-to-br ${stat.bg} p-4`}>
                      <Icon className={`h-8 w-8 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-neutral-900">{stat.value}</p>
                      <p className="mt-2 text-sm font-medium text-neutral-600">{stat.label}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`h-4 w-4 ${stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'} ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                      <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {stat.change}
                      </span>
                      <span className="text-sm text-neutral-500">vs last month</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Recent Activity Table */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-lg border-neutral-100/50 bg-white/80 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-5 rounded-2xl border-2 border-neutral-100 bg-gradient-to-r from-white to-neutral-50/50 p-5 transition-all hover:border-neutral-200 hover:shadow-md"
                  >
                    <Avatar initials={activity.avatar} size="md" className="ring-2 ring-neutral-100" />
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-neutral-900">{activity.user}</p>
                      <p className="text-sm text-neutral-600 mt-0.5">{activity.action}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Clock className="h-4 w-4" />
                        {activity.time}
                      </div>
                      {activity.status === 'success' && (
                        <div className="rounded-full bg-emerald-100 p-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        </div>
                      )}
                      {activity.status === 'warning' && (
                        <div className="rounded-full bg-amber-100 p-2">
                          <Flag className="h-4 w-4 text-amber-600" />
                        </div>
                      )}
                      {activity.status === 'info' && (
                        <div className="rounded-full bg-blue-100 p-2">
                          <Activity className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                      {activity.status === 'pending' && (
                        <div className="rounded-full bg-neutral-100 p-2">
                          <Clock className="h-4 w-4 text-neutral-600" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" size="sm" className="font-semibold">
                  View All Activity
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Quick Actions Grid */}
          <div>
            <Card className="p-8 shadow-lg border-neutral-100/50 bg-white/80 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      className="flex w-full items-center gap-4 rounded-2xl border-2 border-neutral-100 bg-gradient-to-r from-white to-neutral-50/50 p-5 text-left transition-all hover:border-neutral-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <div className={`rounded-xl bg-gradient-to-br ${
                        action.color === 'primary' ? 'from-primary-100 to-primary-50' :
                        action.color === 'rose' ? 'from-rose-100 to-rose-50' :
                        action.color === 'blue' ? 'from-blue-100 to-blue-50' :
                        'from-emerald-100 to-emerald-50'
                      } p-3`}>
                        <Icon className={`h-6 w-6 ${
                          action.color === 'primary' ? 'text-primary-600' :
                          action.color === 'rose' ? 'text-rose-600' :
                          action.color === 'blue' ? 'text-blue-600' :
                          'text-emerald-600'
                        }`} />
                      </div>
                      <span className="flex-1 text-base font-semibold text-neutral-900">
                        {action.label}
                      </span>
                      <ArrowRight className="h-5 w-5 text-neutral-400" />
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
