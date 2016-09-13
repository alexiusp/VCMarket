'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var _port = (process.env.PORT || 5000);

var admin = require('./srv/admin.js');
var errorHandler = require('./srv/errorHandler');

app.set('port', _port);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({
  name:'vc-market',
  secret: '1234567890QWERTY',
  resave: true,
  saveUninitialized: true
}));

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/', express.static(__dirname + '/www'));
app.use('/admin', express.static(__dirname + '/www/admin.html'));
app.use('/admin', admin);
/*
app.use('/app', express.static(__dirname + '/www/app'));
app.use('/adminApp', express.static(__dirname + '/www/adminApp'));
*/

// request logging function
app.use(function(req, res, next) {
  var status = 404;
  var message = 'I have some troubles with looking for your request. I\'m so sorry =(';
	var err = new errorHandler.httpError(status, message);
  //console.log('%s %s %s', req.method, req.url, req.path);
  next(err);
});

app.listen(app.get('port'), function () {
  console.log(`Express app listening on port ${app.get('port')}!`);
});
