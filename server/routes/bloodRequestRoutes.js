import express from 'express';
import {
  requestBlood,
  getRequests,
  updateRequestStatus,
} from '../controllers/bloodRequestController.js';

const router = express.Router();

router.post('/', requestBlood);
router.get('/', getRequests);
router.put('/:id', updateRequestStatus);

export default router;
