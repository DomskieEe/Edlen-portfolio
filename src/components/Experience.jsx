import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'BLSi-ph',
            role: 'Junior Full Stack Developer',
            location: 'Arnaiz, Makati',
            period: 'July 2025 – Present',
            description: [
                'Developed and maintained React-based transactional interfaces for CnD and DMS modules.',
                'Implemented status-driven UI logic for approval workflows (approve, reject, post, etc.).',
                'Built dynamic forms, modals, and tabbed layouts using Tailwind CSS and React.',
                'Integrated frontend components with backend APIs (PHP, SQL) for real-time states.',
                'Optimized RBAC (Role-Based Access Control) and fixed backend workflow issues.'
            ],
            tech: ['React', 'Tailwind CSS', 'PHP', 'SQL', 'Stored Procedures']
        },
        {
            company: 'B. Cabebe',
            role: 'IT Developer Intern',
            location: 'Pasong Tamo, Makati',
            period: 'February 2025 – June 2025',
            description: [
                'Designed and developed full-stack web applications using Python, Flask, and MongoDB.',
                'Built responsive front-end interfaces with HTML, CSS, JavaScript, and Bootstrap.',
                'Prototyped an AI-powered chatbot system using Google Generative AI.',
                'Contributed to IoT and machine learning proof-of-concept projects (IoTPod, NeuroNet).',
                'Managed code using Git and followed structured development milestones.'
            ],
            tech: ['Python', 'Flask', 'MongoDB', 'IoT', 'AI Prototyping']
        }
    ];

    return (
        <section id="experience" className="experience section-padding">
            <div className="container">
                <h2 className="section-title heading">Professional <span className="gradient-text">Experience</span></h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="timeline-item"
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass">
                                <div className="timeline-header">
                                    <div className="role-info">
                                        <h3 className="role">{exp.role}</h3>
                                        <div className="company-meta">
                                            <span className="company"><Briefcase size={16} /> {exp.company}</span>
                                            <span className="location"><MapPin size={16} /> {exp.location}</span>
                                        </div>
                                    </div>
                                    <span className="period"><Calendar size={16} /> {exp.period}</span>
                                </div>

                                <ul className="exp-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="tech-stack">
                                    {exp.tech.map((t, i) => (
                                        <span key={`${exp.company}-${t}-${i}`} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .experience {
          background-color: var(--bg-secondary);
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 20px;
          width: 2px;
          background: linear-gradient(to bottom, transparent, var(--accent-primary), transparent);
        }

        .timeline-item {
          position: relative;
          padding-left: 60px;
          margin-bottom: 4rem;
        }

        .timeline-dot {
          position: absolute;
          left: 11px;
          top: 0;
          width: 20px;
          height: 20px;
          background: var(--accent-primary);
          border: 4px solid var(--bg-primary);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--accent-glow);
          z-index: 2;
        }

        .timeline-content {
          padding: 2rem;
          border-radius: 16px;
          transition: var(--transition-smooth);
        }

        .timeline-content:hover {
          border-color: var(--accent-primary);
          transform: translateX(10px);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .role {
          font-size: 1.5rem;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }

        .company-meta {
          display: flex;
          gap: 1.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .company, .location, .period {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .period {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .exp-description {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }

        .exp-description li {
          margin-bottom: 0.6rem;
          position: relative;
          padding-left: 1.2rem;
        }

        .exp-description li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .tech-tag {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.3rem 0.8rem;
          background: rgba(0, 210, 255, 0.05);
          color: var(--accent-primary);
          border: 1px solid rgba(0, 210, 255, 0.1);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .timeline-header {
            flex-direction: column;
          }
          .period {
            order: -1;
            margin-bottom: 1rem;
          }
          .company-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Experience;
