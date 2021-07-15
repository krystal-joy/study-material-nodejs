var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
	console.log('Requested Url: ' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/greet/:name', function(req, res) {
	res.render('greet', { NAME: req.params.name });
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'Krystal', lastname: 'Joy' });
});

app.listen(port);