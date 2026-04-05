import { HeroSection } from './components/HeroSection';
import { EventsTimeline } from './components/EventsTimeline';
import { CoupleSection } from './components/CoupleSection';
import { PhotoGallery } from './components/PhotoGallery';
import { VenueSection } from './components/VenueSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { LanguageProvider } from './LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="size-full overflow-auto">
        <Navbar />
        <div className="pt-16">
          <section id="hero"><HeroSection /></section>
          <section id="events"><EventsTimeline /></section>
          <section id="couple"><CoupleSection /></section>
          <section id="gallery"><PhotoGallery /></section>
          <section id="venue"><VenueSection /></section>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
