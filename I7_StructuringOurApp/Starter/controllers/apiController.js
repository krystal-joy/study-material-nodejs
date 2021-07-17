module.exports = function(app) {
    // RESTful APIs

    app.get('/api/greet/:id', function(req, res) {
        // get the data from database
        res.json({ firstname: 'Krystal', lastname: 'Joy' });
    });

    app.post('/api/greet', function(req, res) {
        // save to database
    });

    app.delete('/api/greet/:id', function(req, res) {
        // delete from the database
    });
}
    