import React, { useState } from 'react';
import { OVERVIEW_IMG } from '../data/projectData';

interface ProjectOverviewProps {
  onOpenBookingModal: (type?: string) => void;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  onOpenBookingModal,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'developer' | 'progress'>('specs');

  return (
    <section id="specs" className="py-20 px-4 md:px-8 bg-[#f2f4f6]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Image & Floating Progress Badge */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={OVERVIEW_IMG}
                alt="Prima Bay Halong Aerial Complex"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Construction Progress Floating Card */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:right-6 bg-[#7a5900] text-white p-6 rounded-2xl shadow-xl max-w-xs border border-[#ffd172]/40 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-1">
                <span className="material-symbols-outlined text-2xl text-[#ffdea1]">
                  check_circle
                </span>
                <span className="font-headline-md text-3xl font-bold">98%</span>
              </div>
              <p className="font-label-md text-xs uppercase tracking-wider text-[#ffdea1] font-semibold">
                Tiến Độ Xây Dựng 2026
              </p>
              <p className="text-[11px] text-white/80 mt-1">
                Đã cất nóc toàn bộ 30 tầng. Đang sơn phủ kính Low-E & lắp đặt nội thất tiêu chuẩn.
              </p>
            </div>
          </div>

          {/* Right Column: Project Specs & Specs Tab Switcher */}
          <div className="w-full lg:w-1/2">
            <span className="font-label-lg text-xs text-[#7a5900] tracking-[0.2em] uppercase font-semibold block mb-2">
              Tổng Quan Dự Án
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#001628] mb-6">
              Kiệt Tác Kiến Trúc & Quy Mô Ấn Tượng
            </h2>

            {/* Tabs Selector */}
            <div className="flex border-b border-[#c3c7ce] mb-8 gap-4">
              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-3 font-label-lg text-xs uppercase tracking-wider transition-colors relative ${
                  activeTab === 'specs'
                    ? 'text-[#001628] font-bold border-b-2 border-[#7a5900]'
                    : 'text-[#73777e] hover:text-[#001628]'
                }`}
              >
                Thông Số Kỹ Thuật
              </button>
              <button
                onClick={() => setActiveTab('developer')}
                className={`pb-3 font-label-lg text-xs uppercase tracking-wider transition-colors relative ${
                  activeTab === 'developer'
                    ? 'text-[#001628] font-bold border-b-2 border-[#7a5900]'
                    : 'text-[#73777e] hover:text-[#001628]'
                }`}
              >
                Chủ Đầu Tư BIM Land
              </button>
              <button
                onClick={() => setActiveTab('progress')}
                className={`pb-3 font-label-lg text-xs uppercase tracking-wider transition-colors relative ${
                  activeTab === 'progress'
                    ? 'text-[#001628] font-bold border-b-2 border-[#7a5900]'
                    : 'text-[#73777e] hover:text-[#001628]'
                }`}
              >
                Cập Nhật Tiến Độ
              </button>
            </div>

            {/* Tab 1: Technical Specs */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-[#e0e3e5] shadow-sm animate-fadeIn">
                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-[11px] text-[#73777e] uppercase">
                    Tên thương mại
                  </span>
                  <span className="font-headline-md text-base md:text-lg text-[#001628]">
                    Prima Bay Hạ Long
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-[11px] text-[#73777e] uppercase">
                    Chủ Đầu Tư
                  </span>
                  <span className="font-headline-md text-base md:text-lg text-[#001628]">
                    BIM Land (BIM Group)
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-[11px] text-[#73777e] uppercase">
                    Tổng diện tích đất
                  </span>
                  <span className="font-headline-md text-base md:text-lg text-[#001628]">
                    16.400 m² (1.64ha)
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-[11px] text-[#73777e] uppercase">
                    Quy mô dự án
                  </span>
                  <span className="font-headline-md text-base md:text-lg text-[#001628]">
                    2.969 Căn Hộ Nghỉ Dưỡng
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-[11px] text-[#73777e] uppercase">
                    Số tầng nổi
                  </span>
                  <span className="font-headline-md text-base md:text-lg text-[#001628]">
                    30 Tầng Tháp Đôi
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-[11px] text-[#73777e] uppercase">
                    Đơn vị thiết kế
                  </span>
                  <span className="font-headline-md text-base md:text-lg text-[#001628]">
                    Mercurio Design Lab (Ý)
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-[11px] text-[#73777e] uppercase">
                    Hình thức sở hữu
                  </span>
                  <span className="font-headline-md text-base md:text-lg text-[#001628] text-[#7a5900]">
                    Sổ Hồng Lâu Dài
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-label-md text-[11px] text-[#73777e] uppercase">
                    Thời gian bàn giao
                  </span>
                  <span className="font-headline-md text-base md:text-lg text-[#001628]">
                    Quý 4/2024 - 2026
                  </span>
                </div>
              </div>
            )}

            {/* Tab 2: Developer Credentials */}
            {activeTab === 'developer' && (
              <div className="bg-white p-6 rounded-2xl border border-[#e0e3e5] shadow-sm animate-fadeIn flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#001628] text-white rounded-xl flex items-center justify-center font-bold text-xl">
                    BIM
                  </div>
                  <div>
                    <h4 className="font-headline-md text-lg text-[#001628]">
                      Tập Đoàn BIM Land
                    </h4>
                    <p className="font-label-md text-xs text-[#7a5900]">
                      Top 10 Nhà Phát Triển Bất Động Sản Hàng Đầu Việt Nam
                    </p>
                  </div>
                </div>

                <p className="font-body-md text-sm text-[#43474d] leading-relaxed">
                  BIM Land là thành viên của Tập đoàn BIM Group - một trong những tập đoàn kinh tế đa ngành hàng đầu Việt Nam. Với quỹ đất hơn 5,6 triệu m² tại Hạ Long, Phú Quốc, Hà Nội và Vientiane, BIM Land tiên phong kiến tạo các đại đô thị du lịch đạt chuẩn quốc tế cùng những thương hiệu quản lý danh tiếng như InterContinental, Regent, Park Hyatt, Sailing Club.
                </p>

                <div className="grid grid-cols-3 gap-3 text-center pt-2 border-t border-[#f2f4f6]">
                  <div>
                    <span className="block font-headline-md text-lg text-[#001628]">30+ Năm</span>
                    <span className="text-[10px] text-[#73777e] uppercase">Kinh nghiệm phát triển</span>
                  </div>
                  <div>
                    <span className="block font-headline-md text-lg text-[#001628]">5.6 Triệu m²</span>
                    <span className="text-[10px] text-[#73777e] uppercase">Quỹ đất ven biển</span>
                  </div>
                  <div>
                    <span className="block font-headline-md text-lg text-[#001628]">100% Đúng Hạn</span>
                    <span className="text-[10px] text-[#73777e] uppercase">Cam kết pháp lý</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Construction Progress Details */}
            {activeTab === 'progress' && (
              <div className="bg-white p-6 rounded-2xl border border-[#e0e3e5] shadow-sm animate-fadeIn flex flex-col gap-4">
                <h4 className="font-headline-md text-lg text-[#001628]">
                  Cập Nhật Tiến Độ Thực Tế Tại Công Trường
                </h4>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-label-lg mb-1">
                      <span>Thi công phần thô & Cất nóc</span>
                      <span className="text-[#7a5900]">100% (Hoàn thành)</span>
                    </div>
                    <div className="w-full bg-[#f2f4f6] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#7a5900] h-full w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-label-lg mb-1">
                      <span>Phủ kính Kính Low-E cách nhiệt 2 lớp</span>
                      <span className="text-[#7a5900]">95%</span>
                    </div>
                    <div className="w-full bg-[#f2f4f6] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#7a5900] h-full w-[95%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-label-lg mb-1">
                      <span>Lắp đặt nội thất liền tường & thiết bị</span>
                      <span className="text-[#7a5900]">88%</span>
                    </div>
                    <div className="w-full bg-[#f2f4f6] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#7a5900] h-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-label-lg mb-1">
                      <span>Hoàn thiện hạ tầng cảnh quan & Bể bơi</span>
                      <span className="text-[#7a5900]">92%</span>
                    </div>
                    <div className="w-full bg-[#f2f4f6] h-2 rounded-full overflow-hidden">
                      <div className="bg-[#7a5900] h-full w-[92%]" />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#f2f4f6] rounded-xl flex items-center justify-between mt-2">
                  <span className="text-xs text-[#43474d] font-body-md">
                    Chủ đầu tư sẵn sàng đón tiếp khách hàng xem nhà mẫu thực tế.
                  </span>
                  <button
                    onClick={() => onOpenBookingModal('Đăng ký xem căn hộ thực tế')}
                    className="px-3 py-1.5 bg-[#001628] text-white rounded-lg text-xs font-label-lg uppercase"
                  >
                    Xem thực tế
                  </button>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenBookingModal('Đăng ký nhận thông tin tổng quan')}
                className="px-6 py-3.5 bg-[#001628] hover:bg-[#082b45] text-white font-label-lg text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">description</span>
                <span>Tải Bảng Quy Hoạch Tổng Thể (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
