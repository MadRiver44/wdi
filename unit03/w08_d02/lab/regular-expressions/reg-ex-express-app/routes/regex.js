const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('I am the root regex section');
});

// add routes like these for each lab regex
// either 'favorites' or 'favourites' ?==='0 or 1 times'
router.get(/^\/?(favo)[u]?(rites)$/, function (req, res) {
  res.send('/^\/?(favo)[u]?(rites)$/ matched')
});

// 'orders/id-letter-number' where letter must be be a single uppercase letter
// between A and M and number is between 4 and 12 characters long and
// each character must be a number  MOST COMMONLY will use variable === /orders\/:order-id/
router.get(/^\/?orders\/id-[A-M]-(\d{4,12})$/, function (req, res) {
  res.send('/^\/?orders\/id-[A-M]-(\d{4,12})$/ matched')
});

// 'hash-valid' where valid IS NOT any combination of
// 1 or more uppercase letters between N and Z     !!![^N-Z] === any character NOT btwn N & Z
router.get(/^\/?hash-[^N-Z]*$/, function (req, res) {
  res.send('/^\/?hash-[^N-Z]*$/ matched')
});

// the /i flag will make query case insensitive
// 'lookVINCEimCaseInsensitive' where it doesn't matter what the case is of any of the characters
// /(L|l)(O|o)(O|o)(K|k)(V|v)(I|i)(N|n)(C|c)(E|e)(I|i)(M|m)(C|c)(A|a)(S|s)(E|e)(I|i)(N|n)(S|s)(E|e)(N|n)(S|s)(I|i)(T|t)(I|i)(V|v)(E|e)/
router.get(/^\/?(L|l)(O|o)(O|o)(K|k)(V|v)(I|i)(N|n)(C|c)(E|e)(I|i)(M|m)(C|c)(A|a)(S|s)(E|e)(I|i)(N|n)(S|s)(E|e)(N|n)(S|s)(I|i)(T|t)(I|i)(V|v)(E|e)$/, function (req, res) {
  res.send('/^\/?(L|l)(O|o)(O|o)(K|k)(V|v)(I|i)(N|n)(C|c)(E|e)(I|i)(M|m)(C|c)(A|a)(S|s)(E|e)(I|i)(N|n)(S|s)(E|e)(N|n)(S|s)(I|i)(T|t)(I|i)(V|v)(E|e)$/ matched')
});

module.exports = router;
