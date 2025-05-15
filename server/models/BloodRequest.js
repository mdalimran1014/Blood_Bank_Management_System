import mongoose from "mongoose";

const bloodRequestSchema = new mongoose.Schema(
  {
    requesterType: {
      type: String,
      enum: ["patient", "hospital"],
      required: true,
    },
    requesterId: { type: mongoose.Schema.Types.ObjectId, required: true },
    bloodGroup: String,
    unitsNeeded: Number,
    reason: String,
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("BloodRequest", bloodRequestSchema);
