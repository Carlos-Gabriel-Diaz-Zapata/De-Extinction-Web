import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api/v1';

// Función para realizar el login
const login = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/users/login`, {
    name: username,
    password: password,
  });
  return response.data;
};

// Función para obtener las mejores puntuaciones
const fetchTopScores = async () => {
  const response = await axios.get(`${API_BASE_URL}/players/scores`);
  return response.data;
};

// Función para obtener todos los usuarios
const fetchAllUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

// Función para crear un nuevo usuario
const createUser = async (user) => {
  try {
    console.log('Iniciando creación de usuario', user);
    const response = await axios.post(`${API_BASE_URL}/users`, user);
    console.log('Usuario creado', response.data);
    
    if (user.admin) {
      try {
        const adminResponse = await axios.post(`${API_BASE_URL}/admins`, { userId: response.data.userId });
        console.log('Administrador creado', adminResponse.data);
      } catch (adminError) {
        console.error('Error creando administrador:', adminError);
        // No lanzar error aquí para que no interrumpa el flujo principal
      }
    }
    return response.data;
  } catch (error) {
    console.error('Error creando usuario:', error);
    // No lanzar error aquí para que no interrumpa el flujo principal
    return null;
  }
};

// Función para actualizar un usuario existente
const updateUser = async (id, user) => {
  const response = await axios.put(`${API_BASE_URL}/users/${id}`, user);
  return response.data;
};

// Función para eliminar un usuario
const deleteUser = async (id) => {
  await axios.delete(`${API_BASE_URL}/users/${id}`);
};

// Función para obtener un usuario por su ID
const getUserById = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};



const ApiService = {
  login,
  fetchTopScores,
  fetchAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default ApiService;
