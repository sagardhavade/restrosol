const mongoose = require('mongoose')

const gallarySchema = mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  brandName: {
    type: String,
    required: true
  },
  brandDescription: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  points: [{
    type: String

  }],
  // categoryId: {
  //   type: mongoose.Schema.Types.ObjectId, // Use ObjectId
  //   ref: "categories", // Reference the Category model
  // },
  // image: {
  //   data: Buffer,
  //   contentType: String,
  // },
  images: [{
    type: String
  }],
  clientDescription: {
    type: String
  },
  clientName: [{
    type: String
  }],
  clientImage: [ {
    type: String
  }],
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

// Virtual for "id" field
gallarySchema.virtual('id').get(function () {
  return this._id.toHexString()
})

// Include virtual fields in JSON output
gallarySchema.set('toJSON', {
  virtuals: true
})

module.exports = mongoose.model('Gallary', gallarySchema)
