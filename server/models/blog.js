const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  category: {
    type: String,    
  },
  title: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
  sectionDecription: {
    type: String,
    required: true,
  },
  points:[{
    type:String,
  }],
  sectionImage:{
    type:String,
  },
  section1Title:{
    type:String,
  },
  section1Decription:{
    type:String,
  },
  section2Title:{
    type:String,
  },
  section2Decription:{
    type:String,
  },
  section3Title:{
    type:String,
  },
  section3Decription:{
    type:String,
  },
  section4Title:{
    type:String,
  },
  section4Decription:{
    type:String,
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
 