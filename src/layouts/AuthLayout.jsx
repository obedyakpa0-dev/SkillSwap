import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Users, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants';

const features = [
  {
    icon: Shield,
    title: 'Verified & Safe',
    description: 'Every member is verified to ensure a trusted learning environment',
  },
  {
    icon: Users,
    title: '10,000+ Students',
    description: 'Join a thriving community of learners and teachers',
  },
  {
    icon: TrendingUp,
    title: 'Grow Together',
    description: 'Build skills while helping others achieve their goals',
  },
];

const stats = [
  { value: '10K+', label: 'Students' },
  { value: '500+', label: 'Skills' },
  { value: '150+', label: 'Universities' },
];

const testimonial = {
  quote: "SkillSwap helped me master Python while teaching someone Git. The peer learning model is incredibly effective.",
  author: "Sarah M.",
  role: "CS Student, Stanford",
};

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen overflow-hidden">

      {/* ── Left: form panel ── */}
      <div className="flex flex-1 flex-col bg-white">
        {/* Logo bar */}
        <div className="flex items-center px-6 py-5 sm:px-8 sm:py-6">
          <Link to="/" className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl">
            <div className="gradient-primary flex h-8 w-8 items-center justify-center rounded-xl text-sm font-black text-white shadow-md shadow-indigo-500/25 transition-all group-hover:scale-110">
              S
            </div>
            <span className="font-bold text-neutral-900 text-[15px] tracking-tight">{APP_NAME}</span>
          </Link>
        </div>

        {/* Form area — vertically centred */}
        <div className="flex flex-1 items-center justify-center px-6 py-8 sm:px-8">
          <div className="w-full max-w-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <Outlet />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Right: visual panel (lg+) ── */}
      <div
        className="relative hidden flex-1 overflow-hidden lg:flex lg:flex-col lg:justify-center"
        style={{ background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 55%, #2d1d69 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary-600/10 blur-3xl" />
        </div>

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        {/* Content */}
        <div className="relative z-10 px-10 py-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-xs font-semibold text-indigo-200 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Join 10,000+ students already learning
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl">
              Exchange Skills,<br />
              <span className="text-gradient">Unlock Potential</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 max-w-md">
              Connect with verified students worldwide. Learn what you love while teaching what you
              know — in a safe, trusted environment.
            </p>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 space-y-3"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.45 + idx * 0.1 }}
                className="flex items-start gap-3.5 rounded-xl border border-white/8 bg-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <feature.icon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{feature.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.8 }}
            className="mt-8 grid grid-cols-3 gap-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/8 bg-white/5 px-3 py-3 text-center backdrop-blur-sm"
              >
                <p className="text-xl font-black text-white">{stat.value}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Testimonial quote */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.0 }}
            className="mt-8 rounded-xl border border-white/8 bg-white/5 p-4 backdrop-blur-sm"
          >
            <div className="flex gap-0.5 mb-2.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-slate-300 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-xs font-bold text-white">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{testimonial.author}</p>
                <p className="text-[10px] text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
