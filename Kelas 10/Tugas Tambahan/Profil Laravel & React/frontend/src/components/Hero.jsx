import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Halo, saya
          </motion.p>
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Mas Rendi Robertho
          </motion.h1>
          <motion.h2 
            className="hero-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Fullstack Web Developer
          </motion.h2>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Membangun pengalaman web digital yang clean, modern, dan scalable. Fokus pada kode yang rapi dan antarmuka pengguna yang elegan.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              Lihat Proyek <ArrowRight size={18} className="btn-icon" />
            </a>
            <a href="/cv-rendi.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download CV <Download size={18} className="btn-icon" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="hero-glow"></div>
    </section>
  );
};

export default Hero;
