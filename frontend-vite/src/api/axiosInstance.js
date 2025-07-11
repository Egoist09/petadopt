import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://petadopt-olrm.onrender.com/api',
});

// Automatically attach token if present
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
