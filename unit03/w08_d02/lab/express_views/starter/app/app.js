///////////////////////////////
///// requires   //////////////
//////////////////////////////
// require the express module
var express = require('express');
// set app to express
var app = express();

// variable to store the json data
var datafile = require('./data/data.json')
// using .set() to reassociate it with a global variable
app.set('appdata',datafile);

//////////////////////////////
///// app.set() //////////////
//////////////////////////////
// .set() port to variable to use existing PORT global \\ 3000
app.set('port', process.env.PORT || 3000);
// .set() the view engine to ejs
app.set('view engine', 'ejs');
// .set() the view to app/views
app.set('views', 'app/views');

app.get('/',function(req,res) {
  var datafile = req.app.get('appdata')
});

//////////////////////////////
///// app.use() //////////////
//////////////////////////////
// .use() the static() middleware to use app/public folder
app.use(express.static('./app'));
// configure a the default route '/' to return '<h1>Home Page</h1>'
app.use(require('./routes/index'));
//configure our server to listen on the 'port' variable defined earlier
// have the server console.log that it's listening on that port
var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'))
});

// 1. create a basic route in app.js for feedback
// 2. render some basic content to confirm  it works
// 3.;;;
// 4. update app.js to use new route
// 5. update feedback.ejs to...



