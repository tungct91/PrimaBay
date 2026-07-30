import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyInvest } from './components/WhyInvest';
import { ProjectOverview } from './components/ProjectOverview';
import { LocationMapSection } from './components/LocationMapSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { FloorPlansSection } from './components/FloorPlansSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { Footer } from './components/Footer';
import { TourBookingModal } from './components/TourBookingModal';
import { FloatingActions } from './components/FloatingActions';
import { ToastNotification } from './components/ToastNotification';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState('Đăng ký tham quan căn hộ');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // ScrollSpy to update active nav link as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['overview', 'location', 'amenities', 'floorplans', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingModal = (topic?: string) => {
    setBookingTopic(topic || 'Đăng ký tham quan căn hộ');
    setIsBookingModalOpen(true);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#191c1e] font-body relative selection:bg-[#7a5900] selection:text-white">
      {/* Toast Alert */}
      <ToastNotification
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* Sticky Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Sections */}
      <main className="w-full">
        {/* Section 1: Hero */}
        <HeroSection
          onOpenBookingModal={handleOpenBookingModal}
          onShowToast={handleShowToast}
        />

        {/* Section 2: Why Invest / 4 Highlights */}
        <WhyInvest onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 3: Overview & Specs */}
        <ProjectOverview onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 4: Location & Map */}
        <LocationMapSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 5: Architecture */}
        <ArchitectureSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 6: 18+ Amenities */}
        <AmenitiesSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 7: Floor Plans & Units */}
        <FloorPlansSection
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* Section 8: Gallery & Lightbox */}
        <GallerySection />

        {/* Section 9: FAQ Accordion */}
        <FaqSection />

        {/* Section 11: Contact CTA */}
        <ContactCtaSection
          onOpenBookingModal={handleOpenBookingModal}
          onShowToast={handleShowToast}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Shortcuts */}
      <FloatingActions
        onOpenBookingModal={handleOpenBookingModal}
        onShowToast={handleShowToast}
      />

      {/* Booking & Registration Modal */}
      <TourBookingModal
        isOpen={isBookingModalOpen}
        initialTopic={bookingTopic}
        onClose={() => setIsBookingModalOpen(false)}
        onShowToast={handleShowToast}
      />
    </div>
  );
}
