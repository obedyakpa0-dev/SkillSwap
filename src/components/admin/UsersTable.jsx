import { useState } from 'react';
import { MoreHorizontal, Eye, Ban, ShieldOff, Key } from 'lucide-react';
import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

const users = [
  { id: 1, name: 'Alex Chen', email: 'alex@skillswap.dev', university: 'Stanford University', department: 'Computer Science', role: 'Student', verified: true, status: 'active', avatar: 'AC' },
  { id: 2, name: 'Sarah Kim', email: 'sarah@skillswap.dev', university: 'Carnegie Mellon', department: 'Design', role: 'Student', verified: true, status: 'active', avatar: 'SK' },
  { id: 3, name: 'Emily Watson', email: 'emily@uni.edu', university: 'UCLA', department: 'Engineering', role: 'Student', verified: false, status: 'pending', avatar: 'EW' },
  { id: 4, name: 'David Wilson', email: 'david@skillswap.dev', university: 'University of Washington', department: 'Computer Science', role: 'Student', verified: true, status: 'active', avatar: 'DW' },
  { id: 5, name: 'John Doe', email: 'john@uni.edu', university: 'Unknown', department: '—', role: 'Student', verified: false, status: 'suspended', avatar: 'JD' },
  { id: 6, name: 'Jane Smith', email: 'jane@uni.edu', university: 'Unknown', department: '—', role: 'Student', verified: false, status: 'banned', avatar: 'JS' },
  { id: 7, name: 'Lisa Zhang', email: 'lisa@skillswap.dev', university: 'NYU', department: 'Mathematics', role: 'Student', verified: true, status: 'active', avatar: 'LZ' },
  { id: 8, name: 'Marcus Rivera', email: 'marcus@uni.edu', university: 'NYU', department: 'Physics', role: 'Student', verified: false, status: 'pending', avatar: 'MR' },
];

const statusBadge = {
  active: { color: 'success', label: 'Active' },
  pending: { color: 'warning', label: 'Pending' },
  suspended: { color: 'danger', label: 'Suspended' },
  banned: { color: 'danger', label: 'Banned' },
};

export default function UsersTable({ onViewUser }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-100 text-left">
            <th className="pb-3 pl-4 pr-3 font-medium text-neutral-500">User</th>
            <th className="hidden pb-3 px-3 font-medium text-neutral-500 lg:table-cell">Role</th>
            <th className="hidden pb-3 px-3 font-medium text-neutral-500 sm:table-cell">University</th>
            <th className="hidden pb-3 px-3 font-medium text-neutral-500 md:table-cell">Verified</th>
            <th className="pb-3 px-3 font-medium text-neutral-500">Status</th>
            <th className="pb-3 pr-4 pl-3 font-medium text-neutral-500 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {users.map((u) => (
            <tr key={u.id} className="transition-colors hover:bg-neutral-50/50">
              <td className="py-3 pl-4 pr-3">
                <div className="flex items-center gap-3">
                  <Avatar initials={u.avatar} size="sm" />
                  <div>
                    <p className="font-medium text-neutral-900">{u.name}</p>
                    <p className="text-xs text-neutral-500">{u.email}</p>
                  </div>
                </div>
              </td>
              <td className="hidden py-3 px-3 text-neutral-600 lg:table-cell">{u.role}</td>
              <td className="hidden py-3 px-3 text-neutral-600 sm:table-cell">{u.university}</td>
              <td className="hidden py-3 px-3 md:table-cell">
                {u.verified ? (
                  <Badge color="success" variant="solid">Verified</Badge>
                ) : (
                  <Badge color="warning" variant="solid">Unverified</Badge>
                )}
              </td>
              <td className="py-3 px-3">
                <Badge color={statusBadge[u.status].color} variant="outline">
                  {statusBadge[u.status].label}
                </Badge>
              </td>
              <td className="py-3 pr-4 pl-3">
                <div className="flex items-center justify-end gap-1">
                  <Button variant="ghost" size="icon" icon={Eye} onClick={() => onViewUser?.(u)} aria-label="View user" />
                  {u.status === 'active' && (
                    <>
                      <Button variant="ghost" size="icon" icon={ShieldOff} aria-label="Suspend user" />
                      <Button variant="ghost" size="icon" icon={Ban} aria-label="Ban user" />
                    </>
                  )}
                  <Button variant="ghost" size="icon" icon={Key} aria-label="Reset password" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
