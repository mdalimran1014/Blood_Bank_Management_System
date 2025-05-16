import Patient from '../models/Patient.js';

export const registerPatient = async (req, res) => {
  try {
    const patient = await Patient.create({ ...req.body, userId: req.user.id });
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Patient registration failed', error: err.message });
  }
};

export const getPatientRequests = async (req, res) => {
  try {
    const patients = await Patient.find({ userId: req.user.id });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: 'Unable to fetch requests', error: err.message });
  }
};

export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate('userId', 'name email');
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching all patients', error: err.message });
  }
};
