var express = require('express');
var router = express.Router();;

// app.get is now router.get()
router.get('/',function(req,res) {
  res.render('index', {
    pageTitle: 'home',
    pageID: 'home'
  })
})


module.exports = router
