import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL + "/admin";

export const getDashboardStats = async (token) => {
  const res = await axios.get(`${API}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getBloodInventory = async (token) => {
  const res = await axios.get(`${API}/inventory`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const manageRequests = async (token) => {
  const res = await axios.get(`${API}/requests`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};