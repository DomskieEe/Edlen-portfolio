import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Activity, Code } from 'lucide-react';

const GithubStats = () => {
    const stats = [
        { label: "Public Repos", value: "10+", icon: <GitBranch size={16} /> },
        { label: "Core Tech", value: "Full Stack", icon: <Code size={16} /> },
        { label: "Activity", value: "Daily", icon: <Activity size={16} /> }
    ];

    return (
        <section className="github-section section-padding">
            <div className="container">
                <div className="github-card glass">
                    <div className="github-content">
                        <div className="github-info">
                            <div className="github-header">
                                <Github size={32} className="accent-primary" />
                                <h2 className="heading">Development <span className="gradient-text">Activity</span></h2>
                            </div>
                            <p>Maintaining a consistent coding rhythm across both public experiments and private enterprise environments. While many of my core projects live in private repositories, my commitment to clean logic stays the same.</p>

                            <div className="stats-list">
                                {stats.map(s => (
                                    <div key={s.label} className="stat-item">
                                        <span className="stat-icon">{s.icon}</span>
                                        <span className="stat-val">{s.value}</span>
                                        <span className="stat-label">{s.label}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="https://github.com/DomskieEe" target="_blank" rel="noreferrer" className="btn btn-outline github-btn">
                                Visit GitHub Profile
                            </a>
                        </div>

                        <div className="github-visual">
                            <div className="grid-decoration"></div>
                            <div className="activity-placeholder">
                                <div className="activity-dots">
                                    {[...Array(40)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ delay: i * 0.01 }}
                                            className={`activity-dot ${i % 7 === 0 ? 'active' : ''}`}
                                        />
                                    ))}
                                </div>
                                <span className="activity-label">Recent Contributions Intensity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .github-section {
          background: var(--bg-secondary);
          margin-top: 6rem;
        }

        .github-card {
          padding: 4rem;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
        }

        .github-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .github-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .github-card p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .stats-list {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .stat-icon {
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }

        .stat-val {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .github-visual {
          position: relative;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2.5rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .activity-dots {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 10px;
        }

        .activity-dot {
          width: 15px;
          height: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .activity-dot.active {
          background: var(--accent-primary);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .activity-label {
          display: block;
          margin-top: 2rem;
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 992px) {
          .github-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default GithubStats;
