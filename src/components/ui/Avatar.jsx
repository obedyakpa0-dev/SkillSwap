import { useState } from 'react';
import { User } from 'lucide-react';

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
  xl: 'h-20 w-20 text-xl',
};

export default function Avatar({
  src,
  alt,
  initials,
  size = 'md',
  className = '',
  ...props
}) {
  const [imgFailed, setImgFailed] = useState(false);

  if (src && !imgFailed) {
    return (
      <img
        src={src}
        alt={alt || 'User avatar'}
        onError={() => setImgFailed(true)}
        className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
        {...props}
      />
    );
  }

  // Falls back here either when no src was given, or when the image
  // failed to load (broken URL, 404, offline) — same fallback either way
  // so a bad avatar URL never renders a broken-image icon.
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-600 font-semibold text-white ${sizeClasses[size]} ${className}`}
      aria-label={alt || initials || 'User avatar'}
      role="img"
      {...props}
    >
      {initials ? (
        initials.slice(0, 2).toUpperCase()
      ) : (
        <User className="h-1/2 w-1/2" aria-hidden="true" />
      )}
    </div>
  );
}
