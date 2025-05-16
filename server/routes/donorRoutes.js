import express from 'express';
import {
  registerDonor,
  getAllDonors,
  updateDonor,
  deleteDonor,
} from '../controllers/donorController.js';
import {verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerDonor);
router.get('/', verifyAdmin, getAllDonors);
router.put('/:id', verifyAdmin, updateDonor);
router.delete('/:id', verifyAdmin, deleteDonor);

export default router;



// routes/donorRoutes.js
// import express from 'express';
// import {
//   getAllDonors,
//   updateDonor,
//   deleteDonor,
// } from '../controllers/donorController.js';
// import { authenticateUser, authorizeRoles } from '../middleware/authMiddleware.js';

// const router = express.Router();

// router.get('/', authenticateUser, authorizeRoles('admin'), getAllDonors);
// router.put('/:id', authenticateUser, authorizeRoles('admin'), updateDonor);
// router.delete('/:id', authenticateUser, authorizeRoles('admin'), deleteDonor);

// export default router;




