var express = require('express');
var router = express.Router();
var Parser = require('./db/models/parser');
var Response = require('./response');

// invoked for any requests passed to this router - debug
router.use(function(req, res, next) {
  console.log("router admin executed");
  next();
});
// test route - debug
router.get('/test', function(req, res, next) {
  var answer = new Response(0, {}, "battlecruiser operational");
  res.json(answer);
});

/*
 * login to admin app
 */
router.post('/login', function(req, res) {

});

/*
 * /parsers route
 *  GET: finds all parsers
 *  POST: creates a new parser
 */
router.get('/parsers', function(req, res) {

});
router.post('/parsers', function(req, res) {

});

/*
 * /parsers/:id route
 *  GET: find parser by id
 *  PUT: update parser by id
 *  DELETE: delete parser by id
 */
router.get('/parsers/:id', function(req, res) {

});
router.put('/parsers/:id', function(req, res) {

});
router.delete('/parsers/:id', function(req, res) {

});

module.exports = router;
