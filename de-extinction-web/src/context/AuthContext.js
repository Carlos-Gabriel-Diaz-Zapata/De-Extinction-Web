import React, { createContext, useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

// Crea un contexto de autenticación
export const AuthContext = createContext();

// Componente proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loginHandler = async (username, password) => {
    if (!username || !password) {
      throw new Error('Nombre de usuario y contraseña son obligatorios.');
    }
    try {
      const response = await ApiService.login(username, password);
      if (!response.password) {  // Asegúrate de que la contraseña es correcta
        throw new Error('Contraseña incorrecta');
      }
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response));
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          throw new Error('Usuario no encontrado');
        } else if (error.response.status === 401) {
          throw new Error('Contraseña incorrecta');
        }
      }
      throw new Error('Error al iniciar sesión');
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
