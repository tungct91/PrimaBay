import React from 'react';

interface WhyInvestProps {
  onOpenBookingModal: (type?: string) => void;
}

export const WhyInvest: React.FC<WhyInvestProps> = ({ onOpenBookingModal }) => {
  const highlights = [
    {
      icon: 'location_on',
      title: 'Vị Trí Đắc Địa',
      subtitle: 'Trái Tim Halong Marina',
      desc: 'Tọa lạc tại tâm điểm giao thương sầm uất nhất bán đảo 2 Halong Marina, kế bên Bến du thuyền quốc tế và bãi biển Marina Bay.',
      tag: 'Tọa Độ Vàng'
    },
    {
      icon: 'visibility',
      title: 'Tầm Nhìn Di Sản',
      subtitle: '100% View Biển Mới',
      desc: 'Mọi căn hộ được tính toán góc độ đón trọn vẹn cảnh sắc kỳ vĩ của Vịnh Hạ Long - Kỳ quan thiên nhiên thế giới UNESCO công nhận.',
      tag: 'Panorama 360°'
    },
    {
      icon: 'trending_up',
      title: 'Lợi Nhuận Vượt Trội',
      subtitle: 'Giá Trị Đầu Tư Tăng Trưởng',
      desc: 'Tiềm năng tăng giá bất động sản ven biển bền vững kết hợp chương trình ủy thác cho thuê hiệu suất cao từ các tập đoàn quản lý 5*.',
      tag: 'Ủy Thác Cho Thuê'
    },
    {
      icon: 'beach_access',
      title: 'Sống Sang Chuẩn 5*',
      subtitle: 'Địa Trung Hải Giữa Lòng Vịnh',
      desc: 'Bộ sưu tập 18+ tiện ích đặc quyền: Bể bơi vô cực độ cao 100m, Sky Gym, Lounge Bar, Wellness Spa mang đến chất sống nghỉ dưỡng quanh năm.',
      tag: 'Đặc Quyền Thượng Lưu'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#f8f9fb]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-lg text-xs text-[#7a5900] uppercase tracking-[0.2em] font-semibold block mb-2">
            Tại Sao Nên Sở Hữu Prima Bay?
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-[#001628] mb-4">
            4 Giá Trị Đột Phá Khẳng Định Đẳng Cấp
          </h2>
          <div className="w-20 h-1 bg-[#7a5900] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e0e3e5] flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-[#082b45] rounded-2xl flex items-center justify-center text-white group-hover:bg-[#7a5900] transition-colors duration-300 shadow-md">
                    <span className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-[10px] font-label-md px-2.5 py-1 bg-[#f2f4f6] text-[#7a5900] rounded-full uppercase tracking-wider font-semibold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-headline-md text-xl text-[#001628] mb-1">
                  {item.title}
                </h3>
                <p className="font-label-md text-xs text-[#7a5900] mb-3 font-medium">
                  {item.subtitle}
                </p>
                <p className="font-body-md text-sm text-[#43474d] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f2f4f6] flex items-center justify-between">
                <button
                  onClick={() => onOpenBookingModal(`Tư vấn ${item.title}`)}
                  className="font-label-lg text-xs text-[#001628] group-hover:text-[#7a5900] flex items-center gap-1 transition-colors uppercase font-semibold"
                >
                  <span>Tìm hiểu chi tiết</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
