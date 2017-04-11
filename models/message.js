const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema({
  message: String,
  sender: String,
  receiver: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Message;
