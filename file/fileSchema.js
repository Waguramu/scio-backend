var mongoose = require('mongoose');

var fileSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    path: {
        type: String,
        unique: true
    },
    hash: {
        type: String,
        unique: true
    }
});