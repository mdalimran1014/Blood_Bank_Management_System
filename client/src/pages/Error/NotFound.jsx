import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
      <div>
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">Page Not Found</p>
        <Link to="/" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
