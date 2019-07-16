var fs = require('fs');

module.exports.get = function (req, res) {
    var event = fs.readFileSync('../app/data/event/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};
module.exports.save = function (req, res) {
    var event = req.body;
    fs.writeFileSync('../app/data/event/' + req.params.id + '.json', JSON.stringify(event));
    res.send(event);
};

module.exports.getAll = function (req, res) {
    var dirname = '../app/data/event';
    var lastFile;
    fs.readdir(dirname, function (err, files) {
        
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        
        files.forEach(function (file) {
            
            console.log(file);
            lastFile=file;
        });
        console.log(lastFile);
    var event = fs.readFileSync('../app/data/event/' + lastFile, 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
    });
    
}
