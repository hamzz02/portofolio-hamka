import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Dashboard() {
  const { lang } = useLanguage();
  const [userData, setUserData] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [recentCommitsCount, setRecentCommitsCount] = useState(1);

  const username = 'hamzz02';

  // Fetch live GitHub User Info & Public Events
  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (userRes.ok) {
          const data = await userRes.json();
          setUserData(data);
        }

        // Fetch live events to count today's commits
        const eventsRes = await fetch(`https://api.github.com/users/${username}/events`);
        if (eventsRes.ok) {
          const events = await eventsRes.json();
          const todayStr = new Date().toISOString().split('T')[0];
          
          let todayCommits = 0;
          events.forEach(evt => {
            if (evt.type === 'PushEvent' && evt.created_at.startsWith(todayStr)) {
              todayCommits += evt.payload?.commits?.length || 1;
            }
          });

          if (todayCommits > 0) {
            setRecentCommitsCount(todayCommits);
          }
        }
      } catch (err) {
        console.error('Error fetching GitHub live data:', err);
      }
    }
    fetchGitHubData();
  }, [username]);

  // Generate standard 2026 GitHub Calendar (Jan -> Dec)
  const generate2026CalendarGrid = () => {
    const monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weeks = [];
    const monthLabels = [];

    // Full year 2026 (Jan 1, 2026 -> Dec 31, 2026)
    const startDate = new Date(2026, 0, 1); // Jan 1, 2026
    let lastMonth = -1;

    for (let w = 0; w < 53; w++) {
      const daysInWeek = [];
      for (let d = 0; d < 7; d++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + (w * 7 + d));
        const monthIndex = currentDate.getMonth();

        // Register month label position when month changes
        if (d === 0 && monthIndex !== lastMonth && monthIndex < 12) {
          lastMonth = monthIndex;
          monthLabels.push({
            name: monthsNames[monthIndex],
            colIndex: w
          });
        }

        let count = 0;
        let level = 0;

        // Exact match of user's 2026 commits from screenshot:
        // Jan 5
        if (w === 0 && d === 1) { count = 1; level = 1; }
        // Late Mar
        else if (w === 12 && d === 4) { count = 1; level = 1; }
        // Mid Apr
        else if (w === 15 && d === 3) { count = 1; level = 1; }
        // Mid & Late May
        else if (w === 20 && d === 2) { count = 1; level = 1; }
        else if (w === 21 && d === 4) { count = 1; level = 1; }
        // June (Peak active period in June)
        else if (w === 23 && d === 1) { count = 3; level = 2; }
        else if (w === 24 && d === 2) { count = 5; level = 4; }
        else if (w === 24 && d === 3) { count = 6; level = 4; }
        else if (w === 25 && d === 4) { count = 2; level = 2; }
        else if (w === 26 && d === 2) { count = 2; level = 2; }
        // July
        else if (w === 27 && d === 0) { count = 1; level = 1; }
        else if (w === 28 && d === 3) { count = 1; level = 1; }
        else if (w === 30 && d === 4) { count = 2; level = 2; }
        // AUGUST 5, 2026 (Wednesday) - Right under 'Aug'!
        else if (w === 31 && d === 3) { 
          count = recentCommitsCount; 
          level = 3; 
        }

        const year = currentDate.getFullYear();
        const monthName = monthsNames[monthIndex];
        const dayNum = currentDate.getDate();

        daysInWeek.push({
          date: `${dayNum} ${monthName} ${year}`,
          count,
          level
        });
      }
      weeks.push(daysInWeek);
    }

    return { weeks, monthLabels };
  };

  const { weeks, monthLabels } = generate2026CalendarGrid();

  // Helper for yellow tile color scheme
  const getTileColor = (level) => {
    switch (level) {
      case 1: return 'bg-[#4d4814] border border-[#6b641c]'; // Muted dark yellow
      case 2: return 'bg-[#857b1d]';                          // Soft yellow
      case 3: return 'bg-[#eab308]';                          // Bright yellow
      case 4: return 'bg-[#fef08a] shadow-[0_0_8px_rgba(254,240,138,0.8)]'; // Glowing pale yellow
      default: return 'bg-[#1c1c1c] border border-[#262626]';  // Dark empty block
    }
  };

  const popularRepos = [
    {
      name: 'hamzz',
      desc: 'Personal configuration & repository',
      lang: 'CSS',
      langColor: 'bg-purple-500',
      url: 'https://github.com/hamzz02/hamzz'
    },
    {
      name: 'tugas-backend',
      desc: 'Nama: Hamka Ibnu zufar NIM: V3424056',
      lang: 'PHP',
      langColor: 'bg-indigo-500',
      url: 'https://github.com/hamzz02/tugas-backend'
    },
    {
      name: 'cobaa cobaa',
      desc: 'Praktikum & backend experiments',
      lang: 'PHP',
      langColor: 'bg-indigo-500',
      url: 'https://github.com/hamzz02'
    },
    {
      name: 'sewa_alat_band',
      desc: 'Equipment Rental System (KRATAK FC)',
      lang: 'TypeScript',
      langColor: 'bg-blue-500',
      url: 'https://github.com/hamzz02/sewa_alat_band'
    },
    {
      name: 'KRATAK FC',
      desc: 'Web application & management system',
      lang: 'PHP / Blade',
      langColor: 'bg-indigo-500',
      url: 'https://github.com/hamzz02'
    },
    {
      name: 'portofolio hamka',
      desc: 'Personal portfolio website built with React & Tailwind CSS',
      lang: 'JavaScript',
      langColor: 'bg-yellow-400',
      url: 'https://github.com/hamzz02/portofolio-hamka'
    }
  ];

  const totalContributions = 27 + (recentCommitsCount > 0 ? recentCommitsCount : 1);

  return (
    <section id="dashboard" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 w-full max-w-6xl transition-colors">
      
      {/* Header */}
      <div className="mb-10 sm:mb-12 border-b border-gray-200 dark:border-gray-800/80 pb-8 transition-colors">
        <h2 className="text-2xl sm:text-3xl font-black mb-2 text-gray-900 dark:text-white tracking-tight flex items-center gap-3 transition-colors">
          {lang === 'en' ? 'Dashboard' : 'Dasbor'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm max-w-3xl leading-relaxed transition-colors">
          {lang === 'en'
            ? 'My personal dashboard built with React API routes, visualizing development statistics and real-time contributions.'
            : 'Dasbor pribadi saya yang dibangun dengan rute API Next.js/React, memvisualisasikan statistik pengembangan dan kontribusi secara real-time.'}
        </p>
      </div>

      {/* Main GitHub Contributions Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-[#1e1e1e] rounded-2xl p-5 sm:p-7 shadow-2xl mb-10 transition-colors"
      >
        {/* Section Title */}
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5">
            <GithubIcon className="w-5 h-5 text-gray-900 dark:text-white" />
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {lang === 'en' ? 'GitHub Contributions' : 'Kontribusi GitHub'}
            </h3>
          </div>
          <span className="text-xs font-mono text-gray-400">@{username}</span>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 transition-colors">
          {lang === 'en' ? 'My GitHub activity over the past year.' : 'Aktivitas GitHub saya selama setahun terakhir.'}
        </p>

        {/* 4 Cards with Yellow Stats Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          
          <div className="bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#222] rounded-xl p-4 text-center transition-colors">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block mb-1">
              {lang === 'en' ? 'Total' : 'Total'}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-yellow-400 font-mono">
              {totalContributions}
            </span>
          </div>

          <div className="bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#222] rounded-xl p-4 text-center transition-colors">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block mb-1">
              {lang === 'en' ? 'This Week' : 'Minggu ini'}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-yellow-400 font-mono">
              {recentCommitsCount}
            </span>
          </div>

          <div className="bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#222] rounded-xl p-4 text-center transition-colors">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block mb-1">
              {lang === 'en' ? 'Best Day' : 'Terbaik'}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-yellow-400 font-mono">
              6
            </span>
          </div>

          <div className="bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#222] rounded-xl p-4 text-center transition-colors">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block mb-1">
              {lang === 'en' ? 'Average' : 'Rata-rata'}
            </span>
            <span className="text-2xl sm:text-3xl font-bold text-yellow-400 font-mono">
              0.1 <span className="text-xs font-sans font-normal text-gray-400">/ hari</span>
            </span>
          </div>

        </div>

        {/* Standard 2026 GitHub Calendar (Jan -> Dec) */}
        <div className="overflow-x-auto pb-3">
          <div className="min-w-[760px]">
            
            {/* Month Headers: Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec */}
            <div className="pl-7 grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1 text-[11px] font-mono text-gray-400 mb-2 h-4 relative">
              {monthLabels.map((m, idx) => (
                <div
                  key={idx}
                  style={{ gridColumnStart: m.colIndex + 1 }}
                  className="col-span-4 text-left font-sans text-xs text-gray-400"
                >
                  {m.name}
                </div>
              ))}
            </div>

            {/* Grid with Day Labels (Mon, Wed, Fri) on the left */}
            <div className="flex gap-2 items-start">
              {/* Day Labels Column */}
              <div className="flex flex-col justify-between h-[106px] text-[10px] font-mono text-gray-500 pt-1 shrink-0">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* 53 Columns x 7 Rows Grid */}
              <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1 grow">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="grid grid-rows-7 gap-1">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredCell(day)}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`w-3 h-3 rounded-[2.5px] transition-all duration-200 hover:scale-125 hover:z-10 cursor-pointer ${getTileColor(day.level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend & Tooltip Footer */}
            <div className="flex items-center justify-between mt-4 text-xs text-gray-400 font-mono">
              <div>
                {hoveredCell && hoveredCell.count > 0 ? (
                  <span className="text-yellow-400 font-bold">
                    {hoveredCell.count} kontribusi ({hoveredCell.date})
                  </span>
                ) : (
                  <span>{totalContributions} kontribusi pada 2026</span>
                )}
              </div>
              
              <div className="flex items-center gap-1.5 text-gray-400">
                <span>Sedikit</span>
                <div className="w-3 h-3 rounded-[2.5px] bg-[#1c1c1c] border border-[#262626]" />
                <div className="w-3 h-3 rounded-[2.5px] bg-[#4d4814]" />
                <div className="w-3 h-3 rounded-[2.5px] bg-[#857b1d]" />
                <div className="w-3 h-3 rounded-[2.5px] bg-[#eab308]" />
                <div className="w-3 h-3 rounded-[2.5px] bg-[#fef08a]" />
                <span>Banyak</span>
              </div>
            </div>

          </div>
        </div>

      </motion.div>

      {/* GitHub Profile & Repositories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Profile Card */}
        <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-[#1e1e1e] rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-colors">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={userData?.avatar_url || `https://avatars.githubusercontent.com/u/180908543?v=4`}
                alt={username}
                className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover shadow-md"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {username}
                </h4>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                  Hamka Ibnu Zufar
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-[#1e1e1e] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-xl">
                🦈
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900 dark:text-white block">Pull Shark</span>
                <span className="text-[10px] text-gray-500 font-mono">GitHub Achievement</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 dark:border-[#1e1e1e] mt-6">
            <div className="bg-gray-50 dark:bg-[#141414] p-2.5 rounded-xl text-center">
              <span className="text-[9px] font-mono text-gray-500 uppercase block">Repos</span>
              <span className="text-base font-extrabold text-gray-900 dark:text-white font-mono">
                {userData?.public_repos ?? 8}
              </span>
            </div>
            <div className="bg-gray-50 dark:bg-[#141414] p-2.5 rounded-xl text-center">
              <span className="text-[9px] font-mono text-gray-500 uppercase block">Followers</span>
              <span className="text-base font-extrabold text-gray-900 dark:text-white font-mono">
                {userData?.followers ?? 1}
              </span>
            </div>
            <div className="bg-gray-50 dark:bg-[#141414] p-2.5 rounded-xl text-center">
              <span className="text-[9px] font-mono text-gray-500 uppercase block">Following</span>
              <span className="text-base font-extrabold text-gray-900 dark:text-white font-mono">
                {userData?.following ?? 0}
              </span>
            </div>
          </div>
        </div>

        {/* Popular Repositories */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-[#1e1e1e] rounded-2xl p-6 shadow-xl transition-colors">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-yellow-400" />
            {lang === 'en' ? 'Popular Repositories' : 'Repositori Utama'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {popularRepos.slice(0, 4).map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#222] hover:border-yellow-400/50 rounded-xl p-3.5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-xs text-blue-600 dark:text-blue-400 group-hover:text-yellow-400 font-mono transition-colors">
                      {repo.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-black/20 text-[9px] text-gray-400 font-mono border border-gray-800">
                      Public
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2">
                    {repo.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 pt-2 mt-2 border-t border-gray-200 dark:border-[#222]">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  <span>{repo.lang}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
