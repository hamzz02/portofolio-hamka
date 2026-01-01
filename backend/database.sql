CREATE DATABASE IF NOT EXISTS db_portofolio;
USE db_portofolio;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    tech VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (title, description, tech) VALUES 
('Sistem Akademik', 'Aplikasi manajemen data mahasiswa', 'PHP, MySQL'),
('E-Commerce Vue', 'Toko online sederhana', 'VueJS, Laravel');