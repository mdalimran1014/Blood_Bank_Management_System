// routes/authRoutes.js
import express from 'express';
import { login, register } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;




// const express = require("express");
// const router = express.Router();
// const { loginUser, registerUser } = require("../controllers/authController");

// // @route POST /api/auth/login
// router.post("/login", loginUser);

// // @route POST /api/auth/register
// router.post("/register", registerUser);

// module.exports = router;
