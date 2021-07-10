// Your Javascript Code Goes Here

var firstname = 'Krystal';

// Immediately invoked function expressions (IIFE)
(function(lastname) {
    var firstname = 'Soumya';
    console.log(firstname);
    console.log(lastname);
}('Joy'));

console.log(firstname);