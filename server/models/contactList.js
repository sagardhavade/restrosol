const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Function to generate a unique ID with "restro" prefix
function generateRestroId() {
  const uniqueSuffix = Date.now().toString().slice(-6); // Generate a 6-digit suffix
  return `restro${uniqueSuffix}`;
}

const contactListSchema = new Schema({
  id: {
    type: String,
    default: generateRestroId,
    unique: true,
    index: true // Indexing the id field
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    index: true // Indexing the email field
  },
  type: {
    type: String,
    required: [true, 'Type is required']
  },
  status: {
    type: String,
    enum: ['pending', 'resolve', 'close'],
    default: 'pending'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Middleware to ensure the generated ID is unique
contactListSchema.pre('save', async function(next) {
  if (this.isNew) {
    while (await ContactList.exists({ id: this.id })) {
      this.id = generateRestroId();
    }
  }
  next();
});

const ContactList = mongoose.model('ContactList', contactListSchema);

module.exports = ContactList;
