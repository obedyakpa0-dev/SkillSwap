import { forwardRef } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = forwardRef(
  (
    {
      placeholder = 'Search...',
      value,
      onChange,
      className = '',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const handleClear = () => onChange?.({ target: { value: '' } });

    return (
      <div className={`relative ${className}`}>
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
          aria-hidden="true"
        />
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          // A placeholder alone isn't an accessible name, so fall back to it
          // only when the caller hasn't supplied a real aria-label.
          aria-label={ariaLabel || placeholder}
          className="w-full rounded-xl border border-neutral-200 bg-white py-2.5 pl-10 pr-9 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-50"
          {...props}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        )}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
export default SearchBar;
