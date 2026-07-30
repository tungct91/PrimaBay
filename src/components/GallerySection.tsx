import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/projectData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả hình ảnh (48+)' },
    { id: 'exterior', label: 'Ngoại thất & Kiến trúc' },
    { id: 'interior', label: 'Nội thất căn hộ' },
    { id: 'amenities', label: 'Tiện ích & Cảnh quan' },
    { id: 'night', label: 'Prima Bay Về Đêm' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === 0 ? filteredItems.length - 1 : activeLightboxIndex - 1
      );
    }
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === filteredItems.length - 1 ? 0 : activeLightboxIndex + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <span className="font-label-lg text-xs text-[#7a5900] tracking-[0.2em] uppercase font-semibold block mb-2">
              Bộ Sưu Tập Thư Viện Ảnh
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#001628]">
              Đắm Chìm Trong Sự Sang Trọng Tuyệt Đối
            </h2>
            <p className="font-body-lg text-sm text-[#43474d] max-w-2xl mt-2">
              Khám phá không gian sống thực tế, tầm nhìn triệu đô hướng Vịnh và vẻ đẹp kiến trúc tráng lệ của Prima Bay Hạ Long.
            </p>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-label-lg uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#001628] text-white shadow-md'
                  : 'bg-[#f8f9fb] text-[#43474d] hover:bg-[#e6e8ea] border border-[#e0e3e5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3] bg-[#001628]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="bg-[#7a5900] text-white text-[10px] font-label-md px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1 inline-block">
                  {item.category}
                </span>
                <h3 className="font-headline-md text-base text-white group-hover:text-[#ffdea1] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-lg">zoom_in</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Top Bar */}
          <div className="flex justify-between items-center text-white z-10">
            <div>
              <span className="text-xs font-label-lg text-[#ffdea1] uppercase">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
              <h3 className="font-headline-md text-lg">
                {filteredItems[activeLightboxIndex].title}
              </h3>
            </div>

            <button
              onClick={closeLightbox}
              className="w-11 h-11 bg-white/10 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Main Image View */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">chevron_left</span>
            </button>

            <img
              src={filteredItems[activeLightboxIndex].imageUrl}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl animate-scaleUp"
            />

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">chevron_right</span>
            </button>
          </div>

          {/* Bottom Caption & Thumbnail Bar */}
          <div className="flex flex-col items-center gap-3 z-10 text-center">
            <p className="font-body-md text-sm text-white/80 max-w-xl">
              {filteredItems[activeLightboxIndex].caption}
            </p>

            <div className="flex gap-2 overflow-x-auto max-w-full py-2 no-scrollbar">
              {filteredItems.map((item, idx) => (
                <img
                  key={item.id}
                  src={item.imageUrl}
                  alt={item.title}
                  onClick={() => openLightbox(idx)}
                  className={`w-14 h-10 object-cover rounded-lg cursor-pointer transition-all ${
                    idx === activeLightboxIndex
                      ? 'ring-2 ring-[#ffdea1] scale-110 opacity-100'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
