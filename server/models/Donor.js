import mongoose from 'mongoose';

const donorSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bloodType: { type: String, required: true },
    lastDonationDate: { type: Date },
    phone: String,
    address: String,
  },
  { timestamps: true }
);

export default mongoose.model('Donor', donorSchema);


// import mongoose from 'mongoose';

// const donorSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   bloodType: String,
//   age: Number,
//   phone: String,
//   address: String,
//   donations: [{ date: Date }],
// }, { timestamps: true });

// export default mongoose.model('Donor', donorSchema);

