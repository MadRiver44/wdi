const axios = require('axios');

axios.get('https://colors-b0fbc.firebaseio.com/.json')
  .then(function(res) {
    console.log(res.data);
  });

/*  axios.put('https://colors-b0fbc.firebaseio.com/.json', {"black": "#000"})
  .then(function(res) {
    console.log(res.data.black)
  })*/
