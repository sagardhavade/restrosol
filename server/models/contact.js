const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    index: true // Indexing the email field
  },
  phone:{
    type:Number,
    required:true
  },
  address: {
    type: String,
    required: false
  },
  message: {
    type: String,
    required: false
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Virtual for "id" field
contactSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Include virtual fields in JSON output
contactSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Contact", contactSchema);
