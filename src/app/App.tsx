import { HeroSection } from './components/HeroSection';
import { EventsTimeline } from './components/EventsTimeline';
import { CoupleSection } from './components/CoupleSection';
import { PhotoGallery } from './components/PhotoGallery';
import { VenueSection } from './components/VenueSection';
import { Footer } from './components/Footer';
import { LanguageProvider, useLang } from './LanguageContext';

function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full shadow-lg font-semibold text-sm transition-all bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white hover:scale-105"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {lang === 'en' ? 'हिंदी' : 'English'}
    </button>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="size-full overflow-auto">
        <LangToggle />
        <HeroSection />
        <EventsTimeline />
        <CoupleSection />
        <PhotoGallery />
        <VenueSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
