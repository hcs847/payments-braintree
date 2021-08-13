const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB

// const { Sequelize } = require("sequelize");

// require("dotenv").config();

// // let sequelize;

// // if (process.env.JAWSDB_URL) {
// //     sequelize = new Sequelize(process.env.JAWSDB_URL);
// // } else {
// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PW,
//     {
//         host: "localhost",
//         dialect: "mysql",
//         port: 3306,
//         // storage: "./session.mysql",
//     }
// );

// sequelize.sync();

// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('===================== Connection has been established successfully');
//     } catch (error) {
//         console.error('Unable to connect to db: ', error);
//     }
// })();
// // }

// module.exports = sequelize;