module.exports.pdfToText = function (file, callback) {
    var spawn = require('child_process').spawn;
    var process = spawn('pdftotext', [
        file.file,
        "-"
    ]);
    var result = "";
    process.stdout.on('data', data => {
        result += data.toString();
    });
    process.stderr.on('data', data => {
        console.log(data.toString());
    });
    process.on('close', exit => {
        console.log("pdftotext exited with result: " + exit);
        callback(result)
    });
    // process.stdin.write(file);
    // process.stdin.end();
    console.log("pdftotext launched.");
};