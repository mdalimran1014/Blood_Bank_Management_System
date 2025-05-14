import React, { useEffect, useState } from "react";
import { getRequestHistory } from "../../services/patientService";

const RequestHistory = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function fetchHistory() {
      const res = await getRequestHistory();
      setRequests(res);
    }
    fetchHistory();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white mt-10 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Your Request History</h2>
      {requests.length === 0 ? (
        <p className="text-gray-600">No requests found.</p>
      ) : (
        <ul className="space-y-3">
          {requests.map((r, i) => (
            <li key={i} className="p-4 border rounded">
              <p><strong>Blood Type:</strong> {r.bloodType}</p>
              <p><strong>Units:</strong> {r.units}</p>
              <p><strong>Status:</strong> {r.status}</p>
              <p><strong>Date:</strong> {new Date(r.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestHistory;
