function extractAnnotations(text, callback) {
    var spawn = require('child_process').spawn;
    var process = spawn('python3', [
        "/multiRake/multi_rake_controller.py",
        text
    ]);
    var result = [];
    process.stdout.on('data', function (data) {
        result.push(data.split("\n"))
    });
    process.stderr.on('data', data => {
        console.log(data);
    });
    process.on('close', callback(result));
}