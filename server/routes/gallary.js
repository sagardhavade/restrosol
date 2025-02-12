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
    router.post("/",upload.fields([ { name: "images", maxCount: 10 },{ name: "clientImage", maxCount: 2 },{name:"sectionImage",maxCount:1},{name:"clientSectionImage",maxCount:1}]), async (req, res) => {
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
        let sectionImageUrls = [];
        if (req.files["sectionImage"]) {
            // If new client images are uploaded, update the clientImage array
            sectionImageUrls = req.files["sectionImage"].map((file) => file.path);
        }
        let clientSectionImageUrls = [];
        if (req.files["clientSectionImage"]) {
            // If new client images are uploaded, update the clientImage array
            clientSectionImageUrls = req.files["clientSectionImage"].map((file) => file.path);
        }

  
        // 🔹 Create a new Gallary instance
        const gallary = new Gallary({
          category:category,
          brandName:brandName,
          brandDescription:brandDescription,
          description:description,
          //points:points,          
          points: points ? points.split(",") : [], // Convert CSV to array
          clientDescription,
          clientName: clientName ? clientName.split(",") : [], // Convert CSV to array
          images: imageUrls, // Store multiple product images
          clientImage: clientImageUrls, // Store multiple client images
          sectionImage:sectionImageUrls,
          clientSectionImage:clientSectionImageUrls
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

// PUT route for updating an existing gallary
router.put('/:id', upload.fields([ { name: "images", maxCount: 10 }, { name: "clientImage", maxCount: 2 },{name:"sectionImage",maxCount:1},{name:"clientSectionImage",maxCount:1}]), async (req, res) => {
    try {
        // Get the data from the request body
        const { category, brandName, brandDescription, description, points, clientDescription, clientName } = req.body;

        // Prepare the fields for update
        const updateData = {
            category,
            brandName,
            brandDescription,
            description,
            points: points ? points.split(",") : [], // Convert CSV to array
            clientDescription,
            clientName: clientName ? clientName.split(",") : [] // Convert CSV to array
        };

        // Handle image updates (for both product and client images)
        let imageUrls = [];
        if (req.files["images"]) {
            // If new images are uploaded, update the images array
            imageUrls = req.files["images"].map((file) => file.path);
        }

        let clientImageUrls = [];
        if (req.files["clientImage"]) {
            // If new client images are uploaded, update the clientImage array
            clientImageUrls = req.files["clientImage"].map((file) => file.path);
        }
        let sectionImageUrls = [];
        if (req.files["sectionImage"]) {
            // If new client images are uploaded, update the clientImage array
            sectionImageUrls = req.files["sectionImage"].map((file) => file.path);
        }
        let clientSectionImageUrls = [];
        if (req.files["clientSectionImage"]) {
            // If new client images are uploaded, update the clientImage array
            clientSectionImageUrls = req.files["clientSectionImage"].map((file) => file.path);
        }

        // Update the images and client images only if new files are uploaded
        if (imageUrls.length > 0) {
            updateData.images = imageUrls;
        }

        if (clientImageUrls.length > 0) {
            updateData.clientImage = clientImageUrls;
        }
        if (clientSectionImageUrls.length > 0) {
            updateData.clientSectionImage = clientSectionImageUrls;
        }
        if (sectionImageUrls.length > 0) {
            updateData.sectionImage = sectionImageUrls;
        }

        // Find and update the Gallary by ID
        const updatedGallary = await Gallary.findByIdAndUpdate(
            req.params.id,    // Find gallary by ID
            updateData,       // Update with the new data
            { new: true, runValidators: true } // Return the updated document
        );

        if (!updatedGallary) {
            return res.status(404).json({ message: 'Gallary not found' });
        }

        // Respond with the updated gallery object
        res.status(200).json(updatedGallary);
    } catch (error) {
        // Handle any errors during the update
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