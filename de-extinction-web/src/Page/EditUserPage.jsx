import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiService from '../services/ApiService';
import '../Page/Css/EditUserPage.css';
import HeaderEditUser from '../layout/HeaderEditUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * EditUserPage component to edit an existing user's details.
 * Fetches the user's current data, allows the admin to update it, and submit the changes.
 * 
 * @returns {JSX.Element} The rendered EditUserPage component.
 */
const EditUserPage = () => {
  const { userId } = useParams(); // Get the userId from the URL parameters
  const [name, setName] = useState(''); // State to store the user's name
  const [email, setEmail] = useState(''); // State to store the user's email
  const [password, setPassword] = useState(''); // State to store the user's password
  const navigate = useNavigate(); // Hook to navigate to other pages

  /**
   * useEffect hook to fetch the user's data when the component mounts.
   * Fetches the user data from the API and updates the state.
   */
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

  /**
   * Handles the form submission to update the user's details.
   * 
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   */
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

  return (
    <div>
      <HeaderEditUser />
      <div className="edit-user-page">
        <div className="login-box">
          {/* Form to edit an existing user */}
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
