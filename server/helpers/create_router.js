const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

    const router = express.Router();

    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin of your React app
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true'); // Enable sending credentials (e.g., cookies) with cross-origin requests
        next();
      });


    // get all
    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    // get one using mongodb generated id
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .findOne({ _id: ObjectID(id) })
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    // get one using the uuid provided by taddy
    router.get('/uuid/:id', (req, res) => {
        const uuid = req.params.id;
        collection
            .findOne({ "uuid": uuid })
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    router.post('/', (req, res) => {
        const newData = req.body;
        collection
            .insertOne(newData)
            .then((result) => {
                res.json(result.ops[0])
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    // delete one using mongodb given id
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .deleteOne({ _id: ObjectID(id) })
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });

    // delete one using uuid provided by taddy
    router.delete('/uuid/:id', (req, res) => {
        const uuid = req.params.id;
        collection
            .deleteOne({ "uuid": uuid })
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    });


    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection
            .updateOne(
                { _id: ObjectID(id) },
                { $set: updatedData }
            )
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({ status: 500, error: err })
            })
    })

    return router;

};

module.exports = createRouter;
