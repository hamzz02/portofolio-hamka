import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, X, ExternalLink, ChevronLeft, ChevronRight, Layers, CheckCircle2, Calendar, Tag, ShieldCheck, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import Actual Project Screenshots from assets
import imgWebAdminCTrack from '../assets/web admin ctrack.jpeg';
import imgMobileViewCTrack from '../assets/mobile view ctrack.png';
import imgSewaAlatBand from '../assets/sewa alat band.jpeg';
import imgShintaBakery from '../assets/shinta bakery.jpeg';
import imgCoverEmailkomp from '../assets/cover emailkomp.png';
import imgAdminEmailkomp from '../assets/tampilan admin e-mailkomp.jpeg';
import imgAnggotaEmailkomp from '../assets/tampilan anggota emailkomp.png';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const { lang, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const projects = [
    {
      id: "c-track",
      title: "C-Track (Clean Tracking System)",
      category: "Full Stack Internship",
      period: lang === 'en' ? "Feb 2026 - Jul 2026" : "Feb 2026 - Juli 2026",
      description: lang === 'en' ? "Real-time employee monitoring application. Architected backend & database schema with Prisma ORM, RESTful API TypeScript/Node.js, real-time chat via WebSocket (Socket.io), Push Notification system via Expo Server SDK & FCM V1 API, VPS deployment via PM2, and React Native integration for worker location." : "Aplikasi real-time employee monitoring. Mengarsitekturi backend & skema database dengan Prisma ORM, RESTful API TypeScript/Node.js, fitur real-time chat via WebSocket (Socket.io), sistem Push Notification via Expo Server SDK & FCM V1 API, deployment VPS via PM2, serta integrasi React Native untuk lokasi pekerja.",
      images: [imgWebAdminCTrack, imgMobileViewCTrack],
      tech: ["TypeScript", "Node.js", "Prisma ORM", "Socket.io", "React Native", "Expo", "FCM V1 API", "PM2"],
      githubUrl: "https://github.com/IrsyadPrasetya02/C-Track_pbl12.git",
      features: [
        "Dashboard Web Admin Analytics Monitoring Performa & Kehadiran Pekerja",
        "Sistem Chat Real-time Komunikasi Tim berbasis WebSocket (Socket.io)",
        "Aplikasi Mobile React Native untuk Pemantauan Lokasi Pekerja Lapangan",
        "Arsitektur Push Notification Massal via Expo Server SDK & FCM V1 API",
        "Skema Database & Backend High Scalability menggunakan Prisma ORM",
        "Deployment API ke Linux VPS dengan Pengelolaan Background Process via PM2"
      ]
    },
    {
      id: "sewa-alat-band",
      title: "Sewa Alat Band - Equipment Rental System",
      category: "Web Application",
      period: "Sep 2025 - Dec 2025",
      description: "Sistem informasi persewaan alat musik & studio band berbasis web (KRATAK FC). Mengimplementasikan autentikasi pengguna aman, kalkulasi harga otomatis berdasarkan durasi sewa, manajemen inventaris dinamis, dashboard admin interaktif, serta integrasi Midtrans API Sandbox.",
      images: [imgSewaAlatBand],
      tech: ["Laravel", "PHP", "MySQL", "Midtrans API", "Vue.js", "Tailwind CSS"],
      githubUrl: "https://github.com/hamzz02/sewa_alat_band.git",
      features: [
        "Integrasi Payment Gateway Midtrans Sandbox via Webhook Asinkron",
        "Kalkulasi Harga Otomatis Berdasarkan Durasi & Paket Alat Musik",
        "Manajemen Inventaris Alat Musik, Sound System & Studio Dinamis",
        "Dashboard Admin Interaktif untuk Laporan & Update Status Pemesanan"
      ]
    },
    {
      id: "shinta-bakery",
      title: "Shinta Bakery - E-Commerce & Catering Platform",
      category: "Backend & Full Stack",
      period: "Sep 2025 - Dec 2025",
      description: "Platform e-commerce & katering dengan database relasional 12+ tabel terhubung berdasarkan ERD kustom. Mengembangkan endpoint API backend Laravel yang diintegrasikan dengan frontend Vue.js menggunakan Inertia.js (SPA), akses kontrol multi-role via Custom Middleware, serta sistem slot booking dinamis.",
      images: [imgShintaBakery],
      tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "Bootstrap 5"],
      githubUrl: "https://github.com/HaritsF807/Shinta_Bakery.git",
      features: [
        "Arsitektur Database Relasional 12+ Tabel Terhubung (ERD Kustom)",
        "Single Page Application (SPA) Menggunakan Laravel & Inertia.js (Vue.js)",
        "Custom Middleware Akses Kontrol Multi-role Pengguna & Admin",
        "Sistem Manajemen Slot Booking Dinamis Regulasi Kapasitas Pesanan Harian"
      ]
    },
    {
      id: "e-mailkomp",
      title: "E-Mailkomp - Member Assessment Management",
      category: "Web Application",
      period: "Okt 2025 - Nov 2025",
      description: "Sistem manajemen penilaian anggota organisasi. Mengembangkan kalkulasi skor otomatis untuk menentukan nilai akhir periode anggota kelompok, antarmuka responsif interaktif berbasis Vue.js & Inertia.js yang terhubung dengan Laravel, serta deployment ke hosting web CWPanel.",
      images: [imgCoverEmailkomp, imgAdminEmailkomp, imgAnggotaEmailkomp],
      tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL", "CWPanel"],
      githubUrl: "https://github.com/hamzz02",
      features: [
        "Algoritma Otomatis Kalkulasi Skor & Nilai Akhir Anggota Organisasi",
        "Antarmuka Interaktif Tampilan Admin & Anggota Berbasis Inertia.js + Vue.js",
        "Deployment Sukses ke Web Hosting CWPanel",
        "Sistem Pengelolaan Rekapitulasi Data Penilaian Anggota Kelompok"
      ]
    }
  ];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          setSelectedProject(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-16 w-full max-w-6xl mx-auto">
      
      {/* Header Section */}
      <div className="mb-10 sm:mb-12 border-b border-gray-200 dark:border-gray-800/80 pb-8 transition-colors">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white transition-colors">
          {t('proj_title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-[15px] max-w-3xl leading-relaxed transition-colors">
          {t('proj_desc')}{' '}
          <span className="text-emerald-500 font-semibold">{t('proj_desc_highlight')}</span>.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 rounded-2xl overflow-hidden shadow-sm hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col group"
          >
            {/* Project Image Card */}
            {project.images && project.images.length > 0 && (
              <div 
                onClick={() => openModal(project)}
                className="w-full h-52 sm:h-60 bg-gray-100 dark:bg-[#0a0a0a] overflow-hidden relative border-b border-gray-200 dark:border-gray-800/80 cursor-pointer"
              >
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="text-white text-xs font-semibold bg-emerald-600/90 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    {t('proj_view_doc')}
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-mono text-white font-semibold shadow-md">
                  {project.category}
                </div>
              </div>
            )}

            {/* Content Details */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-2">
                  <span className="flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.period}
                  </span>
                </div>
                <h3 
                  onClick={() => openModal(project)}
                  className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 transition-colors font-sans">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 text-[11px] font-mono rounded-md transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800/60">
                  <button
                    onClick={() => openModal(project)}
                    className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                  >
                    {t('proj_view_doc')} →
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
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
                      {selectedProject.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1 transition-colors">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      {selectedProject.period}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2.5 rounded-full bg-gray-100 dark:bg-[#161616] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 transition-colors shrink-0"
                  title="Tutup Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Gallery Image Display */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="mb-8 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-[#050505] relative group transition-colors">
                  <div 
                    onClick={() => setLightboxImage(selectedProject.images[activeImageIndex])}
                    className="w-full h-56 sm:h-80 md:h-96 relative cursor-zoom-in"
                  >
                    <img 
                      src={selectedProject.images[activeImageIndex]} 
                      alt={`${selectedProject.title} screenshot`}
                      className="w-full h-full object-contain bg-black/5 dark:bg-black/90 transition-colors" 
                    />
                    <div className="absolute top-3 right-3 bg-black/70 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Carousel Controls if multiple images */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between p-3 pointer-events-none">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
                        }}
                        className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white border border-gray-700 hover:bg-emerald-500 hover:text-black pointer-events-auto transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
                        }}
                        className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white border border-gray-700 hover:bg-emerald-500 hover:text-black pointer-events-auto transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}

                  {/* Image Indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex justify-center gap-2 py-3 bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800 transition-colors">
                      {selectedProject.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            i === activeImageIndex ? 'bg-emerald-500 dark:bg-emerald-400 w-6' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Modal Detail Info Sections */}
              <div className="space-y-6">
                
                {/* Overview */}
                <div>
                  <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-2 transition-colors">
                    <ShieldCheck className="w-4 h-4" /> {t('proj_modal_desc')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed transition-colors">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features & Architecture Breakdown */}
                {selectedProject.features && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800/80 transition-colors">
                    <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2 transition-colors">
                      <CheckCircle2 className="w-4 h-4" /> {t('proj_modal_feat')}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-[#121212] p-3 rounded-xl border border-gray-200 dark:border-gray-800/80 transition-colors">
                          <span className="text-emerald-500 dark:text-emerald-400 font-bold mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Used */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800/80 transition-colors">
                  <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2 transition-colors">
                    <Layers className="w-4 h-4" /> {t('proj_modal_tech')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-gray-800 rounded-lg text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-6xl max-h-[92vh] w-full flex items-center justify-center"
            >
              <img 
                src={lightboxImage} 
                alt="Full preview" 
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-gray-800"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-[-40px] right-0 sm:top-2 sm:right-2 p-3 rounded-full bg-gray-900/90 text-white border border-gray-700 hover:bg-emerald-500 hover:text-black transition-colors"
                title="Tutup Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}