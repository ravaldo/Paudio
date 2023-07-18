const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(express.json());
app.use(cors())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
    const db = client.db('paudio');
    const podcastCollection = db.collection('podcasts');
    const podcastRouter = createRouter(podcastCollection);
    app.use('/api/podcasts', podcastRouter);

})
.catch(console.error); 


app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});