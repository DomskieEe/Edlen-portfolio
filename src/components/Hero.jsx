import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Github, Mail, Download } from 'lucide-react';
import profilePic from '../assets/edlen.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="badge">Available for Work</span>
          <h1 className="hero-title">
            Building <span className="gradient-text">Scalable</span> & <br />
            Digital <span className="glow-text">Experiences</span>
          </h1>
          <p className="hero-description">
            Hi, I'm <span className="highlight">Edlen Dominic L. Godoy</span>. A Junior Full Stack Developer
            specializing in React, PHP, and Python. I build robust transactional systems
            with a focus on clean code and user-driven logic.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="/RESUME.pdf" download className="btn-primary btn-secondary">
              <Download size={18} /> Download Resume
            </a>
            <div className="hero-social-links">
              <a href="https://github.com/DomskieEe" target="_blank" rel="noreferrer" className="social-icon">
                <Github size={22} />
              </a>
              <a href="mailto:dominicgodoy12@gmail.com" className="social-icon">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-wrap"
        >
          <div className="image-aura"></div>
          <div className="image-container">
            <img src={profilePic} alt="Edlen Dominic L. Godoy" className="profile-img" />
          </div>
          <div className="experience-badge glass">
            <span className="exp-num">Full Stack</span>
            <span className="exp-text">Developer</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 100px;
          padding-bottom: 60px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--border-color) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(ellipse at center, black, transparent 80%);
          opacity: 0.1;
        }

        .blob {
          position: absolute;
          width: 600px;
          height: 600px;
          background: var(--accent-glow);
          filter: blur(100px);
          border-radius: 50%;
          opacity: 0.1;
          animation: float 20s infinite alternate;
        }

        .blob-1 {
          top: -100px;
          left: -100px;
        }

        .blob-2 {
          bottom: -150px;
          right: -100px;
          background: rgba(0, 119, 255, 0.2);
          animation-delay: -5s;
        }

        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(100px, 50px) scale(1.1); }
          100% { transform: translate(-50px, 100px) scale(0.9); }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 4rem;
          z-index: 10;
        }

        .badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(0, 210, 255, 0.1);
          border: 1px solid rgba(0, 210, 255, 0.2);
          color: var(--accent-primary);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 2rem;
          backdrop-filter: blur(5px);
        }

        .hero-title {
          font-size: clamp(3rem, 6vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .highlight {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-cta {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-social-links {
          display: flex;
          gap: 1.2rem;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .social-icon:hover {
          color: var(--accent-primary);
          transform: translateY(-3px);
        }

        /* Image Styling */
        .hero-image-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-aura {
          position: absolute;
          inset: -20px;
          background: var(--accent-primary);
          filter: blur(60px);
          opacity: 0.08;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morph 10s linear infinite;
        }

        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }

        .image-container {
          position: relative;
          width: 320px;
          height: 380px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transform: rotate(2deg);
          transition: var(--transition-smooth);
        }

        .image-container:hover {
          transform: rotate(0deg) scale(1.02);
          border-color: var(--accent-primary);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .experience-badge {
          position: absolute;
          bottom: 2rem;
          left: -2rem;
          padding: 1rem 1.5rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .exp-num {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--accent-primary);
        }

        .exp-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-cta {
            flex-direction: column;
            gap: 1.5rem;
          }
          .experience-badge {
            left: 0;
            bottom: -1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
