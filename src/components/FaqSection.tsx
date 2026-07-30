import React, { useState } from 'react';
import { FAQS } from '../data/projectData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất cả câu hỏi' },
    { id: 'legal', label: 'Pháp lý Sổ Hồng' },
    { id: 'progress', label: 'Tiến độ & Bàn giao' },
    { id: 'finance', label: 'Thanh toán & Vay' },
    { id: 'operation', label: 'Cho thuê & Quản lý' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-[#f8f9fb]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-10">
          <span className="font-label-lg text-xs text-[#7a5900] tracking-[0.2em] uppercase font-semibold block mb-2">
            Giải Đáp Thắc Mắc
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-[#001628] mb-3">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="font-body-md text-sm text-[#43474d]">
            Tổng hợp thông tin pháp lý, tiến độ xây dựng và chương trình ưu đãi dành cho khách hàng quan tâm Prima Bay.
          </p>
        </div>

        {/* Search Bar & Category Chips */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm câu hỏi (ví dụ: Sổ hồng, Tiến độ, Vay vốn, Cho thuê...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#c3c7ce] focus:border-[#7a5900] pl-12 pr-4 py-3.5 rounded-2xl text-sm font-body-md outline-none shadow-sm transition-all"
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#73777e]">
              search
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-label-lg uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#001628] text-white'
                    : 'bg-[#f2f4f6] text-[#43474d] hover:bg-[#e6e8ea]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#e0e3e5] overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#f8f9fb] transition-colors"
                  >
                    <span className="font-headline-md text-base text-[#001628] font-bold">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-[#7a5900] shrink-0 ml-4">
                      {isOpen ? 'remove' : 'add'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-[#43474d] font-body-md text-sm leading-relaxed border-t border-[#f2f4f6] animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#e0e3e5]">
              <span className="material-symbols-outlined text-4xl text-[#73777e] mb-2">
                help_outline
              </span>
              <p className="font-body-md text-sm text-[#43474d]">
                Không tìm thấy câu hỏi phù hợp với cụm từ "{searchQuery}".
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
