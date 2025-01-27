const mongoose = require('mongoose');

const jobPostSchema = mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    department : {
        type: String,
        default: ''
    },
    aboutThisJob : {
        type: String,
        default: ''
    },
    requirements : [{
        type: String,
      
    }],    
    dateCreated: {
        type: Date,
        default: Date.now
    },
    closingDate: {
        type: Date,
        default: ''
    }
})

jobPostSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

jobPostSchema.set('toJSON', {
    virtuals:true,
});

module.exports= mongoose.model('jobPost', jobPostSchema);