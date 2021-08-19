const router = require('express').Router();
const AWS = require('aws-sdk');
const uuid = require('uuid').v4;
require('dotenv').config();

const s3 = new AWS.S3({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_KEY
})

router.get('/', (req, res) => {
    const key = `${req.user._id}/${uuid()}.jpeg`;
    console.log(req.user, "===req", key, "===key");
    // putObject is the operation for file upload
    s3.getSignedUrl('putObject', {
        Bucket: 'private-network-react',
        ContentType: 'jpeg',
        Key: key
    }, (err, url) => res.send({ key, url }));
});

module.exports = router;