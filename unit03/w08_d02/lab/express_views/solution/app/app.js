// import the express module
var express = require('express')
var path = require('path')
var reload = require('reload')
var app = express()
app.locals.siteTitle = 'HK';
//////////////////////////////
///// app.set() //////////////
//////////////////////////////
app.set('port', process.env.PORT || 3000 );
app.set('view engine','ejs')
app.set('views','app/views')
//////////////////////////////
///// app.use() //////////////
//////////////////////////////
app.use(express.static('app/public'))
app.use(require('./routes/index'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))
// 

//configures our server to listen on a specific port
var server = app.listen(app.get('port'),function() {
  console.log("Listening on port" + app.get('port'))
})

// set reload bind the server and app
// script tags need to be added to each view that we wish to reload
//reload(server,app)
