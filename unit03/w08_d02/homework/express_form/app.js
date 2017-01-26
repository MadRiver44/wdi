/* Set up environment variables */
var express = require('express'); // imports Express engine
var app = express(); // sets variable app to call express function

app.set('port', process.env.PORT || 3000); // sets port to 3000 if none already set by server
app.set('view engine', 'ejs'); // sets render engine to ejs
app.set('views', './views'); // sets default html directory to 'views'

/* Set up main route */
app.get('/', function(req, res) {
  res.render('index', {title: "Franklin Brooks"}); //  looks for index file first, variable not working
});

app.get('/about', function(req, res) { // sends to about page in views
   res.render('about');
});

app.get('/contact', function(req, res) { // sends to contact page in views
   res.render('contact');
});

/* Indicate file paths for routes */

app.use('/projects', require('./routes/routes')); // links routes.js
app.use(express.static('public')); // built-in middleware to serve static files (images/CSS/JS)
app.listen(app.get('port'), function () { // starts listener on above named port
  console.log(`App listening on port ${app.get('port')}`) //
});




