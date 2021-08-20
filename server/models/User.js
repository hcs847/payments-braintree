const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
    },
    displayName: {
        type: String,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    profileImg: {
        type: String,
    },
})

module.exports = mongoose.model('User', UserSchema)