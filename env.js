var http = require('http');
var hash = require("./hash.js");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("ENVIRONMENT\n");
    env = process.env;
    k = hash.sortedKeys(env);
    for (i=0; i < k.length; i++) {
        key = k[i];
        response.write(key + ": " + env[key] + "\n");
    }
    response.end();
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
