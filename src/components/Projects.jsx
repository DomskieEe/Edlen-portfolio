import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, X, CheckCircle2, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'UPHSD Job Portal & Appraisal System',
      category: 'Capstone Project',
      description: 'A comprehensive full-stack platform for University of Perpetual Help System DALTA. Includes RBAC, application tracking, and automated appraisal workflows.',
      tags: ['PHP', 'Python', 'SQL', 'Bootstrap'],
      details: {
        problem: 'The university needed a centralized system to bridge job seekers, employers, and HR staff while automating faculty appraisals.',
        solution: 'Built a multi-role web application with customized dashboards, automated evaluation scoring, and real-time application tracking.',
        challenges: 'Integrating complex appraisal metrics into a status-driven workflow required robust backend logic and SQL stored procedures.',
        roadmap: 'Phase 1: Database Schema -> Phase 2: RBAC & Auth -> Phase 3: Appraisal Logic -> Phase 4: HR Tracking.'
      },
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'IoTPod & NeuroNet',
      category: 'IoT / Machine Learning',
      description: 'Proof-of-concept projects integrated with IoT hardware and neural network models for specialized prototyping.',
      tags: ['IoT', 'Machine Learning', 'Python', 'Networking'],
      details: {
        problem: 'Exploring the intersection of edge computing and machine learning for real-time sensor analysis.',
        solution: 'Developed a Python-based ecosystem connecting MikroTik networks with localized AI models to process data streams.',
        challenges: 'Handling real-time data ingestion with minimal latency while ensuring secure network policies.',
        roadmap: 'Phase 1: IoT Hardware Setup -> Phase 2: Python Data Processing -> Phase 3: ML Model Integration.'
      },
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'AI-Powered Chatbot System',
      category: 'Artificial Intelligence',
      description: 'A prototype chatbot using Google Generative AI and XML-based data structures for intelligent user interactions.',
      tags: ['Google Generative AI', 'XML', 'Python', 'Flask'],
      details: {
        problem: 'Creating a domain-specific assistant capable of understanding structured XML data while using LLM capabilities.',
        solution: 'Paired Google Generative AI with a Flask backend to parse internal XML documents and provide context-aware answers.',
        challenges: 'Maintaining context across multi-turn conversations and ensuring high accuracy in data retrieval.',
        roadmap: 'Phase 1: XML Parsing -> Phase 2: LLM Integration -> Phase 3: Context Handling Middleware.'
      },
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <h2 className="section-title heading">Featured <span className="gradient-text">Projects</span></h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card glass"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-placeholder">
                <Code size={40} className="glow-text" />
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={`${project.id}-${tag}-${i}`} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="view-more gradient-text">
                  View Case Study <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="project-modal glass"
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              <div className="modal-content">
                <header className="modal-header">
                  <span className="project-category">{selectedProject.category}</span>
                  <h3 className="project-title heading">{selectedProject.title}</h3>
                  <div className="project-tags">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={`modal-${selectedProject.id}-${tag}-${i}`} className="tag">{tag}</span>
                    ))}
                  </div>
                </header>

                <div className="modal-body">
                  <div className="detail-section">
                    <h4 className="heading"><CheckCircle2 size={18} /> The Problem</h4>
                    <p>{selectedProject.details.problem}</p>
                  </div>
                  <div className="detail-section">
                    <h4 className="heading"><Code size={18} /> The Solution</h4>
                    <p>{selectedProject.details.solution}</p>
                  </div>
                  <div className="detail-section highlight-box">
                    <h4 className="heading">Key Challenges</h4>
                    <p>{selectedProject.details.challenges}</p>
                  </div>
                  <div className="detail-section">
                    <h4 className="heading">Development Roadmap</h4>
                    <p className="roadmap-text">{selectedProject.details.roadmap}</p>
                  </div>
                </div>

                <footer className="modal-footer">
                  <a href={selectedProject.github} className="btn-primary">
                    <Github size={18} /> View Code
                  </a>
                  <a href={selectedProject.link} className="btn-secondary">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </footer>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects {
          background: var(--bg-secondary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition-smooth);
          height: 100%;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-primary);
        }

        .project-image-placeholder {
          height: 200px;
          background: linear-gradient(45deg, var(--bg-tertiary), var(--bg-primary));
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border-color);
        }

        .project-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-primary);
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          display: block;
        }

        .project-title {
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .view-more {
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: auto;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          color: var(--text-muted);
        }

        /* Modal Styling */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(5px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .project-modal {
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 30px;
          padding: 3rem;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          color: var(--accent-primary);
          transform: rotate(90deg);
        }

        .modal-header {
          margin-bottom: 2.5rem;
        }

        .modal-header .project-title {
          font-size: 2.2rem;
          margin: 0.5rem 0 1.2rem;
        }

        .modal-body {
          display: grid;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .detail-section h4 {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .detail-section p {
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .highlight-box {
          background: rgba(0, 210, 255, 0.05);
          padding: 1.5rem;
          border-radius: 16px;
          border-left: 4px solid var(--accent-primary);
        }

        .roadmap-text {
          font-family: 'Courier New', Courier, monospace;
          background: var(--bg-primary);
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--accent-primary) !important;
        }

        .modal-footer {
          display: flex;
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .btn-primary, .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          transition: var(--transition-fast);
          text-decoration: none;
        }

        .btn-primary {
          background: var(--accent-primary);
          color: var(--text-primary);
          border: 1px solid var(--accent-primary);
        }

        .btn-primary:hover {
          background: var(--accent-secondary);
          border-color: var(--accent-secondary);
        }

        .btn-secondary {
          background: none;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        @media (max-width: 768px) {
          .project-modal {
            padding: 2rem;
          }
          .modal-header .project-title {
            font-size: 1.6rem;
          }
          .modal-footer {
            flex-direction: column;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
