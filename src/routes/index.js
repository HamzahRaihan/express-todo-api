const express = require('express');
const route = express.Router();
const UserRouter = require('./userRoutes');
const Auth = require('../controllers/auth/auth');
const todoRouter = require('./todoRoutes');

route.get('/', (req, res) => {
  res.status(200).json({
    message: 'Todo API using Express + Mongoose',
  });
});

route.use('/users', UserRouter);
route.use('/todos', todoRouter);

module.exports = route;
