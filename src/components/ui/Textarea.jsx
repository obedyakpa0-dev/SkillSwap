import { forwardRef, useId, useState } from 'react';
import FormField from './FormField';

const Textarea = forwardRef(
  (
    {
      label,
      error,
      helper,
      description,
      required,
      disabled,
      id,
      maxLength,
      onChange,
      defaultValue,
      value,
      className = '',
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const [count, setCount] = useState((value ?? defaultValue ?? '').length);

    const handleChange = (e) => {
      if (maxLength) setCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <FormField
        label={label}
        error={error}
        helper={helper}
        description={description}
        required={required}
        id={textareaId}
        className={className}
      >
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helper
                ? `${textareaId}-helper`
                : undefined
          }
          className={`
            w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-neutral-900
            placeholder:text-neutral-400 transition-all duration-150
            focus:outline-none focus:ring-2 resize-y
            ${
              disabled
                ? 'cursor-not-allowed bg-neutral-50 opacity-50 border-neutral-200'
                : error
                  ? 'border-danger-400 focus:border-danger-400 focus:ring-danger-500/15'
                  : 'border-neutral-200 hover:border-neutral-300 focus:border-primary-400 focus:ring-primary-500/15'
            }
          `}
          rows={4}
          {...props}
        />
        {maxLength && (
          <p
            className="mt-1 text-right text-[11px] text-neutral-400"
            aria-live="polite"
          >
            {count}/{maxLength}
          </p>
        )}
      </FormField>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
