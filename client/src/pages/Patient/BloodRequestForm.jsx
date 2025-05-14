import React, { useState } from "react";
import { requestBlood } from "../../services/patientService";

const BloodRequestForm = () => {
  const [form, setForm] = useState({ bloodType: "", units: "", reason: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await requestBlood(form);
    setMessage("Request submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white mt-10 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Blood Request Form</h2>
      {message && <p className="text-green-600 mb-3">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input name="bloodType" placeholder="Blood Type (e.g., A+)" onChange={handleChange} className="w-full p-2 border rounded mb-3" />
        <input name="units" type="number" placeholder="Number of Units" onChange={handleChange} className="w-full p-2 border rounded mb-3" />
        <textarea name="reason" placeholder="Reason" onChange={handleChange} className="w-full p-2 border rounded mb-4" rows="4"></textarea>
        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Submit Request</button>
      </form>
    </div>
  );
};

export default BloodRequestForm;
