const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notice = new Schema({
  host: String,
  guest: String,
  sponsor: Boolean,
  handle: Boolean,
  result: Boolean
});

module.exports = Notice;
