const express = require('express'); //
const app = express();

app.set('port', process.env.PORT || 3000); // use port 3000 unless there is a preconfigured port
app.set('view engine', 'ejs') // determines which software engine will render view
app.get('/', function(req, res) { // sets root/home page to index
    res.render('index', { ga_group: 'Hakuna Matata'}); // sets value of variable ga_group
});

/******************* ADD your routes below ******************/

app.use('/pizza', require('./routes/pizza')) // sets route for 'pizza' URIs; invoke BEFORE app.listen below

app.listen(app.get('port'), function() {
  console.log(`App listening on port ${app.get('port')}`) // starts listening to port set line 4
});
// go to localhost:3000 to see your app.
