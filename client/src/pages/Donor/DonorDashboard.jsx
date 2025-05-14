import React from "react";
import { Link } from "react-router-dom";

const DonorDashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Welcome, Donor!</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/donor/profile" className="bg-white shadow rounded p-6 hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Update Profile</h2>
          <p className="text-gray-600">Edit your personal details.</p>
        </Link>

        <Link to="/donor/history" className="bg-white shadow rounded p-6 hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Donation History</h2>
          <p className="text-gray-600">View your previous donations.</p>
        </Link>

        <Link to="/" className="bg-white shadow rounded p-6 hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Back to Home</h2>
          <p className="text-gray-600">Return to homepage.</p>
        </Link>
      </div>
    </div>
  );
};

export default DonorDashboard;
