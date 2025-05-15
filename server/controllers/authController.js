// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// // Import models
// const Donor = require("../models/Donor");
// const Patient = require("../models/Patient");
// const Admin = require("../models/Admin");
// const Hospital = require("../models/Hospital");

// const generateToken = (id, role) => {
//   return jwt.sign({ id, role }, process.env.JWT_SECRET, {
//     expiresIn: "3d",
//   });
// };

// // 🟢 Login Controller
// const loginUser = async (req, res) => {
//   const { email, password, role } = req.body;

//   try {
//     let User;
//     if (role === "donor") User = Donor;
//     else if (role === "patient") User = Patient;
//     else if (role === "admin") User = Admin;
//     else if (role === "hospital") User = Hospital;
//     else return res.status(400).json({ msg: "Invalid role" });

//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ msg: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

//     const token = generateToken(user._id, role);
//     res.json({ token, user, role });
//   } catch (err) {
//     res.status(500).json({ msg: "Server error", error: err.message });
//   }
// };

// // 🟢 Register Controller (only for donor/patient/hospital from here)
// const registerUser = async (req, res) => {
//   const { name, email, password, role, bloodType } = req.body;

//   try {
//     let User;
//     if (role === "donor") User = Donor;
//     else if (role === "patient") User = Patient;
//     else if (role === "hospital") User = Hospital;
//     else return res.status(400).json({ msg: "Invalid role" });

//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(409).json({ msg: "User already exists" });

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
//     res.status(500).json({ msg: "Server error", error: err.message });
//   }
// };

// module.exports = {
//   loginUser,
//   registerUser,
// };
