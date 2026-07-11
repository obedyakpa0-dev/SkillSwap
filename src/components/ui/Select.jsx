import { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import FormField from './FormField';

const Select = forwardRef(
  (
    {
      label,
      error,
      helper,
      description,
      required,
      disabled,
      id,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;

    return (
      <FormField
        label={label}
        error={error}
        helper={helper}
        description={description}
        required={required}
        id={selectId}
        className={className}
      >
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={
              error
                ? `${selectId}-error`
                : helper
                  ? `${selectId}-helper`
                  : undefined
            }
            className={`
              w-full appearance-none rounded-xl border bg-white px-4 py-2.5 pr-10
              text-sm text-neutral-900 transition-all duration-150
              focus:outline-none focus:ring-2
              ${
                disabled
                  ? 'cursor-not-allowed bg-neutral-50 opacity-50 border-neutral-200'
                  : error
                    ? 'border-danger-400 focus:border-danger-400 focus:ring-danger-500/15'
                    : 'border-neutral-200 hover:border-neutral-300 focus:border-primary-400 focus:ring-primary-500/15'
              }
            `}
            {...props}
          >
            {children}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
            aria-hidden="true"
          />
        </div>
      </FormField>
    );
  }
);

Select.displayName = 'Select';
export default Select;
