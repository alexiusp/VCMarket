var mongoose = require('mongoose');

var ParserSchema = new mongoose.Schema({
  city      : { type: String, unique: true, required: true },
  login     : { type: String, required: true },
  password  : { type: String, required: true },
  timeout   : { type: Number, default: 10800000 },
	lastrun		: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Parser', ParserSchema);
