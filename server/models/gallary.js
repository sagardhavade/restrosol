const mongoose = require("mongoose");

const gallarySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
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
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Virtual for "id" field
gallarySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Include virtual fields in JSON output
gallarySchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Gallary", gallarySchema);
