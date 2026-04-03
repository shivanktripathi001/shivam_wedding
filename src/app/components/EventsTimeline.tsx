import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useLang } from '../LanguageContext';

export function EventsTimeline() {
  const { t } = useLang();
  const events = t.events.map((e, i) => ({ ...e, icon: ['🙏','🕉️','💛','🎊','🏠'][i] }));
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

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#C74665] to-[#D4AF37] transform -translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className="md:w-5/12">
                  <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-[#D4AF37] hover:shadow-3xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
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
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C74665] shadow-lg ring-4 ring-white" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
