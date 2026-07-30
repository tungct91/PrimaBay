import React, { useState, useEffect } from 'react';
import { LOGO_URL } from '../data/projectData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBookingModal: (type?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenBookingModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'location', label: 'Vị trí' },
    { id: 'amenities', label: 'Tiện ích' },
    { id: 'floorplans', label: 'Mặt bằng' },
    { id: 'gallery', label: 'Thư viện' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#001628]/95 backdrop-blur-xl shadow-lg border-b border-[#082b45] py-3'
            : 'bg-[#001628]/80 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo & Branding */}
          <div
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src={LOGO_URL}
              alt="Prima Bay Halong Logo"
              className="h-10 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-headline-md text-white text-lg tracking-widest uppercase font-semibold">
                Prima Bay
              </span>
              <span className="text-[10px] text-[#ffdea1] tracking-[0.25em] uppercase font-medium">
                Hạ Long Bay Resort
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-label-lg text-xs uppercase tracking-wider transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#ffdea1] font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdea1] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:19008888"
              className="hidden sm:flex items-center gap-2 font-label-lg text-xs text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors border border-white/20"
            >
              <span className="material-symbols-outlined text-sm text-[#ffdea1]">
                call
              </span>
              <span>1900 8888</span>
            </a>

            <button
              onClick={() => onOpenBookingModal('Tham quan căn hộ')}
              className="bg-[#7a5900] hover:bg-[#8a6500] text-white font-label-lg text-xs uppercase px-4 md:px-5 py-2.5 rounded-lg shadow-md hover:scale-105 transition-all border border-[#ffd172]/30 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm hidden md:inline">
                calendar_month
              </span>
              <span>Đăng Ký Tham Quan</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/80 backdrop-blur-md xl:hidden flex flex-col pt-24 px-6 pb-8 animate-fadeIn">
          <div className="flex flex-col gap-4 text-center my-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-3 text-lg font-headline-md tracking-wider border-b border-white/10 transition-colors ${
                  activeSection === item.id
                    ? 'text-[#ffdea1] font-bold'
                    : 'text-white hover:text-[#ffdea1]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            <a
              href="tel:19008888"
              className="w-full py-3 bg-white/10 border border-white/20 rounded-xl text-white font-label-lg text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[#ffdea1]">
                call
              </span>
              <span>Hotline Tư Vấn: 1900 8888</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBookingModal('Tham quan căn hộ');
              }}
              className="w-full py-3 bg-[#7a5900] text-white rounded-xl font-label-lg uppercase tracking-wider text-center"
            >
              Đăng Ký Tham Quan Trực Tiếp
            </button>
          </div>
        </div>
      )}
    </>
  );
};
