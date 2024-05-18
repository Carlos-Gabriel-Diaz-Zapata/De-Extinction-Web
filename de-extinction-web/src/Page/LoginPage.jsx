import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import fondoDino from '../assets/fondoDino.jpg';
import '../Page/Css/LoginPage.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      alert('Inicio de sesión exitoso');
      navigate('/'); 
    } catch (error) {
      alert(error.message);
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
            />
            <br/>
            <input 
              type="password" 
              placeholder='CONTRASEÑA' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <br/>
            <button className='buttonLog' type="submit">Iniciar Sesión</button>
            <p>¿NO PUEDES INICIAR SESIÓN?</p>
            <Link to="/register">Crear Cuenta</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
