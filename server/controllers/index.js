const router = require("express").Router();
const landingRoutes = require("./braintree-routes");
const auth = require("./google-auth");
const userRoutes = require('./user-routes.js');
const fileUploadRoutes = require('./upload-file-routes');
const login = require('./login');

router.use('/api/users', userRoutes);

router.use("/api/braintree", landingRoutes);

router.use("/auth", auth);

router.use('/api/upload', fileUploadRoutes);

router.use('/api', login);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;