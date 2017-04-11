'use strict'
const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    console.log(req.body);
    req.session.userId = Math.random();
    return res.succeed({
        username: 'register'
    });
})

router.get('/validate', (req, res) => {
    if (!req.session.userId) {
        return res.fail();
    }
    return res.succeed({
        username: 'validate'
    });
})

router.get('/check_username', (req, res) => {
    console.log(req.query.username);
    const user = null;
    if (!user) {
        return res.succeed();
    } else {
        return res.fail();
    }
})

router.get('/check_email', (req, res) => {
    console.log(req.query.email);
    const user = null;
    if (!user) {
        return res.succeed();
    } else {
        return res.fail();
    }
})

module.exports = router;
