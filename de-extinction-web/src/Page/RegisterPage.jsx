import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/RegisterPage.css';
import fondoDino from '../assets/fondoDino.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { name, email, password };
    try {
      await ApiService.createUser(userData);
      alert('Usuario creado exitosamente');
      navigate('/login');
    } catch (error) {
      toast.error(error.message || 'Error creando cuenta');
    }
  };

  return (
    <div className="register-container">
      <img src={fondoDino} alt="T-Rex" className="t-rex-image" />
      <div className="form-container">
        <div className="computer-screen">
          <div className='titles'>
            <h2>Crear Cuenta</h2>
            <h5>No te preocupes no la compartiremos con nadie</h5>
          </div>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="CORREO ELECTRÓNICO" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <br />
            <input 
              type="text" 
              placeholder="NOMBRE DE USUARIO" 
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <button className="buttonLog" type="submit">Crear Cuenta</button>
            <p>¿Ya tiénes una cuenta?</p>
            <Link to="/login">Iniciar Sesión</Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
