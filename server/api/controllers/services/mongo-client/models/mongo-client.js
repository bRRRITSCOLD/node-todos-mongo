// node_module dependencies
const { MongoClient } = require('mongodb');

// local file dependencies
const validator = require('../../../../utils/validators');

/**
 * definition of the MongoDBClient
 * (MongoClient) class/module
 * 
 * @Params = config or values of the config.keys
*/
class MongoDBClient {
    constructor(config) {

        /**
         * validate/check the types
         * of the configs values  
         * meant for the constructor
         * 
         * @Module = validator 
         * @Params = value of config.key
        */
        (
            validator.emptyArgument(config.databaseHostAndPort), 
            validator.isString(config.databaseHostAndPort),
            validator.emptyArgument(config.databaseName),
            validator.isString(config.databaseName)
        )

        /**
         * initiate/construct the object
         * this will occur once the validations
         * above are 'passing' and no errors are thron.
         * (knock on wood)
         * 
         * @Params = config.key
        */ 
        this.databaseHostAndPort = config.databaseHostAndPort
        this.databaseName = config.databaseName
        this.databaseUsername = config.databaseUsername || null
        this.databasePassword = config.databasePassword || null
    }

    /**
     * finds all objects/documents
     * of the given collection name
     * 
     * @Params = collectionName
    */ 
    async findObjects(collectionName) {
        let client
        try {
            client = await MongoClient.connect(this.databaseHostAndPort);
            console.log("Connected correctly to database.");
    
            let db = client.db(this.databaseName);
    
            let r = await db.collection(collectionName).find().toArray();
            
            return r;
        } catch (err) {
            throw new Error(err)
        }
        client.close();
    }

    /**
     * adds a new object
     * the chosen collection
     * in the backend mongo
     * database
     * 
     * @Params = collectionName
    */ 
    async newObject(collectionName, constructionObject) {
        let client;

        try {
            client = await MongoClient.connect(this.databaseHostAndPort);
            console.log("Connected correctly to database.");
    
            const db = client.db(this.databaseName);
    
            let r = await db.collection(collectionName).insertOne(constructionObject);
            
            return r.ops;
        } catch (err) {
            throw new Error(err)
        }
        client.close();
    }

    /**
     * finds multiple objects
     * matching your chosen query
     * constraint
     * 
     * @Params = collectionName, queryConstraint
    */ 
    async findSpecificObjects(collectionName, queryConstraint) {
        let client;
    
        try {
            client = await MongoClient.connect(this.databaseHostAndPort);
            console.log("Connected correctly to database.");
    
            const db = client.db(this.databaseName);
    
            let r = await db.collection(collectionName).find(queryConstraint).toArray();
            
            return r;
        } catch (err) {
            throw new Error(err)
        }
    
        client.close();
    }

    /**
     * counts the number of
     * objects/documents in
     * a given collection
     * 
     * @Params = collectionName
    */ 
    async countObjects(collectionName) {
        let client;
    
        try {
            client = await MongoClient.connect(this.databaseHostAndPort);
            console.log("Connected correctly to database.");
    
            const db = client.db(this.databaseName);
    
            let r = await db.collection(collectionName).find().count();
            
            return r;
        } catch (err) {
            throw new Error('Had trouble connecting to database. Please check connection or retry/change your input.')
        }
    
        client.close();
    }

    /** 
     * finds all objects/documents
     * of the given collection name
     * 
     * @Params = collectionName
    */ 
    async deleteManyObjects(collectionName, objectsIds) {
        let client;
    
        try {
            client = await MongoClient.connect(this.databaseHostAndPort);
            console.log("Connected correctly to database.");
    
            const db = await client.db(this.databaseName);
    
            let r = await db.collection(collectionName).deleteMany(arrayOfObjectIds);
            
            return r;
        } catch (err) {
            throw new Error(err)
        }
    
        client.close();
    }

    /**
     * finds all objects/documents
     * of the given collection name
     * 
     * @Params = collectionName
    */ 
    async deleteOneObject(collectionName, objectId) {
        let client;
    
        try {
            client = await MongoClient.connect(this.databaseHostAndPort);
            console.log("Connected correctly to database.");
    
            const db = await client.db(this.databaseName);
    
            let r = await db.collection(collectionName).deleteOne(objectId);
            
            return r;
        } catch (err) {
            throw new Error(err)
        }
    
        client.close();
    }

    /**
     * finds all objects/documents
     * of the given collection name
     * 
     * @Params = collectionName
    */ 
    async findOneObjectDelete(collectionName, specifiedObject) {
        let client;
    
        try {
            client = await MongoClient.connect(this.databaseHostAndPort);
            console.log("Connected correctly to database.");
    
            const db = client.db(this.databaseName);
    
            let r = await db.collection(collectionName).findOneAndDelete(todoObject);
            
            return r;
        } catch (err) {
            throw new Error(err)
        }
    
        client.close();
    }

    /**
     * finds documents
     * of the given collection name
     * 
     * @Params = collectionName
    */ 
    async findOneObjectUpdate(collectionName, objectIdFilter, updatedObject, options) {
        let client;
        
        try {
            client = await MongoClient.connect(this.databaseHostAndPort);
            console.log("Connected correctly to database.");
    
            const db = client.db(this.databaseName);

            let r = await db.collection(collectionName).findOneAndUpdate(todoFilterObjectId, todoUpdateObject, options);

            return r;
        } catch (err) {
            throw new Error(err)
        }
    
        client.close();
    }
}

module.exports = {
    MongoClient: MongoDBClient
}