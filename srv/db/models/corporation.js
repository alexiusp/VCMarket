var mongoose = require('mongoose');

var CorporationSchema = new mongoose.Schema({
  _id       : Number,
  id        : { type: Number, unique: true, required: true },
  name      : { type: String, unique: true, required: true },
  logo      : String,
  marketHistory: [{ type: Number, ref: 'Slice' }],
  balanceHistory: [{ type: Number, ref: 'Balance' }]
});

module.exports = mongoose.model('Corporation', CorporationSchema);
