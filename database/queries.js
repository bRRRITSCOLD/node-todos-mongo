// const MongoClient = require('mongodb').MongoClient;

const { MongoClient } = require('mongodb');


module.exports = {
    
    newUser: (async (mongoUrl, dbName, collectionName, userObject) => {
        let client;
    
        try {
            client = await MongoClient.connect(mongoUrl);
            console.log("Connected correctly to server");
    
            const db = client.db(dbName);
    
            let r = await db.collection(collectionName).insertOne(userObject);
            
            console.log(r.ops);
            console.log(r.ops[0]._id.getTimestamp());
        } catch (err) {
            console.log('Unable to insert document.', err.stack)
        }
    
        client.close();
    }),

    findTodos: (async (mongoUrl, dbName, collectionName) => {
        let client;
    
        try {
            client = await MongoClient.connect(mongoUrl);
            console.log("Connected correctly to server");
    
            const db = client.db(dbName);
    
            let r = await db.collection(collectionName).find().toArray();
            
            console.log(r);
        } catch (err) {
            console.log('Unable to insert document.', err.stack)
        }
    
        client.close();
    }),

    findSpecificTodos: (async (mongoUrl, dbName, collectionName, queryConstraint) => {
        let client;
    
        try {
            client = await MongoClient.connect(mongoUrl);
            console.log("Connected correctly to server");
    
            const db = client.db(dbName);
    
            let r = await db.collection(collectionName).find(queryConstraint).toArray();
            
            console.log(r);
        } catch (err) {
            console.log('Unable to insert document.', err.stack)
        }
    
        client.close();
    }),


    countTodos: (async (mongoUrl, dbName, collectionName, queryConstraint) => {
        let client;
    
        try {
            client = await MongoClient.connect(mongoUrl);
            console.log("Connected correctly to server");
    
            const db = client.db(dbName);
    
            let r = await db.collection(collectionName).find().count();
            
            console.log(`Todos count: ${r}`);
        } catch (err) {
            console.log('Unable to insert document.', err.stack)
        }
    
        client.close();
    }),


    deleteMany: (async (mongoUrl, dbName, collectionName, todoObject) => {
        let client;
    
        try {
            client = await MongoClient.connect(mongoUrl);
            console.log("Connected correctly to server");
    
            const db = client.db(dbName);
    
            let r = await db.collection(collectionName).deleteMany(todoObject);
            
            console.log(r);
        } catch (err) {
            console.log('Unable to insert document.', err.stack)
        }
    
        client.close();
    }),

    deleteOne: (async (mongoUrl, dbName, collectionName, todoObject) => {
        let client;
    
        try {
            client = await MongoClient.connect(mongoUrl);
            console.log("Connected correctly to server");
    
            const db = client.db(dbName);
    
            let r = await db.collection(collectionName).deleteOne(todoObject);
            
            console.log(r);
        } catch (err) {
            console.log('Unable to insert document.', err.stack)
        }
    
        client.close();
    }),

    findOneDelete: (async (mongoUrl, dbName, collectionName, todoObject) => {
        let client;
    
        try {
            client = await MongoClient.connect(mongoUrl);
            console.log("Connected correctly to server");
    
            const db = client.db(dbName);
    
            let r = await db.collection(collectionName).findOneAndDelete(todoObject);
            
            console.log(r);
        } catch (err) {
            console.log('Unable to insert document.', err.stack)
        }
    
        client.close();
    }),
}