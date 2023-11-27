require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.DB_URI;
const dbName = 'bored_cluster';

async function connect() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connecté à MongoDB Atlas");
        const db = client.db(dbName);
        return db;
    } catch (e) {
        console.error(e);
    }
}

module.exports = connect;
