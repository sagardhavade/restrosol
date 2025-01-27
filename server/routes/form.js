const express = require('express');
const router = express();
const multer = require('multer');  // Import multer
const Form  = require('../models/form');

// Set up multer storage (you can adjust this to your needs)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/', async (req, res) => {
    try {
        const form = new Form(req.body);
        await form.save();
        res.status(201).json(form);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const form = await Form.findByIdAndUpdate(
            req.params.id,
            req.body, // Update with the provided body
            { new: true, runValidators: true } // Return updated document
        );

        if (!form) {
            return res.status(404).json({ message: 'Job Post not found' });
        }

        res.status(200).json(form);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const Forms = await Form.find();
        res.status(200).json(Forms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id); // Fetch the form by ID

        if (!form) {
            return res.status(404).json({ message: 'Form not found' });
        }

        res.status(200).json(form); // Respond with the form
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const Id = await Form.findByIdAndDelete(req.params.id);

        if (!Id) {
            return res.status(404).json({ message: 'Form not found' });
        }

        res.status(200).json({ message: 'Form deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;