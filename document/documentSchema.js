var mongoose = require('mongoose');

var documentSchema = mongoose.Schema({
    users: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'client'
    },
    documentTitle: {
        type: String
    },
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