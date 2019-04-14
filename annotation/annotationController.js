var Config = require('../config/config.js');
var jwt = require('jwt-simple');
var Q = require('q');
var _ = require('lodash');
var rake = require('../multiRake/multiRakeController');

module.exports.extractAnnotations = function(req, res) {
    if(!req.body.text) {
        res.status(401).send("Parameter text not provided.");
    }
    rake.extractAnnotations(req.body.text, annotations => {
        res.status(200).send(annotations);
    });
};
