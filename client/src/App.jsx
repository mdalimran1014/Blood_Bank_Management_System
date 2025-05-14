import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/Error/NotFound";
//import BloodRequestForm from "./pages/Patient/BloodRequestForm";
// Import other pages like DonorDashboard, AdminDashboard, etc., when ready

const App = () => {
  return (
    <>
      <Navbar /> {/* Navbar with routing */}
      <div className="bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="*" element={<NotFound />} />
           {/* <Route path="/request-blood" element={<BloodRequestForm />} /> */}
          {/* Add routes for other pages when created */}
        </Routes>
      </div>
    </>
  );
};

export default App;
