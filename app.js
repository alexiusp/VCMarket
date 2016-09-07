'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var _port = (process.env.PORT || 5000);

app.set('port', _port);
app.use('/app', express.static(__dirname + '/app'));
app.use('/adminApp', express.static(__dirname + '/adminApp'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({
  name:'vc-market',
  secret: '1234567890QWERTY',
  resave: true,
  saveUninitialized: true
}));

// request logging function
app.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

app.listen(app.get('port'), function () {
  console.log(`Express app listening on port ${app.get('port')}!`);
});
