const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    index: true, // Indexing the email field
  },
  subject: {
    type: String,
    required: true,
  },
  phone: {
    type: String,  // Changed to String to accommodate different phone formats
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
  resume: {
    data: Buffer,
    contentType: String
    
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Virtual for "id" field
resumeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Include virtual fields in JSON output
resumeSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("resume", resumeSchema);
