import React, { useEffect } from 'react';

interface ToastNotificationProps {
  message: string | null;
  onClose: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  onClose,
}) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-24 right-4 sm:right-8 z-50 bg-[#001628] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#ffd172]/40 flex items-center gap-3 animate-slideIn max-w-md">
      <div className="w-8 h-8 rounded-full bg-[#7a5900] text-white flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-lg">info</span>
      </div>
      <p className="font-body-md text-xs leading-snug flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-white/60 hover:text-white transition-colors"
      >
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
};
