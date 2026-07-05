import { motion } from 'framer-motion';

const variantStyles = {
  default:  'rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-soft transition-all duration-200',
  interactive:
    'rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-soft transition-all duration-200 hover:border-neutral-300 hover:shadow-soft-lg',
  info:     'rounded-2xl border border-primary-100 bg-primary-50/50 p-6 transition-all duration-200',
  stat:     'rounded-2xl border border-neutral-200 bg-white px-6 py-5 text-center transition-all duration-200',
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
        whileHover: { y: -2, transition: { duration: 0.2, ease: 'easeOut' } },
      }
    : {};

  return (
    <Component className={`${variantStyles[variant]} ${className}`} {...motionProps} {...props}>
      {children}
    </Component>
  );
}
