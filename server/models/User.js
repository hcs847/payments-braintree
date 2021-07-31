const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password)
    // }
}

User.init(
    {
        googleId: {
            type: String,
            required: true
        },
        displayName: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        createdAt: {
            type: Date,
            defaulat: Date.now
        }
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        // first_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // last_name: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true,
        //     validate: {
        //         isEmail: true
        //     }
        // },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [4]
        //     }
        // },
        // profile_img: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // last_login: {
        //     type: DataTypes.TIME,
        //     allowNull: true
        // }
    },
    {
        // hooks: {
        //     async beforeCreate(newUserData) {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 12);
        //         return newUserData;
        //     },
        //     async beforeUpdate(updatedUserData) {
        //         updatedUserData.password = await bcrypt.hash(updatedUserData.password, 12);
        //         return updatedUserData;
        //     }
        // },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;