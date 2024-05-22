import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import fondoDino from "../assets/fondoDino.jpg";
import "../Page/Css/LoginPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// This is a functional component that represents the LoginPage
const LoginPage = () => {
  // These state variables store the values of the form fields
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // This variable uses the useNavigate hook to navigate to other pages
  const navigate = useNavigate();

  // This function handles the submission of the form
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
      // Call the login function from the AuthContext
      await login(username, password);
      // Display a success message and navigate to the home page
      alert("Inicio de sesión exitoso");
      navigate("/");
    } catch (error) {
      // Display an error message if the login fails
      toast.error(error.message);
    }
  };

  // This is the JSX returned by the component
  return (
    <div className="login-container">
      <img src={fondoDino} alt="T-Rex" className="t-rex-image" />
      <div className="form-container">
        <div className="computer-screen">
          <h2>Iniciar Sesión</h2>
          {/* This form allows the user to log in */}
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
