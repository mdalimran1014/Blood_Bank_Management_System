import React from "react";
import { Navigate } from "react-router-dom";

// Simulate token/role fetching from localStorage
const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const ProtectedRoute = ({ children, role }) => {
  const user = getUser();

  if (!user || !user.token) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
