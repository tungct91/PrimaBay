import React, { useState } from 'react';
import { CTA_EVENING_BG } from '../data/projectData';

interface ContactCtaSectionProps {
  onOpenBookingModal: (type?: string) => void;
  onShowToast: (msg: string) => void;
}

export const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({
  onOpenBookingModal,
  onShowToast,
}) => {
  const [phoneInput, setPhoneInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput) {
      onShowToast('Vui lòng nhập số điện thoại để nhận tư vấn!');
      return;
    }
    onShowToast(`Cảm ơn bạn! Chuyên viên tư vấn CĐT sẽ liên hệ lại qua số ${phoneInput} trong ít phút.`);
    setPhoneInput('');
  };

  return (
    <section id="contact" className="relative py-28 px-4 md:px-8 overflow-hidden bg-[#001628]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${CTA_EVENING_BG})` }}
        />
        <div className="absolute inset-0 bg-[#001628]/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto text-center flex flex-col items-center gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdea1]/20 border border-[#ffdea1]/30">
          <span className="material-symbols-outlined text-[#ffdea1] text-sm">auto_awesome</span>
          <span className="font-label-lg text-xs text-[#ffdea1] uppercase tracking-[0.2em]">
            Đặc Quyền Đặt Chỗ Ưu Tiên 2026
          </span>
        </div>

        <h2 className="font-display-lg text-white max-w-3xl">
          Khởi Đầu Di Sản Nghỉ Dưỡng Dành Cho Gia Đình Bạn
        </h2>

        <p className="font-body-lg text-white/80 max-w-2xl leading-relaxed text-sm md:text-base">
          Đừng bỏ lỡ cơ hội sở hữu một phần của vịnh biển đẹp nhất thế giới với mức giá gốc đợt 1 trực tiếp từ chủ đầu tư BIM Land.
        </p>

        {/* Quick Phone Lead Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-xl bg-white/10 p-2.5 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl"
        >
          <input
            type="tel"
            required
            placeholder="Nhập số điện thoại nhận báo giá ngay..."
            value={phoneInput}
            onChange={(e) => setPhoneInput(e.target.value)}
            className="flex-grow bg-transparent text-white placeholder-white/60 px-5 py-4 outline-none font-body-md text-sm"
          />
          <button
            type="submit"
            className="bg-[#7a5900] hover:bg-[#8a6500] text-white font-label-lg text-xs px-8 py-4 rounded-xl shadow-xl transition-all uppercase tracking-wider shrink-0"
          >
            Gửi Yêu Cầu
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-6 text-white/80 text-xs font-label-lg uppercase">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffdea1]">verified</span>
            <span>Giá Gốc Trực Tiếp CĐT BIM Land</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffdea1]">support_agent</span>
            <span>Tư Vấn Chuyên Sâu 24/7</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ffdea1]">directions_car</span>
            <span>Hỗ Trợ Xe Đón Xem Nhà Mẫu</span>
          </div>
        </div>

        <button
          onClick={() => onOpenBookingModal('Đăng ký trải nghiệm VIP')}
          className="mt-4 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-label-lg text-xs uppercase tracking-wider rounded-2xl border border-white/30 backdrop-blur-md transition-all"
        >
          Hoặc Đặt Lịch Hẹn Tư Vấn Trực Tiếp Tại Hà Nội & Hạ Long
        </button>
      </div>
    </section>
  );
};
