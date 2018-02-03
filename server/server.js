const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./database/mongoose.js');

const { User } = require('./models/User.js');
const { Todo } = require('./models/Todo.js');

// const { todosRoutes } =  require('./api/routes/todos.js');

const app = express();

const port = process.env.PORT || 1337;

app.use(bodyParser.json());

// app.use('/todos', todosRoutes)

app.post('/todos', (req, res) => {
    let newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((todo) => {
        res.status(200).send(todo);
    }, (error) => {
        res.status(400).send(error);
    })
});

app.listen(port, () => {
    console.log(`Started on port ${port}.`)
});

module.exports = {
    server: app
}