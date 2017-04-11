const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema({
  host: String,
  guest: String,
  avatarUrl: String,
  groupname: String
});

module.exports = Group;
