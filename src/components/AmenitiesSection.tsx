import React, { useState } from 'react';
import { AMENITIES } from '../data/projectData';
import { Amenity } from '../types';

interface AmenitiesSectionProps {
  onOpenBookingModal: (type?: string) => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  onOpenBookingModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả tiện ích (18+)' },
    { id: 'sports', label: 'Thể thao & Hồ bơi' },
    { id: 'wellness', label: 'Spa & Thiền Zen' },
    { id: 'leisure', label: 'Giải trí & Du thuyền' },
    { id: 'dining', label: 'Ẩm thực & Bar' },
  ];

  const filteredAmenities = activeCategory === 'all'
    ? AMENITIES
    : AMENITIES.filter((item) => item.category === activeCategory);

  return (
    <section id="amenities" className="py-20 px-4 md:px-8 bg-[#f2f4f6]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <span className="font-label-lg text-xs text-[#7a5900] tracking-[0.2em] uppercase font-semibold block mb-2">
              Bộ Sưu Tập Tiện Ích Đặc Quyền
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#001628]">
              Hệ Sinh Thái Sống Sang Chuẩn Resort 5 Sao
            </h2>
            <p className="font-body-lg text-sm text-[#43474d] max-w-2xl mt-2">
              Trải nghiệm chuỗi tiện ích thượng lưu tầng không độc bản, mang đến phong cách sống nghỉ dưỡng 365 ngày cho quý cư dân.
            </p>
          </div>

          <button
            onClick={() => onOpenBookingModal('Nhận Brochure Tiện Ích')}
            className="px-6 py-3.5 bg-[#001628] text-white hover:bg-[#082b45] font-label-lg text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">stars</span>
            <span>Đăng Ký Trải Nghiệm Tiện Ích</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-label-lg uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#7a5900] text-white shadow-md'
                  : 'bg-white text-[#43474d] hover:bg-[#e6e8ea] border border-[#e0e3e5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAmenities.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAmenity(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e0e3e5] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-[#001628]/80 text-[#ffdea1] text-[11px] font-label-lg px-3 py-1 rounded-full backdrop-blur-md">
                    {item.location}
                  </div>
                </div>

                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#f2f4f6] text-[#7a5900] flex items-center justify-center mb-3 group-hover:bg-[#7a5900] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-xl">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-lg text-[#001628] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-xs text-[#43474d] line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-label-lg text-[#7a5900]">
                <span>Xem chi tiết tiện ích</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Amenity Detail Modal */}
      {selectedAmenity && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-white/20 shadow-2xl relative">
            <button
              onClick={() => setSelectedAmenity(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="h-64 sm:h-80 relative">
              <img
                src={selectedAmenity.image}
                alt={selectedAmenity.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#7a5900] text-white text-[10px] font-label-lg px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                  Vị trí: {selectedAmenity.location}
                </span>
                <h3 className="font-headline-md text-2xl sm:text-3xl">
                  {selectedAmenity.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 text-[#191c1e]">
              <p className="font-body-md text-sm text-[#43474d] leading-relaxed">
                {selectedAmenity.description}
              </p>

              <div className="p-4 bg-[#f2f4f6] rounded-2xl flex items-center justify-between">
                <div>
                  <span className="block text-[11px] font-label-md text-[#73777e] uppercase">
                    Đặc quyền cư dân
                  </span>
                  <span className="font-headline-md text-sm text-[#001628]">
                    Miễn phí sử dụng & Đặt lịch ưu tiên 24/7
                  </span>
                </div>
                <button
                  onClick={() => {
                    const title = selectedAmenity.title;
                    setSelectedAmenity(null);
                    onOpenBookingModal(`Đăng ký trải nghiệm ${title}`);
                  }}
                  className="px-4 py-2 bg-[#7a5900] text-white text-xs font-label-lg uppercase rounded-xl"
                >
                  Trải Nghiệm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
