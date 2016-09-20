var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
var _port = (process.env.PORT || 5000);

var admin = require('./srv/admin.js');
var errorHandler = require('./srv/errorHandler');

app.set('port', _port);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({
  name:'vc-market',
  secret: '0123456789ABC',
  resave: true,
  saveUninitialized: true
}));

/*
 *
 * setting up static files routes
 *
*/
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/', express.static(__dirname + '/www'));
app.use('/admin', express.static(__dirname + '/www/admin.html'));
/*
 *
 * admin application entry point
 *
*/
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

module.exports = app;
