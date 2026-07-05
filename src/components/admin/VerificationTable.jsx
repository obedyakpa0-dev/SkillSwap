import { useState } from 'react';
import { CheckCircle, XCircle, Eye } from 'lucide-react';
import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import Dialog from '../ui/Dialog';

const pendingVerifications = [
  { id: 1, name: 'Emily Watson', email: 'emily@uni.edu', university: 'UCLA', avatar: 'EW', submittedAt: '2 hours ago', idPreview: 'ID_EMILY_001' },
  { id: 2, name: 'Marcus Rivera', email: 'marcus@uni.edu', university: 'NYU', avatar: 'MR', submittedAt: '5 hours ago', idPreview: 'ID_MARCUS_002' },
  { id: 3, name: 'Yuki Tanaka', email: 'yuki@uni.edu', university: 'University of Tokyo', avatar: 'YT', submittedAt: '1 day ago', idPreview: 'ID_YUKI_003' },
  { id: 4, name: 'Anna Schmidt', email: 'anna@uni.edu', university: 'TU Berlin', avatar: 'AS', submittedAt: '1 day ago', idPreview: 'ID_ANNA_004' },
  { id: 5, name: 'Tom Baker', email: 'tom@uni.edu', university: 'University of Michigan', avatar: 'TB', submittedAt: '2 days ago', idPreview: 'ID_TOM_005' },
];

export default function VerificationTable() {
  const [selectedId, setSelectedId] = useState(null);
  const [approving, setApproving] = useState({});
  const [rejecting, setRejecting] = useState({});

  const handleApprove = (id) => {
    setApproving((p) => ({ ...p, [id]: true }));
    setTimeout(() => setApproving((p) => ({ ...p, [id]: false })), 800);
  };

  const handleReject = (id) => {
    setRejecting((p) => ({ ...p, [id]: true }));
    setTimeout(() => setRejecting((p) => ({ ...p, [id]: false })), 800);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-100 text-left">
              <th className="pb-3 pl-4 pr-3 font-medium text-neutral-500">User</th>
              <th className="hidden pb-3 px-3 font-medium text-neutral-500 sm:table-cell">University</th>
              <th className="hidden pb-3 px-3 font-medium text-neutral-500 md:table-cell">Submitted</th>
              <th className="hidden pb-3 px-3 font-medium text-neutral-500 lg:table-cell">Student ID</th>
              <th className="pb-3 pr-4 pl-3 font-medium text-neutral-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {pendingVerifications.map((v) => (
              <tr key={v.id} className="transition-colors hover:bg-neutral-50/50">
                <td className="py-3 pl-4 pr-3">
                  <div className="flex items-center gap-3">
                    <Avatar initials={v.avatar} size="sm" />
                    <div>
                      <p className="font-medium text-neutral-900">{v.name}</p>
                      <p className="text-xs text-neutral-500">{v.email}</p>
                    </div>
                  </div>
                </td>
                <td className="hidden py-3 px-3 text-neutral-600 sm:table-cell">{v.university}</td>
                <td className="hidden py-3 px-3 text-neutral-500 md:table-cell">{v.submittedAt}</td>
                <td className="hidden py-3 px-3 lg:table-cell">
                  <button
                    onClick={() => setSelectedId(v.idPreview)}
                    className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-primary-600 transition-colors hover:bg-primary-50"
                  >
                    <Eye className="h-3 w-3" />
                    View
                  </button>
                </td>
                <td className="py-3 pr-4 pl-3">
                  <div className="flex items-center justify-end gap-1.5">
                    <Button
                      size="sm"
                      variant="outline"
                      icon={XCircle}
                      onClick={() => handleReject(v.id)}
                      loading={rejecting[v.id]}
                    >
                      <span className="hidden sm:inline">Reject</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="success"
                      icon={CheckCircle}
                      onClick={() => handleApprove(v.id)}
                      loading={approving[v.id]}
                    >
                      <span className="hidden sm:inline">Approve</span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog isOpen={!!selectedId} onClose={() => setSelectedId(null)} title="Student ID Preview" size="lg">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50">
            <p className="text-sm text-neutral-400">Student ID: {selectedId}</p>
          </div>
          <p className="text-xs text-neutral-500 text-center">
            This is a placeholder for the student ID image. In production, this would display the uploaded student ID photo for verification.
          </p>
        </div>
      </Dialog>
    </>
  );
}
