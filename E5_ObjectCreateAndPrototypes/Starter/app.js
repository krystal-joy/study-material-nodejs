var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    },
}

var krystal = Object.create(person);
krystal.firstname = "Krystal";
krystal.lastname = "Joy";
console.log(krystal.greet());

var soumya = Object.create(person);
soumya.firstname = "Soumya";
soumya.lastname = "Joy";
console.log(soumya.greet());
