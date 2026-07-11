import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Mail, Share2, MessageCircle, Send } from 'lucide-react';
import { APP_NAME, FOOTER_LINKS } from '../../constants';

const socials = [
  { icon: Send, href: '#', label: 'Twitter' },
  { icon: Share2, href: '#', label: 'GitHub' },
  { icon: MessageCircle, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* ── Newsletter / CTA strip ── */}
        <div className="py-12">
          <div className="gradient-primary relative overflow-hidden rounded-2xl px-6 py-10 text-white sm:px-10">
            {/* Dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-200">Stay in the loop</p>
                <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">Get the latest from SkillSwap</h3>
                <p className="mt-1 text-sm text-indigo-200">New skill categories, community updates, and learning tips.</p>
              </div>
              <div className="flex w-full max-w-xs shrink-0 items-center gap-2">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-300" aria-hidden="true" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/20 bg-white/10 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-indigo-300 backdrop-blur-sm focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    aria-label="Email for newsletter"
                  />
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition-all hover:bg-indigo-50 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Subscribe
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pb-10 md:grid-cols-5 md:gap-x-10">
          {/* Brand col — spans 2 on md */}
          <div className="col-span-2">
            <Link to="/" className="group flex items-center gap-2.5 w-fit">
              <div className="gradient-primary flex h-8 w-8 items-center justify-center rounded-xl text-sm font-black text-white shadow-md shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-110">
                S
              </div>
              <span className="font-bold text-neutral-900 text-[15px] tracking-tight">
                {APP_NAME}
              </span>
            </Link>

            <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-neutral-500">
              Exchange skills, grow together. Connect with verified students who want to learn what
              you know — completely free.
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>

            <p className="mt-5 flex items-center gap-1.5 text-xs text-neutral-400">
              Made with{' '}
              <Heart className="h-3 w-3 fill-rose-500 text-rose-500" aria-hidden="true" />
              {' '}for learners everywhere
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400">
              Product
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400">
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-100 py-6 sm:flex-row">
          <p className="text-xs text-neutral-400">
            &copy; {currentYear} {APP_NAME}, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-neutral-400 transition-colors hover:text-neutral-600">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-neutral-400 transition-colors hover:text-neutral-600">
              Terms
            </Link>
            <Link to="/contact" className="text-xs text-neutral-400 transition-colors hover:text-neutral-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
