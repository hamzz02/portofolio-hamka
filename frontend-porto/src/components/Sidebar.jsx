import { motion, useScroll } from 'framer-motion';
import { Home, User, Award, Folder, Mail, BadgeCheck, Sun, Moon, ArrowRight, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import fotoProfil from '../assets/foto1.jpeg';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function Sidebar() {
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { name: t('nav_home'), path: '/', icon: Home },
    { name: t('nav_experience'), path: '/experience', icon: User },
    { name: t('nav_achievements'), path: '/skills', icon: Award },
    { name: t('nav_projects'), path: '/projects', icon: Folder },
    { name: t('nav_dashboard'), path: '/dashboard', icon: LayoutDashboard },
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 z-50 origin-left shadow-[0_0_10px_rgba(16,185,129,0.5)] hidden md:block"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-[260px] fixed top-0 left-0 h-screen bg-white dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-gray-800/60 px-5 py-8 z-40 overflow-y-auto transition-colors duration-300">
        
        {/* Brand/Profile Section */}
        <div className="flex flex-col items-center">
           {/* Profile Picture */}
           <div className="w-[110px] h-[110px] rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/50 mb-5 overflow-hidden">
              <img 
                src={fotoProfil} 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
           </div>
           
           <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white mb-5 transition-colors duration-300">
             Hamka <BadgeCheck className="w-[18px] h-[18px] text-blue-500" fill="currentColor" stroke={theme === 'dark' ? '#0a0a0a' : '#ffffff'} strokeWidth={2} />
           </h2>
           
           {/* Toggles Placeholder */}
           <div className="flex items-center gap-4 w-full justify-center px-1 mb-2">
             {/* Language Toggle */}
             <div className="flex items-center bg-gray-100 dark:bg-[#1c1c1c] rounded-full p-1 border border-gray-200 dark:border-gray-800/60 cursor-pointer transition-colors" onClick={() => toggleLang(lang === 'id' ? 'en' : 'id')}>
               <span className={`px-3 py-1.5 text-[11px] font-semibold rounded-full transition-colors ${lang === 'en' ? 'bg-yellow-400 text-black shadow-sm font-bold' : 'text-gray-500 dark:text-gray-400'}`}>US</span>
               <span className={`px-3 py-1.5 text-[11px] font-semibold rounded-full transition-colors ${lang === 'id' ? 'bg-yellow-400 text-black shadow-sm font-bold' : 'text-gray-500 dark:text-gray-400'}`}>ID</span>
             </div>
             {/* Theme Toggle */}
             <div className="flex items-center bg-gray-100 dark:bg-[#1c1c1c] rounded-full p-1 border border-gray-200 dark:border-gray-800/60 gap-3 cursor-pointer transition-colors" onClick={toggleTheme}>
               <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700/50' : 'bg-transparent'}`}>
                 <Sun className={`w-4 h-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`} />
               </div>
               <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700/50' : 'bg-transparent'}`}>
                 <Moon className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`} />
               </div>
             </div>
           </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800/60 w-full my-8 transition-colors duration-300" />

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 flex-grow">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-5 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? 'bg-gray-100 dark:bg-[#1c1c1c] text-gray-900 dark:text-white font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-gray-800 dark:text-gray-300' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400'} stroke-[1.5] transition-colors`} />
                  <span className="text-[15px]">{link.name}</span>
                </div>
                {isActive && <ArrowRight className="w-[18px] h-[18px] text-gray-500" strokeWidth={1.5} />}
              </Link>
            );
          })}
          
          <a 
            href="https://wa.me/6285702480395" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-between px-5 py-3 rounded-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 group"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400 stroke-[1.5] transition-colors" />
              <span className="text-[15px]">{t('nav_contact')}</span>
            </div>
          </a>
        </nav>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] bg-[#1c1c1c]/95 backdrop-blur-xl border border-gray-800/80 py-3 px-6 rounded-2xl flex items-center justify-between z-50 shadow-2xl">
        {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`p-2.5 rounded-xl transition-all duration-300 flex flex-col items-center gap-1 ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 stroke-[1.5]" />
                <span className="text-[9px] font-medium hidden xs:block">{link.name}</span>
              </Link>
            );
          })}
          <a 
            href="https://wa.me/6285702480395" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2.5 rounded-xl transition-all duration-300 flex flex-col items-center gap-1 text-gray-400 hover:text-white"
          >
            <Mail className="w-5 h-5 stroke-[1.5]" />
            <span className="text-[9px] font-medium hidden xs:block">Kontak</span>
          </a>
      </nav>
    </>
  );
}