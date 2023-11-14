const express = require('express');
const { getAllUsers, register, editUser, getUserByID, getTodoByUser } = require('../controllers/userController');
const login = require('../controllers/auth/auth');
const authChecker = require('../middleware/authChecker');
const route = express.Router();

route.get('/', getAllUsers);
route.get('/:id', getUserByID);
route.get('/:id/todos', getTodoByUser);
route.post('/', register);
route.put('/:id', authChecker, editUser);
route.post('/auth', login);

module.exports = route;
