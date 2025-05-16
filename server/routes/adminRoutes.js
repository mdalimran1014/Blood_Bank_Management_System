import express from 'express';
import {
  getDashboardStats,
  manageDonors,
  manageRequests,
  manageInventory,
  manageHospitals,
} from '../controllers/adminController.js';
import { verifyToken, verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

// Admin-only routes
router.get('/dashboard', verifyToken, verifyAdmin, getDashboardStats);
router.get('/donors', verifyToken, verifyAdmin, manageDonors);
router.get('/requests', verifyToken, verifyAdmin, manageRequests);
router.get('/inventory', verifyToken, verifyAdmin, manageInventory);
router.get('/hospitals', verifyToken, verifyAdmin, manageHospitals);

export default router;
