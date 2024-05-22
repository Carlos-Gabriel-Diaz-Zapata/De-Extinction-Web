import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/EditUserPage.css';
import HeaderEditUser from '../layout/HeaderEditUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// This is a functional component that represents the EditUserPage
const EditUserPage = () => {
  // These state variables store the values of the form fields
  const { userId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // This variable uses the useNavigate hook to navigate to other pages
  const navigate = useNavigate();

  // This useEffect hook fetches the user data when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await ApiService.getUserById(userId);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
      } catch (error) {
        console.error('Error obteniendo usuario:', error);
        toast.error('Error obteniendo usuario');
      }
    };

    fetchUser();
  }, [userId]);

  // This function handles the submission of the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await ApiService.updateUser(userId, { name, email, password });
      toast.success('Usuario actualizado exitosamente');
      navigate('/admin');
    } catch (error) {
      console.error('Error actualizando usuario:', error);
      toast.error(error.message || 'Error actualizando usuario');
    }
  };

  // This is the JSX returned by the component
  return (
    <div>
      <HeaderEditUser />
      <div className="edit-user-page">
        <div className="login-box">
          {/* This form allows the user to edit an existing user */}
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Nombre</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Contraseña</label>
            </div>
            <center>
              <button type="submit" className="submit-btn">
                <span></span>Actualizar
              </button>
            </center>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditUserPage;