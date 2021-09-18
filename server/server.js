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
require('./config/passport-sign-up')(passport);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connectDB = require('./config/connection');
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});

