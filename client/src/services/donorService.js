import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL + "/donors";

export const getDonors = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const updateDonor = async (id, updatedData, token) => {
  const res = await axios.put(`${API}/${id}`, updatedData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getDonationHistory = async (token) => {
  const res = await axios.get(`${API}/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};


// import axios from "axios";

// const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// export const fetchDonors = async () => {
//   const res = await axios.get(`${API}/donors`);
//   return res.data;
// };

// export const updateProfile = async (id, updatedData) => {
//   const res = await axios.put(`${API}/donors/${id}`, updatedData);
//   return res.data;
// };

// export const donationHistory = async (id) => {
//   const res = await axios.get(`${API}/donors/${id}/history`);
//   return res.data;
// };
