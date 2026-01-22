import axios from "axios";

const api = axios.create({
  baseURL: "/ble/api/api", // base URL matches your backend login path
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Add token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Unauthorized, redirect to login
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
