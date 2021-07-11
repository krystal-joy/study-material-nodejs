// pattern 5 aka Revealing module pattern

var greeting = "Hello World 5!!!!!";

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}