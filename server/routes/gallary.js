const express = require('express');
const router = express();
const multer = require('multer');  // Import multer
const Gallary  = require('../models/gallary');
const AddBrand = require('../models/addBrand')
const cors = require("cors");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(cors());
app.use(express.json());


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
      folder: "Gallary",
      allowedFormats: ["jpg", "png", "jpeg"],
    },
  });
  const upload = multer({ storage });
  
// 🔹 POST route for uploading images
// router.post("/",upload.fields([ { name: "images", maxCount: 5 }, { name: "clientImage", maxCount: 2 }]), async (req, res) => {
    router.post("/",upload.fields([ { name: "images", maxCount: 5 }]), async (req, res) => {
      try {
        const { category, brandName, brandDescription, description, points, clientDescription, clientName } = req.body;
        console.log("re log",req.body)
        // 🔹 Handling multiple product images
        let imageUrls = [];
        if (req.files["images"]) {
          imageUrls = req.files["images"].map((file) => file.path); // Store multiple product images
        }
  
        // 🔹 Handling multiple client images
        let clientImageUrls = [];
        if (req.files["clientImage"]) {
          clientImageUrls = req.files["clientImage"].map((file) => file.path); // Store multiple client images
        }
  
        // 🔹 Create a new Gallary instance
        const gallary = new Gallary({
          category:category,
          brandName:brandName,
          brandDescription:brandDescription,
          description:description,
          points:points,          
          clientDescription,
          clientName: clientName ? clientName.split(",") : [], // Convert CSV to array
          images: imageUrls, // Store multiple product images
        //   clientImage: clientImageUrls, // Store multiple client images
        });
  console.log("serwef",gallary);
        await gallary.save();
        res.status(201).json(gallary);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  );
  // POST route for creating a new resume
router.post('/addBrand', async (req, res) => {
    try {
        const addBrand = new AddBrand(req.body);
        await addBrand.save();
        res.status(201).json(addBrand);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// PUT route for updating an existing resume
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const updateData = req.body;
        if (req.file) {
            updateData.resume = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        const updatedGallary = await Gallary.findByIdAndUpdate(
            req.params.id,
            updateData,  // Update with the provided body
            { new: true, runValidators: true } // Return updated document
        );

        if (!updatedGallary) {
            return res.status(404).json({ message: 'Gallary not found' });
        }

        res.status(200).json(updatedGallary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const Gallarys = await Gallary.find();
        res.status(200).json(Gallarys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const gallary = await Gallary.findById(req.params.id); // Fetch the gallary by ID

        if (!gallary) {
            return res.status(404).json({ message: 'Gallary not found' });
        }

        res.status(200).json(gallary); // Respond with the gallary
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const Id = await Gallary.findByIdAndDelete(req.params.id);

        if (!Id) {
            return res.status(404).json({ message: 'Gallary not found' });
        }

        res.status(200).json({ message: 'Gallary deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;