import React, { useState } from 'react';
import { HERO_BG } from '../data/projectData';

interface HeroSectionProps {
  onOpenBookingModal: (type?: string) => void;
  onShowToast: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBookingModal,
  onShowToast,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    unitInterest: '2br',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      onShowToast('Vui lòng điền họ tên và số điện thoại liên hệ!');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast(`Cảm ơn ${formData.fullName}! Yêu cầu gửi Brochure đã được gửi thành công.`);
      setFormData({ fullName: '', email: '', phone: '', unitInterest: '2br' });
    }, 800);
  };

  return (
    <section
      id="overview"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-[#001628]"
    >
      {/* Background Image with Ambient Gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-[12000ms] scale-105 hover:scale-100"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001628]/95 via-[#001628]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001628] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Hero Copy & Stats */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdea1]/10 border border-[#ffdea1]/30 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#ffdea1] animate-ping" />
            <span className="font-label-lg text-xs text-[#ffdea1] uppercase tracking-[0.25em]">
              Đỉnh Cao Sống Sang Giữa Lòng Di Sản
            </span>
          </div>

          <h1 className="font-display-lg text-white leading-tight">
            PRIMA BAY HẠ LONG
            <span className="block text-2xl md:text-3xl font-headline-md text-[#ffdea1] mt-2">
              Căn Hộ Nghỉ Dưỡng Hạng Sang Bên Vịnh Di Sản
            </span>
          </h1>

          <p className="font-body-lg text-white/80 max-w-xl leading-relaxed">
            Nơi kiến trúc Địa Trung Hải hiện đại giao thoa cùng vẻ đẹp di sản thiên nhiên thế giới Vịnh Hạ Long. Kiệt tác nghỉ dưỡng thượng lưu dành riêng cho 2.969 chủ nhân xứng tầm.
          </p>

          {/* Key Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 pt-6 border-t border-white/15">
            <div className="flex flex-col">
              <span className="font-headline-md text-2xl md:text-3xl text-[#ffdea1]">
                2.969
              </span>
              <span className="font-label-md text-[11px] text-white/60 uppercase">
                Căn Hộ Hạng Sang
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-2xl md:text-3xl text-[#ffdea1]">
                30
              </span>
              <span className="font-label-md text-[11px] text-white/60 uppercase">
                Tầng Cao Cấp
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-2xl md:text-3xl text-[#ffdea1]">
                1.64ha
              </span>
              <span className="font-label-md text-[11px] text-white/60 uppercase">
                Quỹ Đất Vàng Marina
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-2xl md:text-3xl text-[#ffdea1]">
                100%
              </span>
              <span className="font-label-md text-[11px] text-white/60 uppercase">
                View Vịnh Biển
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onOpenBookingModal('Đăng ký trải nghiệm thực tế')}
              className="px-6 py-3.5 bg-[#7a5900] hover:bg-[#8a6500] text-white font-label-lg text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all hover:scale-105 border border-[#ffd172]/30 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">explore</span>
              <span>Đặt Lịch Phân Tích Đầu Tư</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('floorplans');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-label-lg text-xs uppercase tracking-wider rounded-xl backdrop-blur-md transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">architecture</span>
              <span>Xem Mặt Bằng Căn Hộ</span>
            </button>
          </div>
        </div>

        {/* Right Column: High-conversion Brochure Card Form */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="bg-white/95 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/40 w-full max-w-md text-[#191c1e]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-md text-xs text-[#7a5900] uppercase font-semibold tracking-wider">
                Đặc Quyền CĐT BIM Land
              </span>
              <span className="material-symbols-outlined text-[#7a5900]">verified</span>
            </div>

            <h3 className="font-headline-md text-2xl text-[#001628] mb-1">
              Nhận Bảng Giá & Brochure HD
            </h3>
            <p className="font-body-md text-xs text-[#43474d] mb-6">
              Đăng ký để nhận trọn bộ tài liệu thiết kế, pháp lý và bảng tính tài chính mới nhất 2026.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-label-lg text-[#43474d] mb-1 uppercase">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#f2f4f6] border border-[#c3c7ce] focus:border-[#7a5900] focus:bg-white px-4 py-3 rounded-xl outline-none transition-all font-body-md text-sm text-[#191c1e]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-label-lg text-[#43474d] mb-1 uppercase">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0912 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#f2f4f6] border border-[#c3c7ce] focus:border-[#7a5900] focus:bg-white px-4 py-3 rounded-xl outline-none transition-all font-body-md text-sm text-[#191c1e]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-label-lg text-[#43474d] mb-1 uppercase">
                  Email (Không bắt buộc)
                </label>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#f2f4f6] border border-[#c3c7ce] focus:border-[#7a5900] focus:bg-white px-4 py-3 rounded-xl outline-none transition-all font-body-md text-sm text-[#191c1e]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-label-lg text-[#43474d] mb-1 uppercase">
                  Loại căn hộ quan tâm
                </label>
                <select
                  value={formData.unitInterest}
                  onChange={(e) => setFormData({ ...formData, unitInterest: e.target.value })}
                  className="w-full bg-[#f2f4f6] border border-[#c3c7ce] focus:border-[#7a5900] focus:bg-white px-4 py-3 rounded-xl outline-none transition-all font-body-md text-sm text-[#191c1e]"
                >
                  <option value="studio">Studio Executive (38.5m²)</option>
                  <option value="studio-plus">Studio Plus Premium (52.2m²)</option>
                  <option value="2br">Elite 2BR Suite (86.4m²)</option>
                  <option value="3br">Grand Heritage 3BR (124.8m²)</option>
                  <option value="penthouse">Sky Penthouse Panorama (210m²)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#001628] hover:bg-[#082b45] text-white font-label-lg text-xs py-4 rounded-xl shadow-xl transition-all uppercase tracking-widest flex items-center justify-center gap-2 group cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Đang gửi...</span>
                ) : (
                  <>
                    <span>Tải Về Trọn Bộ Brochure HD</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      download
                    </span>
                  </>
                )}
              </button>
            </form>

            <p className="text-[11px] text-center mt-4 text-[#73777e] italic">
              * Cam kết bảo mật thông tin cá nhân. Bảng giá gốc trực tiếp từ CĐT BIM Land.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
