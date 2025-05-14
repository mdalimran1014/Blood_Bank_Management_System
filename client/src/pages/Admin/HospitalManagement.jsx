import React, { useEffect, useState } from "react";
import { getHospitals } from "../../services/adminService";

const HospitalManagement = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    async function fetchHospitals() {
      const data = await getHospitals();
      setHospitals(data);
    }
    fetchHospitals();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Registered Hospitals</h2>
      <ul className="space-y-4">
        {hospitals.map((hospital) => (
          <li
            key={hospital._id}
            className="p-4 border rounded shadow-sm bg-white"
          >
            <h4 className="text-lg font-semibold">{hospital.name}</h4>
            <p className="text-sm text-gray-600">{hospital.address}</p>
            <p className="text-sm text-gray-600">Phone: {hospital.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalManagement;
