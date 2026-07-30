import React, { useState } from 'react';
import { LOCATION_MAP_IMG, LOCATION_POINTS } from '../data/projectData';

interface LocationMapSectionProps {
  onOpenBookingModal: (type?: string) => void;
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({
  onOpenBookingModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePointId, setActivePointId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả kết nối' },
    { id: 'travel', label: 'Giao thông & Du thuyền' },
    { id: 'nature', label: 'Biển & Thiên nhiên' },
    { id: 'shopping', label: 'Thương mại & Chợ đêm' },
    { id: 'entertainment', label: 'Vui chơi & Văn hóa' },
  ];

  const filteredPoints = selectedCategory === 'all'
    ? LOCATION_POINTS
    : LOCATION_POINTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="location" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <span className="font-label-lg text-xs text-[#7a5900] tracking-[0.2em] uppercase font-semibold block mb-2">
              Vị Trí Vàng Tâm Điểm Di Sản
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#001628]">
              Tọa Độ Kết Nối Hoàn Hảo Tại Bán Đảo Halong Marina
            </h2>
            <p className="font-body-lg text-sm text-[#43474d] max-w-2xl mt-3">
              Tọa lạc tại trung tâm Bán đảo 2 Halong Marina, Prima Bay sở hữu vị trí giao thoa giữa nhịp sống hiện đại và cảnh sắc thiên nhiên kỳ vĩ. Kết nối nhanh chóng tới mọi tiện ích trọng điểm.
            </p>
          </div>

          <button
            onClick={() => onOpenBookingModal('Yêu cầu bản đồ vị trí HD')}
            className="px-6 py-3.5 border-2 border-[#001628] text-[#001628] hover:bg-[#001628] hover:text-white font-label-lg text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">map</span>
            <span>Tải Bản Đồ Kết Nối Vùng (HD)</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-label-lg uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#001628] text-white shadow-md'
                  : 'bg-[#f2f4f6] text-[#43474d] hover:bg-[#e6e8ea]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Viewer Box */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-xl border border-[#e0e3e5] min-h-[420px] md:min-h-[520px]">
            <img
              src={LOCATION_MAP_IMG}
              alt="Prima Bay Halong Location Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001628]/80 via-transparent to-transparent pointer-events-none" />

            {/* Central Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7a5900] text-white px-5 py-2.5 rounded-full shadow-2xl border-2 border-white flex items-center gap-2 animate-bounce">
              <span className="material-symbols-outlined text-xl">location_on</span>
              <span className="font-headline-md text-sm font-bold">PRIMA BAY HẠ LONG</span>
            </div>

            {/* Quick Map Floating Badges */}
            <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-3 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2 text-xs font-label-lg text-[#001628]">
                <span className="material-symbols-outlined text-sm text-[#7a5900]">directions_boat</span>
                <span>Bến Du Thuyền: 150m</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2 text-xs font-label-lg text-[#001628]">
                <span className="material-symbols-outlined text-sm text-[#7a5900]">beach_access</span>
                <span>Bãi Biển Marina: 300m</span>
              </div>

              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2 text-xs font-label-lg text-[#001628]">
                <span className="material-symbols-outlined text-sm text-[#7a5900]">theater_comedy</span>
                <span>Sun World Park: 8 Phút</span>
              </div>
            </div>

            {/* Map Footnote Banner */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#001628]/90 backdrop-blur-md p-4 rounded-2xl text-white flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffdea1] text-2xl">pin_drop</span>
                <div>
                  <p className="font-headline-md text-sm">Bán đảo 2, Đô thị Halong Marina</p>
                  <p className="text-[11px] text-white/70">Đại lộ Halong Marine, Phường Hùng Thắng, TP. Hạ Long, Quảng Ninh</p>
                </div>
              </div>
              <button
                onClick={() => onOpenBookingModal('Xem xe đón tham quan')}
                className="px-4 py-2 bg-[#7a5900] text-white text-xs font-label-lg uppercase rounded-lg shrink-0 whitespace-nowrap"
              >
                Đăng ký xe đón 24/7
              </button>
            </div>
          </div>

          {/* Location Points List */}
          <div className="lg:col-span-4 bg-[#f8f9fb] p-6 rounded-3xl border border-[#e0e3e5] flex flex-col justify-between">
            <div>
              <h3 className="font-headline-md text-xl text-[#001628] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#7a5900]">route</span>
                <span>Liên Kết Vùng Tiện Ích</span>
              </h3>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1 no-scrollbar">
                {filteredPoints.map((pt) => {
                  const isSelected = activePointId === pt.id;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => setActivePointId(isSelected ? null : pt.id)}
                      className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#001628] text-white border-[#001628] shadow-md'
                          : 'bg-white text-[#191c1e] border-[#e0e3e5] hover:border-[#7a5900]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                              isSelected ? 'bg-[#7a5900] text-white' : 'bg-[#f2f4f6] text-[#7a5900]'
                            }`}
                          >
                            <span className="material-symbols-outlined text-lg">
                              {pt.icon}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-headline-md text-sm leading-snug">
                              {pt.name}
                            </h4>
                            <span
                              className={`text-[11px] font-label-md ${
                                isSelected ? 'text-white/70' : 'text-[#73777e]'
                              }`}
                            >
                              Khoảng cách: {pt.distance}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`text-xs font-label-lg px-2.5 py-1 rounded-full whitespace-nowrap ${
                            isSelected
                              ? 'bg-[#ffdea1] text-[#001628]'
                              : 'bg-[#f2f4f6] text-[#7a5900]'
                          }`}
                        >
                          {pt.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#e0e3e5] mt-4">
              <p className="text-[11px] text-[#73777e] leading-relaxed">
                * Vị trí chiến lược giúp tăng trưởng mạnh mẽ giá trị bất động sản nghỉ dưỡng khi tuyến cao tốc Hải Phòng - Hạ Long - Vân Đồn hoàn thiện đồng bộ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
