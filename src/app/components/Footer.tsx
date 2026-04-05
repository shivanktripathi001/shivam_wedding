import { motion } from 'motion/react';
import { Phone, Heart } from 'lucide-react';
import { useLang } from '../LanguageContext';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-gradient-to-b from-[#C74665] to-[#A03D55] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Family Name */}
          <h3 className="text-4xl md:text-5xl mb-6 text-[#FFD700]" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.familyName}
          </h3>

          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-8" />

          {/* Contact Information */}
          <div className="space-y-4 mb-8">
            <p className="text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t.contactText}
            </p>
            
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t.contactName}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-[#FFD700]">
                <a 
                  href="tel:+919685201215" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>9685201215</span>
                </a>
                <a 
                  href="tel:+919424617165" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>9424617165</span>
                </a>
                <a 
                  href="tel:+917225848219" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>7225848219</span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-8" />

          {/* Wedding couple names */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center gap-3 text-2xl md:text-3xl mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="text-[#FFD700]">Shivam</span>
            <Heart className="fill-white" size={30} />
            <span className="text-[#FFD700]">Shivani</span>
          </motion.div>

          {/* Bottom text */}
          <p className="text-sm text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.footerWish}
          </p>

          <div className="mt-8 text-xs text-white/60" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.footerCopy}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
