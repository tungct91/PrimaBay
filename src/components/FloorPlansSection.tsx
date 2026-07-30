import React, { useState } from 'react';
import { APARTMENT_TYPES } from '../data/projectData';
import { ApartmentType } from '../types';

interface FloorPlansSectionProps {
  onOpenBookingModal: (type?: string) => void;
}

export const FloorPlansSection: React.FC<FloorPlansSectionProps> = ({
  onOpenBookingModal,
}) => {
  const [selectedUnit, setSelectedUnit] = useState<ApartmentType>(APARTMENT_TYPES[2] || APARTMENT_TYPES[0]);
  const [viewMode, setViewMode] = useState<'interior' | '2d' | '3d'>('interior');

  return (
    <section id="floorplans" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-label-lg text-xs text-[#7a5900] tracking-[0.2em] uppercase font-semibold block mb-2">
            Mặt Bằng & Thiết Kế Căn Hộ
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-[#001628] mb-3">
            Đa Dạng Lựa Chọn Dành Cho Nhà Đầu Tư & Gia Đình
          </h2>
          <p className="font-body-lg text-sm text-[#43474d]">
            Mỗi căn hộ được tối ưu hóa diện tích sử dụng, 100% sở hữu tầm nhìn đắt giá ôm trọn bầu trời di sản Vịnh Hạ Long.
          </p>
        </div>

        {/* Unit Type Selectors */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {APARTMENT_TYPES.map((unit) => {
            const isSelected = selectedUnit.id === unit.id;
            return (
              <button
                key={unit.id}
                onClick={() => setSelectedUnit(unit)}
                className={`px-5 py-3 rounded-2xl text-xs font-label-lg uppercase tracking-wider transition-all border ${
                  isSelected
                    ? 'bg-[#001628] text-white border-[#001628] shadow-lg scale-105'
                    : 'bg-[#f8f9fb] text-[#43474d] border-[#e0e3e5] hover:border-[#7a5900]'
                }`}
              >
                <span className="block font-bold">{unit.name}</span>
                <span className={`text-[10px] ${isSelected ? 'text-[#ffdea1]' : 'text-[#73777e]'}`}>
                  {unit.area} • Từ {unit.priceFormatted}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Unit Display */}
        <div className="bg-[#f8f9fb] rounded-3xl p-6 md:p-10 border border-[#e0e3e5] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase (Interior / 2D / 3D Layout) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-[#e0e3e5]">
              <span className="font-label-md text-xs text-[#001628] font-bold px-3">
                Chế độ xem:
              </span>

              <div className="flex gap-1">
                <button
                  onClick={() => setViewMode('interior')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-label-lg transition-all ${
                    viewMode === 'interior'
                      ? 'bg-[#7a5900] text-white'
                      : 'text-[#43474d] hover:bg-[#f2f4f6]'
                  }`}
                >
                  Phối cảnh 3D Phối Cảnh
                </button>
                <button
                  onClick={() => setViewMode('2d')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-label-lg transition-all ${
                    viewMode === '2d'
                      ? 'bg-[#7a5900] text-white'
                      : 'text-[#43474d] hover:bg-[#f2f4f6]'
                  }`}
                >
                  Sơ Đồ Mặt Bằng 2D
                </button>
                <button
                  onClick={() => setViewMode('3d')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-label-lg transition-all ${
                    viewMode === '3d'
                      ? 'bg-[#7a5900] text-white'
                      : 'text-[#43474d] hover:bg-[#f2f4f6]'
                  }`}
                >
                  Bóc Mái 3D Layout
                </button>
              </div>
            </div>

            <div className="aspect-[16/10] bg-white rounded-2xl overflow-hidden shadow-inner border border-[#e0e3e5] relative group">
              <img
                src={
                  viewMode === 'interior'
                    ? selectedUnit.image
                    : viewMode === '2d'
                    ? selectedUnit.floorPlan2D
                    : selectedUnit.floorPlan3D
                }
                alt={selectedUnit.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#001628]/80 backdrop-blur-md text-[#ffdea1] text-xs font-label-lg px-3.5 py-1.5 rounded-full border border-white/20">
                {selectedUnit.name} ({selectedUnit.area})
              </div>
            </div>
          </div>

          {/* Unit Specs & Action Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-md text-xs text-[#7a5900] uppercase font-bold tracking-wider">
                  Thông Tin Căn Hộ
                </span>
                <span className="bg-[#ffd172]/30 text-[#7a5900] font-label-md text-[11px] px-2.5 py-1 rounded-full font-bold">
                  Bàn giao 2026
                </span>
              </div>

              <h3 className="font-headline-lg text-2xl md:text-3xl text-[#001628] mb-1">
                {selectedUnit.name}
              </h3>
              <p className="font-body-md text-sm text-[#43474d] mb-4">
                {selectedUnit.description}
              </p>

              {/* Price & Primary Specs Badge */}
              <div className="p-4 bg-white rounded-2xl border border-[#e0e3e5] mb-6 flex justify-between items-center">
                <div>
                  <span className="text-[11px] text-[#73777e] uppercase font-label-md block">
                    Giá bán khởi điểm CĐT
                  </span>
                  <span className="font-headline-md text-2xl text-[#7a5900] font-bold">
                    Từ {selectedUnit.priceFormatted}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#73777e] uppercase font-label-md block">
                    Đơn giá tham chiếu
                  </span>
                  <span className="font-body-md text-sm font-semibold text-[#001628]">
                    ~{(selectedUnit.priceFrom * 1000 / parseFloat(selectedUnit.area)).toFixed(1)} triệu/m²
                  </span>
                </div>
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-6">
                <div className="bg-white p-3 rounded-xl border border-[#e0e3e5]">
                  <span className="material-symbols-outlined text-xl text-[#7a5900] block mb-1">
                    square_foot
                  </span>
                  <span className="block font-headline-md text-sm font-bold text-[#001628]">
                    {selectedUnit.area}
                  </span>
                  <span className="text-[10px] text-[#73777e] uppercase font-label-md">
                    Diện tích
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#e0e3e5]">
                  <span className="material-symbols-outlined text-xl text-[#7a5900] block mb-1">
                    bed
                  </span>
                  <span className="block font-headline-md text-sm font-bold text-[#001628]">
                    {selectedUnit.bedrooms} Phòng
                  </span>
                  <span className="text-[10px] text-[#73777e] uppercase font-label-md">
                    Phòng ngủ
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#e0e3e5]">
                  <span className="material-symbols-outlined text-xl text-[#7a5900] block mb-1">
                    bathtub
                  </span>
                  <span className="block font-headline-md text-sm font-bold text-[#001628]">
                    {selectedUnit.bathrooms} Phòng
                  </span>
                  <span className="text-[10px] text-[#73777e] uppercase font-label-md">
                    Phòng tắm
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#e0e3e5]">
                  <span className="material-symbols-outlined text-xl text-[#7a5900] block mb-1">
                    balcony
                  </span>
                  <span className="block font-headline-md text-sm font-bold text-[#001628]">
                    {selectedUnit.balconies} Ban công
                  </span>
                  <span className="text-[10px] text-[#73777e] uppercase font-label-md">
                    Ban công
                  </span>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-label-lg text-[#001628] uppercase font-bold block">
                  Tiêu chuẩn hoàn thiện:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-body-md text-[#43474d]">
                  {selectedUnit.features.map((ft, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-[#7a5900]">
                        check_circle
                      </span>
                      <span>{ft}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e0e3e5]">
              <button
                onClick={() => onOpenBookingModal(`Nhận tư vấn & báo giá ${selectedUnit.name}`)}
                className="flex-1 py-3.5 bg-[#7a5900] hover:bg-[#8a6500] text-[#ffffff] text-xs font-label-lg uppercase rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">request_quote</span>
                <span>Nhận Báo Giá Chi Tiết</span>
              </button>

              <button
                onClick={() => onOpenBookingModal(`Tải mặt bằng & thiết kế ${selectedUnit.name}`)}
                className="flex-1 py-3.5 bg-[#001628] hover:bg-[#082b45] text-white text-xs font-label-lg uppercase rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Tải Bảng Giá & Thiết Kế HD</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
