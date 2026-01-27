import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalAbout = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `const edlen = {
  role: "Junior Full Stack Developer",
  location: "Cavite, Philippines",
  passion: "Transactional Systems & IoT",
  problemSolver: true,
  currentFocus: ["Next.js", "AI Prototyping"],
  motto: "Code is like humor. When you have to explain it, it's bad."
};`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h2 className="section-title heading" style={{ textAlign: 'left' }}>
              Behind the <span className="gradient-text">Code</span>
            </h2>
            <p>
              I'm a dedicated developer who thrives on solving complex logic problems and building systems that make a difference.
              My journey started with a fascination for how things work under the hood, leading me to master the full stack—from
              pixel-perfect UIs to robust server-side workflows.
            </p>
            <p>
              Whether it's optimizing a SQL procedure or prototyping an AI-powered chatbot, I approach every challenge
              with a focus on scalability and user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="terminal-window glass"
          >
            <div className="terminal-header">
              <div className="buttons">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="title">edlen.js</span>
            </div>
            <div className="terminal-body">
              <pre><code>{displayText}<span className="cursor">|</span></code></pre>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .terminal-window {
          border-radius: 12px;
          overflow: hidden;
          font-family: 'Fira Code', 'Courier New', monospace;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }

        .terminal-header {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.8rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          border-bottom: 1px solid var(--glass-border);
        }

        .buttons {
          display: flex;
          gap: 0.6rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .terminal-header .title {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .terminal-body {
          padding: 2rem;
          background: rgba(5, 7, 10, 0.7);
        }

        pre {
          color: var(--text-primary);
          font-size: 0.95rem;
          white-space: pre-wrap;
          line-height: 1.6;
        }

        code {
          color: var(--accent-primary);
        }

        .cursor {
          animation: blink 1s infinite;
          color: var(--text-primary);
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default TerminalAbout;
