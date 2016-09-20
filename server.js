'use strict';
var mongoose = require('mongoose');
var app = require('./app');

var dbURI = process.env.MONGODB_URI || 'mongodb://localhost/test';

mongoose.connect(dbURI);
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
	app.listen(app.get('port'), function () {
	  console.log(`Express app listening on port ${app.get('port')}!`);
	});
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
	process.exit(1);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
	process.exit(1);
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
