// utility dependencies
const writer = require('../utils/writer.js');

// database service
const { MongoClient } = require('./services/mongo-client/MongoClient.js');

// example service
const todosService = require('./services/examples/TodosService.js');

// model dependencies
const { Todo } = require('./models/Todo.js');

module.exports = {

  /**
   * example service function
   * 
   * findTodos: (req, res, next) => {
   *   todosService.findTodos().then((todos) => { 
   *     writer.writeJson(res, todos); 
   *    })
   *   .catch((error) => { 
   *     writer.writeJson(res, error); 
   *   }); 
   * }
   * 
   * @Modude = TodosService
   * @Params = req, res, next
  */ 

  /**
   * database service funciton 
   * 
   * retrieves all todos
   * stored in the database
   * 
   * @Params = collectionName, req,
   * res, next
  */
  findTodos: (req, res, next) => {
    MongoClient.findObjects('todos').then((todos) => {
      writer.writeJson(res, todos);
    })
    .catch((error) => {
      writer.writeJson(res, error);
    });
  },

  /** 
   * example service function
   * 
   * newTodo: (req, res, next) => {
   *   todosService.newTodo().then((todo) => {
   *     writer.writeJson(res, todo);
   *   })
   *   .catch((error) => {
   *     writer.writeJson(res, error);
   *   });
   * },
   *
   * @Module = TodosService
   * @Params = req, res, next 
   * (new todo object hardcoded in Service)
  */

  /** 
   * database service function
   * 
   * Adds a new todo to the
   * database
   * 
   * @Modules = Todo (model), MongoClient 
   * @Params = collectionName, Todo object,
   * req, res, next
  */ 
  newTodo: (req, res, next) => {
    const todo = new Todo({
      text: req.body.text,
      completed: req.body.completed
    })

    MongoClient.newObject('todos', todo).then((response) => {
      writer.writeJson(res, response);
      console.log(response);
    })
    .catch((error) => {
      writer.writeJson(res, error);
    });
  } 

}