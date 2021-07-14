var fs = require('fs');

// Synchronous read file. Used to load config file
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf-8');
console.log(greet);

// Asynchronous read file
var greet = fs.readFile(
    __dirname + '/greet.txt', 
    'utf-8',
    function(err, data) {
        console.log(data);
    });

console.log('Done!');