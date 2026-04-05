import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useLang } from '../LanguageContext';

export function EventsTimeline() {
  const { t } = useLang();
  const events = t.events.map((e, i) => ({ ...e, icon: ['','',''][i] }));
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFF8E7] to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-[#C74665] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.eventsTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C74665] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {/* First row: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.slice(0, 2).map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-[#D4AF37] hover:scale-105 transform transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{event.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-[#C74665] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {event.title}
                      </h3>
                      <div className="space-y-2 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <div className="flex items-center gap-2">
                          <Calendar className="text-[#D4AF37]" size={18} />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="text-[#D4AF37]" size={18} />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="text-[#D4AF37] flex-shrink-0 mt-1" size={18} />
                          <span className="text-sm">{event.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third card centered */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-[#D4AF37] hover:scale-105 transform transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{events[2].icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-[#C74665] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {events[2].title}
                    </h3>
                    <div className="space-y-2 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <div className="flex items-center gap-2">
                        <Calendar className="text-[#D4AF37]" size={18} />
                        <span className="text-sm">{events[2].date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-[#D4AF37]" size={18} />
                        <span className="text-sm">{events[2].time}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="text-[#D4AF37] flex-shrink-0 mt-1" size={18} />
                        <span className="text-sm">{events[2].venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
