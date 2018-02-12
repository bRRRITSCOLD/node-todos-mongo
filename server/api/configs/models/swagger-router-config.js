const validator = require('../../utils/validators');

class SwaggerRouterConfig {
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
            validator.emptyArgument(options.swaggerUi), 
            validator.isString(options.swaggerUi),
            validator.emptyArgument(options.controllers),
            validator.isString(options.controllers)
       )

        /**
         * initiate/construct the object
         * this will occur once the validations
         * above are 'passing' and no errors are thron.
         * (knock on wood)
         * 
         * @Params = config.key
        */ 
        this.swaggerUi = options.swaggerUi
        this.controllers = options.controllers
        this.useStubs = process.env.NODE_ENV === 'development' ? true : false
    }   
}

module.exports = {
    SwaggerRouterConfig: SwaggerRouterConfig
}