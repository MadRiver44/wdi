var promise = new Promise((resolve, reject) => {

  if (false) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});



promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});