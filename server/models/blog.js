const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  categoryBtn: {
    type: String,
    required: true,
  },
  viewMoreBtn: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId
    ref: "categories", // Reference the Category model
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Virtual for "id" field
blogSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Include virtual fields in JSON output
blogSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Blog", blogSchema);
 