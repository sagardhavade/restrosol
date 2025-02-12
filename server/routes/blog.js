const express = require('express');
const router = express();
const multer = require('multer');  // Import multer
const Blog  = require('../models/blog');

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
      folder: "Blog",
      allowedFormats: ["jpg", "png", "jpeg"],
    },
  });
  const upload = multer({ storage });
  
// router.post('/', upload.single('image'), async (req, res) => {
    router.post("/",upload.fields([ {name:"sectionImage",maxCount:1}]), async (req, res) => {
    try {
        const { category,title, decription,sectionDecription,points,section1Title,section1Decription,section2Title,section2Decription,section3Title,section3Decription,section4Title,section4Decription, } = req.body;
        let sectionImageUrls = [];

        console.log("file",req.files["sectionImage"]);
        if (req.files["sectionImage"]) {
            // If new client images are uploaded, update the clientImage array
            sectionImageUrls = req.files["sectionImage"].map((file) => file.path);
            console.log("url",sectionImageUrls);
        }
        // Create a new Testomonial instance
        const blog = new Blog({
            category,
            title,
            decription,
            sectionDecription,
            points: points ? points.split(",") : [], // Convert CSV to array
            section1Title,
            section1Decription,
            section2Title,
            section2Decription,
            section3Title,
            section3Decription,
            section4Title,section4Decription,
            sectionImage: sectionImageUrls[0], // Store Cloudinary URL instead of Buffer
        });

        await blog.save();
        res.status(201).json(blog);
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

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            updateData,  // Update with the provided body
            { new: true, runValidators: true } // Return updated document
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// PUT route for updating an existing gallary
router.put('/:id', upload.fields([ {name:"sectionImage",maxCount:1}]), async (req, res) => {
    try {
        // Get the data from the request body
        const { category,title, decription,sectionDecription,points,section1Title,section1Decription,section2Title,section2Decription,section3Title,section3Decription,section4Title,section4Decription, } = req.body;

        // Prepare the fields for update
        const updateData = {
            category,
            title,
            decription,
            sectionDecription,
            points: points ? points.split(",") : [], // Convert CSV to array
            section1Title,
            section1Decription,
            section2Title,
            section2Decription,
            section3Title,
            section3Decription,
            section4Title,section4Decription,
        };

       
        let sectionImageUrls = [];
        if (req.files["sectionImage"]) {
            // If new client images are uploaded, update the clientImage array
            sectionImageUrls = req.files["sectionImage"].map((file) => file.path);
        }
       
        if (sectionImageUrls.length > 0) {
            updateData.sectionImage = sectionImageUrls;
        }

        // Find and update the Gallary by ID
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,    // Find gallary by ID
            updateData,       // Update with the new data
            { new: true, runValidators: true } // Return the updated document
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Respond with the updated gallery object
        res.status(200).json(updatedBlog);
    } catch (error) {
        // Handle any errors during the update
        res.status(500).json({ error: error.message });
    }
});



router.get('/', async (req, res) => {
    try {
        const Blogs = await Blog.find();
        res.status(200).json(Blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id); // Fetch the blog by ID

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json(blog); // Respond with the blog
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const Id = await Blog.findByIdAndDelete(req.params.id);

        if (!Id) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;