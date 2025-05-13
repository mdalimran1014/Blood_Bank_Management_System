import React, { useState } from "react";

const BloodRequestForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    hospitalName: "",
    bloodType: "",
    units: "",
    reason: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send request to backend
    console.log("Blood Request Submitted:", formData);
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-white">
      <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
          Request Blood
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="text"
            name="hospitalName"
            placeholder="Hospital Name"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
          <select
            name="bloodType"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          >
            <option value="">Select Blood Type</option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="units"
            placeholder="Units Required"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            name="reason"
            placeholder="Reason for Request"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          ></textarea>
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BloodRequestForm;
