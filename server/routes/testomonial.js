const express = require('express');
const router = express();
const multer = require('multer');  // Import multer
const Testomonial  = require('../models/testomonial');
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
// POST route for creating a new testomonial
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, destination,message } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "Image is required" });
          }
        // Create a new Testomonial instance
        const testomonial = new Testomonial({
            name,
            destination,
            message,            
            image: req.file.path, // Store Cloudinary URL instead of Buffer
        });

        await testomonial.save();
        res.status(201).json(testomonial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT route for updating an existing testomonial
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const updateData = req.body;
        if (req.file) {
            updateData.testomonial = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        const updatedTestomonial = await Testomonial.findByIdAndUpdate(
            req.params.id,
            updateData,  // Update with the provided body
            { new: true, runValidators: true } // Return updated document
        );

        if (!updatedTestomonial) {
            return res.status(404).json({ message: 'Testomonial not found' });
        }

        res.status(200).json(updatedTestomonial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const Testomonials = await Testomonial.find();
        res.status(200).json(Testomonials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const Id = await Testomonial.findById(req.params.id);

        if (!Id) {
            return res.status(404).json({ message: 'Testomonial not found' });
        }

        res.status(200).json(Id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const Id = await Testomonial.findByIdAndDelete(req.params.id);

        if (!Id) {
            return res.status(404).json({ message: 'Testomonial not found' });
        }

        res.status(200).json({ message: 'Testomonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;