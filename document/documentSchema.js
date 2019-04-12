var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectID;

var documentSchema = mongoose.Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        unique: true
    },
    date: {
        type: String
    },
    title: {
        type: String
    },
    annotations: [{
        type: String,
        unique: false
    }],
    keypoints: [{
        type: String,
        unique: false
    }],
    file: {
        type: Schema.Types.ObjectId,
        ref: 'file',
        unique: true
    }
});

module.exports = mongoose.model('document', documentSchema);
module.exports.documentSchema = documentSchema;