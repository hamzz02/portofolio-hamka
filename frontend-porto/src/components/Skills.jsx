import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// TODO: Import foto sertifikat Anda di sini, misalnya:
// import imgCert1 from '../assets/sertifikat-1.jpg';

export default function Skills() {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: "2VX3QL18VXYQ",
      title: "Belajar Fundamental Back-End dengan JavaScript",
      issuer: "Dicoding Indonesia",
      tags: ["Bootcamp", "Course"],
      date: "MAY 2026",
      theme: "border-blue-500",
      image: "" // Ganti string kosong ini dengan variabel gambar, contoh: imgCert1
    },
    {
      id: "MRZMW6QDKPYQ",
      title: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding Indonesia",
      tags: ["Bootcamp", "Course"],
      date: "MAY 2026",
      theme: "border-emerald-500",
      image: "" // Ganti string kosong ini dengan variabel gambar
    },
    {
      id: "JMZVQA1RVRXN8",
      title: "Belajar Fundamental Aplikasi Web dengan React",
      issuer: "Dicoding Indonesia",
      tags: ["Bootcamp", "Course"],
      date: "APRIL 2026",
      theme: "border-indigo-500",
      image: "" // Ganti string kosong ini dengan variabel gambar
    }
  ];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 w-full max-w-6xl">
      <div className="mb-10 sm:mb-12 border-b border-gray-200 dark:border-gray-800/80 pb-8 transition-colors">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">
          {t('ach_title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-[15px] max-w-3xl leading-relaxed transition-colors">
          {t('ach_desc')}
        </p>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 transition-colors">{t('ach_total')}: {certificates.length}</p>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setSelectedCert(cert)}
            className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/60 rounded-2xl overflow-hidden flex flex-col hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-emerald-500/10 transition-all duration-300 shadow-sm cursor-pointer group"
          >
            {/* Certificate Image Area */}
            <div className={`h-48 bg-gray-50 dark:bg-[#0a0a0a] border-b-4 ${cert.theme} relative flex items-center justify-center overflow-hidden`}>
              {cert.image ? (
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Mock Layout jika belum ada gambar asli */
                <div className="w-full h-full bg-white p-3 flex flex-col justify-between relative group-hover:scale-105 transition-transform duration-500">
                   <div className="flex justify-between items-start">
                     <div className="font-black text-gray-800 text-lg tracking-tighter">dicoding</div>
                     <Award className="w-10 h-10 text-gray-800" strokeWidth={1} />
                   </div>
                   <div className="text-center">
                     <div className="text-[8px] text-gray-500 font-bold uppercase tracking-wider mb-1">Sertifikat Kompetensi Kelulusan</div>
                     <div className="text-xs text-blue-500 font-bold">Hamka</div>
                     <div className="text-[6px] text-gray-600 mt-1 max-w-[150px] mx-auto">Telah menyelesaikan pelatihan dengan sangat baik.</div>
                   </div>
                   <div className="flex justify-between items-end">
                     <div className="w-12 h-6 border-b border-gray-400"></div>
                     <div className="w-6 h-6 border border-gray-300"></div>
                   </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md">Lihat Sertifikat</span>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="text-xs text-gray-500 font-mono mb-2">{cert.id}</div>
              <h3 className="text-gray-900 dark:text-white font-bold text-[15px] leading-snug mb-1 transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors">
                {cert.issuer}
              </p>
              
              <div className="flex gap-2 mb-6">
                {cert.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs text-gray-600 dark:text-gray-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800/80 text-[10px] font-bold text-gray-500 uppercase tracking-wider transition-colors">
                {t('ach_issued')} {cert.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL POP-UP UNTUK SERTIFIKAT */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/40 dark:bg-black/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[88vh] bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-gray-800/90 rounded-3xl shadow-2xl overflow-y-auto z-10 font-sans p-6 sm:p-8 transition-colors"
            >
              {/* Modal Top Header */}
              <div className="flex items-start justify-between gap-4 border-b border-gray-200 dark:border-gray-800/80 pb-5 mb-6 transition-colors">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2 font-mono text-xs">
                    <span className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-bold">
                      {selectedCert.id}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1 transition-colors">
                      {selectedCert.date}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">
                    {selectedCert.title}
                  </h2>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2.5 rounded-full bg-gray-100 dark:bg-[#161616] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 transition-colors shrink-0"
                  title="Tutup Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Display */}
              <div className="mb-8 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-[#050505] relative flex justify-center items-center transition-colors">
                <div className="w-full relative">
                  {selectedCert.image ? (
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.title}
                      className="w-full h-auto object-contain bg-black/5 dark:bg-black/90 transition-colors" 
                    />
                  ) : (
                    /* Mock Layout untuk Modal jika belum ada gambar asli */
                    <div className="w-full aspect-[1.4/1] bg-white p-8 flex flex-col justify-between relative shadow-inner">
                       <div className="flex justify-between items-start">
                         <div className="font-black text-gray-800 text-3xl tracking-tighter">dicoding</div>
                         <Award className="w-16 h-16 text-gray-800" strokeWidth={1} />
                       </div>
                       <div className="text-center">
                         <div className="text-lg text-gray-500 font-bold uppercase tracking-wider mb-2">Sertifikat Kompetensi Kelulusan</div>
                         <div className="text-3xl text-blue-500 font-bold mb-2">Hamka</div>
                         <div className="text-sm text-gray-600 mt-2">Telah menyelesaikan pelatihan "{selectedCert.title}" dengan sangat baik.</div>
                       </div>
                       <div className="flex justify-between items-end">
                         <div className="w-32 h-10 border-b-2 border-gray-400"></div>
                         <div className="w-16 h-16 border-2 border-gray-300"></div>
                       </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                {selectedCert.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-lg text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}