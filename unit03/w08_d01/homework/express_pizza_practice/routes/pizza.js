const express = require('express'); // require express.js dependency
const router = express.Router(); // use express.js Router

router.get('/', function(req, res){ // when URI is root/index...
    res.send(`<img src='http://www.athenaspizzaamherst.com/wp-content/uploads/2013/05/front-1-1008x500.jpg'<h1>Hello pizza lovers!</h1>`);
}); // use send method to deliver this image and HTML tag.

router.get('/nyc', function(req, res){  // when URI is /nyc...
    res.send(`<img src='http://www.redbaron.com/timeless/images/00s/pizza-1.png'<h1>Hello NYC pizza lovers!</h1>`);
}); // use send method to deliver this image and HTML tag.

router.get('/list', function(req, res){  // when URI is /list...
    res.send(`<img src='http://nerdist.com/wp-content/uploads/2016/04/Pizza-chart-chart.png'<h1>Hello NYC pizza listers!</h1>`);
}); // use send method to deliver this image and HTML tag.

router.get('/nyc/:id', function(req, res){  // when URI is /nyc/(anything else)...
    res.send(`<img src='https://assets3.thrillist.com/v1/image/1328235/size/tmg-article_default_mobile.jpg' <h1>Hello all types of pizza: ${req.params.id}</h1>`);
}); // use send method to deliver this image and HTML tag.

module.exports = router; // export pizza.js to express.js
