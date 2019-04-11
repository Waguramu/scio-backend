var Annotator = require('../multiRake/multi_rake_controller.py');



module.exports.update = function(file_id, set){
    // update all related documents
    // if such documents do not exist - create a new one
    svae(file_id, set)
};

module.exports.save = function(file_id, set){
    // if such documents do not exist - create a new one
    Annotator.extractAnnotations(set)
};