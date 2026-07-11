import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

// Previously this rendered a fixed, non-interactive knob with
// aria-label="Theme toggle (prepared, not implemented)" — not focusable,
// not clickable, and honest with screen readers that it did nothing.
// This is a real switch now. Pass `checked`/`onChange` to control it from
// a parent (e.g. persisting to localStorage or a theme context); otherwise
// it manages its own state.
export default function ThemeToggle({ checked, onChange, className = '' }) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = checked !== undefined;
  const isDark = isControlled ? checked : internalChecked;

  const toggle = () => {
    const next = !isDark;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      className={`relative flex h-9 w-16 shrink-0 items-center rounded-full border border-neutral-200 px-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
        isDark ? 'bg-neutral-900' : 'bg-neutral-100'
      } ${className}`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-neutral-700" aria-hidden="true" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
        )}
      </span>
    </button>
  );
}
