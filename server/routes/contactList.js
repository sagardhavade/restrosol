const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const ContactList = require("../models/contactList");

// Validation middleware for creating contacts
const validateContact = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('type').notEmpty().withMessage('Type is required'),
];

// POST a new contact
router.post('/', validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const contact = new ContactList(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await ContactList.find();
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET a specific contact by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await ContactList.findOne({ id: req.params.id });

    if (!contact) {
      return res.status(404).send({ error: 'Contact not found' });
    }

    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Validation middleware for updating contact status
const validateStatusUpdate = [
  body('status').notEmpty().withMessage('Status is required')
  // Optionally add other status-specific validations
];

// PATCH/update a contact's status by ID
router.patch('/:id', validateStatusUpdate, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const updates = Object.keys(req.body);
  const allowedUpdates = ['status'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const contact = await ContactList.findOne({ id: req.params.id });

    if (!contact) {
      return res.status(404).send({ error: 'Contact not found' });
    }

    updates.forEach((update) => contact[update] = req.body[update]);
    await contact.save();
    res.send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE a contact by ID
router.delete('/:id', async (req, res) => {
  try {
    const contact = await ContactList.findOneAndDelete({ id: req.params.id });

    if (!contact) {
      return res.status(404).send({ error: 'Contact not found' });
    }

    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
