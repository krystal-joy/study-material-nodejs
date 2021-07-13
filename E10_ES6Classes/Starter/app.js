'use strict';

class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log(`Hello, ${ this.firstname } ${ this.lastname }`);
    }
}

var soumya = new Person('Soumya', 'Joy');
soumya.greet();

var krystal = new Person('Krystal', 'Joy');
krystal.greet();

console.log(soumya.__proto__);
console.log(krystal.__proto__);
console.log(soumya.__proto__ == krystal.__proto__);