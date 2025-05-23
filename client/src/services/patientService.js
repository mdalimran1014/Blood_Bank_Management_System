import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL + "/patients";

export const registerPatient = async (data, token) => {
  const res = await axios.post(`${API}/register`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const requestBlood = async (requestData, token) => {
  const res = await axios.post(`${API}/request`, requestData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getRequestHistory = async (token) => {
  const res = await axios.get(`${API}/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};



// import axios from "axios";

// const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// export const requestBlood = async (reqData) => {
//   const res = await axios.post(`${API}/patients/request`, reqData);
//   return res.data;
// };

// export const getRequestHistory = async (id) => {
//   const res = await axios.get(`${API}/patients/${id}/requests`);
//   return res.data;
// };
