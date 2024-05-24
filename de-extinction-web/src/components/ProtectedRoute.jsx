import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/**
 * ProtectedRoute component to protect routes for authenticated users only.
 * Checks if the user is logged in.
 * Redirects to the home page if the user is not logged in.
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render if the user is authenticated.
 * @returns {React.ReactNode} The rendered component or a redirect to the home page.
 */
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Access user from AuthContext

  /**
   * If no user is logged in, redirect to home page.
   * @returns {React.ReactNode} A redirect to the home page.
   */
  if (!user) {
    return <Navigate to="/" />;
  }

  /**
   * If user is logged in, render the children components.
   * @returns {React.ReactNode} The child components.
   */
  return children;
};

export default ProtectedRoute;
