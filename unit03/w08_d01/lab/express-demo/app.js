const express = require('express');
const users = require('./components/users').users;
const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs')



/* Set up routes*/
app.get('/', function(req, res) {
    res.render('index', {users: users});
    //console.log(req.headers);
    console.log(req.xhr);
    console.log(req.query);
});

app.get('/about', function(req, res) {
    res.render('about', {user: `${req.params.id}`});
});

app.get('/user/:id', function(req, res) {
    res.render('about', {user: `${req.params.id}`});
});

app.get('/api', function(req, res) {
    res.json({name: "Patrick", age: 100});
    console.log(res)
});

app.get('/dl', function(req, res) {
    res.download('./pop.txt', 'my_file.txt');
    console.log(res)
});

app.get('/cats', function(req, res) {
    res.sendFile(__dirname + '/public/images/cats.jpg');
});

/* route section for birds */
app.use('/birds', require('./routes/birds'));



app.listen(3000, function() {
  console.log('App listening on port 3000');
});