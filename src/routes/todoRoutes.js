const express = require('express');
const authChecker = require('../middleware/authChecker');
const { getAllTodos, getTodosByID, addTodo, editTodos, deleteTodo } = require('../controllers/todoController');
const route = express.Router();

route.get('/', getAllTodos);
route.get('/:id', authChecker, getTodosByID);
route.post('/', authChecker, addTodo);
route.put('/:id', authChecker, editTodos);
route.delete('/:id', authChecker, deleteTodo);

module.exports = route;
