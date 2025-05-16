// controllers/authController.js
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: 'Login error' });
  }
};


// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// // Import models
// import Donor from '../models/Donor.js';
// import Patient from '../models/Patient.js';
// import Admin from '../models/Admin.js';
// import Hospital from '../models/Hospital.js';

// // 🔐 Generate JWT Token
// const generateToken = (id, role) => {
//   return jwt.sign({ id, role }, process.env.JWT_SECRET, {
//     expiresIn: '3d',
//   });
// };

// // 🟢 Login Controller
// export const loginUser = async (req, res) => {
//   const { email, password, role } = req.body;

//   try {
//     let User;
//     if (role === 'donor') User = Donor;
//     else if (role === 'patient') User = Patient;
//     else if (role === 'admin') User = Admin;
//     else if (role === 'hospital') User = Hospital;
//     else return res.status(400).json({ msg: 'Invalid role' });

//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ msg: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ msg: 'Invalid credentials' });

//     const token = generateToken(user._id, role);
//     res.json({ token, user, role });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error', error: err.message });
//   }
// };

// // 🟢 Register Controller
// export const registerUser = async (req, res) => {
//   const { name, email, password, role, bloodType } = req.body;

//   try {
//     let User;
//     if (role === 'donor') User = Donor;
//     else if (role === 'patient') User = Patient;
//     else if (role === 'hospital') User = Hospital;
//     else return res.status(400).json({ msg: 'Invalid role' });

//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(409).json({ msg: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       ...(bloodType && { bloodType }),
//     });

//     const token = generateToken(newUser._id, role);
//     res.status(201).json({ token, user: newUser, role });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error', error: err.message });
//   }
// };