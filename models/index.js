const mongoose = require('mongoose');
const Promise = require('bluebird');
const user = require('./user');
const message = require('./message');
const group = require('./group');
const notice = require('./notice');

const config = require('../config');

mongoose.Promise = Promise;
mongoose.connect(config.mongo.url);

const User = mongoose.model('User', user);
const Message = mongoose.model('Message', message);
const Group = mongoose.model('Group', group);
const Notice = mongoose.model('Notice', notice);

module.exports = {
    User, Message, Group, Notice
};
