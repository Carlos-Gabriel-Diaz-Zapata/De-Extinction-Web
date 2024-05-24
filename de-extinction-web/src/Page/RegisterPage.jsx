import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";
import "../Page/Css/RegisterPage.css";
import fondoDino from "../assets/fondoDino.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * RegisterPage component for user registration.
 * Allows users to create a new account by providing an email, username, and password.
 * 
 * @returns {JSX.Element} The rendered RegisterPage component.
 */
const RegisterPage = () => {
  const [email, setEmail] = useState(""); // State to store email input
  const [name, setName] = useState(""); // State to store username input
  const [password, setPassword] = useState(""); // State to store password input
  const navigate = useNavigate(); // Hook to navigate programmatically

  /**
   * Handles the form submission to register a new user.
   * 
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { name, email, password }; // Gather user data from state
    try {
      await ApiService.createUser(userData); // Call API to create a new user
      alert("Usuario creado exitosamente"); // Show success alert
      navigate("/login"); // Navigate to login page
    } catch (error) {
      if (error.message.includes("correo electrónico")) {
        toast.error("Este correo electrónico ya está registrado");
      } else if (error.message.includes("nombre de usuario")) {
        toast.error("Este nombre de usuario ya está registrado");
      } else {
        toast.error("Error creando cuenta");
      }
    }
  };

  return (
    <div className="register-container">
      <img src={fondoDino} alt="T-Rex" className="t-rex-image" />
      <div className="form-container">
        <div className="computer-screen">
          <div className="titles">
            <h2>Crear Cuenta</h2>
            <h5>No te preocupes no la compartiremos con nadie</h5>
          </div>
          {/* Form to handle user registration */}
          <form onSubmit={handleSubmit}>
            {/* Email input field */}
            <input
              type="email"
              placeholder="CORREO ELECTRÓNICO"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            {/* Username input field */}
            <input
              type="text"
              placeholder="NOMBRE DE USUARIO"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            {/* Password input field */}
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            {/* Submit button */}
            <button className="buttonLog" type="submit">
              Crear Cuenta
            </button>
            <p>¿Ya tienes una cuenta?</p>
            {/* Link to login page */}
            <Link to="/login">Iniciar Sesión</Link>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Toast container for notifications */}
    </div>
  );
};

export default RegisterPage;
