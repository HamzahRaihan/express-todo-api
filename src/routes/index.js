const express = require('express');
const route = express.Router();

route.use('/', (req, res) => {
  res.status(200).json({
    message: 'Todo API using Express + Mongoose',
  });
});

route.use('/todos', () => {});

module.exports = route;
