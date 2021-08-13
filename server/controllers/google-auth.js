const router = require('express').Router();
const passport = require('passport');



// GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google'),
    (req, res) => {
        res.redirect('/home');
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;
