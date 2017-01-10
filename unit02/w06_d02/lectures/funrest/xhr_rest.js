const axios = require('axios');

axios.get('https://colors-1bd83.firebaseio.com/.json')
  .then(function(res) {
    console.log(res.data)
  })

/*  axios.put('https://colors-1bd83.firebaseio.com/.json', {"black": "#000"})
  .then(function(res) {
    console.log(res.data.black)
  })*/