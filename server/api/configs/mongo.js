const { MongoConfig } = require ('./models/mongo-config');

const options = {
    databaseHostAndPort: 'mongodb://localhost:27017',
    databaseName: 'TodoApp'
}

const mongoConfig = new MongoConfig(options)

module.exports = {
    mongoConfig: mongoConfig
}