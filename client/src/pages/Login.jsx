import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService"; // <-- Use the authService for login

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const res = await login({ email, password }); // <-- Call the login function from authServices
      console.log("Login successful:", res);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err.message);
      setErrorMsg("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {errorMsg && <p className="mb-4 text-red-600 text-sm text-center">{errorMsg}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
