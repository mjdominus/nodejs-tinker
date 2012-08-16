var http = require('http');

function keys(h) {
    var i, a = [];
    for (i in h) a.push(i);
    return a;
}

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("ENVIRONMENT\n");
    env = process.env;
    k = keys(env);
    k.sort();
    for (i=0; i < k.length; i++) {
        key = k[i];
        response.write(key + ": " + env[key] + "\n");
    }
    response.end();
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
