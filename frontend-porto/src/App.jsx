import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="bg-noise dark:opacity-100 opacity-30"></div>
          {/* Update layout: flex-col on mobile, flex-row on desktop */}
          <div className="bg-gray-50 dark:bg-[#0a0a0a] min-h-screen text-gray-900 dark:text-white selection:bg-emerald-500 selection:text-white font-sans flex flex-col md:flex-row overflow-x-hidden transition-colors duration-300">
            <Sidebar />

        {/* Main content wrapper: add left margin for desktop sidebar and bottom padding for mobile bottom nav */}
        <main className="grow md:ml-[260px] pb-20 md:pb-0 min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </main>
      </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App