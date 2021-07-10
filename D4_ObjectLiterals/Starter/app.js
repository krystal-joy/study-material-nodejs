// Your Javascript Code Goes Here

// create a object literal
var person = {
    firstname: 'Krystal',
    lastname: 'Joy',
    greet: function(){
        console.log("Hello from " + this.firstname + ' ' + this.lastname);
    }
}

// call the method
person.greet();
console.log(person.firstname);

// Another way!!
person['greet']();
console.log(person['firstname']);