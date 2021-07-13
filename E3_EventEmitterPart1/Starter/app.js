var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Hello World');
});

emtr.on('greet', function() {
    console.log('Hello World 2');
});

emtr.emit('greet');