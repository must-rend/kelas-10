import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Mail, User, MessageSquare, Calendar, Home } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const { user, token, logout } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/contacts', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setContacts(data);
        } else {
          setError('Gagal memuat pesan masuk.');
        }
      } catch (err) {
        setError('Terjadi kesalahan jaringan.');
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchContacts();
    }
  }, [token]);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-bg-glows">
        <div className="glow glow-purple"></div>
        <div className="glow glow-cyan"></div>
      </div>

      <header className="dashboard-header">
        <div className="container header-content">
          <div className="brand">
            <Link to="/" className="brand-logo">
              Mas <span>Rendi</span>
            </Link>
            <span className="badge">Admin Panel</span>
          </div>

          <div className="nav-actions">
            <Link to="/" className="btn btn-outline home-btn">
              <Home size={16} />
              <span>Beranda</span>
            </Link>
            <button onClick={handleLogout} className="btn btn-primary logout-btn">
              <LogOut size={16} />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container dashboard-main">
        {/* Welcome Section */}
        <section className="welcome-section">
          <motion.div 
            className="welcome-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="user-profile-summary">
              <div className="avatar">
                <User size={32} />
              </div>
              <div>
                <h2>Halo, {user?.name || 'Administrator'}!</h2>
                <p>{user?.email}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contacts/Messages Section */}
        <section className="messages-section">
          <div className="section-header">
            <h3><MessageSquare size={20} className="header-icon" /> Pesan Masuk</h3>
            <span className="count-badge">{contacts.length} Pesan</span>
          </div>

          {loading ? (
            <div className="dashboard-loading">
              <span className="spinner"></span>
              <p>Memuat pesan masuk...</p>
            </div>
          ) : error ? (
            <div className="dashboard-error">
              <p>{error}</p>
            </div>
          ) : contacts.length === 0 ? (
            <motion.div 
              className="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Mail size={48} className="empty-icon" />
              <h4>Belum Ada Pesan</h4>
              <p>Pesan yang dikirim pengunjung melalui form kontak akan muncul di sini.</p>
            </motion.div>
          ) : (
            <div className="messages-list">
              {contacts.map((contact, index) => (
                <motion.div 
                  key={contact.id}
                  className="message-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="message-header">
                    <div className="sender-info">
                      <span className="sender-name">{contact.name}</span>
                      <span className="sender-email">({contact.email})</span>
                    </div>
                    <div className="message-date">
                      <Calendar size={14} />
                      <span>
                        {new Date(contact.created_at).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="message-body">
                    <p>{contact.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
