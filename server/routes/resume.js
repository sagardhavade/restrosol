const express = require('express');
const router = express();
const multer = require('multer');  // Import multer
const Resume  = require('../models/resume');

// Set up multer storage (you can adjust this to your needs)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route for creating a new resume
router.post('/', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, subject, phone, message } = req.body;

        // Create a new Resume instance
        const resume = new Resume({
            name,
            email,
            subject,
            phone,
            message,
            resume: {
                data: req.file.buffer,  // Store the file as Buffer
                contentType: req.file.mimetype  // Store the file type
            }
        });

        await resume.save();
        res.status(201).json(resume);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT route for updating an existing resume
router.put('/:id', upload.single('resume'), async (req, res) => {
    try {
        const updateData = req.body;
        if (req.file) {
            updateData.resume = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        const updatedResume = await Resume.findByIdAndUpdate(
            req.params.id,
            updateData,  // Update with the provided body
            { new: true, runValidators: true } // Return updated document
        );

        if (!updatedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json(updatedResume);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const Resumes = await Resume.find();
        res.status(200).json(Resumes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const Resume = await Resume.findById(req.params.id);

        if (!Resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json(Resume);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const Resume = await Resume.findByIdAndDelete(req.params.id);

        if (!Resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json({ message: 'Resume deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;