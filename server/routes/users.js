const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const userList = await User.find().select("-passwordHash");
    res.status(200).json(userList);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-passwordHash");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "The user with the given ID does not exist",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// Register a new user
// router.post("/register", async (req, res) => {
//   try {
//     const { email, username, password } = req.body;
// console.log(req.body);
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res
//         .status(400)
//         .json({ message: "User already exists with this email." });
//     }

//     // Create a new user instance
//     const newUser = new User({
//       email,
//       username,
//       password, // Storing plain text password (not recommended for production)
//     });

//     // Save the user to the database
//     await newUser.save();

//     // Respond with success message
//     res.status(201).json({ message: "User registered successfully." });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res.status(500).json({ message: "Failed to register user." });
//   }
// });


// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);  // Salt rounds
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new User({
      email,
      username,
      password: hashedPassword, // Storing hashed password
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user." });
  }
});



// router.post(
//   "/login",
//   [
//     body("email").isEmail().withMessage("Enter a valid email address"),
//     body("password").notEmpty().withMessage("Password is required"),
//   ],
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const { email, password } = req.body;

//       // Check if user exists
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ message: "User not found" });
//       }

//       // Compare passwords directly
//       const isPasswordMatch = password === user.password;

//       if (!isPasswordMatch) {
//         return res.status(400).json({ message: "Incorrect password" });
//       }

//       // Generate JWT token
//       // const token = jwt.sign(
//       //   { userId: user._id },
//       //   process.env.JWT_SECRET,
//       //   { expiresIn: "1d" }
//       // );

//       // Respond with success message and token
//       res.status(200).json({
//         success: true,
//         message: "Login successful",
//         // token,
//       });
//     } catch (error) {
//       console.error("Error during login:", error.message);
//       res.status(500).json({ success: false, error: "Server error" });
//     }
//   }
// );


// Login route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter a valid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      // Compare hashed password
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET,  // Store your JWT secret key in .env file
        { expiresIn: "1d" }  // Expiration time
      );

      // Respond with the JWT token
      res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      });
    } catch (error) {
      console.error("Error during login:", error.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  }
);

router.get("/get/count", async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.status(200).json({ userCount });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
