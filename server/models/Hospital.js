import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    contactNumber: String,
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Hospital', hospitalSchema);

// import mongoose from 'mongoose';

// const hospitalSchema = new mongoose.Schema({
//   name: String,
//   location: String,
//   phone: String,
//   email: { type: String, unique: true },
// }, { timestamps: true });

// export default mongoose.model('Hospital', hospitalSchema);
