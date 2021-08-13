const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();
// const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const User = require('../models/User');


// passport was passed in server.js so can be catched here
module.exports = function (passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: '/auth/google/callback',
                passReqToCallback: true
            },
            // function (accessToken, refreshToken, profile, done) {
            //     console.log("===============================================")
            //     console.log('profile', JSON.stringify(profile));
            //     User = { ...profile };
            //     return done(null, profile);
            // }
            async (request, accessToken, refreshToken, profile, done) => {
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value,
                }
                try {
                    let user = await User.findOne({ googleId: profile.id })
                    if (user) {
                        done(null, user)
                    } else {
                        user = await User.create(newUser);
                        done(null, user)
                    }
                } catch (err) {
                    console.log("error===", err);
                }
            }
        )
    )

    // Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session. 
    // In order to support login sessions,Passport will serialize and deserialize user instances to and from the session.
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
        // const user = await User.findOne({ where: { id } }).catch((err) => {
        //     console.log("Error deserializing", err);
        //     done(err, user);
        // });
    })

}