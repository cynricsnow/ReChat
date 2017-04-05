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

module.exports = router;
