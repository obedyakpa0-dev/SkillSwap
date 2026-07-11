import { motion } from 'framer-motion';

const variantStyles = {
  default:
    'rounded-2xl border border-neutral-200 bg-white shadow-card',
  interactive:
    'rounded-2xl border border-neutral-200 bg-white shadow-card cursor-pointer transition-colors hover:border-neutral-300',
  info:
    'rounded-2xl border border-primary-100 bg-primary-50/60',
  success:
    'rounded-2xl border border-success-100 bg-success-50/60',
  warning:
    'rounded-2xl border border-warning-100 bg-warning-50/60',
  danger:
    'rounded-2xl border border-danger-100 bg-danger-50/60',
  stat:
    'rounded-2xl border border-neutral-200 bg-white shadow-card text-center',
  glass:
    'glass rounded-2xl',
  gradient:
    'rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-lg',
};

export default function Card({
  children,
  className = '',
  variant = 'default',
  hover = false,
  ...props
}) {
  const Component = hover ? motion.div : 'div';
  const motionProps = hover
    ? {
        whileHover: {
          y: -3,
          boxShadow:
            'var(--shadow-card-hover, 0 20px 60px -12px rgba(0,0,0,0.15), 0 8px 16px -8px rgba(0,0,0,0.10))',
        },
        transition: { duration: 0.2, ease: 'easeOut' },
      }
    : {};

  return (
    <Component
      className={`${variantStyles[variant] ?? variantStyles.default} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
