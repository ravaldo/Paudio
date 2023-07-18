import Database from 'better-sqlite3';
// const sqlite3 = require('sqlite3').verbose();

function Repo() {

    const db = new Database('podcast.db');
    db.pragma('journal_mode = WAL');

    this.setup = function () {
        return db;
    };

    this.dropTables = function () {
        const dropTableQuery = `
            DROP TABLE IF EXISTS PodcastEpisode;
            DROP TABLE IF EXISTS PodcastSeries;
        `;
        db.exec(dropTableQuery);
    }


    this.createTables = function () {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS PodcastSeries (
                uuid TEXT PRIMARY KEY,
                name TEXT,
                description TEXT,
                imageUrl TEXT,
                itunesId INTEGER,
                totalEpisodesCount INTEGER,
                hash TEXT,
                childrenHash TEXT,
                subscribed INTEGER
            );

            CREATE TABLE IF NOT EXISTS PodcastEpisode (
                podcastSeries TEXT REFERENCES PodcastSeries(uuid) ON DELETE CASCADE,
                uuid TEXT PRIMARY KEY,
                datePublished INTEGER,
                name TEXT,
                description TEXT,
                imageUrl TEXT,
                audioUrl TEXT,
                fileLength INTEGER,
                fileType TEXT,
                duration INTEGER,
                listened INTEGER
            );
        `;
        db.exec(createTableQuery);
    }


    this.insertSeriesData = function (data) {
        const insertQuery = `
            INSERT INTO PodcastSeries (uuid, name, description, imageUrl, itunesId, totalEpisodesCount, hash, childrenHash)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const stmt = db.prepare(insertQuery);
        stmt.run(data.uuid, data.name, data.description, data.imageUrl, data.itunesId, data.totalEpisodesCount, data.hash, data.childrenHash);
    }


    this.insertEpisodeData = function (data) {
        const insertQuery = `
            INSERT INTO PodcastEpisode (podcastSeries, uuid, datePublished, name, description, imageUrl, audioUrl, fileLength, fileType, duration)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const stmt = db.prepare(insertQuery);
        stmt.run(data.podcastSeries, data.uuid, data.datePublished, data.name, data.description, data.imageUrl, data.audioUrl, data.fileLength, data.fileType, data.duration);
    }
};

const repo = new Repo();
repo.createTables()

// module.exports = repo
export default repo;




