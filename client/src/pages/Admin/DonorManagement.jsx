import React, { useEffect, useState } from "react";
import { getAllDonors, deleteDonor } from "../../services/adminService";

const DonorManagement = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    async function fetchDonors() {
      const data = await getAllDonors();
      setDonors(data);
    }
    fetchDonors();
  }, []);

  const handleDelete = async (id) => {
    await deleteDonor(id);
    setDonors(donors.filter((d) => d._id !== id));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Donor Management</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Blood Type</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor._id}>
              <td className="p-2 border">{donor.name}</td>
              <td className="p-2 border">{donor.email}</td>
              <td className="p-2 border">{donor.bloodType}</td>
              <td className="p-2 border">{donor.phone}</td>
              <td className="p-2 border text-center">
                <button
                  onClick={() => handleDelete(donor._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorManagement;
