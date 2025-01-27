const mongoose = require('mongoose');

const achievementSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    publisher : {
        type: String,
        required: true
    },
    Link : {
        type: String,
        default: ''
    },
    description : {
        type: String,
        default: ''
    },  
  image: {
    data: Buffer,
    contentType: String
    
  },    
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

achievementSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

achievementSchema.set('toJSON', {
    virtuals:true,
});

module.exports= mongoose.model('achievement', achievementSchema);