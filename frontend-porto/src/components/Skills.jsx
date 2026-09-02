import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: "0fc1e8e6-448f-46a6-9f62-4f00c7b1f37c",
      title: "AWS Academy Graduate - Cloud Developing - Training Badge",
      issuer: "Amazon Web Services Training and Certification",
      tags: ["Cloud", "AWS Academy", "Certification"],
      date: "JULY 2026",
      theme: "border-amber-500",
      credentialUrl: "https://www.credly.com/badges/0fc1e8e6-448f-46a6-9f62-4f00c7b1f37c/public_url",
      image: ""
    },
    {
      id: "e4696a0a-6167-477d-89f9-60e6270e24a3",
      title: "HTML Essentials",
      issuer: "Cisco",
      tags: ["Frontend", "HTML5", "Certification"],
      date: "DECEMBER 2025",
      theme: "border-blue-500",
      credentialUrl: "https://www.credly.com/badges/e4696a0a-6167-477d-89f9-60e6270e24a3/public_url",
      image: ""
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            {/* Certificate Image / Mock Area */}
            <div className={`h-48 bg-gray-900 border-b-4 ${cert.theme} relative flex items-center justify-center overflow-hidden`}>
              {cert.image ? (
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Sleek Official Certificate Badge Mockup */
                <div className="w-full h-full bg-slate-900 p-5 flex flex-col justify-between relative group-hover:scale-105 transition-transform duration-500 border border-slate-800">
                   <div className="flex justify-between items-start">
                     <div>
                       <div className="font-bold text-amber-400 text-sm tracking-wider font-mono">{cert.issuer}</div>
                       <div className="text-[10px] text-gray-400 font-mono">Verified Certification</div>
                     </div>
                     <Award className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
                   </div>
                   <div className="text-center my-auto px-2">
                     <div className="text-[9px] text-gray-400 font-mono uppercase tracking-widest mb-1">CERTIFICATE OF COMPLETION</div>
                     <div className="text-xs text-white font-extrabold line-clamp-2 leading-tight">{cert.title}</div>
                     <div className="text-[11px] text-emerald-400 font-semibold mt-1.5">Hamka Ibnu Zufar</div>
                   </div>
                   <div className="flex justify-between items-end text-[9px] font-mono text-gray-400 border-t border-slate-800/80 pt-2">
                     <span>{cert.date}</span>
                     <span className="text-emerald-400 font-bold flex items-center gap-1">Credly Verified ★</span>
                   </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-xs font-semibold bg-black/70 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10">Lihat Detail Sertifikat</span>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="text-[11px] text-gray-500 font-mono mb-2 truncate">ID: {cert.id}</div>
              <h3 className="text-gray-900 dark:text-white font-bold text-base leading-snug mb-1 transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs font-semibold mb-4 transition-colors">
                {cert.issuer}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs text-gray-600 dark:text-gray-300 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800/80 text-[10px] font-bold text-gray-500 uppercase tracking-wider transition-colors flex items-center justify-between">
                <span>{t('ach_issued')} {cert.date}</span>
                {cert.credentialUrl && (
                  <span className="text-emerald-500 font-mono text-[10px] flex items-center gap-1 hover:underline">
                    Credly <ExternalLink className="w-3 h-3" />
                  </span>
                )}
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
              className="relative w-full max-w-3xl max-h-[88vh] bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-gray-800/90 rounded-3xl shadow-2xl overflow-y-auto z-10 font-sans p-6 sm:p-8 transition-colors"
            >
              {/* Modal Top Header */}
              <div className="flex items-start justify-between gap-4 border-b border-gray-200 dark:border-gray-800/80 pb-5 mb-6 transition-colors">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2 font-mono text-xs">
                    <span className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-bold truncate max-w-[280px]">
                      ID: {selectedCert.id}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1 transition-colors">
                      {selectedCert.date}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">
                    {selectedCert.title}
                  </h2>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
                    {selectedCert.issuer}
                  </p>
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

              {/* Certificate Image / Mock Display */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-slate-950 relative flex justify-center items-center transition-colors">
                <div className="w-full relative">
                  {selectedCert.image ? (
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.title}
                      className="w-full h-auto object-contain bg-black/5 dark:bg-black/90 transition-colors" 
                    />
                  ) : (
                    /* Mock Layout untuk Modal */
                    <div className="w-full aspect-[1.6/1] bg-slate-950 p-6 sm:p-8 flex flex-col justify-between relative shadow-inner border border-slate-800 rounded-xl">
                       <div className="flex justify-between items-start">
                         <div>
                           <div className="font-black text-amber-400 text-lg sm:text-2xl tracking-wider font-mono">{selectedCert.issuer}</div>
                           <div className="text-xs text-gray-400 font-mono mt-0.5">Official Credentials</div>
                         </div>
                         <Award className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 shrink-0" strokeWidth={1.5} />
                       </div>
                       <div className="text-center my-auto py-3">
                         <div className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-1.5">CERTIFICATE OF COMPLETION</div>
                         <div className="text-base sm:text-2xl text-white font-extrabold mb-2 leading-snug">{selectedCert.title}</div>
                         <div className="text-xs sm:text-sm text-emerald-400 font-bold">Penerima: Hamka Ibnu Zufar</div>
                       </div>
                       <div className="flex flex-wrap gap-2 justify-between items-end border-t border-slate-800/80 pt-4">
                         <div className="text-xs text-gray-400 font-mono">Diterbitkan: {selectedCert.date}</div>
                         {selectedCert.credentialUrl && (
                           <a
                             href={selectedCert.credentialUrl}
                             target="_blank"
                             rel="noreferrer"
                             className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
                           >
                             <span>Verifikasi Kredensial (Credly)</span>
                             <ExternalLink className="w-3.5 h-3.5" />
                           </a>
                         )}
                       </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
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