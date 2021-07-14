var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'Krystal',
        lastname: 'Joy'
    }
    res.end(JSON.stringify(obj));
    
}).listen(1234, '127.0.0.1');