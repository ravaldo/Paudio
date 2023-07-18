const MongoClient = require('mongodb').MongoClient;

const topPodcastData = require('../client/src/services/topPodcastData.js');

MongoClient.connect('mongodb://127.0.0.1:27017').then((client) => {
    const db = client.db('paudio');
    const podcastCollection = db.collection('podcasts');

    podcastCollection.insertMany(topPodcastData).then(() => {
        console.log("Data seeding finished.");
        client.close();
    })
    .catch((err) => {
        console.error("Error seeding data:", err);
        client.close();
    });
})
.catch((err) => {
    console.error("Error connecting to the database:", err);
});






