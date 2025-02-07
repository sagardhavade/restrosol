const mongoose = require('mongoose')

const addBrandSchema = mongoose.Schema({
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
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

addBrandSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

addBrandSchema.set('toJSON', {
  virtuals: true
})

module.exports = mongoose.model('AddBrand', addBrandSchema)
