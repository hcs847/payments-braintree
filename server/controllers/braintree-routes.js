const router = require("express").Router();
const braintree = require('braintree');
require('dotenv').config();

let gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY
})

router.get('/', (req, res) => res.send('Braintree route is working'));

router.get('/v1/getToken', async function (req, res) {
    try {
        gateway
            .clientToken
            .generate({}, function (err, response) {
                if (err) {
                    res.status(500)
                        .send(err);
                } else {
                    res.send(response);
                }
            });
    } catch (err) {
        res.status(500)
            .send(err);
    }
});


module.exports = router;
