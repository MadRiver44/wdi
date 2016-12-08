function ping() {
  console.log('ping');
  console.log('ping');
  generic();
  console.log('ping');
}

function generic() {
  setTimeout(function() {
    console.log('I am generic');
  }, 2000)
}
ping();

