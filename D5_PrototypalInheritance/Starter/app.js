// Your Javascript Code Goes Here

// function constructor
function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

    // this greet overides the prototype greet
    this.greet = function(){
        console.log('Hey ' + this.firstname + ' ' + this.lastname);
    }
}

// Prototype of object
Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}
Person.prototype.welcome = function(){
    console.log('Welcome, ' + this.firstname + ' ' + this.lastname);
}


// creating object and invoking it's method
var krystal = new Person('Krystal', 'Joy');
krystal.greet();


var soumya = new Person('Soumya', 'Joy');
soumya.welcome();

// Check the prototype object
console.log(krystal.__proto__);
console.log(soumya.__proto__);

// Prototypes of same objects are same
console.log(krystal.__proto__ === soumya.__proto__);