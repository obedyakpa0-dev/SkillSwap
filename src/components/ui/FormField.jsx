import { useId } from 'react';
import { AlertCircle } from 'lucide-react';

export default function FormField({
  label,
  error,
  helper,
  description,
  required,
  id,
  className = '',
  children,
}) {
  // Falls back to React's useId() rather than slugifying the label text —
  // two fields with the same label (e.g. repeated "Notes" fields in a
  // list) would otherwise generate the same id and the same
  // aria-describedby target.
  const generatedId = useId();
  const fieldId = id || generatedId;

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={fieldId}
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-danger-500" aria-hidden="true">
              *
            </span>
          )}
          {required && <span className="sr-only">(required)</span>}
        </label>
      )}
      {description && (
        <p className="mb-2 text-xs text-neutral-400">{description}</p>
      )}
      {children}
      {error && (
        <p
          id={`${fieldId}-error`}
          className="mt-1.5 flex items-center gap-1 text-xs text-danger-600"
          role="alert"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
      {helper && !error && (
        <p id={`${fieldId}-helper`} className="mt-1.5 text-xs text-neutral-400">
          {helper}
        </p>
      )}
    </div>
  );
}
