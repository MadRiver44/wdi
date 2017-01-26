function timeout(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}

timeout(2000).then(function() {
  console.log('done...')
});