const User = require('../models');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const usersEmail = await User.findOne({ email }).catch(
        (err) => {
            console.log('Error: ', err);
        }
    );

    console.log("req.body", req.body, email, password, await usersEmail);

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
        processs.env.JWT_SECRET
    );

    res.json({ message: 'Welcome Back!', token: jwtToken })
});

module.exports = router;
