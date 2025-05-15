import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    bloodGroup: String,
    unitsAvailable: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Inventory", inventorySchema);
