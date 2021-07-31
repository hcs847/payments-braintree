const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Sequelize = require('sequelize');
const User = require('../models/User');

// passport was passed in server.js so can be catched here
module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);
        }
    ));
    // Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session. 
    // In order to support login sessions,Passport will serialize and deserialize user instances to and from the session.
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}