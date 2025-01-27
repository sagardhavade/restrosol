const express = require('express');
const router = express();
const multer = require('multer');  // Import multer
const Gallary  = require('../models/gallary');

// Set up multer storage (you can adjust this to your needs)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route for creating a new resume
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title,description,categoryId,image } = req.body;

        // Create a new Gallary instance
        const gallary = new Gallary({
            title,
            description,            
            categoryId,
            image: {
                data: req.file.buffer,  // Store the file as Buffer
                contentType: req.file.mimetype  // Store the file type
            }
        });

        await gallary.save();
        res.status(201).json(gallary);
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