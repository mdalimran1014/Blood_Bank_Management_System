// routes/hospitalRoutes.js
import express from 'express';
import { registerHospital, getHospitals } from '../controllers/hospitalController.js';
import { authenticateUser, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', authenticateUser, authorizeRoles('admin'), registerHospital);
router.get('/', authenticateUser, getHospitals);

export default router;



// import express from 'express';
// import {
//   registerHospital,
//   getAllHospitals,
// } from '../controllers/hospitalController.js';

// const router = express.Router();

// router.post('/register', registerHospital);
// router.get('/', getAllHospitals);

// export default router;

