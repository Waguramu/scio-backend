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
        res.send(annotations);
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
    console.log('Received request for file conversion (' + req.files + ')');
    if (!req.files || !req.files['file']) {
        console.log('File missing (' + req.files + ')');
        res.status(400).send('No file provided.');
        return;
    }
    console.log(JSON.stringify(req.files));
    pdf.pdfToText(req.files['file'], annotations => {
        console.log('Extracted annotations (size ' + annotations.length + ')');
        res.status(200).send({annotations});
    });
};