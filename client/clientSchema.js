var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    firstName: {
        type: String,
        unique: false
    },
    lastName: {
        type: String,
        unique: false
    },
    birthday: {
        type: Date,
        unique: false
    },
    address: {
        type: String,
        unique: false
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: false
    },
    attachments: [{
        collections: [{
            type: Schema.Types.ObjectId, ref: 'collection', unique: false
        }],
        documents: [{
            type: Schema.Types.ObjectId, ref: 'document', unique: false
        }]
    }]
});

module.exports = mongoose.model('client', clientSchema);