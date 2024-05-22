import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// ProtectedRoute component to protect routes for authenticated users only
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Access user from AuthContext

  // If no user is logged in, redirect to home page
  if (!user) {
    return <Navigate to="/" />;
  }

  // If user is logged in, render the children components
  return children;
};

export default ProtectedRoute;
