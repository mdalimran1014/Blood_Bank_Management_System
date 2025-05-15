import React, { useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("bbmsUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, password });
      const { token, role, name, _id } = res.data;
      const userData = { token, role, name, _id };
      localStorage.setItem("bbmsUser", JSON.stringify(userData));
      setUser(userData);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.response?.data?.message || "Login failed" };
    }
  };

  const logout = () => {
    localStorage.removeItem("bbmsUser");
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>{children}</AuthContext.Provider>;
};
