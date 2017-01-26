let myTimer = function() {
  return new Promise(function(resolve, reject) {
    if(!true) {
      reject( new Error('Hell na!'));
    } else {
      resolve('Hi');
    }
  })
}

 let promise = myTimer().then(function(d) {
   console.log(d)
 })

//console.log(promise)