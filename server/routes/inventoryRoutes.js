const express = require('express');
const router = express.Router();
const {
  getInventory,
  updateInventory,
} = require('../controllers/inventoryController');
const { verifyAdmin } = require('../middleware/auth');

router.get('/', verifyAdmin, getInventory);
router.put('/:group', verifyAdmin, updateInventory);

module.exports = router;
