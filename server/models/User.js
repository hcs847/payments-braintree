const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        // required: true,
    },
    displayName: {
        type: String,
        // required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
})

module.exports = mongoose.model('User', UserSchema)

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// // const bcrypt = require('bcrypt');

// // class User extends Model {
// //     // checkPassword(loginPw) {
// //     //     return bcrypt.compareSync(loginPw, this.password)
// //     // }
// // }

// // User.init(
// const User = sequelize.define('User', {
//     fullName: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     googleId: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     picture: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     }
//     // },
//     // {
// });

// //     sequelize,
// //     timestamps: false,
// //     freezeTableName: true,
// //     underscored: true,
// //     modelName: 'user'
// // }
// // );

// module.exports = User;