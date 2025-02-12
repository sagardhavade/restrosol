const express = require("express");
const router = express();
const multer = require("multer"); // Import multer
const Achievement = require("../models/achievement");

const cors = require("cors");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(cors());
app.use(express.json());

// Set up multer storage (you can adjust this to your needs)
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// 🔹 Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// 🔹 Configure Multer Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Achievement",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});
const upload = multer({ storage }); 

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, publisher, link, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }

    // Create a new Achievement instance
    const achievement = new Achievement({
      title,
      publisher,
      link,
      description,
      image: req.file.path, // Store Cloudinary URL instead of Buffer
    });

    await achievement.save();
    res.status(201).json(achievement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT route for updating an existing achievement
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
      // Extract data from the request body
      const { title, publisher, link, description } = req.body;
      const updateData = { title, publisher, link, description };
  
      // If a new image is uploaded, update the image field with Cloudinary URL (or image path)
      if (req.file) {
        updateData.image = req.file.path; // Store Cloudinary URL (path or URL as needed)
      }
  
      // Find the achievement by ID and update it
      const updatedAchievement = await Achievement.findByIdAndUpdate(
        req.params.id,
        updateData, // Update with the provided body
        { new: true, runValidators: true } // Return updated document with validation
      );
  
      // If the achievement was not found
      if (!updatedAchievement) {
        return res.status(404).json({ message: "Achievement not found" });
      }
  
      // Return the updated achievement
      res.status(200).json(updatedAchievement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

router.get("/", async (req, res) => {
  try {
    const Achievements = await Achievement.find();
    res.status(200).json(Achievements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const Id = await Achievement.findById(req.params.id);

    if (!Id) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    res.status(200).json(Achievement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const Id = await Achievement.findByIdAndDelete(req.params.id);

    if (!Id) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
