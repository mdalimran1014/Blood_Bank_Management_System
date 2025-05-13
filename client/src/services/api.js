// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Adjust to your backend URL
  withCredentials: true, // Optional, for cookies/auth
});

export default api;
