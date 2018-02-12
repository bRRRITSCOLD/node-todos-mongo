module.exports = {

    findTodos: (req, res, next) => {
        return new Promise(function(resolve, reject) {
            const examples = {};

            examples['application/json'] = [ 
                {
                    "_id" : "5a772c6afae3a560abde63f6",
                    "completed": false,
                    "completedAt": null,
                    "text": "First Test Todo.",
                    "__v": 0
                },
                {
                    "_id" : "5a772c6afae3a560abde63f7",
                    "completed": false,
                    "completedAt": null,
                    "text": "Second Test Todo.",
                    "__v": 0
                },            {
                    "_id" : "5a772c6afae3a560abde63f8",
                    "completed": false,
                    "completedAt": null,
                    "text": "Third Test Todo.",
                    "__v": 0
                },
                {
                    "_id" : "5a772c6afae3a560abde63f9",
                    "completed": false,
                    "completedAt": null,
                    "text": "Fourth Test Todo.",
                    "__v": 0
                },
                {
                    "_id" : "5a772c6afae3a560abde63fa",
                    "completed": false,
                    "completedAt": null,
                    "text": "Fifth Test Todo.",
                    "__v": 0
                },
                {   
                    "_id" : "5a772c6afae3a560abde63fb",
                    "completed": false,
                    "completedAt": null,
                    "text": "Sixth Test Todo.",
                    "__v": 0
                } 
            ];

            if (examples) {
              resolve(examples);
            } else {
              resolve();
            }
        });
    },

    newTodo: (req, res, next) => {
        return new Promise(function(resolve, reject) {
            const example = {};

            example['application/json'] = [ 
                {
                    "_id" : "5a772c6afae3a560abde63f6",
                    "completed": false,
                    "completedAt": null,
                    "text": "Successfully add new Todo.",
                }
            ];

            if (example) {
              resolve(example);
            } else {
              resolve();
            }
        });
    }

}