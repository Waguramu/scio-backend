var Config = require('../config/config.js');
var jwt = require('jwt-simple');
var Q = require('q');
var _ = require('lodash');
var rake = require('./multiRake/multiRakeController');
var pdf = require('./pdfToText/pdfToTextController');
var Document = require('../document/documentSchema');

module.exports.extractAnnotations = function(req, res) {
    if(!req.body.text) {
        res.status(400).send("Parameter text not provided.");
    }
    rake.extractAnnotations(req.body.text, annotations => {
        res.status(200).send(annotations);
    });
};

module.exports.search = function (req, res) {
    if (!req.body.query) {
        res.status(400).send('No query provided.');
        return;
    }
    Document.find(
        {$text: {$search: req.body.query}},
        {score: {$meta: "textScore"}}
    ).sort(
        {score: {$meta: "textScore"}}
    ).then(
        results => res.status(200).send(results),
        error => res.status(500).send("Query error: " + error)
    );
};

module.exports.toText = function (req, res) {
    if (!req.body) {
        res.status(400).send('No file provided.');
        return;
    }
    pdf.pdfToText(req.body, annotations => {
        res.status(200).send(annotations);
    });
};