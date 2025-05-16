import BloodRequest from '../models/BloodRequest.js';

// Create blood request (Patient)
export const requestBlood = async (req, res) => {
  try {
    const { patient_id, blood_type, request_date, required_quantity_ml } = req.body;

    const newRequest = new BloodRequest({
      patient_id,
      blood_type,
      request_date,
      required_quantity_ml,
    });

    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all blood requests (Admin)
export const getRequests = async (req, res) => {  // <== Added missing 'req'
  try {
    const requests = await BloodRequest.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update request status (Admin)
export const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const request = await BloodRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
