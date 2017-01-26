const Bluebird = require('bluebird');
const fs = require('fs');

Bluebird.promisifyAll(fs);

let promise = fs.readFileAsync('myfile.txt', 'utf-8');
promise.then(console.log, console.error);
