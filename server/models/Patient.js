import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  bloodGroup: String,
}, { timestamps: true });

export default mongoose.model('Patient', patientSchema);
