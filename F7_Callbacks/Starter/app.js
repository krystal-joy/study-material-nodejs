function greet(callback) {
    console.log('Hello!');
    var data ={
        name: 'Krystal Joy'
    }
    callback(data);
}

greet(function(data) {
    console.log('A callback was invoked');
    console.log(data);
});

greet(function(data) {
    console.log('This is a new callback');
    console.log(data.name);
})