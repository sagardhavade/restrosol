const express = require('express');
const router = express();
const multer = require('multer');  // Import multer
const Achievement  = require('../models/achievement');

// Set up multer storage (you can adjust this to your needs)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route for creating a new achievement
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title,publisher,link,description,image } = req.body;

        // Create a new Achievement instance
        const achievement = new Achievement({
           title,
           publisher,
           link,
           description,
            image: {
                data: req.file.buffer,  // Store the file as Buffer
                contentType: req.file.mimetype  // Store the file type
            }
        });

        await achievement.save();
        res.status(201).json(achievement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT route for updating an existing achievement
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const updateData = req.body;
        if (req.file) {
            updateData.achievement = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        const updatedAchievement = await Achievement.findByIdAndUpdate(
            req.params.id,
            updateData,  // Update with the provided body
            { new: true, runValidators: true } // Return updated document
        );

        if (!updatedAchievement) {
            return res.status(404).json({ message: 'Achievement not found' });
        }

        res.status(200).json(updatedAchievement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const Achievements = await Achievement.find();
        res.status(200).json(Achievements);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const Id = await Achievement.findById(req.params.id);

        if (!Id) {
            return res.status(404).json({ message: 'Achievement not found' });
        }

        res.status(200).json(Achievement);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const Id = await Achievement.findByIdAndDelete(req.params.id);

        if (!Id) {
            return res.status(404).json({ message: 'Achievement not found' });
        }

        res.status(200).json({ message: 'Achievement deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;