import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: "https://rentique-nkrc.onrender.com/api", // base URL for your backend
});

// Add a request interceptor to inject the JWT token automatically
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;
