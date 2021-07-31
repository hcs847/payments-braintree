const router = require("express").Router();
const passport = require("passport");



// GET /auth/google
router.get("/google", passport.authenticate('google', { scope: ['profile'] }));

// GET /auth/google/callback
router.get("/google/callback", passport.authenticate('google', { failureRedirect: '/' }),
    (res, req) => {
        res.redirect('/home');
    }
);

module.exports = router;
