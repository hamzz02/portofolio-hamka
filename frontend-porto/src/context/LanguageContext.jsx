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
    hero_desc1: "Seorang Backend Developer dan Mahasiswa Teknik Informatika di Universitas Sebelas Maret (UNS) yang berdedikasi untuk membangun solusi digital yang berdampak. Saya spesialis dalam pengembangan sistem backend dan platform web menggunakan tech stack modern.",
    hero_desc2: "Fokus saya adalah merancang arsitektur database, RESTful API (Node.js, Laravel), serta sistem real-time (Socket.io) yang terstruktur dengan baik dan mudah dipelihara. Fleksibel juga di sisi Frontend (React, Vue, Tailwind) untuk membangun aplikasi modern yang scalable.",
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
    hero_desc1: "A Backend Developer and Informatics Engineering Student at Sebelas Maret University (UNS) dedicated to building impactful digital solutions. I specialize in developing backend systems and web platforms using modern tech stacks.",
    hero_desc2: "My focus is designing well-structured and maintainable database architectures, RESTful APIs (Node.js, Laravel), and real-time systems (Socket.io). I'm also flexible on the Frontend (React, Vue, Tailwind) to build scalable modern applications.",
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
