const mongoose = require("mongoose");

const testomonialSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },  
  image: {
    type:String,
  },
  message:{
    type:String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Virtual for "id" field
testomonialSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Include virtual fields in JSON output
testomonialSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("testomonial", testomonialSchema);
