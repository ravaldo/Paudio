const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(express.json());

app.use(cors({
    origin: '*',    // Set this to the specific origin of your React app for better security
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true // Enable sending credentials (e.g., cookies) with cross-origin requests
  }));

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('paudio');
        const popularPodcasts = db.collection('popular');
        const popularRouter = createRouter(popularPodcasts);
        app.use('/api/popular', popularRouter);

        const subscribedPodcasts = db.collection('subscribed');
        const subscribedRouter = createRouter(subscribedPodcasts);
        app.use('/api/subscribed', subscribedRouter);


        // retrieves the imageURL for a given podcastSeries uuid
        app.get('/api/image/:id', (req, res) => {
            const uuid = req.params.id;
            popularPodcasts
                .findOne({ "uuid": uuid })
                .then(doc => {
                    const obj = { imageUrl: doc.imageUrl }
                    res.json(obj);
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500);
                    res.json({ status: 500, error: err });
                });
        })
    });



app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`);
});
