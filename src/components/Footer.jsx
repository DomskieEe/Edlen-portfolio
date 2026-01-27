import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2 className="logo gradient-text">Edlen Dev</h2>
                        <p className="footer-bio">
                            Building robust digital solutions with passion and precision.
                            Let's create something great together.
                        </p>
                        <div className="status-widget">
                            <span className="pulse-mini"></span>
                            Available for New Projects
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h4 className="heading">Get In Touch</h4>
                        <ul>
                            <li><Mail size={18} /> dominicgodoy12@gmail.com</li>
                            <li><Phone size={18} /> 09957989967</li>
                            <li><MapPin size={18} /> Imus, Cavite, Philippines</li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4 className="heading">Follow Me</h4>
                        <div className="social-links">
                            <a href="https://github.com/DomskieEe" target="_blank" rel="noreferrer" className="social-icon">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/dominic-godoy-53a48a36b/" target="_blank" rel="noreferrer" className="social-icon">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} Edlen Dominic L. Godoy. All rights reserved.</p>

                    <p className="footer-quote">
                        "The best way to predict the future is to invent it."
                        <span className="quote-author"> — Alan Kay</span>
                    </p>

                    <button className="scroll-btn" onClick={scrollToTop}>
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>

            <style>{`
        .footer {
          padding: 5rem 0 2rem;
          border-top: 1px solid var(--border-color);
          background: var(--bg-primary);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-bio {
          margin-top: 1.5rem;
          color: var(--text-secondary);
          max-width: 300px;
        }

        .footer-brand .logo {
          font-size: 2rem;
          font-weight: 800;
        }

        .status-widget {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          margin-top: 1.5rem;
          padding: 0.5rem 1rem;
          background: rgba(39, 201, 63, 0.05);
          border: 1px solid rgba(39, 201, 63, 0.1);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #27c93f;
        }

        .pulse-mini {
          width: 6px;
          height: 6px;
          background: #27c93f;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7);
          animation: pulse-mini 2s infinite;
        }

        @keyframes pulse-mini {
          0% { box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(39, 201, 63, 0); }
          100% { box-shadow: 0 0 0 0 rgba(39, 201, 63, 0); }
        }

        .footer-contact h4, .footer-social h4 {
          margin-bottom: 2rem;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-primary);
        }

        .footer-contact ul li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .footer-contact ul li:hover {
          color: var(--accent-primary);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-links a {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .social-links a:hover {
          background: var(--accent-primary);
          color: #fff;
          transform: translateY(-5px);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .copyright {
          flex: 1;
        }

        .footer-quote {
          font-style: italic;
          color: var(--text-secondary);
          max-width: 400px;
          text-align: right;
          flex: 1;
        }

        .quote-author {
          font-weight: 600;
          color: var(--accent-primary);
          font-style: normal;
          margin-left: 0.5rem;
          white-space: nowrap;
        }

        .scroll-btn {
          flex-shrink: 0;
        }

        .scroll-btn {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          background: var(--bg-tertiary);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .scroll-btn:hover {
          background: var(--accent-primary);
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          .footer-content {
            text-align: center;
            justify-items: center;
          }
          .footer-bio {
            margin-right: auto;
            margin-left: auto;
          }
          .footer-contact ul li {
            justify-content: center;
          }
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
