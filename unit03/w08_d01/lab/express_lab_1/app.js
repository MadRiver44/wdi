const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
    res.render('index', { ga_group: 'Hakuna Matata'});
});

/******************* ADD your routes below ******************/

app.use('/birds', require('./routes/birds'));

app.listen(app.get('port'), function() {
  console.log(`App listening on port ${app.get('port')}`)
});
// go to localhost:3000 to see your app.
