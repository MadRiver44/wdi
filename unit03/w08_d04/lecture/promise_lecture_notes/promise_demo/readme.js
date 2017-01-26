const fs = require('fs');

new Promise(function (resolve, reject) {
  fs.readFile('myfile.txt', 'utf-8', function (err, file) {
    if (err) {
      return reject(err);
    }
    resolve(file);
  });
})
.then(function(file) {
  console.log('file==>>', file)
})
.catch(function(err) {
  console.log('err, ', err)
});