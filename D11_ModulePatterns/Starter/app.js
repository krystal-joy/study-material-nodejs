var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet; // or require('.....') and call greet2.greet()
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = "Changed Hello World 3!!!";

var greet3b = require('./greet3');
greet3b.greet();


var Greet4 = require('./greet4');
var greet4a = new Greet4();
greet4a.greet();
greet4a.greeting = "Changed Hello World 4!!!!";

var greet4b = new Greet4();
greet4b.greet();

var greet5 = require('./greet5');
greet5.greet();