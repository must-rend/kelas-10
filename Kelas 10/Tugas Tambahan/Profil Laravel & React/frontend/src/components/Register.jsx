import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Lock, UserPlus, ArrowLeft } from 'lucide-react';
import './Login.css'; // Reuse auth card styles

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  const [errors, setErrors] = useState(null);
  const [generalError, setGeneralError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    setGeneralError('');

    if (password !== passwordConfirmation) {
      setErrors({ password: ['Konfirmasi password tidak cocok.'] });
      return;
    }

    setIsSubmitting(true);

    const result = await register(name, email, password, passwordConfirmation);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setIsSubmitting(false);
      if (result.errors) {
        setErrors(result.errors);
      } else {
        setGeneralError(result.message);
      }
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
            <h2>Buat <span>Akun</span></h2>
            <p>Daftarkan akun baru Anda</p>
          </div>

          {generalError && (
            <motion.div 
              className="auth-error-message"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {generalError}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <div className="input-with-icon">
                <User className="input-icon" size={18} />
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap" 
                  required
                />
              </div>
              {errors?.name && (
                <span className="field-error-text">{errors.name[0]}</span>
              )}
            </div>

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
              {errors?.email && (
                <span className="field-error-text">{errors.email[0]}</span>
              )}
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
                  placeholder="Minimal 6 karakter" 
                  required
                />
              </div>
              {errors?.password && (
                <span className="field-error-text">{errors.password[0]}</span>
              )}
            </div>

            <div className="auth-form-group">
              <label htmlFor="password_confirmation">Konfirmasi Password</label>
              <div className="input-with-icon">
                <Lock className="input-icon" size={18} />
                <input 
                  type="password" 
                  id="password_confirmation" 
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Ulangi password Anda" 
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
                  <span>Daftar</span>
                  <UserPlus size={18} className="btn-icon" />
                </>
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>Sudah punya akun? <Link to="/login">Masuk di sini</Link></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
