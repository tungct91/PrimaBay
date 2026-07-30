import React from 'react';
import { ARCHITECTURE_IMG } from '../data/projectData';

interface ArchitectureSectionProps {
  onOpenBookingModal: (type?: string) => void;
}

export const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[70vh] bg-[#001628] text-white overflow-hidden">
      {/* Left Column: Text & Design Philosophy */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
        <span className="font-label-lg text-xs text-[#ffdea1] tracking-[0.25em] uppercase font-semibold block mb-3">
          Kiệt Tác Bởi Mercurio Design Lab (Ý)
        </span>
        <h2 className="font-display-lg text-white mb-6 leading-tight">
          Kiến Trúc Giao Thoa Cùng Sóng Nước Đại Dương
        </h2>

        <p className="font-body-lg text-white/80 leading-relaxed mb-8 text-sm md:text-base">
          Được phác họa bởi thương hiệu tư vấn thiết kế danh tiếng Mercurio Design Lab (Ý), hình khối tòa tháp Prima Bay mô phỏng nhịp điệu uyển chuyển của sóng biển Hạ Long. Toàn bộ mặt đứng bọc kính Low-E tràn viền phản chiếu ánh nắng bình minh và hoàng hôn tráng lệ.
        </p>

        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/15 mb-8">
          <div>
            <span className="font-headline-md text-3xl text-[#ffdea1] block mb-1">
              Giải Thưởng
            </span>
            <span className="font-label-md text-xs text-white/70 uppercase">
              Dự Án Kiến Trúc Phức Hợp Xuất Sắc Nhất
            </span>
          </div>

          <div>
            <span className="font-headline-md text-3xl text-[#ffdea1] block mb-1">
              Low-E Glass
            </span>
            <span className="font-label-md text-xs text-white/70 uppercase">
              Cản 99% UV & Cách Nhiệt Tối Ưu
            </span>
          </div>
        </div>

        <div>
          <button
            onClick={() => onOpenBookingModal('Tìm hiểu thiết kế kiến trúc')}
            className="px-6 py-3.5 bg-[#7a5900] hover:bg-[#8a6500] text-white font-label-lg text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all border border-[#ffd172]/30 flex items-center gap-2 w-fit"
          >
            <span className="material-symbols-outlined text-base">architecture</span>
            <span>Khám Phá Chi Tiết Nội Thất & Vật Liệu</span>
          </button>
        </div>
      </div>

      {/* Right Column: Architectural Photography */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
        <img
          src={ARCHITECTURE_IMG}
          alt="Prima Bay Architectural Details"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#001628]/20 mix-blend-multiply" />
        <div className="absolute bottom-8 left-8 right-8 bg-[#001628]/80 backdrop-blur-md p-6 rounded-2xl border border-white/20">
          <p className="font-headline-md text-base text-[#ffdea1] mb-1">
            Mặt Đứng Kính Low-E Thông Minh
          </p>
          <p className="font-body-md text-xs text-white/80">
            Giúp giảm hấp thụ nhiệt, tiết kiệm năng lượng tiêu thụ, đồng thời mở rộng tầm nhìn toàn cảnh 100% hướng vịnh biển.
          </p>
        </div>
      </div>
    </section>
  );
};
