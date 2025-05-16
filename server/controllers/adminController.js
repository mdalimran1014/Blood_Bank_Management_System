
import Donor from '../models/Donor.js';
import BloodRequest from '../models/BloodRequest.js';
import Hospital from '../models/Hospital.js';
import Inventory from '../models/Inventory.js';

export const getDashboardStats = async (req, res) => {
  try {
    const totalDonors = await Donor.countDocuments();
    const totalRequests = await BloodRequest.countDocuments();
    const totalHospitals = await Hospital.countDocuments();
    const bloodGroups = await Inventory.find();

    res.status(200).json({
      totalDonors,
      totalRequests,
      totalHospitals,
      inventory: bloodGroups,
    });
  } catch (err) {
    res.status(500).json({ message: 'Dashboard fetch failed', error: err.message });
  }
};

export const manageDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching donors' });
  }
};

export const manageRequests = async (req, res) => {
  try {
    const requests = await BloodRequest.find().populate('patientId');
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching requests' });
  }
};

export const manageInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching inventory' });
  }
};

export const manageHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching hospitals' });
  }
};



// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import Admin from '../models/Admin.js';

// // Login Admin (Authentication)
// export const loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const admin = await Admin.findOne({ email });

//     if (!admin) {
//       return res.status(400).json({ message: 'Admin not found' });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, admin.password);
//     if (!isPasswordCorrect) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };


