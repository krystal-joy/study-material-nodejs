var util = require('util');

function Person(){
    this.firstname = 'Krystal';
    this.lastname = 'Joy';
}

Person.prototype.greet = function() {
    console.log(`Hello ${ this.firstname } ${ this.lastname }`);
}

function Policeman() {
    Person.call(this)
    this.batchnumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();