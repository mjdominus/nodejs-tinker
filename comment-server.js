var http = require('http');
var hash = require("./hash.js");

function onGet(request, response) {
    
};

function onPost(request, response) {
};

var dispatcher = function(request, response) {
    if (request.method == 'GET') {
        onGet(request, response);
    } else if (request.method == 'POST') {
        onPost(request, response);
    } else {
        response.writeHead(405, {'Content-Type': 'text/plain'});
        response.write("Unrecognized method " + request.method + "\n");
    }
};


http.createServer(function (request, response) {
    dispatcher(request, response);
    response.end();
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
