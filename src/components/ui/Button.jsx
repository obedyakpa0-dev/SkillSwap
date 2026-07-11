import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const variants = {
  primary:
    'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 focus-visible:ring-primary-500',

  secondary:
    'bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 text-white shadow-lg shadow-neutral-900/20 hover:from-neutral-600 hover:via-neutral-700 hover:to-neutral-800 hover:shadow-xl focus-visible:ring-neutral-500',

  accent:
    'bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 text-white shadow-lg shadow-accent-500/25 hover:from-accent-600 hover:via-accent-700 hover:to-accent-800 hover:shadow-xl hover:shadow-accent-500/30 focus-visible:ring-accent-500',

  outline:
    'border border-neutral-200 bg-white text-neutral-700 shadow-sm hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-900 focus-visible:ring-primary-500',

  ghost:
    'bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-primary-500',

  danger:
    'bg-gradient-to-br from-danger-500 via-danger-600 to-danger-700 text-white shadow-lg shadow-danger-500/25 hover:from-danger-600 hover:via-danger-700 hover:to-danger-800 hover:shadow-xl hover:shadow-danger-500/30 focus-visible:ring-danger-500',

  success:
    'bg-gradient-to-br from-success-500 via-success-600 to-success-700 text-white shadow-lg shadow-success-500/25 hover:from-success-600 hover:via-success-700 hover:to-success-800 hover:shadow-xl hover:shadow-success-500/30 focus-visible:ring-success-500',

  soft:
    'bg-primary-50 text-primary-700 shadow-sm hover:bg-primary-100 focus-visible:ring-primary-500',

  'soft-success':
    'bg-success-50 text-success-700 shadow-sm hover:bg-success-100 focus-visible:ring-success-500',

  'soft-warning':
    'bg-warning-50 text-warning-700 shadow-sm hover:bg-warning-100 focus-visible:ring-warning-500',

  'soft-danger':
    'bg-danger-50 text-danger-700 shadow-sm hover:bg-danger-100 focus-visible:ring-danger-500',

  glass:
    'border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-xl hover:bg-white/20 hover:shadow-xl focus-visible:ring-white/50',

  shimmer:
    'relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 focus-visible:ring-primary-500',
};

const sizes = {
  xs: 'px-2.5 py-1.5 text-xs rounded-lg gap-1.5',
  sm: 'px-3.5 py-2 text-xs rounded-lg gap-2',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3 text-base rounded-xl gap-2.5',
  xl: 'px-9 py-4 text-lg rounded-2xl gap-3',
  icon: 'p-2.5 rounded-xl',
  'icon-sm': 'p-2 rounded-lg',
  'icon-lg': 'p-3.5 rounded-xl',
};

const MotionButton = motion.create('button');

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      type = 'button',
      className = '',
      disabled = false,
      loading = false,
      icon: Icon,
      iconRight: IconRight,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    if (process.env.NODE_ENV !== 'production' && !children && !props['aria-label']) {
      console.warn('Button: icon-only buttons need an aria-label prop.');
    }

    return (
      <MotionButton
        ref={ref}
        type={type}
        whileHover={isDisabled ? undefined : { y: -2, scale: 1.01 }}
        whileTap={{ scale: isDisabled ? 1 : 0.97 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={`
          group relative inline-flex items-center justify-center
          font-semibold tracking-wide
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none
          ${variants[variant] ?? variants.primary}
          ${sizes[size] ?? sizes.md}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        {...props}
      >
        {/* Shimmer sweep — shimmer variant and primary hover */}
        {(variant === 'shimmer' || variant === 'primary') && !isDisabled && (
          <div className="absolute inset-0 -translate-x-full rounded-[inherit] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-[inherit]">
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : Icon ? (
            <Icon
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            />
          ) : null}

          {children && <span className="truncate">{children}</span>}

          {IconRight && !loading && (
            <IconRight
              className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          )}
        </span>

        {/* Glow div behind primary button on hover */}
        {variant === 'primary' && !isDisabled && (
          <div className="absolute -inset-1 -z-10 rounded-[inherit] bg-gradient-to-br from-primary-500/0 to-accent-500/0 opacity-0 blur-lg transition-opacity duration-300 group-hover:from-primary-500/40 group-hover:to-accent-500/40 group-hover:opacity-100" />
        )}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';
export default Button;

// Button Group Component for combining buttons
export function ButtonGroup({ children, className = '', vertical = false }) {
  return (
    <div
      className={`inline-flex ${vertical ? 'flex-col' : 'flex-row'} ${className}`}
    >
      {children}
    </div>
  );
}

// Icon Button Component (simpler API for icon-only buttons)
export const IconButton = forwardRef(({ icon: Icon, size = 'icon', ...props }, ref) => {
  return (
    <Button ref={ref} size={size} {...props}>
      {/* Children rendered inside button, but icon provided via prop */}
    </Button>
  );
});

IconButton.displayName = 'IconButton';
