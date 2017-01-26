let request = url => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
};

request('http://swapi.co/api/people/1')
.then(function(data) {
  return JSON.parse(data);
})
.then(function(d) {
  console.log('=====>', d)
})
.catch(function(err) {
  console.log('We encountered an error: ', err)
});



/*
const xhr = (url, done) => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    done(null, xhr.response);
  };
  xhr.onerror = function() {
    done(xhr.response);
  };
  xhr.send();
}



xhr('http://swapi.co/api/people/1', function(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});*/