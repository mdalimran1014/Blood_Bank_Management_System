// controllers/bloodController.js
import Inventory from'../models/Inventory.js';

export const getInventory = async (req, res) => {
  const inventory = await Inventory.find();
  res.json(inventory);
};

export const updateInventory = async (req, res) => {
  try {
    const { bloodType, units } = req.body;
    const updated = await Inventory.findOneAndUpdate(
      { bloodType },
      { $inc: { units } },
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch {
    res.status(500).json({ message: 'Inventory update failed' });
  }
};
