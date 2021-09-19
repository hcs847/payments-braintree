const passport = require('passport');
const User = require('../models');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
require("dotenv").config();

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    const usersEmail = await User.findOne({ email }).catch(
        (err) => {
            console.log('Error: ', err);
        }
    );

    if (!usersEmail) {
        return res.status(400)
            .json({ message: "Email or password doesn't match" });
    }

    if (usersEmail.password !== password) {
        return res.status(400)
            .json({ message: 'Password is incorrect.' })
    }
    const jwtToken = jwt.sign(
        {
            id: usersEmail.id,
            email: usersEmail.email
        },
        process.env.JWT_SECRET
    );

    res.json({ message: 'Welcome Back!', token: jwtToken });
    next();
});

router.get('/home/redirect',
    (req, res) => {
        res.redirect('/home');
    }
);

module.exports = router;
