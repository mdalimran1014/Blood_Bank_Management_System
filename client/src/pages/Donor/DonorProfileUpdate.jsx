import React, { useState, useEffect } from "react";
import { getUserProfile, updateUserProfile } from "../../services/donorService";

const DonorProfileUpdate = () => {
  const [form, setForm] = useState({ name: "", bloodType: "", phone: "" });
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      const profile = await getUserProfile();
      setForm({
        name: profile.name || "",
        bloodType: profile.bloodType || "",
        phone: profile.phone || "",
      });
    }
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserProfile(form);
    setSuccess("Profile updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      {success && <p className="text-green-600 mb-3">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        />
        <input
          name="bloodType"
          placeholder="Blood Type (e.g., O+)"
          value={form.bloodType}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        />
        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default DonorProfileUpdate;
