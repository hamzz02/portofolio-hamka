import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  id: {
    // Nav
    nav_home: "Beranda",
    nav_experience: "Pengalaman",
    nav_achievements: "Pencapaian",
    nav_projects: "Proyek",
    nav_dashboard: "Dasbor",
    nav_contact: "Kontak",
    
    // Hero
    hero_greeting: "Halo, saya Hamka Ibnu Zufar",
    hero_location: "Berdomisili di Surakarta, Indonesia ID",
    hero_status: "Onsite / Remote",
    hero_desc1: "Mahasiswa Teknik Informatika Universitas Sebelas Maret (UNS) yang berfokus pada Backend Development. Keseharian saya berpusat pada memecahkan masalah logika, merancang arsitektur database, dan membangun REST API efisien dengan ekosistem Node.js (Express) dan Laravel (MySQL), serta sistem real-time berbasis WebSockets (Socket.io).",
    hero_desc2: "Meskipun berfokus di \"dapur\" aplikasi, saya juga fleksibel mengerjakan sisi Frontend (React.js, Vue.js, Tailwind CSS) dan Mobile (React Native). Dengan pemahaman Full-stack ini, saya telah membangun berbagai project seperti platform e-commerce, sistem sewa alat, hingga aplikasi tracking lokasi karyawan real-time.",
    hero_button_chat: ">_ NGOBROL BARENG",
    hero_cta_cv: "Unduh CV (PDF)",
    hero_cta_projects: "Lihat Proyek",
    hero_cta_contact: "Hubungi Saya",
    hero_skills_title: "Keahlian Technical",
    hero_skills_subtitle: "Keahlian profesional & teknologi yang saya kuasai.",
    hero_featured_title: "Proyek Unggulan",
    hero_featured_subtitle: "Beberapa proyek terbaik yang telah saya kembangkan.",
    
    // Status & Utility
    status_available: "Terbuka untuk Kerja (Available)",
    copy_email: "Salin Email",
    email_copied: "Email berhasil disalin ke clipboard!",
    download_cv: "Unduh CV PDF",

    // Skills (Pencapaian)
    ach_title: "Pencapaian",
    ach_desc: "Koleksi sertifikat dan lencana yang telah saya raih sepanjang perjalanan profesional dan akademik saya.",
    ach_search: "Cari...",
    ach_filter_type: "Filter berdasarkan Tipe",
    ach_filter_category: "Filter berdasarkan Kategori",
    ach_total: "Total",
    ach_issued: "DITERBITKAN PADA",
    
    // Experience
    exp_title: "Pengalaman Kerja.",
    exp_desc: "> Pengalaman profesional dan kontribusi teknis industri.",
    edu_title: "Pendidikan.",
    cert_title: "Sertifikat.",
    exp_gpa: "IPK (GPA):",
    exp_issued: "Diterbitkan",
    
    // Projects
    proj_title: "Project & Eksperimen.",
    proj_desc: "> Beberapa project yang pernah saya bikin. Klik pada kartu proyek untuk melihat",
    proj_desc_highlight: "dokumentasi lengkap & arsitektur teknis",
    proj_view_doc: "Lihat Dokumentasi",
    proj_modal_desc: "Deskripsi Proyek",
    proj_modal_feat: "Fitur Kunci & Kontribusi Teknis",
    proj_modal_tech: "Teknologi Yang Digunakan",
    
    // Footer
    foot_title: "Mari Terhubung!",
    foot_desc: "Lagi cari developer buat tim kamu? Atau sekadar mau sharing dan ngobrolin soal tech? Feel free buat reach out lewat kontak di bawah, ya!",

    // Generic
    view_more: "Lihat Selengkapnya"
  },
  en: {
    // Nav
    nav_home: "Home",
    nav_experience: "Experience",
    nav_achievements: "Achievements",
    nav_projects: "Projects",
    nav_dashboard: "Dashboard",
    nav_contact: "Contact",
    
    // Hero
    hero_greeting: "Hi, I'm Hamka Ibnu Zufar",
    hero_location: "Based in Surakarta, Indonesia ID",
    hero_status: "Onsite / Remote",
    hero_desc1: "An Informatics Engineering student at Sebelas Maret University (UNS) focusing on Backend Development. My daily routine revolves around solving logical challenges, designing database architectures, and building efficient REST APIs using Node.js (Express) and Laravel (MySQL), as well as real-time WebSocket systems (Socket.io).",
    hero_desc2: "While my primary focus is on backend architecture, I'm also flexible working on the Frontend (React.js, Vue.js, Tailwind CSS) and Mobile (React Native). This full-stack background has enabled me to build diverse projects including e-commerce platforms, equipment rental systems, and real-time employee tracking apps.",
    hero_button_chat: ">_ LET'S CHAT",
    hero_cta_cv: "Download CV (PDF)",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Contact Me",
    hero_skills_title: "Technical Skills",
    hero_skills_subtitle: "My professional skills & technologies I master.",
    hero_featured_title: "Featured Projects",
    hero_featured_subtitle: "Selected top projects I have delivered.",
    
    // Status & Utility
    status_available: "Available for Hire",
    copy_email: "Copy Email",
    email_copied: "Email copied to clipboard!",
    download_cv: "Download CV PDF",

    // Skills (Pencapaian)
    ach_title: "Achievements",
    ach_desc: "A collection of certificates and badges I have earned throughout my professional and academic journey.",
    ach_search: "Search...",
    ach_filter_type: "Filter by Type",
    ach_filter_category: "Filter by Category",
    ach_total: "Total",
    ach_issued: "ISSUED ON",
    
    // Experience
    exp_title: "Work Experience.",
    exp_desc: "> Professional experience and technical industry contributions.",
    edu_title: "Education.",
    cert_title: "Certificates.",
    exp_gpa: "GPA:",
    exp_issued: "Issued",
    
    // Projects
    proj_title: "Projects & Experiments.",
    proj_desc: "> Some projects I've built. Click on a project card to view",
    proj_desc_highlight: "full documentation & technical architecture",
    proj_view_doc: "View Documentation",
    proj_modal_desc: "Project Description",
    proj_modal_feat: "Key Features & Technical Contributions",
    proj_modal_tech: "Technologies Used",
    
    // Footer
    foot_title: "Let's Connect!",
    foot_desc: "Looking for a developer for your team? Or just want to share and talk about tech? Feel free to reach out via the contacts below!",
    
    // Generic
    view_more: "View More"
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'id'; // Default to ID
  });

  const toggleLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
