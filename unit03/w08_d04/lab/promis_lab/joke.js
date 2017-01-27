if (window.Promise) {
  var promise = new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    console.log('building request');
    request.open('GET', 'http://api.icndb.com/jokes/random');
    request.onload = function() {
      console.log(request.status);
      if (request.status == 200) {
        resolve(request.response); // we got data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // status is not 200 OK, so reject
      }
    };
    request.onerror = function() {
      reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };
    console.log('sending request');
    request.send(); //send the request
  });

  promise.then(function(data) {
    console.log('Got data! Promise fulfilled.');
    document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value.joke;
  }, function(error) {
    console.log('Promise rejected.');
    console.log(error.message);
  });
} else {
  console.log('Promise not available');
