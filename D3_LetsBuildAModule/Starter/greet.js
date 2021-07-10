var greet = function(){
    console.log('Hello');
};
// Invoke function in same file 
greet();

// Make variables available outside the module
module.exports = greet;
