// models/Patient.js
import mongoose from 'mongoose';

const patientSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bloodType: { type: String, required: true },
    requestDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  },
  { timestamps: true }
);

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;


// import mongoose from 'mongoose';

// const patientSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   phone: String,
//   address: String,
//   bloodGroup: String,
// }, { timestamps: true });

// export default mongoose.model('Patient', patientSchema);
