import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ApiService from "../services/ApiService";
import "../Page/Css/AdminPage.css";
import HeaderAdminPage from "../layout/HeaderAdminPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * AdminPage component to manage users.
 * Allows searching, displaying, editing, and deleting users.
 * 
 * @returns {JSX.Element} The rendered AdminPage component.
 */
const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store search term for filtering users
  const [users, setUsers] = useState([]); // State to store the list of users

  /**
   * useEffect hook to fetch users when the component mounts.
   * Fetches all users from the API and updates the state.
   */
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await ApiService.fetchAllUsers(); // Fetch all users from the API
        console.log("Usuarios obtenidos:", data);
        setUsers(data); // Update state with fetched users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  /**
   * Handles changes in the search input.
   * Updates the search term state.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the search input.
   */
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  /**
   * Handles user deletion.
   * Confirms deletion and deletes user via API if confirmed.
   * Updates the state to remove the deleted user and shows a notification.
   * 
   * @param {number} userId - The ID of the user to delete.
   * @param {string} userName - The name of the user to delete.
   */
  const handleDelete = async (userId, userName) => {
    const confirmDelete = window.confirm(
      `¿Está seguro que desea eliminar permanentemente a "${userName}"?`
    ); 
    if (confirmDelete) {
      try {
        await ApiService.deleteUser(userId); 
        setUsers(users.filter((user) => user.userId !== userId)); // Update state to remove deleted user
        toast.success("Usuario eliminado exitosamente"); // Show success notification
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error("Error eliminando usuario"); // Show error notification
      }
    }
  };

  /**
   * Filters users based on the search term.
   * 
   * @returns {Array} The filtered list of users.
   */
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase()); // Check if user's name includes search term
  });

  return (
    <div>
      {/* Render header for admin page */}
      <HeaderAdminPage />
      <div className="adminContainer">
        <section className="contentSection">
          <div className="searchContainer">
            {/* Link to create a new user */}
            <Link to="/admin/new" className="btn">
              Nuevo
            </Link>
            {/* Search input to filter users */}
            <input
              type="text"
              placeholder="Buscar administradores..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="input"
            />
          </div>
          <div className="tableContent">
            <div className="tableWrapper">
              <div className="col2">
                {/* Table headers */}
                <div className="col">Id</div>
                <div className="col">Nombre</div>
                <div className="col">Email</div>
                <div className="col">Administrador</div>
                <div className="col">Acciones</div>
              </div>
              {/* Render filtered list of users */}
              {filteredUsers.map((user) => (
                <div className="row" key={user.userId}>
                  <div className="col"> {user.userId} </div>
                  <div className="col"> {user.name} </div>
                  <div className="col"> {user.email} </div>
                  <div className="col"> {user.admin ? "Sí" : "No"} </div>
                  <div className="col actionCol">
                    {/* Link to edit user */}
                    <Link
                      to={`/admin/edit/${user.userId}`}
                      className="btn btn-primary"
                    >
                      Editar
                    </Link>
                    {/* Button to delete user */}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.userId, user.name)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Toast container to show notifications */}
      <ToastContainer />
    </div>
  );
};

export default AdminPage;
