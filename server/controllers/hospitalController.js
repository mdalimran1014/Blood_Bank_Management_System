// controllers/hospitalController.js
import Hospital from '../models/Hospital.js';

export const registerHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    res.status(201).json(hospital);
  } catch {
    res.status(500).json({ message: 'Hospital registration failed' });
  }
};

export const getHospitals = async (req, res) => {
  const hospitals = await Hospital.find();
  res.json(hospitals);
};




// import Hospital from '../models/Hospital.js';

// // Register a new hospital
// export const registerHospital = async (req, res) => {
//   try {
//     const { name, contact_number, email, street_address, city, state, zip_code } = req.body;

//     const newHospital = new Hospital({
//       name,
//       contact_number,
//       email,
//       street_address,
//       city,
//       state,
//       zip_code,
//     });

//     await newHospital.save();
//     res.status(201).json(newHospital);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// // Get all hospitals (Admin)
// export const getAllHospitals = async (req, res) => {
//   try {
//     const hospitals = await Hospital.find();
//     res.json(hospitals);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };
