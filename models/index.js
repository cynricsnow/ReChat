const mongoose = require('mongoose');
const account = require('./account');
const message = require('./message');
const group = require('./group');
const notice = require('./notice');

mongoose.connect('mongodb://localhost/ReChat');

const Account = mongoose.model('Account', account);
const Message = mongoose.model('Message', message);
const Group = mongoose.model('Group', group);
const Notice = mongoose.model('Notice', notice);

module.exports = {
    Account, Message, Group, Notice
};
