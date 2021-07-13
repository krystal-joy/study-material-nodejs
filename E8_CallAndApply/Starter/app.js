var object = {
    firstname: 'Soumya',
    greet: function(lastname, user_type) {
        console.log(`Hello ${ this.firstname } ${ lastname }. Welcome to ${ user_type } dashboard.`);
    }
}

object.greet('Joy', 'user');
object.greet.call({ firstname: 'Krystal'}, 'Joy', 'admin');
object.greet.apply({ firstname: 'Krystal'}, ['Joy','admin']);