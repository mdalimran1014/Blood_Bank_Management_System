import API from "./api";

export const login = async (credentials) => {
  const res = await API.post("/login", credentials);
  return res.data;
};

export const register = async (userData) => {
  const res = await API.post("/register", userData);
  return res.data;
};