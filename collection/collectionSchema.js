var mongoose = require('mongoose');

var collectionSchema = mongoose.Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        unique: true
    },
    date: {
        type: String
    },
    title: {
        type: String,
        unique: true
    },
    annotations: [{
        type: String,
        unique: false
    }],
    summary: {
        type: String,
        unique: false
    },
    documents: [{
        type: ObjectId,
        ref: 'document'
    }]
});

module.exports = mongoose.model('collection', collectionSchema);