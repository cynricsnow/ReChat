'use strict'
const express = require('express');
const Promise = require('bluebird');
const router = express.Router();
const User = require('../../models').User;

router.post('/register', Promise.coroutine(function* (req, res) {
    const { username, email, password } = req.body;
    const pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (username && email && password && username.length >= 3 && pattern.test(email) && password.length >= 6) {
        try {
            let user = (yield User.findOne({ username })) || (yield User.findOne({ email }));
            if (user) {
                return res.fail();
            } else {
                const avatarUrl = '/images/default-avatar.png';
                user = new User({
                    username,
                    email,
                    password,
                    avatarUrl,
                    state: 1
                });
                user = yield user.save();
                req.session.userId = user._id;
                return res.success({
                    username,
                    avatarUrl
                });
            }
        } catch (e) {
            return res.fail();
        }
    }
}));

router.get('/validate', Promise.coroutine(function* (req, res) {
    const _id = req.session.userId;
    if (!_id) {
        return res.fail();
    } else {
        try {
            let user = yield User.findOne({ _id });
            if (user) {
                const { username, avatarUrl } = user;
                return res.success({
                    username,
                    avatarUrl
                });;
            } else {
                delete req.session.userId;
                return res.fail();
            }
        } catch (e) {
            return res.fail();
        }
    }
}));

router.get('/check_username', Promise.coroutine(function* (req, res) {
    const username = req.query.username;
    const user = yield User.findOne({ username });
    if (!user) {
        return res.success();
    } else {
        return res.fail();
    }
}));

router.get('/check_email', Promise.coroutine(function* (req, res) {
    const email = req.query.email;
    const user = yield User.findOne({ email });
    if (!user) {
        return res.success();
    } else {
        return res.fail();
    }
}));

module.exports = router;
