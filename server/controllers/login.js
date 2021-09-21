const User = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = require('express').Router();
require('dotenv').config();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
        .catch(
            (err) => {
                console.log('Error: ', err);
            }
        );

    if (!user) {
        return res.status(404)
            .json({ message: "User not found" });
    }

    // compare passwords
    if (!bcrypt.compare(password, user.password)) {
        return res.status(404)
            .json({ message: 'Password is incorrect.' })
    }
    const payload = {
        id: user.id,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`
    };
    const jwtToken = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
    );

    res.json({ message: 'Welcome Back!', token: jwtToken, user });
});


module.exports = router;
