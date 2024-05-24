import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import fondoDino from "../assets/fondoDino.jpg";
import "../Page/Css/LoginPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hashPassword from "../utils/PasswordHasher";

/**
 * LoginPage component to allow users to log in.
 * Displays a form where users can enter their username and password to log in.
 * 
 * @returns {JSX.Element} The rendered LoginPage component.
 */
const LoginPage = () => {
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const [username, setUsername] = useState(""); // State to store the username
  const [password, setPassword] = useState(""); // State to store the password
  const navigate = useNavigate(); // Hook to navigate to other pages

  /**
   * Handles the submission of the login form.
   * 
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      // Display a warning message if the form is submitted with empty fields
      toast.warn(
        "Por favor, ingresa tanto el nombre de usuario como la contraseña."
      );
      return;
    }
    try {
      const hashedPassword = await hashPassword(password);
      // Call the login function from AuthContext
      await login(username, hashedPassword);
      // Display a success message and navigate to the home page
      alert("Inicio de sesión exitoso");
      navigate("/");
    } catch (error) {
      console.log(hashPassword(password))
      // Display an error message if the login fails
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <img src={fondoDino} alt="T-Rex" className="t-rex-image" />
      <div className="form-container">
        <div className="computer-screen">
          <h2>Iniciar Sesión</h2>
          {/* Form to log in */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="NOMBRE DE USUARIO"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button className="buttonLog" type="submit">
              Iniciar Sesión
            </button>
            <p>¿NO PUEDES INICIAR SESIÓN?</p>
            <Link to="/register">Crear Cuenta</Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
