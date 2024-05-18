import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loginHandler = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8082/api/v1/users/login', {
        name: username,
        password: password,
      });
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('Usuario no encontrado');
      } else if (error.response && error.response.status === 401) {
        throw new Error('Contraseña incorrecta');
      } else {
        throw new Error('Error al iniciar sesión');
      }
    }
  };

  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login: loginHandler, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
