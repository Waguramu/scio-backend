var Config = require('../config/config.js');
var File = require('./fileSchema');
var Document = require('../document/documentController');
var multer = require('multer');
var Q = require('q');
var fs = require('fs');
var DIR = './files/';

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.findByIdAndUpdate = function(id, path, hash){
    // find the file & update the entry
    // If the file entry does not exist, create a new one
    // recalculate the parameters for the files (annotations etc.)
    var set = {'annotations': [], 'keypoints': [], 'files': []};
    // update all related documents
    Document.update(id, set);
};

module.exports.getFilePath = function(id) {
    File.findById({_id:id}).lean().exec(function (err, file) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (file) {
            // return path
            deferred.resolve(file.path);
        } else {
            // path not found
            deferred.resolve();
        }
    });
};

module.exports.create = function(path) {
    // create new file entry

    // recalculate the parameters for the files (annotations etc.)
    var set = {'annotations': [], 'keypoints': [], 'files': []};
    // update all related documents
    Document.update(id, set);
};

module.exports.uploadFile = function (req, res, next) {
    let deferred = Q.defer();
    let upload = multer({dest: DIR}).single('file');

    if(!req.params.id){
        res.status(500).send('id required');
        return;
    }

    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("An Error occurred")
        }
        // No error occured.
        let path = req.file.path;
        // calculate hash
        let hash = '';
        findByIdAndUpdate(
            { _id: req.params.id },
            { _path: path},
            { _hash: hash},
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
        return res.send("Upload Completed for "+path);
    });
};

module.exports.getFile = function(req,res){
    if(!req.params.id){
        res.status(500).send('id required');
        return;
    }

    let path = getFilePath(req.params.id);

    if (path) {
        fs.readFile(path, function (err, data) {
            if (err) throw err; // Fail if the file can't be read.
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(data); // Send the file data to the browser.
        });
    } else {
        res.status(500).send("Error");
    }
};