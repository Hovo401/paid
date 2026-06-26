import React, { useState, useEffect, type ReactNode } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext.context';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('/api/auth/check', { withCredentials: true });
        setIsLoggedIn(response.data.isAuthenticated); 
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};