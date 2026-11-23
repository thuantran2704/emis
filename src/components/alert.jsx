import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Alert({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 8000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div role={type === 'success' ? 'status' : 'alert'} className={`fixed left-4 right-4 top-[calc(5rem+env(safe-area-inset-top))] z-[100] mx-auto flex max-w-md items-start gap-4 rounded-xl border px-4 py-3 text-sm leading-6 shadow-xl sm:left-auto sm:right-6 sm:top-[calc(6rem+env(safe-area-inset-top))] ${type === 'success' ? 'border-emerald-200 bg-emerald-950 text-white' : 'border-red-200 bg-red-950 text-white'}`}>
      <span className="min-w-0 flex-1">{message}</span>
      <button type="button" onClick={onClose} aria-label="Close notification" className="shrink-0 rounded px-1 text-xl leading-6 text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">×</button>
    </div>,
    document.body,
  );
}
