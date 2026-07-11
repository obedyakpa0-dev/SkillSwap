import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'What is SkillSwap?',
    a: 'SkillSwap is a peer-to-peer learning platform that connects verified students so they can teach and learn from each other. It is a safe, trusted space where you can exchange skills, build knowledge, and grow your network — all without spending money.',
  },
  {
    q: 'Is SkillSwap completely free?',
    a: 'Yes, SkillSwap is completely free for verified students. Our mission is to make peer learning accessible to everyone. There are no subscription fees, no hidden charges, and no premium tiers — just genuine knowledge exchange.',
  },
  {
    q: 'How are students verified?',
    a: 'We use a multi-step verification process that includes institutional email verification and optional profile review. This ensures that every member of our community is a genuine student committed to meaningful learning exchanges.',
  },
  {
    q: 'Can I meet people offline?',
    a: 'SkillSwap is designed for safe online-first interactions. While we facilitate the initial connection, we recommend keeping sessions virtual until you feel comfortable. Contact sharing is entirely optional and always controlled by you.',
  },
  {
    q: 'How does matching work?',
    a: 'Matching is based on the skills you want to learn and the skills you can teach. You can browse skill categories, explore peer profiles, and connect with students whose goals align with yours. Our system surfaces the most relevant matches based on your profile.',
  },
  {
    q: 'How are reviews handled?',
    a: 'After each session, both parties can leave a review. Reviews are visible on profiles to help the community identify trusted peers. We actively monitor reviews to ensure they remain fair, constructive, and respectful.',
  },
  {
    q: 'What happens if a session goes wrong?',
    a: 'We have a built-in reporting system. If you ever feel uncomfortable or experience inappropriate behavior, you can report a user directly from their profile or session page. Our moderation team reviews all reports promptly.',
  },
  {
    q: 'Can I teach more than one skill?',
    a: 'Absolutely. You can list as many skills as you like on your profile — there is no limit. The more skills you offer, the more potential matches you will have. You can also update your skill list at any time.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-x-hidden"
    >
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50 via-white to-accent-50/30" />

        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-white/80 px-4 py-2 text-xs font-medium text-primary-700 shadow-sm backdrop-blur-sm">
              <HelpCircle className="h-4 w-4" />
              Help Center
            </span>
            <h1 className="mt-7 text-[2.5rem] font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.5rem]">
              Frequently Asked{' '}
              <span className="text-gradient">Questions</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Everything you need to know about SkillSwap. Can&apos;t find what you&apos;re looking
              for? Our team is always happy to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  openIndex === i
                    ? 'border-primary-200 bg-white shadow-lg shadow-primary-500/10'
                    : 'border-neutral-200/60 bg-white shadow-card hover:border-neutral-300 hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-neutral-50/50 sm:px-7"
                >
                  <span
                    className={`pr-4 text-sm font-semibold transition-colors sm:text-base ${
                      openIndex === i ? 'text-primary-700' : 'text-neutral-900'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                      openIndex === i ? 'bg-primary-100' : 'bg-neutral-100'
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openIndex === i ? 'rotate-180 text-primary-600' : 'text-neutral-500'
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-primary-100/60 px-6 py-5 text-sm leading-relaxed text-neutral-600 sm:px-7 sm:text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 rounded-2xl border border-neutral-200/60 bg-white p-8 text-center shadow-card sm:p-10"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-neutral-900">Still have questions?</h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-neutral-600 sm:text-base">
              Our team is here to help. Reach out and we'll get back to you as quickly as we can.
            </p>
            <div className="mt-7">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-all hover:from-primary-700 hover:to-primary-800 hover:shadow-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
