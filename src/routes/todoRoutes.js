const express = require('express');
const authChecker = require('../middleware/authChecker');
const { getAllTodos, getTodosByID, addTodo, editTodos } = require('../controllers/todoController');
const route = express.Router();

route.get('/', getAllTodos);
route.get('/:id', authChecker, getTodosByID);
route.post('/', authChecker, addTodo);
route.put('/:id', authChecker, editTodos);

module.exports = route;
