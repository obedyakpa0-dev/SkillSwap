import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserPlus, Share2, Users, Calendar, BookOpen, Star, Award, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Profile',
    desc: 'Sign up and build your profile. List the skills you can teach and the skills you want to learn. Add your experience level, availability, and preferred learning style.',
    color: 'from-primary-500 to-primary-600',
    bg: 'bg-primary-50',
    textColor: 'text-primary-700',
  },
  {
    icon: Share2,
    title: 'Showcase Your Skills',
    desc: 'Describe what you can teach with rich detail — your experience level, what learners can expect, and your unique teaching approach that makes you stand out.',
    color: 'from-accent-500 to-accent-600',
    bg: 'bg-accent-50',
    textColor: 'text-accent-700',
  },
  {
    icon: Users,
    title: 'Find Your Match',
    desc: 'Browse skill categories and explore peer profiles. Our smart matching connects you with students whose learning goals perfectly complement what you can offer.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    textColor: 'text-emerald-700',
  },
  {
    icon: Calendar,
    title: 'Book a Session',
    desc: 'Schedule a time that works for both of you. Choose virtual or in-person sessions, set a duration, and confirm your booking with just a few clicks.',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    textColor: 'text-amber-700',
  },
  {
    icon: BookOpen,
    title: 'Exchange Knowledge',
    desc: 'Teach your skill, learn theirs. Each session is a collaborative exchange of knowledge. Come prepared with materials and an open mind to maximize both directions.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    textColor: 'text-blue-700',
  },
  {
    icon: Star,
    title: 'Leave a Review',
    desc: 'Share honest, constructive feedback after each session. Help others find great peers and build the kind of trust that makes this community thrive.',
    color: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
    textColor: 'text-orange-700',
  },
  {
    icon: Award,
    title: 'Build Your Reputation',
    desc: 'Every successful session earns you points, badges, and credibility. Rise through the leaderboard and become a recognized expert in your skill community.',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
    textColor: 'text-rose-700',
  },
];

export default function HowItWorks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-x-hidden"
    >

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50/30" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary-200/30 to-accent-200/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-700 shadow-sm backdrop-blur-sm">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              How It Works
            </span>

            {/* display headline */}
            <h1 className="mt-7 text-[2.5rem] font-black leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.5rem]">
              Your Journey Starts{' '}
              <span className="text-gradient">Here</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              From creating your profile to earning reputation, here is exactly how SkillSwap
              works — step by step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="relative">
            {/* left vertical gradient line */}
            <div className="absolute left-10 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-transparent sm:block" />

            <div className="space-y-10 sm:space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative flex flex-col gap-5 sm:flex-row sm:gap-7"
                >
                  {/* large gradient numbered icon */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-xl`}
                    >
                      <step.icon className="h-9 w-9 text-white" aria-hidden="true" />
                    </div>
                    {/* step number badge */}
                    <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black text-neutral-800 shadow-md ring-2 ring-neutral-100">
                      {i + 1}
                    </div>
                  </div>

                  {/* content card */}
                  <div className="flex-1 rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">{step.title}</h3>
                      {/* step badge pill */}
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${step.bg} ${step.textColor}`}
                      >
                        Step {i + 1} of {steps.length}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-primary relative overflow-hidden rounded-3xl px-8 py-14 text-center shadow-2xl sm:px-12 sm:py-16"
          >
            {/* dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Ready to Begin?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-100 sm:text-base">
                Join thousands of students already exchanging skills and growing together.
              </p>
              <div className="mt-8">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-primary-700 shadow-xl transition-all hover:bg-primary-50 hover:shadow-2xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700"
                >
                  Get Started — It&apos;s Free
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
