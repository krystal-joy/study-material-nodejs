var buffer = new Buffer.from('Soumya', 'utf8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[0]);

buffer.write('Joy');
console.log(buffer.toString());