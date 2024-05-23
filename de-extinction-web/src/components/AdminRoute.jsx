import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

/**
 * AdminRoute component to protect admin routes.
 * Checks if the user is logged in and if the user is an admin.
 * Redirects to the home page if the user is not logged in or not an admin.
 * 
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render if the user is an admin.
 * @returns {React.ReactNode} The rendered component or a redirect to the home page.
 */
const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  /**
   * If no user is logged in, redirect to home page.
   * @returns {React.ReactNode} A redirect to the home page.
   */
  if (!user) {
    return <Navigate to="/" />;
  }

  /**
   * If logged-in user is not an admin, redirect to home page.
   * @returns {React.ReactNode} A redirect to the home page.
   */
  if (!user.admin) {
    return <Navigate to="/" />;
  }

  /**
   * If user is an admin, render the children components.
   * @returns {React.ReactNode} The child components.
   */
  return children;
};

export default AdminRoute;
