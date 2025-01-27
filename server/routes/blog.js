const express = require('express');
const router = express();
const multer = require('multer');  // Import multer
const Blog  = require('../models/blog');

// Set up multer storage (you can adjust this to your needs)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST route for creating a new resume
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title,subtitle,categoryBtn,viewMoreBtn,categoryId,path,image } = req.body;

        // Create a new Blog instance
        const blog = new Blog({
            title,
            subtitle,
            categoryBtn,
            viewMoreBtn,
            categoryId,
            path,
            image: {
                data: req.file.buffer,  // Store the file as Buffer
                contentType: req.file.mimetype  // Store the file type
            }
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