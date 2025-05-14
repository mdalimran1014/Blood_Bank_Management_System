import React, { useEffect, useState } from "react";
import { fetchAdminStats } from "../services/adminService";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function getStats() {
      const data = await fetchAdminStats();
      setStats(data);
    }
    getStats();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      {!stats ? (
        <p>Loading stats...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-red-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Total Donors</h3>
            <p className="text-3xl">{stats.totalDonors}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Total Patients</h3>
            <p className="text-3xl">{stats.totalPatients}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Pending Requests</h3>
            <p className="text-3xl">{stats.pendingRequests}</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Units Available</h3>
            <p className="text-3xl">{stats.totalUnits}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
