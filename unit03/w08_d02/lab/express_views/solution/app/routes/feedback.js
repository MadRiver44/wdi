var express = require('express');
var router = express.Router();;

// app.get is now router.get()
router.get('/feedback',function(req,res) {
  res.render('feedback', {
    pageTitle: 'feedback',
    pageID: 'feedback'
  })
})


module.exports = router
