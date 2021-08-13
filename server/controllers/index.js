const router = require("express").Router();
// const apiRoutes = require("./api");
const landingRoutes = require("./braintree-routes");
const auth = require("./google-auth");


// router.use("/api", apiRoutes);

// user-facing routes
router.use("/", landingRoutes);

// google oath routes
router.use("/auth", auth);


router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;