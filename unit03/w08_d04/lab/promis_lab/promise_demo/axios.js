const axios = require('axios');

axios.get('http://swapi.co/api/people/22')
  .then(function(response) {
    console.log(response.data.name);
  })
  .catch(function(error) {
    console.log(error);
  });