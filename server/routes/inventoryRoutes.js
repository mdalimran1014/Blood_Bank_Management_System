// routes/bloodRoutes.js
import express from 'express';
import { getInventory, updateInventory } from '../controllers/inventoryController.js';
import { authenticateUser, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateUser, getInventory);
router.post('/update', authenticateUser, authorizeRoles('admin'), updateInventory);

export default router;


// import express from 'express';
// import {
//   getInventory,
//   updateInventory,
// } from '../controllers/inventoryController.js';
// import { verifyAdmin } from '../middleware/auth.js';

// const router = express.Router();

// router.get('/', verifyAdmin, getInventory);
// router.put('/:group', verifyAdmin, updateInventory);

// export default router;

