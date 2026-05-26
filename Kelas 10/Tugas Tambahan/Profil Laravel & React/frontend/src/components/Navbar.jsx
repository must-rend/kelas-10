import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Skill', href: '#skills' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          Mas <span>Rendi</span>
        </a>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            {token ? (
              <Link to="/dashboard" className="nav-btn nav-btn-dashboard">Dashboard</Link>
            ) : (
              <Link to="/login" className="nav-btn nav-btn-login">Login</Link>
            )}
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          className="mobile-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
            <li onClick={() => setIsOpen(false)} className="mobile-nav-btn">
              {token ? (
                <Link to="/dashboard" className="btn btn-primary" style={{ display: 'block', padding: '0.5rem' }}>Dashboard</Link>
              ) : (
                <Link to="/login" className="btn btn-outline" style={{ display: 'block', padding: '0.5rem' }}>Login</Link>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
