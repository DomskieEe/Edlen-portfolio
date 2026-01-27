import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mnnennlz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="contact-modal glass"
            onClick={e => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="contact-grid">
              <div className="contact-info">
                <h2 className="heading gradient-text">Let's Connect</h2>
                <p>
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision.
                </p>
                <div className="contact-status-card">
                  <span className="pulse"></span>
                  Available for new opportunities
                </div>
              </div>

              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
                  disabled={status === 'sending' || status === 'success'}
                >
                  <AnimatePresence mode="wait">
                    {status === 'idle' && (
                      <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="btn-inner">
                        Send Message <Send size={18} />
                      </motion.span>
                    )}
                    {status === 'sending' && (
                      <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="btn-inner">
                        Sending... <div className="spinner"></div>
                      </motion.span>
                    )}
                    {status === 'success' && (
                      <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="btn-inner">
                        Sent Successfully! <CheckCircle size={18} />
                      </motion.span>
                    )}
                    {status === 'error' && (
                      <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="btn-inner">
                        Failed to Send. Try again.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(8px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .contact-modal {
          width: 100%;
          max-width: 900px;
          border-radius: 32px;
          padding: 4rem;
          position: relative;
          overflow-y: auto;
          max-height: 90vh;
        }

        .close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          color: var(--accent-primary);
          transform: rotate(90deg);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 4rem;
        }

        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .contact-info p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .contact-status-card {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 1.5rem;
          background: rgba(39, 201, 63, 0.1);
          border: 1px solid rgba(39, 201, 63, 0.2);
          color: #27c93f;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .pulse {
          width: 8px;
          height: 8px;
          background: #27c93f;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(39, 201, 63, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(39, 201, 63, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(39, 201, 63, 0); }
        }

        .form {
          display: grid;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        input, textarea {
          padding: 1rem 1.2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: #fff;
          font-family: inherit;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: rgba(0, 210, 255, 0.05);
        }

        .submit-btn {
          padding: 1.2rem;
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          color: #fff;
          border-radius: 12px;
          font-weight: 700;
        }

        .btn-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-modal {
            padding: 2.5rem;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default ContactModal;
