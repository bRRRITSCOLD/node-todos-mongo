const _ = require('lodash');

const validator = require('../../utils/validators');

class Todo {
    constructor (args) {

        /** 
         * validate the the types
         * of the arguemnts meant 
         * for the constructor
         * 
         * @Module = validator 
         * @Params = args or value of args.key
        */
        (
            validator.emptyArgument(args.text), 
            validator.isString(args.text),
            validator.emptyArgument(args.completed),
            validator.isBoolean(args.completed),
            validator.isFalse(args.completed)
        )

        /** 
         * initiate/construct the object
         * This will occur once the validations
         * above are 'passing' and no errors are thron.
         * (knock on wood)
         * 
         * @Params = args.key
        */ 
        this.text = args.text
        this.completed = args.completed
        this.completedAt = args.completedAt || null
    }

}

module.exports = {
    Todo: Todo
}