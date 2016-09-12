var mongoose = require('../db');

var SliceSchema = new mongoose.Schema({
  _id       : Number,
  corporation: { type: Number, ref: 'Corporation'},
  timestamp : { type: Date, default: Date.now },
  minPrice  : Number,
  maxPrice  : Number,
  avgPrice  : Number,
  volume    : Number
});

module.exports = mongoose.model('Slice', SliceSchema);
