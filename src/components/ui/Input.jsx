import { forwardRef, useId } from 'react';
import FormField from './FormField';

const Input = forwardRef(
  (
    {
      label,
      error,
      helper,
      description,
      required,
      disabled,
      id,
      icon: Icon,
      className = '',
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <FormField
        label={label}
        error={error}
        helper={helper}
        description={description}
        required={required}
        id={inputId}
        className={className}
      >
        <div className={`relative ${Icon ? 'group' : ''}`}>
          {Icon && (
            <Icon
              className={`pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-150 ${
                error
                  ? 'text-danger-400'
                  : 'text-neutral-400 group-focus-within:text-primary-500'
              }`}
              aria-hidden="true"
            />
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helper
                  ? `${inputId}-helper`
                  : undefined
            }
            className={`
              w-full rounded-xl border bg-white py-2.5 text-sm text-neutral-900
              placeholder:text-neutral-400 transition-all duration-150
              focus:outline-none focus:ring-2
              ${Icon ? 'pl-10 pr-4' : 'px-4'}
              ${
                disabled
                  ? 'cursor-not-allowed bg-neutral-50 opacity-50 border-neutral-200'
                  : error
                    ? 'border-danger-400 focus:border-danger-400 focus:ring-2 focus:ring-danger-500/15'
                    : 'border-neutral-200 hover:border-neutral-300 focus:border-primary-400 focus:ring-primary-500/15'
              }
            `}
            {...props}
          />
        </div>
      </FormField>
    );
  }
);

Input.displayName = 'Input';
export default Input;
