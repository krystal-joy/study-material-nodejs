var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = "Hello World";
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet2', data);
}

var greeter1 = new Greetr();
greeter1.on('greet2', function(data) {
    console.log("Second greeting!! : " + data);
});

greeter1.greet('Krystal');

greeter1.emit('greet2', 'Soumya');