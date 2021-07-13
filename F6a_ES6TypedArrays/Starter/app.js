var buffer = new ArrayBuffer(16);

var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
view[2] = 20;
view[3] = 25;
view[4] = 30; //view won't store this

console.log(view);