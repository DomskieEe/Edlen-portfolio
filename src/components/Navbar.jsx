import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling on Home page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/', hash: '#skills' },
    { name: 'Contact', action: true },
  ];

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (link.action) {
      onContactClick();
      return;
    }

    if (link.path === '/') {
      if (location.pathname !== '/') {
        navigate(link.path + (link.hash || ''));
      } else if (link.hash) {
        const element = document.getElementById(link.hash.substring(1));
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const isActive = (link) => {
    if (link.path === '/' && link.hash) return false; // Don't highlight hash links on home as active pages
    if (link.path === '/' && location.pathname === '/') return location.hash === '' || location.hash === '#home';
    return location.pathname === link.path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <Link
          to="/"
          className="logo gradient-text"
          onClick={() => window.scrollTo(0, 0)}
        >
          {/* Using text directly as motion component wrapper might cause issues with Link */}
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Edlen Dev
          </motion.span>
        </Link>

        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.action ? (
                <motion.button
                  className="nav-btn-link"
                  onClick={() => handleNavClick(link)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.name}
                </motion.button>
              ) : (
                <Link
                  to={link.path + (link.hash || '')}
                  className={isActive(link) ? 'active' : ''}
                  onClick={(e) => {
                    // For same-page hash links, prevent default router behavior to handle smooth scroll manually
                    if (link.path === '/' && location.pathname === '/' && link.hash) {
                      e.preventDefault();
                      handleNavClick(link);
                    }
                  }}
                >
                  <motion.span whileHover={{ y: -2 }} whileTap={{ y: 0 }} style={{ display: 'inline-block' }}>
                    {link.name}
                  </motion.span>
                  {isActive(link) && (
                    <motion.div
                      layoutId="activeNav"
                      className="active-indicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="/RESUME.pdf"
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
                  {link.action ? (
                    <button onClick={() => handleNavClick(link)} className="mobile-link-btn">
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path + (link.hash || '')}
                      className={isActive(link) ? 'active' : ''}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
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
          display: inline-block;
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

        .nav-links a, .nav-btn-link {
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.2rem 0;
          background: none;
          border: none;
          font-size: 1rem;
          cursor: pointer;
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

        .mobile-nav-links a, .mobile-link-btn {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: none;
          border: none;
          cursor: pointer;
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
