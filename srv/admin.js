var express = require('express');
var router = express.Router();
var mongoose = require('./db/db');
var Parser = require('./db/models/parser');
var Response = require('./response');

router.all('/', express.static(__dirname + '/www/admin.html'));
router.get('/test', function(req, res, next) {
  var answer = new Response(0, {}, "battlecruiser operational");
  res.json(answer);
});

module.exports = router;
