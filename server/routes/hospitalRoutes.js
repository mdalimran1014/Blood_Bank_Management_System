const express = require('express');
const router = express.Router();
const {
  registerHospital,
  getAllHospitals,
} = require('../controllers/hospitalController');

router.post('/register', registerHospital);
router.get('/', getAllHospitals);

module.exports = router;
