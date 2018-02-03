const { ObjectID } = require('mongodb');

const queries = require('./database/queries');

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

let collectionName = 'Todos';

let userObject = {
    name: 'Blaine',
    age: 26,
    location: 'Des Moines, IA'
}

let queryConstraintCompleted = {
    completed: false
}

let queryConstraintId = {
    _id: new ObjectID('5a75d78d4a9f1b45e43637b8')
}

let todoObject = {
    completed: false
}

queries.findOneDelete(mongoUrl, dbName, collectionName, todoObject);