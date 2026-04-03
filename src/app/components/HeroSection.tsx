import { motion } from 'motion/react';
import { FloatingPetals } from './FloatingPetals';
import { CountdownTimer } from './CountdownTimer';
import { Heart } from 'lucide-react';
import { useLang } from '../LanguageContext';

export function HeroSection() {
  const { t } = useLang();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8E7] via-[#FFE4E1] to-[#F4E4E0]">
      <FloatingPetals />
      
      {/* Decorative mandala patterns */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="text-[#D4AF37]">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="text-[#D4AF37]">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="text-lg md:text-2xl text-[#D4AF37] mb-4 tracking-widest" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.gettingMarried}
          </div>
          
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-8xl mb-4 text-[#C74665]" style={{ fontFamily: 'Playfair Display, serif' }}>
              शिवम <Heart className="inline-block mx-2 md:mx-4 fill-[#C74665]" size={60} /> शिवानी
            </h1>
            <h2 className="text-4xl md:text-7xl text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Shivam & Shivani
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-gray-700 mb-4" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {t.weddingDate}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white rounded-full text-sm md:text-lg tracking-wide shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {t.saveTheDate}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#D4AF37]"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
