const validator = require('../../utils/validators');

class CorsConfig {
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
            validator.emptyArgument(options.optionsSuccessStatus), 
            validator.isNumber(options.optionsSuccessStatus)
       )

        /** 
         * initiate/construct the object
         * this will occur once the validations
         * above are 'passing' and no errors are thron.
         * (knock on wood)
         * 
         * @Params = config.key
        */ 
        this.optionsSuccessStatus = options.optionsSuccessStatus 
    }   
}

module.exports = {
    CorsConfig: CorsConfig
}