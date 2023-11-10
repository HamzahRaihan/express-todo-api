require('dotenv/config');
const express = require('express');
const app = express();
const connnectToDB = require('./config/db');

const PORT = process.env.PORT || 3000;

const router = require('./routes');

connnectToDB();

app.use(router);

app.listen(PORT, () => {
  console.log('server running in port ' + PORT);
});
