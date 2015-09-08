var s = require('node-static'),
  file = new s.Server('.');

var app = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8080);

module.exports = app;