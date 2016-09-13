var express = require('express');
var router = express.Router();
var mongoose = require('./db/db');
var Parser = require('./db/models/parser');
var Response = require('./response');

// invoked for any requests passed to this router
router.use(function(req, res, next) {
  console.log("router admin executed");
  next();
});
router.get('/test', function(req, res, next) {
  var answer = new Response(0, {}, "battlecruiser operational");
  res.json(answer);
});

module.exports = router;
