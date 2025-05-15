// src/services/api.js

import axios from "axios";

// Creating an axios instance with base URL (can be customized for production)
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api", // Replace this if needed
});

// fetch(`${import.meta.env.VITE_API_BASE_URL}/users/register`, { ... })

// Setting up an interceptor to automatically add the token from localStorage
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // Get token from localStorage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`; // Attach token if present
  }
  return req;
});

export default API;
