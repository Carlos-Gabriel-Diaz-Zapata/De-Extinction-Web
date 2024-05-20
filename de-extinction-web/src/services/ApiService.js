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
  const response = await axios.post(`${API_BASE_URL}/users`, user);
  return response.data;
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



const ApiService = {
  login,
  fetchTopScores,
  fetchAllUsers,
  createUser,
  updateUser,
  deleteUser,
};

export default ApiService;
