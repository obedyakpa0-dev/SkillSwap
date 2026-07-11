import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Filter, MoreVertical, ChevronLeft, ChevronRight, Mail, Shield, Calendar } from 'lucide-react';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';

const USERS = [
  { id: 1, name: 'Sarah Kim', email: 'sarah.kim@example.com', role: 'student', status: 'active', joined: '2026-01-15', avatar: 'SK', sessions: 24 },
  { id: 2, name: 'James Chen', email: 'james.chen@example.com', role: 'instructor', status: 'active', joined: '2025-11-03', avatar: 'JC', sessions: 87 },
  { id: 3, name: 'Maria Garcia', email: 'maria.garcia@example.com', role: 'student', status: 'suspended', joined: '2026-03-20', avatar: 'MG', sessions: 5 },
  { id: 4, name: 'Alex Johnson', email: 'alex.johnson@example.com', role: 'instructor', status: 'active', joined: '2025-09-08', avatar: 'AJ', sessions: 142 },
  { id: 5, name: 'Emily Davis', email: 'emily.davis@example.com', role: 'student', status: 'pending', joined: '2026-06-30', avatar: 'ED', sessions: 0 },
  { id: 6, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'admin', status: 'active', joined: '2025-06-01', avatar: 'MB', sessions: 0 },
  { id: 7, name: 'Jessica Wilson', email: 'jessica.wilson@example.com', role: 'student', status: 'active', joined: '2026-02-14', avatar: 'JW', sessions: 18 },
  { id: 8, name: 'David Lee', email: 'david.lee@example.com', role: 'instructor', status: 'active', joined: '2025-12-22', avatar: 'DL', sessions: 63 },
];

const roleColors = {
  student: 'bg-blue-100 text-blue-700 ring-1 ring-blue-200',
  instructor: 'bg-primary-100 text-primary-700 ring-1 ring-primary-200',
  admin: 'bg-purple-100 text-purple-700 ring-1 ring-purple-200',
};

const statusColors = {
  active: 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200',
  suspended: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
  pending: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200',
};

function UserRow({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <tr className="group hover:bg-neutral-50/80 transition-colors border-b border-neutral-100 last:border-0">
      <td className="px-8 py-5">
        <div className="flex items-center gap-4">
          <Avatar initials={user.avatar} size="md" className="ring-2 ring-neutral-100" />
          <div>
            <p className="text-base font-semibold text-neutral-900">{user.name}</p>
            <div className="flex items-center gap-2 text-sm text-neutral-500 mt-0.5">
              <Mail className="h-3.5 w-3.5" />
              {user.email}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-5">
        <span className={`inline-flex items-center rounded-xl px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${roleColors[user.role]}`}>
          <Shield className="mr-1.5 h-3.5 w-3.5" />
          {user.role}
        </span>
      </td>
      <td className="px-6 py-5">
        <span className={`inline-flex items-center rounded-xl px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${statusColors[user.status]}`}>
          <span className={`mr-2 h-2 w-2 rounded-full ${user.status === 'active' ? 'bg-emerald-500' : user.status === 'suspended' ? 'bg-rose-500' : 'bg-amber-500'}`} />
          {user.status}
        </span>
      </td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Calendar className="h-4 w-4 text-neutral-400" />
          {new Date(user.joined).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </td>
      <td className="px-6 py-5 text-sm font-semibold text-neutral-900">
        {user.sessions}
      </td>
      <td className="px-6 py-5">
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border-2 border-transparent p-2.5 text-neutral-400 transition-all hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-600"
          >
            <MoreVertical className="h-5 w-5" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 z-10 mt-2 w-52 rounded-2xl border border-neutral-200 bg-white py-2 shadow-2xl shadow-neutral-200/60">
              <button className="flex w-full items-center px-5 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
                View Profile
              </button>
              <button className="flex w-full items-center px-5 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
                Edit User
              </button>
              <button className="flex w-full items-center px-5 py-3 text-sm font-semibold text-amber-600 hover:bg-amber-50">
                Suspend User
              </button>
              <div className="my-1 border-t border-neutral-100" />
              <button className="flex w-full items-center px-5 py-3 text-sm font-semibold text-rose-600 hover:bg-rose-50">
                Delete User
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default function UserManagement() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const filtered = USERS.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || u.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 px-8 py-10"
    >
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Page Header */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Users className="h-10 w-10 text-primary-600" />
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
                User Management
              </h1>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-200 transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
              + Add User
            </button>
          </div>
          <p className="text-lg text-neutral-600">
            {USERS.length} total users — manage accounts, roles, and access
          </p>
        </div>

        {/* Search + Filter Row */}
        <Card className="p-6 shadow-lg border-neutral-100/50 bg-white/80 backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="w-full rounded-xl border-2 border-neutral-200 pl-12 pr-4 py-3.5 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100"
              />
            </div>
            <div className="relative">
              <Shield className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
              <select
                value={roleFilter}
                onChange={(e) => { setRoleFilter(e.target.value); setPage(1); }}
                className="w-full appearance-none rounded-xl border-2 border-neutral-200 pl-12 pr-4 py-3.5 text-sm font-medium text-neutral-900 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100"
              >
                <option value="all">All Roles</option>
                <option value="student">Students</option>
                <option value="instructor">Instructors</option>
                <option value="admin">Admins</option>
              </select>
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
              <select
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
                className="w-full appearance-none rounded-xl border-2 border-neutral-200 pl-12 pr-4 py-3.5 text-sm font-medium text-neutral-900 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Users Table */}
        <Card className="overflow-hidden shadow-lg border-neutral-100/50 bg-white/80 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-neutral-100 bg-gradient-to-r from-neutral-50 to-white">
                  <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-widest text-neutral-500">User</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-neutral-500">Role</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-neutral-500">Status</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-neutral-500">Joined</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-neutral-500">Sessions</th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-neutral-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((user) => (
                  <UserRow key={user.id} user={user} />
                ))}
                {paginated.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-8 py-16 text-center">
                      <Users className="mx-auto h-12 w-12 text-neutral-300 mb-4" />
                      <p className="text-base font-semibold text-neutral-500">No users found</p>
                      <p className="text-sm text-neutral-400 mt-1">Try adjusting your search or filters</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t-2 border-neutral-100 px-8 py-5">
              <p className="text-sm font-medium text-neutral-600">
                Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filtered.length)} of {filtered.length} users
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-xl border-2 border-neutral-200 p-2.5 text-neutral-600 transition-all hover:border-neutral-300 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`rounded-xl border-2 px-5 py-2.5 text-sm font-bold transition-all ${
                      page === i + 1
                        ? 'border-primary-500 bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-200'
                        : 'border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-xl border-2 border-neutral-200 p-2.5 text-neutral-600 transition-all hover:border-neutral-300 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </motion.div>
  );
}
