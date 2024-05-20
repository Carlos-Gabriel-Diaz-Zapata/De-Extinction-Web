import React, { createContext, useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

// Crea un contexto de autenticación
export const AuthContext = createContext();

// Componente proveedor de autenticación
export const AuthProvider = ({ children }) => {
  // Defino un estado para almacenar la información del usuario
  const [user, setUser] = useState(null);

  // useEffect que se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    // Obtiene el usuario almacenado en localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      // Si hay un usuario almacenado, lo convierte de JSON a un objeto y lo guarda en el estado
      setUser(JSON.parse(storedUser));
    }
  }, []); // El arreglo vacío indica que esto se ejecuta solo una vez al montar el componente

  // Función para manejar el inicio de sesión
  const loginHandler = async (username, password) => {
    try {
      // Utilizo la función login importada desde ApiService
      const response = await ApiService.login(username, password);

      // Asumiendo que response contiene la información del usuario
      setUser(response);
      // Guarda la información del usuario en localStorage
      localStorage.setItem('user', JSON.stringify(response));
    } catch (error) {
      // Manejo de errores basado en el código de estado HTTP de la respuesta
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

  // Función para manejar el cierre de sesión
  const logoutHandler = () => {
    // Elimina la información del usuario del estado y de localStorage
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    // Proveedor de contexto que proporciona los datos del usuario y las funciones de login y logout a sus hijos
    <AuthContext.Provider value={{ user, login: loginHandler, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
