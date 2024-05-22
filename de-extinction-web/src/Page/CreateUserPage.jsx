import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/CreateUserPage.css';
import HeaderCreateUsers from '../layout/HeaderCreateUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// This is a functional component that represents the CreateUserPage
const CreateUserPage = () => {
  // These state variables store the values of the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  // This variable uses the useNavigate hook to navigate to other pages
  const navigate = useNavigate();

  // This function handles the submission of the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create an object with the form data
    const userData = { name, email, password, admin: isAdmin };
    try {
      // Call the API service to create a new user
      await ApiService.createUser(userData);
      // Show an alert to indicate success
      alert('Usuario creado exitosamente');
      // Navigate to the admin page
      navigate('/admin');
    } catch (error) {
      if (error.message === 'El nombre de usuario ya existe') {
        // Show a toast notification if the error message is "El nombre de usuario ya existe"
        toast.error('El nombre de usuario ya existe');
      } else {
        toast.error('Error creando usuario');
      }
      console.error('Error creando usuario:', error);
    }
  };

  // This is the JSX returned by the component
  return (
    <div>
      <HeaderCreateUsers />
      <div className="edit-user-page">
        <div className="create-user-container">
          <h2>Crear Nuevo Usuario</h2>
          {/* This form allows the user to create a new user */}
          <form onSubmit={handleSubmit}>
            <div className="form-group user-box">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Nombre</label>
            </div>
            <div className="form-group user-box">
              <input
                type="email"
                value={email}
              onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="form-group user-box">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Contraseña</label>
            </div>
            <div className="form-group admin-group">
              <label>Administrador</label>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <button type="submit" className="create-user-btn">
              Crear
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateUserPage;