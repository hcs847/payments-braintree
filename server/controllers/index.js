const router = require("express").Router();
const landingRoutes = require("./braintree-routes");
const auth = require("./google-auth");
const userRoutes = require('./user-routes.js');
const fileUploadRoutes = require('./upload-file-routes');

router.use('/users', userRoutes);

router.use("/api/braintree", landingRoutes);

router.use("/auth", auth);

router.use('/api/upload', fileUploadRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;