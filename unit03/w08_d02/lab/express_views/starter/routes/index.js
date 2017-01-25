var express = require('express');
var router  = express.Router();

// use router now instead of app
router.get('/', function(req, res) {
    // res.render accepts the view template (ejs) and an object
    //
  res.render('index', {
    pageTitle: "Home",
    pageID: 'home'
    })
});

module.exports = router;
