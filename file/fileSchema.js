var mongoose = require('mongoose');

var fileSchema = mongoose.Schema({
    path: {
        type: String,
        unique: true
    },
    hash: {
        type: String,
        unique: true
    }
});