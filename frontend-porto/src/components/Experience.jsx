import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { lang, t } = useLanguage();

  const experiences = [
    {
      role: lang === 'en' ? "Full Stack Developer Intern" : "Full Stack Developer Intern",
      company: "PT. Sarana Insan Muda Selaras (Life Media)",
      location: "Remote",
      period: lang === 'en' ? "Feb 2026 - Jul 2026" : "Feb 2026 - Juli 2026",
      bullets: lang === 'en' ? [
        "Designed backend architecture and database schema using Prisma ORM for C-Track, a real-time employee monitoring application.",
        "Built scalable RESTful API using TypeScript/Node.js, and implemented a real-time chat forum based on WebSocket (Socket.io).",
        "Developed mass Push Notification architecture using Expo Server SDK and migrated to Google Cloud FCM V1 API.",
        "Deployed backend API to Linux VPS, managed background processes using PM2, and resolved network transport-layer constraints.",
        "Integrated frontend using React Native, ensuring real-time location updates of field workers with zero-delay."
      ] : [
        "Merancang arsitektur sistem backend dan skema database menggunakan Prisma ORM untuk C-Track, aplikasi pemantauan karyawan secara real-time.",
        "Membangun RESTful API yang scalable menggunakan TypeScript/Node.js, serta mengimplementasikan forum obrolan real-time berbasis WebSocket (Socket.io).",
        "Mengembangkan arsitektur Push Notification massal menggunakan Expo Server SDK dan mengemigrasikannya ke Google Cloud FCM V1 API.",
        "Mendeploy API backend ke Linux VPS, mengelola proses latar belakang menggunakan PM2, serta menyelesaikan kendala pada transport-layer jaringan.",
        "Mengintegrasikan frontend menggunakan React Native, memastikan pembaruan lokasi pekerja lapangan secara real-time tanpa penundaan (zero-delay)."
      ]
    }
  ];

  const education = {
    institution: lang === 'en' ? "Sebelas Maret University (UNS)" : "Universitas Sebelas Maret (UNS)",
    degree: lang === 'en' ? "Associate Degree in Informatics Engineering" : "D3 Teknik Informatika",
    gpa: "3.65 / 4.00",
    period: "2024 - Present"
  };

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Work Experience */}
        <div>
          <div className="mb-10 sm:mb-12 border-l-4 border-emerald-500 pl-4 sm:pl-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 uppercase tracking-tight text-gray-900 dark:text-white flex items-center gap-3 transition-colors">
              <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
              {t('exp_title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-xs sm:text-sm max-w-2xl leading-relaxed transition-colors">
              {t('exp_desc')}
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#0d0d0d] p-6 sm:p-8 rounded-2xl shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 border-b border-gray-200 dark:border-gray-800/80 pb-4 transition-colors">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-tight transition-colors">{exp.role}</h3>
                    <p className="text-emerald-500 dark:text-emerald-400 font-mono text-sm sm:text-base font-semibold mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 transition-colors">
                    <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-[#141414] px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-800 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-[#141414] px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-800 transition-colors">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3.5 font-sans text-xs sm:text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-emerald-500 dark:text-emerald-400 mt-0.5 font-bold shrink-0">➢</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="mb-6 sm:mb-8 border-l-4 border-emerald-500 pl-4 sm:pl-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white flex items-center gap-3 transition-colors">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
              {t('edu_title')}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#0d0d0d] p-6 sm:p-8 rounded-2xl shadow-xl transition-colors"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-4 mb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors">{education.institution}</h3>
                <p className="text-emerald-500 dark:text-emerald-400 font-mono text-xs sm:text-sm mt-1">{education.degree}</p>
              </div>
              <span className="self-start text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-semibold shrink-0 transition-colors">
                {education.period}
              </span>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800/80 flex items-center justify-between font-mono text-xs sm:text-sm transition-colors">
              <span className="text-gray-600 dark:text-gray-400">{t('exp_gpa')}</span>
              <span className="text-gray-900 dark:text-white font-bold bg-gray-100 dark:bg-[#141414] px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-800 transition-colors">
                <span className="text-emerald-500 dark:text-emerald-400">{education.gpa}</span>
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
