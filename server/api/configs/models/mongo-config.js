const validator = require('../../utils/validators');

class MongoDBConfig {
    constructor(options) {

        /**
         * validate/check the types
         * of the configs values  
         * meant for the constructor
         * 
         * @Module = validator 
         * @Params = value of config.key
        */
        (
            validator.emptyArgument(options.databaseHostAndPort), 
            validator.isString(options.databaseHostAndPort),
            validator.emptyArgument(options.databaseName),
            validator.isString(options.databaseName)
       )

        /**
         * initiate/construct the object
         * this will occur once the validations
         * above are 'passing' and no errors are thrown.
         * (knock on wood)
         * 
         * @Params = value(s) of config.key(s)
        */ 
        this.databaseHostAndPort = options.databaseHostAndPort 
        this.databaseName = options.databaseName 
        this.databaseUsername = options.databaseUserame || null
        this.databasePassword = options.databasePassword || null
    }   
}

module.exports = {
    MongoConfig: MongoDBConfig
}