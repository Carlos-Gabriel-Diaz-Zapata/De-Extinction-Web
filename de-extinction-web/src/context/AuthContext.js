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
      if (response.data.error) {
        throw new Error(response.data.error);
      }
       // Si el inicio de sesión es exitoso, guarda la información del usuario en el estado y en localStorage
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
    // Elimina la información del usuario del estado y de localStorage
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login: loginHandler, logout: logoutHandler }}>
      {children} {/* Renderiza los hijos del proveedor que consumirán los datos y funciones proporcionados */}
    </AuthContext.Provider>
  );
};
