import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/CreateUserPage.css';
import HeaderCreateUsers from '../layout/HeaderCreateUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * CreateUserPage component to create a new user.
 * Allows an admin to fill out a form and submit it to create a new user.
 * 
 * @returns {JSX.Element} The rendered CreateUserPage component.
 */
const CreateUserPage = () => {
  const [name, setName] = useState(''); // State to store the user's name
  const [email, setEmail] = useState(''); // State to store the user's email
  const [password, setPassword] = useState(''); // State to store the user's password
  const [isAdmin, setIsAdmin] = useState(false); // State to store the user's admin status
  const navigate = useNavigate(); // Hook to navigate to other pages

  /**
   * Handles the form submission to create a new user.
   * 
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { name, email, password, admin: isAdmin }; // Create an object with the form data
    try {
      await ApiService.createUser(userData); // Call the API service to create a new user
      alert('Usuario creado exitosamente'); // Show an alert to indicate success
      navigate('/admin'); // Navigate to the admin page
    } catch (error) {
      if (error.message === 'El nombre de usuario ya existe') {
        toast.error('El nombre de usuario ya existe'); // Show a toast notification if the username already exists
      } else {
        toast.error('Error creando usuario'); // Show a generic error notification
      }
      console.error('Error creando usuario:', error);
    }
  };

  return (
    <div>
      <HeaderCreateUsers />
      <div className="edit-user-page">
        <div className="create-user-container">
          <h2>Crear Nuevo Usuario</h2>
          {/* Form to create a new user */}
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
