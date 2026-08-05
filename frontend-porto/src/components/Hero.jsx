import { motion } from 'framer-motion';
import { FileDown, Folder, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// Import Screenshots for Featured Projects Preview
import imgWebAdminCTrack from '../assets/web admin ctrack.jpeg';
import imgSewaAlatBand from '../assets/sewa alat band.jpeg';
import imgShintaBakery from '../assets/shinta bakery.jpeg';

export default function Hero() {
  const { lang, t } = useLanguage();

  // Featured Projects Preview Data
  const featuredProjects = [
    {
      id: "c-track",
      title: "C-Track (Clean Tracking System)",
      category: "Full Stack Internship",
      period: "Feb 2026 - Jul 2026",
      desc: lang === 'en' ? "Real-time employee monitoring app & Socket.io chat forum built for PT. Sarana Insan Muda Selaras." : "Aplikasi real-time employee monitoring & forum chat WebSocket untuk PT. Sarana Insan Muda Selaras.",
      image: imgWebAdminCTrack,
      tech: ["TypeScript", "Node.js", "Prisma ORM", "Socket.io", "React Native"]
    },
    {
      id: "sewa-alat-band",
      title: "Sewa Alat Band - Rental System",
      category: "Web Application",
      period: "Sep 2025 - Dec 2025",
      desc: lang === 'en' ? "Equipment rental system integrated with Midtrans Sandbox API payment gateway." : "Sistem informasi persewaan alat musik terintegrasi Midtrans API Sandbox payment gateway.",
      image: imgSewaAlatBand,
      tech: ["Laravel", "PHP", "MySQL", "Midtrans API", "Vue.js"]
    },
    {
      id: "shinta-bakery",
      title: "Shinta Bakery - E-Commerce",
      category: "Backend & Full Stack",
      period: "Sep 2025 - Dec 2025",
      desc: lang === 'en' ? "E-commerce & catering platform with 12+ interconnected tables based on custom ERD." : "Platform e-commerce & katering dengan database relasional 12+ tabel terhubung.",
      image: imgShintaBakery,
      tech: ["Laravel", "Vue.js", "Inertia.js", "MySQL"]
    }
  ];

  // 3D Sphere Tech Stack Items
  const techStack = [
    {
      name: 'HTML5',
      gradient: 'from-orange-500 via-orange-600 to-amber-700',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.041 8.586.002-.334 3.688-2.404.648-2.418-.65-.154-1.74H6.734l.3 3.484 4.925 1.365 4.938-1.365.679-7.472H8.531z"/>
        </svg>
      )
    },
    {
      name: 'CSS3',
      gradient: 'from-blue-500 via-blue-600 to-indigo-700',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.041 8.586.002-.334 3.688-2.404.648-2.418-.65-.154-1.74H6.734l.3 3.484 4.925 1.365 4.938-1.365.679-7.472H8.531z" />
        </svg>
      )
    },
    {
      name: 'Bootstrap 5',
      gradient: 'from-purple-600 via-purple-700 to-indigo-900',
      icon: (
        <span className="font-black text-xl sm:text-2xl text-white font-mono">B</span>
      )
    },
    {
      name: 'Tailwind CSS',
      gradient: 'from-cyan-400 via-teal-500 to-blue-600',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      gradient: 'from-yellow-400 via-amber-500 to-yellow-600',
      icon: (
        <span className="font-bold text-lg sm:text-xl text-black font-mono">JS</span>
      )
    },
    {
      name: 'TypeScript',
      gradient: 'from-blue-600 via-blue-700 to-sky-800',
      icon: (
        <span className="font-bold text-lg sm:text-xl text-white font-mono">TS</span>
      )
    },
    {
      name: 'React',
      gradient: 'from-sky-400 via-cyan-500 to-blue-600',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-none stroke-white" strokeWidth="2" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" className="fill-white" />
        </svg>
      )
    },
    {
      name: 'Vue.js',
      gradient: 'from-emerald-400 via-teal-500 to-emerald-700',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
          <path d="M2 3h3.5L12 15 18.5 3H22L12 21 2 3zm4.5 0h3L12 8.5 14.5 3h3L12 13.5 6.5 3z"/>
        </svg>
      )
    },
    {
      name: 'Next.js',
      gradient: 'from-gray-700 via-gray-900 to-black',
      icon: (
        <span className="font-extrabold text-base sm:text-lg text-white font-mono">N</span>
      )
    },
    {
      name: 'Prisma ORM',
      gradient: 'from-indigo-600 via-violet-700 to-purple-900',
      icon: (
        <span className="font-bold text-sm sm:text-base text-white font-mono">◮</span>
      )
    },
    {
      name: 'ESLint',
      gradient: 'from-purple-500 via-indigo-600 to-purple-800',
      icon: (
        <span className="font-bold text-sm sm:text-base text-white font-mono">ES</span>
      )
    },
    {
      name: 'Node.js',
      gradient: 'from-emerald-500 via-green-600 to-emerald-800',
      icon: (
        <span className="font-black text-xs sm:text-sm text-white font-mono">node</span>
      )
    },
    {
      name: 'Express.js',
      gradient: 'from-slate-700 via-gray-800 to-slate-950',
      icon: (
        <span className="font-bold text-xs sm:text-sm text-white font-mono">ex</span>
      )
    },
    {
      name: 'Python',
      gradient: 'from-blue-500 via-amber-500 to-sky-600',
      icon: (
        <span className="font-bold text-xs sm:text-sm text-white font-mono">Py</span>
      )
    },
    {
      name: 'PHP',
      gradient: 'from-indigo-400 via-purple-600 to-indigo-800',
      icon: (
        <span className="font-extrabold text-sm sm:text-base text-white font-mono">PHP</span>
      )
    },
    {
      name: 'Laravel',
      gradient: 'from-red-500 via-rose-600 to-red-700',
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-white" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-9-4.5V17l9 4.5 9-4.5V6.5L12 11z"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      gradient: 'from-teal-600 via-cyan-700 to-blue-800',
      icon: (
        <span className="font-bold text-xs sm:text-sm text-white font-mono">SQL</span>
      )
    },
    {
      name: 'Socket.io',
      gradient: 'from-gray-800 via-black to-slate-900',
      icon: (
        <span className="font-bold text-sm sm:text-base text-white font-mono">⚡</span>
      )
    },
    {
      name: 'Git & GitHub',
      gradient: 'from-orange-600 via-red-600 to-amber-700',
      icon: (
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="hero" className="pt-12 sm:pt-16 md:pt-20 pb-16 px-6 sm:px-10 md:px-14 lg:px-20 w-full max-w-6xl transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight transition-colors">
          {t('hero_greeting')}
        </h1>
        
        {/* Sub-info metadata row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-7 sm:mb-9 transition-colors font-sans">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500"></span>
            {t('hero_location')}
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"></span>
            {t('hero_status')}
          </div>
        </div>

        {/* Bio Description Paragraphs */}
        <div className="space-y-5 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl mb-8 sm:mb-10 transition-colors font-sans">
          <p>
            {t('hero_desc1')}
          </p>
          <p>
            {t('hero_desc2')}
          </p>
        </div>

        {/* CTA Buttons Group */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {/* Download CV Button */}
          <a
            href="/Hamka_Ibnu_Zufar_CV.pdf"
            download="Hamka_Ibnu_Zufar_CV.pdf"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
          >
            <FileDown className="w-4 h-4 stroke-[2.2]" />
            <span>{t('hero_cta_cv')}</span>
          </a>

          {/* View Projects Button */}
          <Link
            to="/projects"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] hover:bg-gray-200 dark:hover:bg-[#252525] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800 font-semibold text-sm hover:-translate-y-0.5 transition-all"
          >
            <Folder className="w-4 h-4 text-emerald-500" />
            <span>{t('hero_cta_projects')}</span>
          </Link>

          {/* Contact Button */}
          <a
            href="https://wa.me/6285702480395"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] hover:bg-gray-200 dark:hover:bg-[#252525] text-gray-900 dark:text-white border border-gray-300 dark:border-gray-800 font-semibold text-sm hover:-translate-y-0.5 transition-all"
          >
            <Mail className="w-4 h-4 text-emerald-500" />
            <span>{t('hero_cta_contact')}</span>
          </a>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-200 dark:border-gray-800/80 my-10 sm:my-12 transition-colors" />

        {/* Section: Technical Skills */}
        <div className="mb-14">
          <div className="mb-7">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2.5 mb-1.5">
              <span className="text-emerald-500 font-mono text-lg sm:text-xl">&lt;/&gt;</span> {t('hero_skills_title')}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-sans">
              {t('hero_skills_subtitle')}
            </p>
          </div>

          {/* 3D Sphere Badges Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 gap-y-7 gap-x-4 items-start">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.12, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* 3D Sphere Badge Container */}
                <div className={`w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] rounded-full bg-gradient-to-tr ${tech.gradient} p-0.5 shadow-xl shadow-black/35 relative flex items-center justify-center overflow-hidden border-2 border-white/30 transition-all group-hover:shadow-emerald-500/30 shrink-0`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/10 to-transparent pointer-events-none rounded-full" />
                  <div className="absolute top-1 left-3 w-6 h-2.5 bg-white/45 rounded-full blur-[1px] pointer-events-none" />
                  
                  <div className="z-10 flex items-center justify-center">
                    {tech.icon}
                  </div>
                </div>

                <span className="text-xs sm:text-[13px] font-bold text-gray-700 dark:text-gray-300 mt-2.5 text-center group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section: Featured Projects Preview */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800/80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2.5 mb-1.5">
                <Sparkles className="w-6 h-6 text-emerald-500" /> {t('hero_featured_title')}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-sans">
                {t('hero_featured_subtitle')}
              </p>
            </div>
            <Link
              to="/projects"
              className="text-xs sm:text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1 transition-colors shrink-0"
            >
              {t('view_more')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((proj) => (
              <Link
                key={proj.id}
                to="/projects"
                className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/80 rounded-2xl overflow-hidden shadow-sm hover:border-emerald-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="w-full h-44 bg-gray-100 dark:bg-[#0a0a0a] overflow-hidden relative border-b border-gray-200 dark:border-gray-800/80">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-white font-semibold">
                    {proj.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-1.5 line-clamp-1">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4 font-sans">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {proj.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 text-[10px] font-mono rounded">
                        {t}
                      </span>
                    ))}
                    {proj.tech.length > 3 && (
                      <span className="px-2 py-0.5 text-gray-500 text-[10px] font-mono">
                        +{proj.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}