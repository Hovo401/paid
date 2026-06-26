import axios, { type AxiosInstance, type AxiosError } from 'axios';

// ВАЖНО: переменная ДОЛЖНА начинаться с VITE_ — иначе Vite не отдаст её в браузер.
// Значение читается при сборке (prod) или при старте dev-сервера (docker).
// Fallback — для локального `pnpm dev`, когда backend поднят на localhost:3000.
const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
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
