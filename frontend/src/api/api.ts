import axios, { type AxiosInstance, type AxiosError } from 'axios';

const api: AxiosInstance = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'https://diotek.xyz/paidemailApi/',
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
