var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    firstname: {
        type: String,
        unique: false
    },
    lastname: {
        type: String,
        unique: false
    },
    birthday: {
        type: Date,
        unique: true
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
        unique: true
    },
    attachments: {
        type: [String],
        unique: false
    }
});