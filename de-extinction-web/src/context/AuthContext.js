import React, { createContext, useState, useEffect } from "react";
import ApiService from "../services/ApiService";

// Create an authentication context
export const AuthContext = createContext();

// Authentication provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to manage the authenticated user

  // Effect to load the user from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user from localStorage if available
    }
  }, []);

  // Function to handle user login
  const loginHandler = async (username, password) => {
    if (!username || !password) {
      throw new Error("Usuario y contraseña requerido.");
    }
    try {
      const response = await ApiService.login(username, password);
      if (!response.password) {
        // Ensure the password is correct
        throw new Error("Contraseña Incorrecta");
      }
      setUser(response); // Set the user state with the response
      localStorage.setItem("user", JSON.stringify(response)); // Save the user in localStorage
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          throw new Error("Usuario no encontrado");
        } else if (error.response.status === 401) {
          throw new Error("Contraseña Incorrecta");
        }
      }
      throw new Error("Error al logearte");
    }
  };

  // Function to handle user logout
  const logoutHandler = () => {
    setUser(null); // Clear the user state
    localStorage.removeItem("user"); // Remove the user from localStorage
  };

  return (
    <AuthContext.Provider
      value={{ user, login: loginHandler, logout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
