import axios from "axios";

const API_BASE_URL = "http://localhost:8082/api/v1";

// Function to perform login
const login = async (username, password) => {
  const response = await axios.post(`${API_BASE_URL}/users/login`, {
    name: username,
    password: password,
  });
  return response.data;
};

// Function to fetch top scores
const fetchTopScores = async () => {
  const response = await axios.get(`${API_BASE_URL}/players/scores`);
  return response.data;
};

// Function to fetch all users
const fetchAllUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

// Function to create a new user
const createUser = async (user) => {
  try {
    // Check if the username already exists
    const existingUsers = await fetchAllUsers();
    const userExists = existingUsers.some(
      (existingUser) => existingUser.name === user.name
    );
    if (userExists) {
      throw new Error("El nombre de usuario ya existe");
    }

    console.log("Iniciando creación de usuario", user);
    const response = await axios.post(`${API_BASE_URL}/users`, user);
    console.log("Usuario creado", response.data);

    if (user.admin) {
      try {
        const adminResponse = await axios.post(`${API_BASE_URL}/admins`, {
          userId: response.data.userId,
        });
        console.log("Administrador creado", adminResponse.data);
      } catch (adminError) {
        console.error("Error creando administrador:", adminError);
        // Do not throw error here to avoid interrupting the main flow
      }
    }
    return response.data;
  } catch (error) {
    console.error("Error creando usuario:", error);
    throw error;
  }
};

// Function to update an existing user
const updateUser = async (id, user) => {
  // Check if the username already exists
  const existingUsers = await fetchAllUsers();
  const userExists = existingUsers.some(
    (existingUser) => existingUser.name === user.name && existingUser.id !== id
  );
  if (userExists) {
    throw new Error("El nombre de usuario ya existe");
  }

  const response = await axios.put(`${API_BASE_URL}/users/${id}`, user);
  return response.data;
};

// Function to update the player's score
const updatePlayerScore = async (name, score) => {
  const response = await axios.put(`${API_BASE_URL}/players/${name}/${score}`);
  return response.data;
};

// Function to delete a user
const deleteUser = async (id) => {
  await axios.delete(`${API_BASE_URL}/users/${id}`);
};

// Function to fetch a user by their ID
const getUserById = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

// ApiService object to export all functions
const ApiService = {
  login,
  fetchTopScores,
  fetchAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  updatePlayerScore,
};

export default ApiService;
