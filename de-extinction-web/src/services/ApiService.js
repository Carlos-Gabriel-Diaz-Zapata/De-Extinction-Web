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


const ApiService = {
  login,
  fetchTopScores,
};

export default ApiService;
