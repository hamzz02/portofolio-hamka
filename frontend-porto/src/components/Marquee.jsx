import { motion } from 'framer-motion';

export default function Marquee() {
  const techs = [
    "LARAVEL", "NODE.JS", "EXPRESS.JS", "TYPESCRIPT", "PRISMA ORM", 
    "VUE.JS", "INERTIA.JS", "REACT.JS", "REACT NATIVE", "SOCKET.IO", 
    "MYSQL", "TAILWIND CSS", "FCM V1 API", "EXPO", "PM2"
  ];

  return (
    <div id="marquee" className="w-full bg-gray-50 dark:bg-[#070707] py-6 border-y border-gray-200 dark:border-gray-900/60 overflow-hidden flex relative select-none transition-colors">
      {/* PERBAIKAN: Mengganti bg-gradient menjadi bg-linear menyesuaikan Tailwind v4 */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none transition-colors" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none transition-colors" />

      {/* FITUR 4: Animasi Teks Berjalan Tanpa Henti (Infinite Loop) */}
      <motion.div 
        className="flex whitespace-nowrap gap-16 text-xs md:text-sm tracking-[0.3em] font-bold text-gray-400 dark:text-gray-500 transition-colors"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {/* Di-render beberapa kali agar looping berjalan mulus di layar lebar */}
        {[...techs, ...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300">{tech}</span>
            <span className="text-emerald-500/20 dark:text-emerald-500/30">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}