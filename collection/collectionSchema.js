var mongoose = require('mongoose');

var collectionSchema = mongoose.Schema({
    annotations: {
        type: [String],
        unique: false
    },
    summary: {
        type: String,
        unique: false
    },
    documents: {
        type: [String],
        unique: true
    }
});