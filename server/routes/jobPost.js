const express = require('express');
const router = express();

const JobPost  = require('../models/jobPost');

router.get('/', async (req, res) => {
    try {
        const jobPosts = await JobPost.find();
        res.status(200).json(jobPosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const jobPost = await JobPost.findById(req.params.id);

        if (!jobPost) {
            return res.status(404).json({ message: 'Job Post not found' });
        }

        res.status(200).json(jobPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const jobPost = new JobPost(req.body);
        await jobPost.save();
        res.status(201).json(jobPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const jobPost = await JobPost.findByIdAndUpdate(
            req.params.id,
            req.body, // Update with the provided body
            { new: true, runValidators: true } // Return updated document
        );

        if (!jobPost) {
            return res.status(404).json({ message: 'Job Post not found' });
        }

        res.status(200).json(jobPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const jobPost = await JobPost.findByIdAndDelete(req.params.id);

        if (!jobPost) {
            return res.status(404).json({ message: 'Job Post not found' });
        }

        res.status(200).json({ message: 'Job Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;