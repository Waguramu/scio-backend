var Config = require('../config/config.js');
var Client = require('./clientSchema');
var jwt = require('jwt-simple');
var Q = require('q');
var _ = require('lodash');

module.exports.clientById = function(req, res) {
    Client.findOne({email: req.body.email}, (error, client) => {
        if(error) {
            res.status(500).send("Error searching for user: " + error);
            return;
        }
        if(!client) {
            res.status(404).send("User not found.");
            return;
        }

        res.status(200).send(client);
    })
};

module.exports.listClients = function (req, res) {
    Client.find({}, (err, clients) => {
        if(err) {
            res.status(500).send("Error loading clients", err);
            return;
        }
        res.status(200).send(clients);
    });
};