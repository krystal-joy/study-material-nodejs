// pattern 3
function Greet() {
    this.greeting = "Hello World 3!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greet();

