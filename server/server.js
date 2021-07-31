const path = require("path");
const express = require("express");
const app = express();
const routes = require("./controllers");
const cors = require('cors');

const passport = require('passport');
require('./config/passport')(passport);

const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const bpocStore = new SequelizeStore({
    db: sequelize,
});

const sess = {
    secret: "I know Kung Fu!",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: bpocStore,
};

bpocStore.sync();
app.use(session(sess));
app.use(cors());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting static files to the public dir
app.use(express.static(path.join(__dirname, "../client/build/public")));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("Now listening");
    });
});
