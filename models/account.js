const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
  username: String,
  email: String,
  password: String,
  avatarUrl: Buffer,
  state: Number
});

module.exports = Account;
