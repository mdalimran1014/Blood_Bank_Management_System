import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL + "/hospitals";

export const registerHospital = async (hospitalData, token) => {
  const res = await axios.post(`${API}/register`, hospitalData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getHospitals = async (token) => {
  const res = await axios.get(API, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};