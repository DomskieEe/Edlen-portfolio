import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Award, ShieldCheck, FileJson, Network } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      icon: <Layout size={24} />,
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3/SASS']
    },
    {
      title: 'Backend',
      icon: <Code2 size={24} />,
      skills: ['PHP', 'Python', 'Flask', 'Node.js', 'RESTful APIs']
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      skills: ['MySQL', 'MongoDB', 'SQL Stored Procedures']
    },
    {
      title: 'Tools & Systems',
      icon: <Settings size={24} />,
      skills: ['Git', 'Crystal Reports', 'RBAC Systems', 'Networking Basics']
    }
  ];

  const certifications = [
    {
      title: 'Information Technology Specialist – Databases',
      date: 'May 2023',
      icon: <Database size={20} />,
      org: 'Certiport'
    },
    {
      title: 'Information Technology Specialist – HTML & CSS',
      date: 'January 2024',
      icon: <FileJson size={20} />,
      org: 'Certiport'
    },
    {
      title: 'Information Technology Specialist – Network Security',
      date: 'December 2024',
      icon: <ShieldCheck size={20} />,
      org: 'Certiport'
    }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <h2 className="section-title heading">Technical <span className="gradient-text">Expertise</span></h2>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card glass"
            >
              <div className="skill-icon-wrap">
                {group.icon}
              </div>
              <h3 className="group-title">{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill, i) => (
                  <span key={`${group.title}-${skill}-${i}`} className="skill-item">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="certifications-section">
          <div className="cert-header">
            <Award className="accent-icon" />
            <h3 className="heading">Professional Certifications</h3>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cert-card glass"
              >
                <div className="cert-icon-wrap">
                  {cert.icon}
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <div className="cert-meta">
                    <span className="cert-org">{cert.org}</span>
                    <span className="cert-sep">•</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .skills {
          background-color: var(--bg-primary);
          margin-top: 6rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .skill-card {
          padding: 2.5rem;
          border-radius: 20px;
          text-align: center;
          transition: var(--transition-smooth);
        }

        .skill-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-primary);
          box-shadow: 0 10px 30px rgba(0, 210, 255, 0.1);
        }

        .skill-icon-wrap {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 210, 255, 0.1);
          color: var(--accent-primary);
          border-radius: 12px;
        }

        .group-title {
          font-size: 1.35rem;
          margin-bottom: 1.5rem;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
        }

        .skill-item {
          font-size: 0.85rem;
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-secondary);
        }

        /* Certifications Styling */
        .certifications-section {
          margin-top: 4rem;
          margin-bottom: 4rem;
        }

        .cert-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .accent-icon {
          color: var(--accent-primary);
          width: 32px;
          height: 32px;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .cert-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          border-radius: 16px;
          transition: var(--transition-smooth);
        }

        .cert-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--accent-primary);
          transform: scale(1.02);
        }

        .cert-icon-wrap {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: rgba(var(--accent-primary), 0.1);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
        }

        .cert-title {
          font-size: 1rem;
          margin-bottom: 0.4rem;
          line-height: 1.4;
        }

        .cert-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .cert-sep {
          color: var(--text-muted);
        }

        @media (max-width: 600px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
