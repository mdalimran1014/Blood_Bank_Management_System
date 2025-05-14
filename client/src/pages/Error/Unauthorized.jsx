import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-yellow-50 text-yellow-700">
      <h1 className="text-4xl font-bold">Access Denied</h1>
      <p className="mt-4">You are not authorized to view this page.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        Back to Home
      </Link>
    </div>
  );
};

export default Unauthorized;
