var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = express.urlencoded({ extended: false });
var jsonParser = express.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Requested Url: ' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/greet/:name', function(req, res) {
	res.render('greet', { NAME: req.params.name, Status: req.query.status });
});

// Deal with post
app.post('/thankyou', urlencodedParser, function(req, res) {
	res.send('Thank You!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

// RESTful APIs

app.get('/api/greet/:id', function(req, res) {
	// get the data from database
	res.json({ firstname: 'Krystal', lastname: 'Joy' });
});

app.post('/api/greet', jsonParser, function(req, res) {
	// save to database
});

app.delete('/api/greet/:id', function(req, res) {
	// delete from the database
});

app.listen(port);