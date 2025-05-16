

import Donor from '../models/Donor.js';

// Register a new donor
export const registerDonor = async (req, res) => {
  try {
    const {
      full_name,
      gender,
      age,
      blood_type,
      contact_number,
      email,
      address,
    } = req.body;

    const newDonor = new Donor({
      full_name,
      gender,
      age,
      blood_type,
      contact_number,
      email,
      address,
    });

    await newDonor.save();
    res.status(201).json(newDonor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all donors (Admin)
export const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update donor details (Admin)
export const updateDonor = async (req, res) => {
  try {
    const donor = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    res.json(donor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a donor (Admin)
export const deleteDonor = async (req, res) => {
  try {
    const donor = await Donor.findByIdAndDelete(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    res.json({ message: 'Donor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
