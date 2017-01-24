const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('I am the root regex section');
});

// add routes like these for each lab regex
router.get(/^\/?AddRegExHere$/, function (req, res) {
  res.send('/^\/?AddRegExHere$/ matched')
});

module.exports = router;
