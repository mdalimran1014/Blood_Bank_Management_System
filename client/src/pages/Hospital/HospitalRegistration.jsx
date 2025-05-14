import React, { useState } from "react";
import { registerHospital } from "../services/hospitalService";

const HospitalRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerHospital(formData);
    alert("Hospital registered successfully!");
    setFormData({ name: "", address: "", phone: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Register Hospital</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Name
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </label>
        <label className="block mb-2">
          Address
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
        </label>
        <label className="block mb-4">
          Phone
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HospitalRegistration;
