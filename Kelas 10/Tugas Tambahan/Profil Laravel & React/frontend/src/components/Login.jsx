import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, ArrowLeft } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const result = await login(email, password);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-background-glows">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <Link to="/" className="back-home-btn">
        <ArrowLeft size={18} />
        <span>Kembali ke Beranda</span>
      </Link>

      <motion.div 
        className="auth-card-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="auth-card">
          <div className="auth-header">
            <h2>Selamat <span>Datang</span></h2>
            <p>Silakan masuk ke akun Anda</p>
          </div>

          {error && (
            <motion.div 
              className="auth-error-message"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-form-group">
              <label htmlFor="email">Email</label>
              <div className="input-with-icon">
                <Mail className="input-icon" size={18} />
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda" 
                  required
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <Lock className="input-icon" size={18} />
                <input 
                  type="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password Anda" 
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary auth-submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="spinner"></span>
              ) : (
                <>
                  <span>Masuk</span>
                  <LogIn size={18} className="btn-icon" />
                </>
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>Belum punya akun? <Link to="/register">Daftar Sekarang</Link></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
