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


// define our public folder to store content accessible to client

// configure our default route 

// app.get('/',function(req,res) {
//   res.send('<h1>WDI Lesson on Express</h1>')
// })

// app.get('/speakers',function(req,res){
//   console.log(datafile)
//   var info ='';
//   datafile.speakers.forEach(function(item){
//     info+= `
//         <li>
//           <h2>${item.name}</h2>
//           <p>${item.summary}</p>
//         </li>
//     `
//   })
//   //res.send(`${info}`)
//   // res.send(req.params.speakerid)
//   res.send(datafile.speakers[0].shortname)
// })

// app.get('/speakers/:speaker',function(req,res){
//   var speaker = req.params.speaker
//   console.log(speaker)
//    res.send(`<h1>You choose ${speaker}</h1>`)
//    // res.send('<h1>WDI Lesson on Express</h1>')
// })





//configures our server to listen on a specific port
var server = app.listen(app.get('port'),function() {
  console.log("Listening on port" + app.get('port'))
})



// set reload bind the server and app
// script tags need to be added to each view that we wish to reload
//reload(server,app)
