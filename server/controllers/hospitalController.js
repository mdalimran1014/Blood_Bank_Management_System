const Hospital = require('../models/Hospital');

// Register a new hospital
exports.registerHospital = async (req, res) => {
  try {
    const { name, contact_number, email, street_address, city, state, zip_code } = req.body;
    
    const newHospital = new Hospital({
      name,
      contact_number,
      email,
      street_address,
      city,
      state,
      zip_code,
    });

    await newHospital.save();
    res.status(201).json(newHospital);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all hospitals (Admin)
exports.getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
