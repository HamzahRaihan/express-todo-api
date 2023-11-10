const express = require('express');
const { getAllUsers, register, editUser } = require('../controllers/userController');
const route = express.Router();

route.get('/', getAllUsers);
route.post('/', register);
route.put('/:id', editUser);

module.exports = route;
