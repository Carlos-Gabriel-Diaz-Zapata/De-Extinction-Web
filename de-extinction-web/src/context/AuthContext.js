import React, { createContext, useState, useEffect } from "react";
import ApiService from "../services/ApiService";

/**
 * Creates an authentication context.
 */
export const AuthContext = createContext();

/**
 * Authentication provider component.
 * Provides authentication-related state and functions to its children.
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that require access to authentication state.
 * @returns {React.ReactNode} The rendered AuthProvider component.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to manage the authenticated user

  /**
   * Effect to load the user from localStorage when the component mounts.
   * Sets the user state if a user is found in localStorage.
   */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user from localStorage if available
    }
  }, []);

  /**
   * Handles user login.
   * Authenticates the user with the provided username and password.
   * 
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   * @throws {Error} Throws an error if the username or password is missing, or if authentication fails.
   */
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

  /**
   * Handles user logout.
   * Clears the user state and removes the user from localStorage.
   */
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
