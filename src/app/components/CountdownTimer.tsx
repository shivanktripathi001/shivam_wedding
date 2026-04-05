import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useLang } from '../LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const { t } = useLang();
  const weddingDate = new Date('2026-04-25T00:00:00');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +weddingDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-[#D4AF37] px-6 py-4 inline-flex items-center gap-4 md:gap-8"
    >
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold text-[#C74665]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-500 font-medium tracking-wider mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {unit.label}
            </div>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-2xl md:text-4xl font-bold text-[#D4AF37] mb-4">:</span>
          )}
        </div>
      ))}
    </motion.div>
  );
}
