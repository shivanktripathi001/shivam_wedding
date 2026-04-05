import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang } from '../LanguageContext';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Events', href: '#events' },
  { label: 'Couple', href: '#couple' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Venue', href: '#venue' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-[#C74665]" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-xl font-semibold">Shivam</span>
            <Heart className="fill-[#C74665] text-[#C74665]" size={20} />
            <span className="text-xl font-semibold">Shivani</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-gray-600 hover:text-[#C74665] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggle}
              className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white hover:scale-105 transition-transform"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {lang === 'en' ? 'हिंदी' : 'English'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-[#C74665]" onClick={() => setOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Sidebar overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 z-50 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-1 text-[#C74665]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span className="text-lg font-semibold">Shivam</span>
                  <Heart className="fill-[#C74665]" size={16} />
                  <span className="text-lg font-semibold">Shivani</span>
                </div>
                <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-[#C74665]">
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-[#FFF8E7] hover:text-[#C74665] transition-colors text-sm font-medium"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="p-4 border-t border-[#D4AF37]/30">
                <button
                  onClick={() => { toggle(); setOpen(false); }}
                  className="w-full py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {lang === 'en' ? 'हिंदी' : 'English'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
