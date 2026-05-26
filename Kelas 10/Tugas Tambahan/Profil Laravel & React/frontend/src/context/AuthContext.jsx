import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('auth_token') || null);
  const [loading, setLoading] = useState(true);

  // Fetch current user details if token exists
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/api/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.data);
        } else {
          // Token is invalid or expired
          handleLogoutLocal();
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  const handleLogoutLocal = () => {
    localStorage.removeItem('auth_token');
    setToken(null);
    setUser(null);
  };

  const login = async (email, password) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('auth_token', data.data.token);
        setToken(data.data.token);
        setUser(data.data.user);
        return { success: true };
      } else {
        return { 
          success: false, 
          message: data.message || 'Login gagal. Silakan coba lagi.' 
        };
      }
    } catch (error) {
      return { success: false, message: 'Koneksi ke server gagal.' };
    }
  };

  const register = async (name, email, password, password_confirmation) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          name, 
          email, 
          password, 
          password_confirmation 
        })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('auth_token', data.data.token);
        setToken(data.data.token);
        setUser(data.data.user);
        return { success: true };
      } else {
        return { 
          success: false, 
          message: data.message || 'Registrasi gagal.', 
          errors: data.errors || null 
        };
      }
    } catch (error) {
      return { success: false, message: 'Koneksi ke server gagal.' };
    }
  };

  const logout = async () => {
    try {
      await fetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      handleLogoutLocal();
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
