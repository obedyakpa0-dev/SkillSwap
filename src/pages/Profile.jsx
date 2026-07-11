import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin, GraduationCap, BookOpen, Clock, Shield,
  Star, MessageSquare, Award, Edit3, CheckCircle,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import Button from '../components/ui/Button';

const skillsOffered = ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Git'];
const skillsWanted = ['Python', 'UI/UX Design', 'Node.js', 'GraphQL'];

const reviews = [
  { id: 1, name: 'Sarah Kim', rating: 5, text: 'Alex is an amazing React tutor! Very patient and explains concepts clearly.', avatar: 'SK', date: '3 days ago' },
  { id: 2, name: 'David Wilson', rating: 5, text: 'Great session on TypeScript. Helped me understand generics.', avatar: 'DW', date: '1 week ago' },
  { id: 3, name: 'Maria Lopez', rating: 4, text: 'Good teaching style. Would recommend for JavaScript basics.', avatar: 'ML', date: '2 weeks ago' },
];

const gamificationBadges = [
  { name: 'Quick Learner', icon: '⚡', earned: true },
  { name: 'Top Rated', icon: '⭐', earned: true },
  { name: 'Session Master', icon: '🏆', earned: true },
  { name: 'Streak Champion', icon: '🔥', earned: false },
  { name: 'Community Star', icon: '🌟', earned: false },
];

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-8 sm:pb-10 lg:pb-12"
    >
      {/* Cover Area */}
      <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-violet-600 overflow-visible">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

        {/* Avatar — absolute bottom-0 left-8 translate-y-1/2 */}
        <div className="absolute bottom-0 left-8 translate-y-1/2 z-10">
          <div className="relative">
            <div className="h-24 w-24 rounded-2xl ring-4 ring-white shadow-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">AC</span>
            </div>
            <div className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 border-3 border-white shadow-md">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* Edit button in cover top-right */}
        <div className="absolute top-4 right-6">
          <Link to="/profile/edit">
            <Button icon={Edit3} variant="outline" size="sm" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>

      {/* Profile Card — mt-16 for avatar overflow space */}
      <div className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-card mt-16 p-6">
          {/* Name + role badge */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">Alex Chen</h1>
              <Badge color="success" variant="solid" className="px-3 py-1">
                <CheckCircle className="mr-1 h-3.5 w-3.5" />
                Verified
              </Badge>
              <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold">
                Computer Science Student
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
              <MapPin className="h-4 w-4" />
              <span>California, USA</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                <Star className="h-5 w-5 text-amber-600 fill-amber-500" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">4.8</p>
                <p className="text-xs text-slate-500">Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">32</p>
                <p className="text-xs text-slate-500">Sessions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                <Award className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">2,750</p>
                <p className="text-xs text-slate-500">Points</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                <GraduationCap className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">24</p>
                <p className="text-xs text-slate-500">Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">About</h2>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                Passionate computer science student with a love for teaching and learning. I believe in the power of peer-to-peer education and enjoy helping others grasp complex programming concepts through practical examples and hands-on exercises.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                    <GraduationCap className="h-4.5 w-4.5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Stanford University</p>
                    <p className="text-xs text-slate-500">University</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                    <BookOpen className="h-4.5 w-4.5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Computer Science</p>
                    <p className="text-xs text-slate-500">Major</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                    <MapPin className="h-4.5 w-4.5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">California, USA</p>
                    <p className="text-xs text-slate-500">Location</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                    <GraduationCap className="h-4.5 w-4.5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Senior Year</p>
                    <p className="text-xs text-slate-500">Academic Level</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills I Teach */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Skills I Teach</h2>
              <div className="flex flex-wrap gap-2.5">
                {skillsOffered.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-1.5 text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills I Want */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Skills I Want</h2>
              <div className="flex flex-wrap gap-2.5">
                {skillsWanted.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-violet-50 border border-violet-200 text-violet-700 px-4 py-1.5 text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Availability</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <div key={day} className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{day}</p>
                      <p className="text-xs text-slate-600">2:00 – 6:00 PM</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">Reviews</h2>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-base font-bold text-slate-900">4.8</span>
                  <span className="text-sm text-slate-500">(24 reviews)</span>
                </div>
              </div>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                    <div className="flex items-start gap-4">
                      <Avatar initials={review.avatar} size="md" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <p className="text-sm font-bold text-slate-900">{review.name}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3.5 w-3.5 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Achievements</h2>
              <div className="space-y-2.5">
                {gamificationBadges.map((badge) => (
                  <div
                    key={badge.name}
                    className={`flex items-center gap-3.5 rounded-xl p-3.5 transition-all ${
                      badge.earned
                        ? 'bg-gradient-to-r from-indigo-50 to-transparent border border-indigo-100'
                        : 'bg-slate-50 opacity-50 border border-slate-100'
                    }`}
                  >
                    <span className="text-xl">{badge.icon}</span>
                    <p className="flex-1 text-sm font-bold text-slate-900">{badge.name}</p>
                    {badge.earned ? (
                      <CheckCircle className="h-4.5 w-4.5 text-emerald-500" />
                    ) : (
                      <Shield className="h-4.5 w-4.5 text-slate-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
              <div className="space-y-2.5">
                <Button variant="outline" className="w-full justify-start" icon={MessageSquare}>
                  Send Message
                </Button>
                <Button variant="outline" className="w-full justify-start" icon={Star}>
                  Leave a Review
                </Button>
                <Button variant="outline" className="w-full justify-start" icon={Award}>
                  View Certificates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
