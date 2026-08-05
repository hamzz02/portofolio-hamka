import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="pt-12 sm:pt-16 md:pt-20 pb-10 px-6 sm:px-8 md:px-12 lg:px-16 w-full max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 tracking-tight transition-colors">
          {t('hero_greeting')}
        </h1>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-gray-600 dark:text-gray-400 text-xs sm:text-[13px] mb-6 sm:mb-8 transition-colors">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 transition-colors"></span>
            {t('hero_location')}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            {t('hero_status')}
          </div>
        </div>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-[15px] leading-relaxed max-w-3xl mb-8 sm:mb-12 transition-colors">
          <p>
            {t('hero_desc1')}
          </p>
          <p>
            {t('hero_desc2')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <a 
              href="https://wa.me/6285702480395" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex justify-center px-6 py-3.5 bg-gray-900 dark:bg-[#050505] text-emerald-400 border border-emerald-500/30 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300 font-medium font-mono text-sm shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              {t('hero_button_chat')}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}