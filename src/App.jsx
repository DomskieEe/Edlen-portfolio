import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TerminalAbout from './components/TerminalAbout';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Skills from './components/Skills';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <main>
        <Hero />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <TerminalAbout />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Experience />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Philosophy />
        </motion.div>

        <div className="chapter-divider"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <GithubStats />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>
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
