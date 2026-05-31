import axios, { type AxiosInstance, type AxiosError } from 'axios';

const BASE_URL =
  import.meta.env.BACKEND_API_URL || 'https://paid2-7uhm.onrender.com/';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  // baseURL: 'http://localhost:3000/',
  // baseURL: 'https://diotek.xyz/paidemailApi/',
  // baseURL: `${window.location.origin}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
    }
    return Promise.reject(error);
  },
);

export default api;
