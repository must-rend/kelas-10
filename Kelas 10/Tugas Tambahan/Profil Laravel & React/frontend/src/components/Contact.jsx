import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, User, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Pesan berhasil dikirim! Saya akan segera menghubungi Anda.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Gagal mengirim pesan. Silakan coba lagi.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Terjadi kesalahan jaringan.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Hubungi Saya
        </motion.h2>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Mari Berkolaborasi!</h3>
            <p>Saya selalu terbuka untuk mendiskusikan pekerjaan proyek, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>rendirobertho@example.com</p>
                </div>
              </div>
              <div className="contact-socials">
                <h4>Temukan Saya</h4>
                <div className="social-links">
                  <a href="#" className="social-link"><Code size={20} /></a>
                  <a href="#" className="social-link"><User size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.message}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Alamat Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Masukkan email Anda"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Mengirim...' : (
                  <>Kirim Pesan <Send size={18} className="btn-icon" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
