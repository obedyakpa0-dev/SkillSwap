import { useState } from 'react';
import { AlertTriangle, Eye, ShieldOff, Ban, VolumeX, CheckCircle } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const reports = [
  { id: 1, reporter: 'Sarah Kim', reported: 'John Doe', reason: 'Inappropriate Behavior', priority: 'high', status: 'open', date: '1 hour ago' },
  { id: 2, reporter: 'David Wilson', reported: 'Jane Smith', reason: 'Harassment', priority: 'critical', status: 'open', date: '3 hours ago' },
  { id: 3, reporter: 'Lisa Zhang', reported: 'Mike Brown', reason: 'Spam', priority: 'low', status: 'reviewing', date: '5 hours ago' },
  { id: 4, reporter: 'Maria Lopez', reported: 'Tom Baker', reason: 'Fake Profile', priority: 'medium', status: 'open', date: '1 day ago' },
  { id: 5, reporter: 'Alex Chen', reported: 'Ryan O\'Brien', reason: 'No-Shows', priority: 'low', status: 'resolved', date: '2 days ago' },
];

const priorityBadge = {
  critical: 'danger',
  high: 'warning',
  medium: 'primary',
  low: 'neutral',
};

const statusBadge = {
  open: 'warning',
  reviewing: 'primary',
  resolved: 'success',
};

export default function ReportsTable() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-100 text-left">
            <th className="pb-3 pl-4 pr-3 font-medium text-neutral-500">Reporter</th>
            <th className="pb-3 px-3 font-medium text-neutral-500">Reported</th>
            <th className="hidden pb-3 px-3 font-medium text-neutral-500 sm:table-cell">Reason</th>
            <th className="hidden pb-3 px-3 font-medium text-neutral-500 md:table-cell">Priority</th>
            <th className="hidden pb-3 px-3 font-medium text-neutral-500 lg:table-cell">Status</th>
            <th className="pb-3 pr-4 pl-3 font-medium text-neutral-500 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {reports.map((r) => (
            <tr key={r.id} className="transition-colors hover:bg-neutral-50/50">
              <td className="py-3 pl-4 pr-3">
                <p className="font-medium text-neutral-900">{r.reporter}</p>
                <p className="text-xs text-neutral-500">{r.date}</p>
              </td>
              <td className="py-3 px-3 font-medium text-neutral-900">{r.reported}</td>
              <td className="hidden py-3 px-3 text-neutral-600 sm:table-cell">{r.reason}</td>
              <td className="hidden py-3 px-3 md:table-cell">
                <Badge color={priorityBadge[r.priority]} variant="solid">{r.priority}</Badge>
              </td>
              <td className="hidden py-3 px-3 lg:table-cell">
                <Badge color={statusBadge[r.status]} variant="outline">{r.status}</Badge>
              </td>
              <td className="py-3 pr-4 pl-3">
                <div className="flex items-center justify-end gap-1">
                  <Button variant="ghost" size="icon" icon={Eye} onClick={() => setExpanded(expanded === r.id ? null : r.id)} aria-label="View details" />
                  {r.status !== 'resolved' && (
                    <>
                      <Button variant="ghost" size="icon" icon={VolumeX} aria-label="Warn user" />
                      <Button variant="ghost" size="icon" icon={ShieldOff} aria-label="Suspend user" />
                      <Button variant="ghost" size="icon" icon={Ban} aria-label="Ban user" />
                    </>
                  )}
                  {r.status === 'resolved' && (
                    <Button variant="ghost" size="icon" icon={CheckCircle} aria-label="Resolved" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
