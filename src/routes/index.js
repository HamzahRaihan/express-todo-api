const express = require('express');
const route = express.Router();
const UserRouter = require('./userRoutes');
const Auth = require('../auth/auth');

route.get('/', (req, res) => {
  res.status(200).json({
    message: 'Todo API using Express + Mongoose',
  });
});

route.use('/users', UserRouter);
route.use('/auth', Auth);

module.exports = route;
