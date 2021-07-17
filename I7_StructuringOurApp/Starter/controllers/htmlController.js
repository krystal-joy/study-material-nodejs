var express = require('express');

var urlencodedParser = express.urlencoded({ extended: false });

module.exports = function(app) {
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
}