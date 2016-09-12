var mongoose = require('../db');

var BalanceSchema = new mongoose.Schema({
  _id       : Number,
  corporation: { type: Number, ref: 'Corporation'},
  timestamp : { type: Date, default: Date.now },
  vd_balance: Number,
  vg_balance: Number
});

module.exports = mongoose.model('Balance', BalanceSchema);
