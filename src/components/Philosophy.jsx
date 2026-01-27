import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Heart, Layout } from 'lucide-react';

const Philosophy = () => {
    const values = [
        {
            title: "Clean Architecture",
            desc: "Writing code that is not just functional, but maintainable and scalable. Thinking about the developer who inherits the project.",
            icon: <ShieldCheck size={32} />
        },
        {
            title: "UX Excellence",
            desc: "Design is not just how it looks, but how it works. Prioritizing seamless flows and intuitive interactions for every user.",
            icon: <Layout size={32} />
        },
        {
            title: "Performance First",
            desc: "Optimizing every SQL query and React render. Fast interfaces lead to better retention and professional reliability.",
            icon: <Zap size={32} />
        }
    ];

    return (
        <section className="philosophy section-padding">
            <div className="container">
                <div className="philosophy-header">
                    <h2 className="section-title heading">Technical <span className="gradient-text">Philosophy</span></h2>
                    <p className="philosophy-intro">My approach to building software isn't just about syntax—it's about creating systems that endure.</p>
                </div>

                <div className="values-grid">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="value-card glass"
                        >
                            <div className="value-icon gradient-text">{v.icon}</div>
                            <h3 className="value-title">{v.title}</h3>
                            <p className="value-desc">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .philosophy {
          background: var(--bg-primary);
          position: relative;
          margin-top: 6rem;
        }

        .philosophy-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem;
        }

        .philosophy-intro {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .value-card {
          padding: 3rem;
          border-radius: 24px;
          text-align: center;
          transition: var(--transition-smooth);
        }

        .value-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-primary);
        }

        .value-icon {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }

        .value-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .value-desc {
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
        </section>
    );
};

export default Philosophy;
