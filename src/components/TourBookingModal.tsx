import React, { useState } from 'react';
import { BookingFormData } from '../types';

interface TourBookingModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const TourBookingModal: React.FC<TourBookingModalProps> = ({
  isOpen,
  initialTopic = 'Đăng ký tham quan căn hộ',
  onClose,
  onShowToast,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    apartmentInterest: '2br',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      onShowToast('Vui lòng điền đầy đủ Họ tên và Số điện thoại!');
      return;
    }

    const code = 'PBY-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(code);
    setIsSubmitted(true);
    onShowToast(`Đăng ký thành công! Mã xác nhận: ${code}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl overflow-hidden max-w-xl w-full border border-white/20 shadow-2xl relative my-auto">
        {/* Modal Header */}
        <div className="bg-[#001628] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          <span className="text-[11px] font-label-md text-[#ffdea1] uppercase tracking-wider block mb-1">
            Chương Trình Đón Tiếp Đặc Quyền CĐT BIM Land
          </span>
          <h3 className="font-headline-md text-2xl sm:text-3xl text-white">
            {initialTopic}
          </h3>
          <p className="font-body-md text-xs text-white/70 mt-1">
            Nhận đầy đủ tài liệu pháp lý, bảng giá và đăng ký tham quan thực tế Vịnh Hạ Long.
          </p>
        </div>

        {/* Form Body or Success Confirmation */}
        <div className="p-6 sm:p-8 text-[#191c1e]">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#ffd172]/30 text-[#7a5900] rounded-full flex items-center justify-center mx-auto text-3xl">
                <span className="material-symbols-outlined text-4xl">task_alt</span>
              </div>

              <h4 className="font-headline-md text-2xl text-[#001628]">
                Đăng Ký Đã Được Tiếp Nhận!
              </h4>

              <p className="font-body-md text-sm text-[#43474d] leading-relaxed max-w-md mx-auto">
                Cảm ơn quý khách <strong className="text-[#001628]">{formData.fullName}</strong>. Chuyên viên tư vấn cao cấp CĐT sẽ liên hệ qua điện thoại <strong className="text-[#001628]">{formData.phone}</strong> để cung cấp thông tin và tư vấn chuyên sâu.
              </p>

              <div className="p-4 bg-[#f2f4f6] rounded-2xl max-w-sm mx-auto">
                <span className="block text-xs font-label-md text-[#73777e] uppercase">
                  Mã xác nhận đăng ký:
                </span>
                <span className="font-headline-md text-xl text-[#7a5900] font-bold">
                  {refCode}
                </span>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-8 py-3 bg-[#001628] text-white font-label-lg text-xs uppercase rounded-xl"
              >
                Hoàn Tất
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-label-lg text-[#43474d] mb-1 uppercase">
                    Họ và tên quý khách *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#f2f4f6] border border-[#c3c7ce] focus:border-[#7a5900] focus:bg-white px-4 py-2.5 rounded-xl outline-none text-sm font-body-md"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-label-lg text-[#43474d] mb-1 uppercase">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#f2f4f6] border border-[#c3c7ce] focus:border-[#7a5900] focus:bg-white px-4 py-2.5 rounded-xl outline-none text-sm font-body-md"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-label-lg text-[#43474d] mb-1 uppercase">
                    Email (Nhận file thiết kế)
                  </label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#f2f4f6] border border-[#c3c7ce] focus:border-[#7a5900] focus:bg-white px-4 py-2.5 rounded-xl outline-none text-sm font-body-md"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-label-lg text-[#43474d] mb-1 uppercase">
                    Loại căn hộ quan tâm
                  </label>
                  <select
                    value={formData.apartmentInterest}
                    onChange={(e) => setFormData({ ...formData, apartmentInterest: e.target.value })}
                    className="w-full bg-[#f2f4f6] border border-[#c3c7ce] focus:border-[#7a5900] focus:bg-white px-4 py-2.5 rounded-xl outline-none text-sm font-body-md"
                  >
                    <option value="studio">Studio Executive (38.5m²)</option>
                    <option value="studio-plus">Studio Plus Premium (52.2m²)</option>
                    <option value="2br">Elite 2BR Suite (86.4m²)</option>
                    <option value="3br">Grand Heritage 3BR (124.8m²)</option>
                    <option value="penthouse">Sky Penthouse Panorama (210m²)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-label-lg text-[#43474d] mb-1 uppercase">
                  Ghi chú thêm (Nếu có)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ví dụ: Mong muốn nhận tư vấn căn hộ tầng cao view biển..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#f2f4f6] border border-[#c3c7ce] focus:border-[#7a5900] focus:bg-white px-4 py-2.5 rounded-xl outline-none text-sm font-body-md resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#7a5900] hover:bg-[#8a6500] text-white font-label-lg text-xs uppercase tracking-widest rounded-xl shadow-xl transition-all cursor-pointer"
              >
                Xác Nhận Đăng Ký Nhận Thông Tin
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
