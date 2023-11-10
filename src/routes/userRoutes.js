const express = require('express');
const { getAllUsers, register } = require('../controllers/userController');
const route = express.Router();

route.get('/', getAllUsers);
route.post('/', register);

module.exports = route;
