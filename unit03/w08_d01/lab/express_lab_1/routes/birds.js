const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send("Hello World!");
});
router.get('/nyc', function(req, res){
    res.send("Hello NYC!");
});
router.get('/list', function(req, res){
    res.send("Hello list!");
});
router.get('/nyc/:id', function(req, res){
    res.send(`<h1>Hello type of bird: ${req.params.id}</h1>`);
});

module.exports = router;
