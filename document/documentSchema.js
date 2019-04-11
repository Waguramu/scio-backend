var mongoose = require('mongoose');

var documentSchema = mongoose.Schema({
    annotations: {
        type: [String],
        unique: false
    },
    keypoints: {
        type: [String],
        unique: false
    },
    file: {
        type: String,
        unique: true
    }
});