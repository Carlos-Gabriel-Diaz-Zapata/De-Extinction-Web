import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import fondoDino from '../assets/fondoDino.jpg';
import '../Page/Css/LoginPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.warn('Por favor, ingresa tanto el nombre de usuario como la contraseña.');
      return;
    }
    try {
      await login(username, password);
      alert('Inicio de sesión exitoso');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <img src={fondoDino} alt="T-Rex" className="t-rex-image" />
      <div className="form-container">
        <div className="computer-screen">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='NOMBRE DE USUARIO' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
            <br/>
            <input 
              type="password" 
              placeholder='CONTRASEÑA' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <br/>
            <button className='buttonLog' type="submit">Iniciar Sesión</button>
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
