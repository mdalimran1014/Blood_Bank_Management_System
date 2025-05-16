// routes/patientRoutes.js
import express from 'express';
import {
  registerPatient,
  getPatientRequests,
  getAllPatients
} from '../controllers/patientController.js';

import { authenticateUser, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', authenticateUser, authorizeRoles('patient'), registerPatient);
router.get('/my-requests', authenticateUser, authorizeRoles('patient'), getPatientRequests);
router.get('/all', authenticateUser, authorizeRoles('admin'), getAllPatients);

export default router;



// import express from 'express';
// import {
//   registerPatient,
//   getPatients,
// } from '../controllers/patientController.js';

// const router = express.Router();

// router.post('/register', registerPatient);
// router.get('/', getPatients);

// export default router;

