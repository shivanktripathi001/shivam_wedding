import { motion } from 'motion/react';
import { FloatingPetals } from './FloatingPetals';
import { CountdownTimer } from './CountdownTimer';
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

      <div className="relative z-10 w-full px-4 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <div className="text-lg md:text-2xl text-[#D4AF37] tracking-widest" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.gettingMarried}
          </div>
        </motion.div>

        {/* Image + Text row */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37] to-[#C74665] blur-lg opacity-30 scale-105" />
              <img
                src="/images/IMG-20260404-WA0020(1).jpg"
                alt="Shivam & Shivani"
                className="relative rounded-3xl w-full max-w-sm md:max-w-md object-cover shadow-2xl border-4 border-white"
                style={{ maxHeight: '520px' }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-5xl md:text-7xl text-[#D4AF37] mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Shivam<br />
              <span className="text-[#C74665]">Weds</span><br />
              Shivani
            </h2>

            <div className="text-xl md:text-2xl text-gray-700 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t.weddingDate}
            </div>

            <div
              className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white rounded-full text-sm md:text-lg tracking-wide shadow-lg mb-10"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t.saveTheDate}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <CountdownTimer />
            </motion.div>
          </motion.div>
        </div>
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
