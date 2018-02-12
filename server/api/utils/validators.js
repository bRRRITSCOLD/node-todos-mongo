const _ = require('lodash');

module.exports = {

    /* check/validate that a single argument
     * is not empty (null, nil, NaN)
     * 
     * @Params = value of arg.key
    */ 
    emptyArgument: (arg) => {
        if (_.isNull(arg) || _.isNil(arg) || _.isNaN(arg)) {
            throw new ReferenceError('Expected a non-null argument.')
        } 
        return null
    },

    /* checks/validates that multiple arguments
     * are not not empty (null, nil, NaN)
     * 
     * @Params = values of args
    */ 
    emptyArguments: (args) => {
        _.forOwn(args, (value, key) => {
            if (_.isNull(value) || _.isNil(value) || _.isNaN(value)) {
                throw new ReferenceError('You must enter a non-null argument or multiple non-null arguments.')
            }
        }) 
        return null
    },

    /* checks/validates that a
     * single argument is a string
     * 
     * @Params = values of args
    */ 
    isString: (arg) => {
        if (!_.isString(arg)) {
            throw new TypeError('Expected a string.')
        } 
        return null
    },

    /* checks/validates that multiple
     * arguments are string
     * 
     * @Params = values of args
    */ 
    areStrings: (args) => {
        _.forOwn(args, (value, key) => {
            if (!_.isString(value)) {
                throw new TypeError('Expected a string or multiple strings.')
            }
        }) 
        return null
    },

    /* checks/validates that a
     * single argument is a boolean
     * 
     * @Params = values of args
    */ 
    isBoolean: (arg) => {
        if (!_.isBoolean(arg)) {
            throw new TypeError('Expected a boolean.')
        } 
        return null
    },
    
    /* checks/validates that multiple 
     * arguments are booleans
     * 
     * @Params = values of args
    */ 
    areBooleans: (args) => {
        _.forOwn(args, (value, key) => {
            if (!_.isBoolean(value)) {
                throw new TypeError('Expected a boolean or multiple booleans.')
            }
        }) 
        return null
    },

    /* checks/validates that a single
     * boolean argument is false
     * 
     * @Params = values of args
    */ 
    isFalse: (arg, next) => {
        if (arg !== false) {
            throw new ReferenceError('Expected a false boolean.')
        }
    },

    /* checks/validates that a single
     * boolean argument is true
     * 
     * @Params = values of args
    */ 
    isTrue: (arg) => {
        if (arg !== true) {
            throw new ReferenceError('Expected a true boolean.')
        }
        return null
    },

    /* checks/validates that a single
     * argument is a date (date object)
     * 
     * @Params = values of args
    */
    isDate: (arg) => {
        if (!_.isDate(arg)) {
            throw new TypeError('Expected a date.')
        }
        return null
    },

    /* checks/validates that a
     * single argument is a number 
     * 
     * @Params = values of args
    */
    isNumber: (arg) => {
        if (!_.isNumber(arg)) {
            throw new TypeError('Expected a number.')
        }
        return null
    }
}


