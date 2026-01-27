import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, Linkedin, Download } from 'lucide-react';

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section Tracking Logic
      const sections = ['home', 'about', 'experience', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', id: 'contact', action: true },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <motion.a
          href="#home"
          className="logo gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Edlen Dev
        </motion.a>

        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.action ? undefined : link.href}
                className={activeSection === link.id ? 'active' : ''}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    onContactClick();
                  }
                }}
                style={link.action ? { cursor: 'pointer' } : {}}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="active-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="/src/assets/RESUME.pdf"
            download
            className="btn-cv desktop-only"
          >
            <Download size={16} /> CV
          </a>
          <a href="https://github.com/DomskieEe" target="_blank" rel="noreferrer" className="nav-icon">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dominic-godoy-53a48a36b/" target="_blank" rel="noreferrer" className="nav-icon">
            <Linkedin size={20} />
          </a>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu glass"
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.action ? undefined : link.href}
                    className={activeSection === link.id ? 'active' : ''}
                    onClick={(e) => {
                      if (link.action) {
                        e.preventDefault();
                        onContactClick();
                      }
                      setIsOpen(false);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: 90px;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          height: 70px;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 800;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 2rem;
          border-radius: 50px;
          border: 1px solid var(--border-color);
          backdrop-filter: blur(10px);
        }

        .nav-links a {
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.2rem 0;
        }

        .nav-links a.active {
          color: var(--text-primary);
        }

        .active-indicator {
          position: absolute;
          bottom: -4px;
          width: 20px;
          height: 3px;
          background: var(--accent-primary);
          border-radius: 10px;
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-icon {
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .nav-icon:hover {
          color: var(--accent-primary);
        }

        .btn-cv {
          padding: 0.5rem 1.2rem;
          background: rgba(0, 210, 255, 0.1);
          border: 1px solid rgba(0, 210, 255, 0.3);
          border-radius: 50px;
          color: var(--accent-primary);
          font-size: 0.85rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition-fast);
          text-decoration: none;
        }

        .btn-cv:hover {
          background: var(--accent-primary);
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px var(--accent-glow);
        }

        .mobile-toggle {
          display: none;
          color: var(--text-primary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 1.5rem;
          right: 1.5rem;
          padding: 2rem;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1001;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }

        .mobile-nav-links a {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .mobile-nav-links a.active {
          color: var(--accent-primary);
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
