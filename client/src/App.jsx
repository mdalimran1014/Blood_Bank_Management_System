import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/Error/NotFound";
import Unauthorized from "./pages/Error/Unauthorized";

// Admin Pages
// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import DonorManagement from "./pages/Admin/DonorManagement";
// import RequestManagement from "./pages/Admin/RequestManagement";
// import BloodInventory from "./pages/Admin/BloodInventory";
// import HospitalManagement from "./pages/Admin/HospitalManagement";

// Donor Pages
// import DonorDashboard from "./pages/Donor/DonorDashboard";
// import DonorProfileUpdate from "./pages/Donor/DonorProfileupdate";
// import DonationHistory from "./pages/Donor/DonationHistory";

// Patient Pages
// import PatientRegistration from "./pages/Patient/PatientRegistration";
// import BloodRequestForm from "./pages/Patient/BloodRequestForm";
// import RequestHistory from "./pages/Patient/RequestHistory";

// Hospital Page
import HospitalRegistration from "./pages/Hospital/HospitalRegistration";

// Common
import Navbar from "./components/Navbar";

// (Optional) Auth guards (to be added later)
// import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <>
    <router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hospital/register" element={<HospitalRegistration />} />

        {/* Admin Routes */}
        {/* <Route path="/admin/dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} /> */}
        {/*<Route path="/admin/donors" element={<ProtectedRoute role="admin"><DonorManagement /></ProtectedRoute>} />
        <Route path="/admin/requests" element={<ProtectedRoute role="admin"><RequestManagement /></ProtectedRoute>} />
        <Route path="/admin/inventory" element={<ProtectedRoute role="admin"><BloodInventory /></ProtectedRoute>} />
        <Route path="/admin/hospitals" element={<ProtectedRoute role="admin"><HospitalManagement /></ProtectedRoute>} /> */}

        {/* Donor Routes */}
        {/* <Route path="/donor/dashboard" element={<ProtectedRoute role="donor"><DonorDashboard /></ProtectedRoute>} />
        <Route path="/donor/profile" element={<ProtectedRoute role="donor"><DonorProfileUpdate /></ProtectedRoute>} />
        <Route path="/donor/history" element={<ProtectedRoute role="donor"><DonationHistory /></ProtectedRoute>} /> */}

        {/* Patient Routes */}
        {/* <Route path="/patient/register" element={<PatientRegistration />} />
        <Route path="/patient/request" element={<ProtectedRoute role="patient"><BloodRequestForm /></ProtectedRoute>} />
        <Route path="/patient/history" element={<ProtectedRoute role="patient"><RequestHistory /></ProtectedRoute>} /> */}

        {/* Error Routes */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   </router>
    </>
  );
};

export default App;
