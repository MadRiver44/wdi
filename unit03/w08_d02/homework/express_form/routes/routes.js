const express = require('express'); // require express.js dependency
const router = express.Router(); // use express.js Router

router.get('/', function(req, res){  // when URI is /projects...
    res.send(`<h1>Projects</h1>`);
}); // ...should send to /projects

router.get('/projects/:id', function(req, res){  // when URI is /projects/id...
    res.send(`<h1>Project ${req.params.id}</h1>`);
}); // ...should send to /projects/id


module.exports = router; // export routes.js to express.js

