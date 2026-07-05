import {
  X, Mail, GraduationCap, BookOpen, Star,
  AlertTriangle, ShieldOff, Ban, Key, Flag,
  Award, Clock, CheckCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function UserDetailsDrawer({ isOpen, onClose, user }) {
  if (!user) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-neutral-900/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md overflow-y-auto bg-white shadow-soft-xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white px-6 py-4">
              <h2 className="text-base font-semibold text-neutral-900">User Details</h2>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
                aria-label="Close drawer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <Avatar initials={user.avatar} size="xl" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{user.name}</h3>
                  <p className="text-sm text-neutral-500">{user.email}</p>
                </div>
              </div>

              <Card>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Profile</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-neutral-400 shrink-0" />
                    <span className="text-neutral-700">{user.university}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-neutral-400 shrink-0" />
                    <span className="text-neutral-700">{user.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-neutral-400 shrink-0" />
                    <span className="text-neutral-700">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-neutral-400 shrink-0" />
                    <span className="text-neutral-700">Level 14 · 2,750 XP</span>
                  </div>
                </div>
              </Card>

              <Card>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Verification</h4>
                <div className="flex items-center gap-2">
                  {user.verified ? (
                    <Badge color="success" variant="solid">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge color="warning" variant="solid">Pending</Badge>
                  )}
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  {user.verified
                    ? 'Student ID verified on Jun 15, 2025.'
                    : 'Verification pending — student ID submitted 2 days ago.'}
                </p>
              </Card>

              <Card>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  <Badge color="primary" variant="outline">React</Badge>
                  <Badge color="primary" variant="outline">JavaScript</Badge>
                  <Badge color="primary" variant="outline">TypeScript</Badge>
                  <Badge color="secondary" variant="outline">Python</Badge>
                  <Badge color="secondary" variant="outline">Node.js</Badge>
                </div>
              </Card>

              <Card>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Reports</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Flag className="h-3.5 w-3.5 text-amber-500" />
                      <span className="text-sm text-neutral-700">Reported by David Wilson</span>
                    </div>
                    <Badge color="warning" variant="outline">Open</Badge>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-neutral-400" />
                      <span className="text-sm text-neutral-700">Previously warned</span>
                    </div>
                    <span className="text-xs text-neutral-400">Jul 1, 2025</span>
                  </div>
                </div>
              </Card>

              <Card>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Activity</h4>
                <div className="space-y-2 text-sm text-neutral-600">
                  <div className="flex justify-between">
                    <span>Sessions completed</span>
                    <span className="font-medium text-neutral-900">32</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Matches</span>
                    <span className="font-medium text-neutral-900">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reviews received</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-medium text-neutral-900">4.8</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>Member since</span>
                    <span className="font-medium text-neutral-900">Mar 2025</span>
                  </div>
                </div>
              </Card>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">Admin Actions</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" icon={AlertTriangle}>Warn</Button>
                  <Button variant="outline" size="sm" icon={ShieldOff}>Suspend</Button>
                  <Button variant="danger" size="sm" icon={Ban}>Ban</Button>
                  <Button variant="ghost" size="sm" icon={Key}>Reset Password</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
