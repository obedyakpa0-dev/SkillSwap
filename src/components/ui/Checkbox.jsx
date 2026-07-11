import { forwardRef, useId } from 'react';

const Checkbox = forwardRef(
  ({ label, error, helper, id, className = '', ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;
    const describedBy = error
      ? `${checkboxId}-error`
      : helper
        ? `${checkboxId}-helper`
        : undefined;

    return (
      <div className={className}>
        <label htmlFor={checkboxId} className="flex items-start gap-3 cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={describedBy}
            className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 accent-primary-600 transition-colors"
            {...props}
          />
          <div className="flex-1">
            {label && (
              <span className="text-sm font-medium text-neutral-700">{label}</span>
            )}
            {error && (
              <p
                id={`${checkboxId}-error`}
                className="mt-0.5 text-xs text-danger-600"
                role="alert"
              >
                {error}
              </p>
            )}
            {helper && !error && (
              <p
                id={`${checkboxId}-helper`}
                className="mt-0.5 text-xs text-neutral-400"
              >
                {helper}
              </p>
            )}
          </div>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
