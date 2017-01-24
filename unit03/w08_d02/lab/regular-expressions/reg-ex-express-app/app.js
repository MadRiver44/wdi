const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

/* set up routes*/
app.get('/', function(req, res) {
    res.render('index');
});

/* route section for regex */
app.use('/regex', require('./routes/regex'));

app.listen(1337, function() {
  console.log('App listening on port 1337');
});
