import React, { useEffect, useState } from "react";
import { getInventoryData } from "../../services/adminService";

const BloodInventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    async function loadInventory() {
      const data = await getInventoryData();
      setInventory(data);
    }
    loadInventory();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Blood Inventory</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {inventory.map((item) => (
          <div
            key={item.bloodType}
            className="bg-white p-4 rounded shadow border text-center"
          >
            <h4 className="font-bold text-xl">{item.bloodType}</h4>
            <p className="text-2xl">{item.units} units</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodInventory;
