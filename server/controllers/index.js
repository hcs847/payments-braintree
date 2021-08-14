const router = require("express").Router();
const landingRoutes = require("./braintree-routes");
const auth = require("./google-auth");
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

router.use("/", landingRoutes);

router.use("/auth", auth);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;