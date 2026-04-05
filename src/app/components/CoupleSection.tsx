import { motion } from 'motion/react';
import { useLang } from '../LanguageContext';

export function CoupleSection() {
  const { t } = useLang();
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#FFF8E7]">
      <div className="max-w-4xl mx-auto">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#D4AF37]"
        >
          <img
            src="/images/Media (9).jpg"
            alt="Family Photo"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
