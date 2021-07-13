var Emitter = require("events");
var eventConfig = require("./cofig").events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Hello World');
});

emtr.on(eventConfig.GREET, function() {
    console.log('Hello World 2');
});

emtr.emit(eventConfig.GREET);