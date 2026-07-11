import {
  useState,
  useEffect,
  useCallback,
  useRef,
  createContext,
  useContext,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

const ToastContext = createContext(null);

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const colorMap = {
  success: 'border-success-200 bg-success-50 text-success-800',
  error: 'border-danger-200 bg-danger-50 text-danger-800',
  warning: 'border-warning-200 bg-warning-50 text-warning-800',
  info: 'border-primary-200 bg-primary-50 text-primary-800',
};

const iconColorMap = {
  success: 'bg-success-100 text-success-600',
  error: 'bg-danger-100 text-danger-600',
  warning: 'bg-warning-100 text-warning-600',
  info: 'bg-primary-100 text-primary-600',
};

let toastId = 0;

function ToastItem({ toast: t, onDismiss, duration }) {
  const remaining = useRef(duration);
  const startedAt = useRef(Date.now());
  const timerRef = useRef(null);

  useEffect(() => {
    if (remaining.current <= 0) return;
    startedAt.current = Date.now();
    timerRef.current = setTimeout(() => onDismiss(t.id), remaining.current);
    return () => clearTimeout(timerRef.current);
  }, [t.id, onDismiss]);

  // Pausing the countdown on hover means a toast never disappears mid-read
  // — a common source of frustration when a notification vanishes just as
  // someone reaches to read it.
  const handleMouseEnter = () => {
    if (remaining.current <= 0) return;
    clearTimeout(timerRef.current);
    remaining.current -= Date.now() - startedAt.current;
  };

  const handleMouseLeave = () => {
    if (remaining.current <= 0) return;
    startedAt.current = Date.now();
    timerRef.current = setTimeout(() => onDismiss(t.id), remaining.current);
  };

  const Icon = icons[t.variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role={t.variant === 'error' ? 'alert' : 'status'}
      className={`flex items-start gap-3 rounded-2xl border px-4 py-3.5 shadow-lg shadow-xl min-w-[320px] max-w-sm ${colorMap[t.variant]}`}
    >
      <div
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${iconColorMap[t.variant]}`}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <p className="flex-1 text-sm font-medium leading-relaxed pt-1">{t.message}</p>
      <button
        onClick={() => onDismiss(t.id)}
        className="flex-shrink-0 rounded-lg p-1 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
    </motion.div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message, variant = 'info', duration = 4000) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, variant, duration }]);
    return id;
  }, []);

  const toast = useCallback(
    (message, variant = 'info', duration) => addToast(message, variant, duration),
    [addToast]
  );

  toast.success = useCallback((msg, dur) => addToast(msg, 'success', dur), [addToast]);
  toast.error = useCallback((msg, dur) => addToast(msg, 'error', dur), [addToast]);
  toast.warning = useCallback((msg, dur) => addToast(msg, 'warning', dur), [addToast]);
  toast.info = useCallback((msg, dur) => addToast(msg, 'info', dur), [addToast]);

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <div
        className="fixed bottom-4 right-4 z-[200] flex flex-col-reverse gap-2"
        aria-live="polite"
      >
        <AnimatePresence>
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} duration={t.duration} onDismiss={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
