import React, { useState } from "react";
import { registerPatient } from "../services/patientService";

const PatientRegistration = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerPatient(form);
    setSuccess("Patient registered successfully!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 mt-10 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Register as a Patient</h2>
      {success && <p className="text-green-600 mb-3">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded mb-3" />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded mb-3" />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-2 border rounded mb-3" />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Register</button>
      </form>
    </div>
  );
};

export default PatientRegistration;
