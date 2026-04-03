import { motion } from 'motion/react';
import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { X, Upload, ExternalLink } from 'lucide-react';
import { useLang } from '../LanguageContext';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzUxMzE4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Wedding Mandap Decoration'
  },
  {
    url: 'https://images.unsplash.com/photo-1525135927526-a01d9e5e9484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMG1laG5kaSUyMGhhbmRzfGVufDF8fHx8MTc3NTA2NDkzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Mehndi Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1767333586238-5fe2e8e62b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY291cGxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MTMzOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Couple Portrait'
  },
  {
    url: 'https://images.unsplash.com/photo-1760963809680-dbc4b0366948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpZ29sZCUyMGZsb3dlcnMlMjBnYXJsYW5kfGVufDF8fHx8MTc3NTEyNTY2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Marigold Garlands'
  },
  {
    url: 'https://images.unsplash.com/photo-1761392181201-c5481f29474b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzYW5nZWV0JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc1MTMzOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Sangeet Celebration'
  },
  {
    url: 'https://images.unsplash.com/photo-1771992228979-542c55a34ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxkaSUyMGNlcmVtb255JTIwdHVybWVyaWN8ZW58MXx8fHwxNzc1MTMzOTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Haldi Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1633889977319-105db8d094ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYmFyYWF0JTIwcHJvY2Vzc2lvbnxlbnwxfHx8fDE3NzUxMzM5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Baraat Procession'
  },
  {
    url: 'https://images.unsplash.com/photo-1529339158623-4f2a1cb93ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwcGV0YWxzJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzUxMzM5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Rose Petals'
  },
];

export function PhotoGallery() {
  const { t } = useLang();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showUploadInfo, setShowUploadInfo] = useState(false);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-[#C74665] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.galleryTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C74665] mx-auto rounded-full mb-8" />
          
          <button
            onClick={() => setShowUploadInfo(!showUploadInfo)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Upload size={20} />
            {t.sharePhotos}
          </button>

          {showUploadInfo && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-[#FFF8E7] rounded-lg max-w-md mx-auto border-2 border-[#D4AF37]"
            >
              <p className="text-sm text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t.uploadInfo}
                <br />
                <a 
                  href="https://drive.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#C74665] underline inline-flex items-center gap-1 mt-2"
                >
                  {t.openFolder} <ExternalLink size={14} />
                </a>
              </p>
            </motion.div>
          )}
        </motion.div>

        <Masonry columnsCount={3} gutter="16px">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </Masonry>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
                }}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                {t.previous}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
                }}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                {t.next}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
