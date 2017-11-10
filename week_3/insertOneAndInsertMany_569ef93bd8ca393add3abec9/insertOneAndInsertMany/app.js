var MongoClient = require('mongodb').MongoClient,
    Twitter = require('twitter'),
    assert = require('assert');

require('dotenv').load();
var twitterClient = new Twitter({
    consumer_key: process.env.EBvMTpAwqv9GgEFHKUXBo3Wfa,
    consumer_secret: process.env.WYDd5Mp0tEI0BZSbuiCV0eMZVPohYyTroTxlnOtmbO1W6SVd8n
,
    access_token_key: process.env.787298372419883009-crUh17Qz5hCvk9FpOkUwbWjZIln5rbz,
    access_token_secret: process.env.X3GrsFHxYUePnvmp3XPojebLXrKDUJpK20odA24PFnkDT

});


MongoClient.connect('mongodb://localhost:27017/social', function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

    twitterClient.stream('statuses/filter', {track: "marvel"}, function(stream) {
        stream.on('data', function(status) {
            console.log(status.text);
            db.collection("statuses").insertOne(status, function(err, res) {
                console.log("Inserted document with _id: " + res.insertedId + "\n");
            });
        });
 
        stream.on('error', function(error) {
            throw error;
        });
    });

});

