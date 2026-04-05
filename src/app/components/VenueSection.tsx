import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import { useLang } from '../LanguageContext';

const venueMapData = [
  {
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.123456789!2d80.8306!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzA3LjQiTiA4MMKwNDknNTAuMiJF!5e0!3m2!1sen!2sin!4v1234567890',
    directionsUrl: 'https://www.google.com/maps/search/Sun+City+Garden+Satna+Chitrakoot+Road',
  },
  {
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.123456789!2d80.8306!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzA3LjQiTiA4MMKwNDknNTAuMiJF!5e0!3m2!1sen!2sin!4v1234567890',
    directionsUrl: 'https://share.google/zBitA4XwtvoIgR7OJ',
  },
];

export function VenueSection() {
  const { t } = useLang();
  const venues = t.venues.map((v, i) => ({ ...v, ...venueMapData[i] }));
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFF8E7] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-[#C74665] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.venueTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C74665] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#D4AF37]"
            >
              {/* Map Embed */}
              <div className="relative h-64 bg-gray-200">
                <iframe
                  src={venue.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={venue.name}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Venue Details */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl text-[#C74665] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {venue.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {venue.address}
                    </p>
                    <div className="inline-block px-3 py-1 bg-[#FFF8E7] text-[#C74665] rounded-full text-xs font-medium">
                      {venue.event}
                    </div>
                  </div>
                </div>

                <a
                  href={venue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white rounded-lg hover:shadow-xl transition-all transform hover:scale-105"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <Navigation size={18} />
                  {t.getDirections}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center p-6 bg-gradient-to-r from-[#FFF8E7] to-[#FFE4E1] rounded-2xl border-2 border-[#D4AF37]"
        >
          <p className="text-lg text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="font-semibold text-[#C74665]">{t.venueNoteLabel}</span>{' '}
            {t.venueNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
