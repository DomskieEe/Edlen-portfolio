import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="portfolio-app">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <style>{`
        .chapter-divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, transparent, var(--border-color), transparent);
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default App;
