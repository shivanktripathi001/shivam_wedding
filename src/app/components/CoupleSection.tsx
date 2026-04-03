import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useLang } from '../LanguageContext';

export function CoupleSection() {
  const { t } = useLang();
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FFF8E7]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-[#C74665] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.coupleTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C74665] mx-auto rounded-full" />
        </motion.div>

        <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#D4AF37] hover:shadow-3xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center">
                <div className="text-9xl">🤵</div>
              </div>
              
              <div className="p-8">
                <h3 className="text-4xl text-[#C74665] mb-2 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Shivam
                </h3>
                <div className="text-center text-[#D4AF37] mb-6 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t.groom}
                </div>
                
                <div className="space-y-3 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p className="text-center leading-relaxed">
                    {t.sonOf}
                  </p>
                  <p className="text-center font-semibold text-[#C74665]">
                    {t.groomParents}
                  </p>
                  <p className="text-center text-sm text-gray-600">
                    {t.groomCity}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Heart Divider */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="text-[#C74665] fill-[#C74665]" size={60} />
            </motion.div>
          </div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#C74665] hover:shadow-3xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-[#C74665] to-[#E75480] flex items-center justify-center">
                <div className="text-9xl">👰</div>
              </div>
              
              <div className="p-8">
                <h3 className="text-4xl text-[#C74665] mb-2 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Shivani
                </h3>
                <div className="text-center text-[#D4AF37] mb-6 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t.bride}
                </div>
                
                <div className="space-y-3 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <p className="text-center leading-relaxed">
                    {t.daughterOf}
                  </p>
                  <p className="text-center font-semibold text-[#C74665]">
                    {t.brideParents}
                  </p>
                  <p className="text-center text-sm text-gray-600">
                    {t.brideCity}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl text-[#C74665] italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.coupleQuote.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
