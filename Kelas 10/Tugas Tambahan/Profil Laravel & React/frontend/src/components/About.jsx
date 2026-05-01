import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Layout className="feature-icon" />,
      title: 'Frontend Development',
      description: 'Membangun antarmuka yang responsif, interaktif, dan modern menggunakan React.js dan teknologi modern lainnya.'
    },
    {
      icon: <Server className="feature-icon" />,
      title: 'Backend Development',
      description: 'Merancang arsitektur API yang tangguh, aman, dan efisien menggunakan ekosistem Laravel.'
    },
    {
      icon: <Code className="feature-icon" />,
      title: 'Clean Code',
      description: 'Menulis kode yang mudah dibaca, dirawat, dan dikembangkan sesuai dengan standar industri.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tentang Saya
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Saya adalah seorang <strong>Fullstack Web Developer</strong> yang berdedikasi untuk menciptakan pengalaman digital yang luar biasa. 
              Dengan kombinasi keahlian di frontend (React.js) dan backend (Laravel), saya dapat mengubah ide kompleks menjadi aplikasi web yang fungsional dan estetis.
            </p>
            <p>
              Pendekatan saya terhadap pengembangan selalu mengutamakan performa, aksesibilitas, dan *user experience* (UX). 
              Saya percaya bahwa kode yang baik bukan hanya yang berfungsi, tetapi juga yang dapat dipahami dan dikembangkan oleh tim.
            </p>
          </motion.div>

          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
