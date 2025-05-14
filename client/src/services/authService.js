import API from "./api";

export const login = async (credentials) => {
  const res = await API.post("/login", credentials);
  return res.data;
};

export const register = async (userData) => {
  const res = await API.post("/register", userData);
  return res.data;
};




// import axios from "axios";

// const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// export const login = async (email, password) => {
//   const res = await axios.post(`${API}/auth/login`, { email, password });
//   return res.data;
// };

// export const register = async (userData) => {
//   const res = await axios.post(`${API}/auth/register`, userData);
//   return res.data;
// };
