import { Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-8 md:px-24 bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-gray-900/80 text-center overflow-hidden transition-colors">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white transition-colors">{t('foot_title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-base mb-8 sm:mb-10 leading-relaxed font-sans max-w-lg mx-auto transition-colors">
          {t('foot_desc')}
        </p>
        
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <a 
            href="mailto:hamkaibnuzufar123@gmail.com" 
            className="p-3 bg-gray-100 dark:bg-[#0d0d0d] border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 shadow-lg"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/hamzz02" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-gray-100 dark:bg-[#0d0d0d] border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 shadow-lg"
            title="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/hamka-ibnu-zufar" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-gray-100 dark:bg-[#0d0d0d] border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 shadow-lg"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

        <p className="text-gray-500 dark:text-gray-500 text-xs font-mono transition-colors">
          © {new Date().getFullYear()} Hamka Ibnu Zufar. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}