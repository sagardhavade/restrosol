const express = require('express');
const router = express();
const multer = require('multer');  // Import multer
const Testomonial  = require('../models/testomonial');

// Set up multer storage (you can adjust this to your needs)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route for creating a new testomonial
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, destination,image } = req.body;

        // Create a new Testomonial instance
        const testomonial = new Testomonial({
            name,
            destination,            
            image: {
                data: req.file.buffer,  // Store the file as Buffer
                contentType: req.file.mimetype  // Store the file type
            }
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