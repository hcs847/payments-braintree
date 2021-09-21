const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const strategyJwt = passportJwt.Strategy;
const User = require('../models/User');
require('dotenv').config();

module.exports = function (passport) {
    passport.use(
        new strategyJwt(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: process.env.JWT_SECRET,
            },
            function (jwtPayload, done) {

                return User.findById(jwtPayload.id)
                    .then((user) => {
                        console.log(jwtPayload);
                        return done(null, user);
                    })
                    .catch((err) => {
                        return done(err);
                    })
            }
        )
    );
}