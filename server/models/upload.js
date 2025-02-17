// Upload.js
const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  fileId: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  file: {
    data: Buffer,
    contentType: String,
  },
  uploadTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Upload = mongoose.model("upload", UploadSchema);
