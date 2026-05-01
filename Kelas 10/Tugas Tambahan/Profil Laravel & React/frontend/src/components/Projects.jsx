import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback dummy data while API is not connected or empty
  const dummyProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur keranjang belanja, checkout, dan integrasi payment gateway. Dibangun dengan fokus pada kecepatan dan UX.',
      tech_stack: 'React, Laravel, Tailwind, MySQL',
      link: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas tim dengan fitur realtime kolaborasi, kanban board, dan notifikasi.',
      tech_stack: 'React, Node.js, Socket.io',
      link: '#',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Portfolio Generator',
      description: 'Sistem generator portofolio dinamis untuk developer dengan integrasi GitHub API dan export PDF.',
      tech_stack: 'Vue.js, Laravel, Postgres',
      link: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  useEffect(() => {
    // Fetch from backend API
    fetch('http://127.0.0.1:8000/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(dummyProjects); // Use dummy if DB is empty
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects', err);
        setProjects(dummyProjects);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Proyek Unggulan
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image || 'https://via.placeholder.com/800x600?text=No+Image'} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={24} />
                  </a>
                  <a href="#" className="project-link" title="Source Code">
                    <Code size={24} />
                  </a>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech_stack && project.tech_stack.split(',').map((tech, i) => (
                    <span key={i} className="tech-badge">{tech.trim()}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
