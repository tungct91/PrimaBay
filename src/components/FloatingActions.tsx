import React, { useState, useEffect } from 'react';

interface FloatingActionsProps {
  onOpenBookingModal: (type?: string) => void;
  onShowToast: (msg: string) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenBookingModal,
  onShowToast,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleZaloChat = () => {
    onShowToast('Đang kết nối tới Zalo Official Account CĐT BIM Land...');
    window.open('https://zalo.me', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Hotline Button */}
      <a
        href="tel:19008888"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#001628] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border border-[#082b45] group relative"
        aria-label="Gọi Hotline"
      >
        <span className="material-symbols-outlined text-xl md:text-2xl text-[#ffdea1]">
          call
        </span>
        <span className="absolute right-16 bg-[#001628] text-white font-label-md text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none border border-[#082b45]">
          Gọi Hotline: 1900 8888
        </span>
      </a>

      {/* Zalo / Chat Button */}
      <button
        onClick={handleZaloChat}
        className="w-12 h-12 md:w-14 md:h-14 bg-[#7a5900] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border border-[#ffd172]/40 group relative cursor-pointer"
        aria-label="Chat Zalo"
      >
        <span className="material-symbols-outlined text-xl md:text-2xl">
          chat_bubble
        </span>
        <span className="absolute right-16 bg-[#7a5900] text-white font-label-md text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Chat Zalo Tư Vấn 24/7
        </span>
      </button>

      {/* Tour Booking Trigger */}
      <button
        onClick={() => onOpenBookingModal('Đăng ký hẹn lịch tham quan')}
        className="w-12 h-12 md:w-14 md:h-14 bg-white text-[#001628] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all border border-[#c3c7ce] group relative cursor-pointer"
        aria-label="Đăng Ký Tham Quan"
      >
        <span className="material-symbols-outlined text-xl md:text-2xl text-[#7a5900]">
          calendar_month
        </span>
        <span className="absolute right-16 bg-white text-[#001628] font-label-md text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none border border-[#e0e3e5]">
          Đăng Ký Tham Quan Căn Hộ
        </span>
      </button>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 md:w-14 md:h-14 bg-[#e0e3e5] text-[#001628] rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all border border-[#c3c7ce] group relative cursor-pointer animate-fadeIn"
          aria-label="Lên đầu trang"
        >
          <span className="material-symbols-outlined text-xl md:text-2xl">
            arrow_upward
          </span>
          <span className="absolute right-16 bg-[#001628] text-white font-label-md text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            Lên Đầu Trang
          </span>
        </button>
      )}
    </div>
  );
};
