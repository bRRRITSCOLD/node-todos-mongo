const { MongoClient } = require('./models/mongo-client'); 
const { mongoConfig } = require('../../../configs/mongo');

const mongoClient = new MongoClient(mongoConfig);

module.exports = {
    MongoClient: mongoClient
}