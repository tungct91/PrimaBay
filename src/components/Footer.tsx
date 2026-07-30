import React from 'react';
import { LOGO_URL } from '../data/projectData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#001628] text-white py-16 px-4 md:px-8 border-t border-[#082b45]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Branding & Intro */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="Prima Bay Halong"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <div className="flex flex-col">
              <span className="font-headline-md text-white text-lg tracking-widest uppercase">
                Prima Bay
              </span>
              <span className="text-[10px] text-[#ffdea1] tracking-widest uppercase">
                Hạ Long Bay
              </span>
            </div>
          </div>

          <p className="font-body-md text-xs text-white/70 leading-relaxed">
            Trải nghiệm phong cách sống Địa Trung Hải hạng sang bên bờ Vịnh Di Sản. Kiệt tác nghỉ dưỡng được kiến tạo bởi tập đoàn phát triển bất động sản hàng đầu BIM Land.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#7a5900] transition-colors"
              aria-label="Website"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#7a5900] transition-colors"
              aria-label="Chat"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#7a5900] transition-colors"
              aria-label="Location"
            >
              <span className="material-symbols-outlined text-sm">location_on</span>
            </a>
          </div>
        </div>

        {/* Col 2: Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-lg text-xs uppercase tracking-widest text-[#ffdea1]">
            Văn Phòng Bán Hàng CĐT
          </h4>

          <div className="space-y-3 font-body-md text-xs text-white/80">
            <div>
              <span className="block font-bold text-white">Chủ đầu tư:</span>
              <span>Công ty Cổ phần Bất động sản BIM (BIM Land)</span>
            </div>

            <div>
              <span className="block font-bold text-white">Địa chỉ dự án:</span>
              <span>Bán đảo 2, Đại lộ Halong Marine, Phường Hùng Thắng, TP. Hạ Long</span>
            </div>

            <div>
              <span className="block font-bold text-white">Hotline Phòng Kinh Doanh:</span>
              <span className="font-headline-md text-lg text-[#ffdea1]">1900 8888</span>
            </div>
          </div>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-lg text-xs uppercase tracking-widest text-[#ffdea1]">
            Điều Hướng Nhanh
          </h4>

          <nav className="flex flex-col gap-2 font-body-md text-xs text-white/80">
            <button onClick={() => onNavigate('overview')} className="hover:text-[#ffdea1] text-left transition-colors">
              Tổng quan dự án
            </button>
            <button onClick={() => onNavigate('location')} className="hover:text-[#ffdea1] text-left transition-colors">
              Vị trí & Liên kết vùng
            </button>
            <button onClick={() => onNavigate('amenities')} className="hover:text-[#ffdea1] text-left transition-colors">
              Hệ thống 18+ tiện ích 5*
            </button>
            <button onClick={() => onNavigate('floorplans')} className="hover:text-[#ffdea1] text-left transition-colors">
              Mặt bằng 2D/3D căn hộ
            </button>
            <button onClick={() => onNavigate('gallery')} className="hover:text-[#ffdea1] text-left transition-colors">
              Thư viện ảnh thực tế
            </button>
          </nav>
        </div>

        {/* Col 4: Legal & Notice */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-lg text-xs uppercase tracking-widest text-[#ffdea1]">
            Pháp Lý & Điều Khoản
          </h4>

          <p className="font-body-md text-[11px] text-white/60 leading-relaxed">
            * Các hình ảnh, thiết kế, thông số kỹ thuật mang tính chất minh họa thực tế của dự án. Chủ đầu tư BIM Land bảo lưu quyền thay đổi điều chỉnh theo quy hoạch phê duyệt chính thức.
          </p>

          <div className="pt-2 flex flex-col gap-1 text-[11px] text-white/70">
            <span className="hover:underline cursor-pointer">Chính sách bảo mật thông tin</span>
            <span className="hover:underline cursor-pointer">Điều khoản sử dụng dịch vụ</span>
            <span className="hover:underline cursor-pointer">Giấy phép xây dựng số 89/GPXD</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-12 pt-6 border-t border-[#082b45] text-center text-[11px] text-white/50 font-label-md">
        © 2026 PRIMA BAY HALONG. Phát triển bởi BIM LAND. Bảo lưu mọi quyền.
      </div>
    </footer>
  );
};
