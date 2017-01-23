const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('I am the root bird section');
});

router.get('/nyc', function(req, res) {
  res.send('Pretty rats with wings...');
});

router.get('/list', function(req, res) {
  res.send('TODO - make list of all the birds');
});

router.get('/nyc/:id', function(req, res) {
  res.send(`<h1>Type of NYC bird: ${req.params.id} </h1>`);
});

module.exports = router;