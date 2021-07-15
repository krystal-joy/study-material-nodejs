var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/greet/:name', function(req, res) {
	res.send(`<html><head></head><body><h1>Hello ${ req.params.name }!</h1></body></html>`);
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'Krystal', lastname: 'Joy' });
});

app.listen(port);