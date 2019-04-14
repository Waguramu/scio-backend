module.exports.extractAnnotations = function (text, callback) {
    var spawn = require('child_process').spawn;
    var process = spawn('python3', [
        "annotation/multiRake/multi_rake_controller.py",
        text
    ]);
    var result = [];
    process.stdout.on('data', data => {
        data.toString().split("\n").forEach(item => {
            if (item.length > 0) {
                result.push(item);
            }
        });
    });
    process.stderr.on('data', data => {
        console.log(data.toString());
    });
    process.on('close', exit => {
        console.log("Multi rake exited with result: " + exit + ", " + result);
        callback(result)
    });
    console.log("Multi rake launched.");
};