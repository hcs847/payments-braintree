const path = require('path');
const express = require('express');

const mongoose = require('mongoose');

const app = express();
const routes = require('./controllers');
const cors = require('cors');

require("dotenv").config();
const morgan = require('morgan');
const passport = require('passport');
require('./config/passport')(passport);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
// const session = require('express-session');
// const cookieSession = require('cookie-session');
// const sequelize = require('./config/connection');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connectDB = require('./config/connection');
connectDB();
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const bpocStore = new SequelizeStore({
//     db: sequelize,
//     checkExpirationInterval: 15 * 60 * 1000,
//     expiration: 8 * 60 * 60 * 1000
// });

// const sess = {
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: bpocStore,
//     cookie: { maxAge: 8 * 60 * 60 * 1000 }
// };

// bpocStore.sync();
// app.use(session(sess));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [process.env.COOKIE_KEY]
// })
// );

// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 3001;

// Setting static files to the public dir
app.use(express.static(path.join(__dirname, '../client/build/public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
// sequelize.sync({ force: true }).then(() => {
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});
// });
