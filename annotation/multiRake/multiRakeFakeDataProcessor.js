var fs = require("fs");
var rakeController = require("./multiRakeController");

let file_pattern=/.*.json/;

var directory = process.argv[2];

function doFile(file) {
    fs.readFile(file, "utf-8", function(err, buf) {
        if(err) {
            console.log("Error reading file: " + err);
            return;
        }
        console.log("Read file: " + file);
        let contents = JSON.parse(buf);
        rakeController.extractAnnotations(contents["file"], result => {
            contents["annotations"] = result;
            console.log("New contents: " + contents);
            fs.writeFile(file, JSON.stringify(contents, null, 2), err => {
                if(err) {
                    console.log("Error writing file: " + err);
                }
                console.log("Wrote file: " + file);
            });
        });
    });

}

fs.readdir(directory, (err, files) => {
    if(err) {
        console.log("Error reading directory: " + err);
        return;
    }
    files.forEach(file => {
        if(file_pattern.test(file)) {
            console.log(file);
            doFile(directory + "/" + file);

        }
    });
});